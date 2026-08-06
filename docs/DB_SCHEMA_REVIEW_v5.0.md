# Database Schema Review: Food Roulette v4.1.1

**Reviewer:** AI Database Architect  
**Date:** 2026-08-06  
**Schema Version:** v4.1.1 Hybrid MVP  
**Entities:** 14 tables (P0: 12, P1: 2)  
**Target Scale:** 50,000-100,000 users

---

## 1. TÍNH ĐÚNG ĐẮN & CHUẨN HÓA (Normalization)

### 1.1 BCNF/3NF Status: ✅ ĐẠT

| Table | 3NF | BCNF | 4NF | Notes |
|-------|-----|------|-----|-------|
| User | ✅ | ✅ | ✅ | |
| Friendship | ✅ | ✅ | ✅ | |
| Restaurant | ✅ | ✅ | ✅ | |
| RestaurantHours | ✅ | ✅ | ✅ | Đã tách từ JSON |
| RestaurantPhoto | ✅ | ✅ | ✅ | Đã tách từ JSON |
| Group | ✅ | ✅ | ✅ | |
| GroupMember | ✅ | ✅ | ✅ | |
| SpinSession | ✅ | ✅ | ✅ | |
| Vote | ✅ | ✅ | ✅ | |
| SpinWallet | ✅ | ✅ | ✅ | |
| SpinLog | ✅ | ✅ | ✅ | |
| SpinPack | ✅ | ✅ | ✅ | |
| Locket | ✅ | ✅ | ✅ | |
| CheckIn | ✅ | ✅ | ✅ | |

### 1.2 Relationship Analysis

| Relationship | Type | FK Correct | Notes |
|--------------|------|------------|-------|
| User → Friendship | 1-N | ✅ | requester/addressee properly defined |
| User → GroupMember | 1-N | ✅ | |
| User → SpinSession (initiator) | 1-N | ✅ | Cascade on delete |
| User → SpinWallet | 1-1 | ✅ | Unique constraint on userId |
| User → Locket | 1-N | ✅ | |
| User → CheckIn | 1-N | ✅ | |
| Restaurant → Locket | 1-N | ✅ | |
| Restaurant → CheckIn | 1-N | ✅ | |
| Group → GroupMember | 1-N | ✅ | |
| Group → SpinSession | 1-N | ✅ | |
| SpinSession → Vote | 1-N | ✅ | |
| SpinWallet → SpinLog | 1-N | ✅ | |
| SpinPack → SpinLog | 1-N | ✅ | Nullable FK (SetNull) |

---

## 2. HIỆU NĂNG & KHẢ NĂNG MỞ RỘNG (Performance)

### 2.1 Critical Queries Analysis

| Query | Table | Current Index | Status | Recommendation |
|-------|-------|---------------|--------|-----------------|
| `WHERE status='APPROVED' AND category=? ORDER BY distance LIMIT 50` | restaurants | `@@index([status])` + `@@index([status, category])` | ⚠️ PARTIAL | Cần index cho geo queries |
| `SELECT value, COUNT(*) FROM votes WHERE spinSessionId=? GROUP BY value` | votes | `@@unique([spinSessionId, userId])` | ✅ OK | Unique index hỗ trợ tốt |
| `SELECT * FROM check_ins WHERE userId=? AND status='ACTIVE' AND expiresAt > NOW()` | check_ins | `@@index([userId, createdAt])` | ⚠️ NEEDS FIX | Thiếu index trên `status` |
| Locket feed (visibility OR friends) | lockets | `@@index([userId, capturedAt])` | ⚠️ NEEDS FIX | Thiếu index trên `visibility` |

### 2.2 Bottleneck Prediction (50-100K users)

| Table | Estimated Growth | Read/Write Ratio | Risk Level | Notes |
|-------|-----------------|------------------|------------|-------|
| User | 100K rows | 70/30 | 🟡 MEDIUM | Soft delete index cần optimize |
| SpinSession | 500K-1M rows/year | 80/20 | 🔴 HIGH | Cần partition theo date |
| Vote | 200K-500K rows/year | 90/10 | 🔴 HIGH | Cần index riêng |
| Locket | 500K-1M rows/year | 95/5 | 🔴 HIGH | Partition theo month |
| CheckIn | 100K-300K rows/year | 60/40 | 🟡 MEDIUM | Cleanup job cần thiết |
| SpinLog | 200K-500K rows/year | 40/60 | 🟡 MEDIUM | Append-only, archive strategy |

### 2.3 Geo Queries (PostGIS/Spherical)

**Vấn đề:** Schema hiện tại dùng `Float` cho lat/lng, nhưng MySQL với Prisma **không hỗ trợ PostGIS**.

| Current | Recommended |
|---------|-------------|
| `lat Float?` | `lat Decimal(10, 8)?` (precision cao hơn) |
| `lng Float?` | `lng Decimal(11, 8)?` |
| `@@index([lat, lng])` | Cần SRID=4326 spatial index |

**MySQL Spatial Index:**
```sql
-- Thay vì:
@@index([lat, lng])

-- Nên dùng (nếu dùng MySQL 8.0+):
@@index([location]) -- Generated column: POINT(lat, lng)
```

---

## 3. RỦI RO & THIẾU SÓT NGHIỆP VỤ

### 3.1 Data Type Issues

| Field | Current Type | Issue | Recommended |
|-------|--------------|-------|-------------|
| `User.passwordHash` | `VarChar(255)` | ✅ OK | bcrypt hash fits |
| `RestaurantHours.openTime` | `DateTime? @db.Time` | ⚠️ MySQL Prisma quirk | Dùng `String @db.Time` thay vì DateTime |
| `RestaurantHours.closeTime` | `DateTime? @db.Time` | ⚠️ MySQL Prisma quirk | Dùng `String @db.Time` thay vì DateTime |
| `SpinWallet.balance` | `Int` | ⚠️ Overflow risk | Nên dùng `BigInt` hoặc `Decimal(12,2)` |
| `SpinLog.amount` | `Int` | ⚠️ Overflow risk | Nên dùng `BigInt` |
| `Locket.deviceHash` | `VarChar(64)` | ✅ OK | SHA-256 fits |
| `User.publicId` | `VarChar(20)` | ⚠️ Collision risk | 6 bytes Base62 = 56B combinations, OK |
| Restaurant `lat/lng` | `Float` | ⚠️ Precision | Nên dùng `Decimal(10,8)` / `Decimal(11,8)` |

### 3.2 Missing Fields for MVP

| Table | Missing Field | Purpose | Severity |
|-------|---------------|---------|----------|
| User | `phone` | SMS auth (future) | 🟡 MEDIUM |
| User | `isOnboarded` | Onboarding flow | 🟡 MEDIUM |
| User | `lastActiveAt` | Inactive user detection | 🟡 MEDIUM |
| Restaurant | `googlePlaceId` | Google Places sync | 🔴 HIGH |
| Restaurant | `rating` | Display rating | 🟡 MEDIUM |
| Restaurant | `phone` | Contact info | 🟡 MEDIUM |
| Restaurant | `distance` | Computed field | 🟢 LOW |
| Locket | `exifStripped` | Anti-spoofing audit | 🟡 MEDIUM |
| Locket | `verificationStatus` | AI moderation (future) | 🟡 MEDIUM |
| CheckIn | `verificationMethod` | GPS vs QR vs Locket | 🟡 MEDIUM |
| CheckIn | `accuracy` | GPS accuracy in meters | 🟡 MEDIUM |
| GroupMember | `invitedBy` | Invitation tracking | 🟡 MEDIUM |
| SpinSession | `categoryFilter` | Filter restaurants by category | 🟡 MEDIUM |

### 3.3 Locket Anti-Spoofing

**Current:** `capturedAt ≤ 60s` validation noted in comment  
**Issue:** Comment only, no actual enforcement

| Option | Pros | Cons | Recommendation |
|--------|------|------|----------------|
| App-level | Simple | Bypassable via modded app | ❌ Not recommended |
| DB Trigger | Enforced at DB | Slight overhead | ✅ Recommended |
| API middleware | Flexible | Requires server sync | ✅ Alternative |

**Recommendation:** Implement **BOTH** app-level (UX) AND DB trigger (security).

### 3.4 SpinWallet Balance Enforcement

**Issue:** No constraint preventing negative balance

| Option | Implementation | Recommendation |
|--------|---------------|----------------|
| App-level check | `if (balance - amount < 0) throw` | ❌ Race condition |
| Optimistic locking | Version field + check | ✅ Good |
| DB Trigger | `BEFORE UPDATE` trigger | ✅ Best (atomic) |
| Check constraint | `balance >= 0` | ⚠️ MySQL ignores CHECK by default |

**Recommendation:** DB Trigger + Optimistic Locking (double protection)

---

## 4. PRISMA-SPECIFIC CONCERNS

### 4.1 MySQL Limitations with Prisma

| Issue | Impact | Workaround |
|-------|--------|------------|
| `DateTime @db.Time` | Stores as DATETIME, not TIME | Use `String @db.VarChar(5)` for "HH:MM" |
| No native PostGIS | Geo queries limited | Use Haversine in app layer, or MySQL 8.0 spatial |
| JSON column limitations | Limited query on JSON | Use junction tables for frequent queries |
| Enum size | Max ~191 values in MySQL 5.7 | ✅ Current enums well under limit |
| Soft delete | Not built-in | Manual `where: { deletedAt: null }` on all queries |

### 4.2 `@@index` vs Raw SQL Index

**Prisma's `@@index` generates:**
```sql
CREATE INDEX idx_table_field ON table(field);
```

**Difference:** None for single-column indexes. For composite indexes:
- Prisma creates in declared order
- MySQL can use leftmost prefix

**Best Practice:**
```prisma
// Good: Order matches query pattern
@@index([status, category]) // For: WHERE status=? AND category=?

// Problematic: Query uses only first field
@@index([category, status]) // Cannot use for: WHERE status=?
```

### 4.3 Missing Indexes

| Table | Missing Index | Query Pattern |
|-------|--------------|----------------|
| `check_ins` | `[userId, status, expiresAt]` | `WHERE userId=? AND status='ACTIVE' AND expiresAt > NOW()` |
| `lockets` | `[visibility, capturedAt]` | `WHERE visibility='PUBLIC' ORDER BY capturedAt DESC` |
| `spin_sessions` | `[userId, status]` | Personal spin history |
| `spin_sessions` | `[groupId, status]` | Group spin history |
| `votes` | `[spinSessionId, value]` | Vote tally aggregation |
| `friendships` | `[status]` | Find pending requests |

---

## 5. DANH SÁCH ĐIỂM YẾU

### 🔴 CRITICAL (Must Fix Before MVP)

1. **[SpinSession.candidateIds]** - JSON field cần tách thành junction table
   - **File:** `schema.prisma:234`
   - **Lý do:** Không thể query trên JSON, không thể enforce FK integrity
   - **Fix:** Tạo `SpinSessionCandidate` table

2. **[CheckIn missing index]** - Không có index cho query thường dùng
   - **File:** `schema.prisma:390`
   - **Lý do:** Query `WHERE userId=? AND status='ACTIVE'` sẽ full table scan
   - **Fix:** Thêm `@@index([userId, status, expiresAt])`

3. **[RestaurantHours DateTime]** - Type không tương thích MySQL
   - **File:** `schema.prisma:138-139`
   - **Lý do:** `@db.Time` với DateTime không hoạt động đúng
   - **Fix:** Đổi sang `String @db.VarChar(5)` hoặc dùng `Int` (minutes from midnight)

4. **[SpinWallet balance overflow]** - Int có thể overflow
   - **File:** `schema.prisma:287`
   - **Lý do:** Nếu app phát triển, balance có thể vượt 2^31
   - **Fix:** Đổi sang `BigInt` hoặc `Decimal(12,2)`

### 🟡 MEDIUM (Should Fix Before MVP)

5. **[Restaurant lat/lng precision]** - Float không đủ precision cho GPS
   - **File:** `schema.prisma:97-98`
   - **Lý do:** Float có thể mất precision ở 6-7 decimal places
   - **Fix:** Đổi sang `Decimal(10, 8)` và `Decimal(11, 8)`

6. **[Locket visibility index]** - Thiếu index cho feed query
   - **File:** `schema.prisma:364`
   - **Lý do:** Feed query theo visibility + capturedAt không có index
   - **Fix:** Thêm `@@index([visibility, capturedAt])`

7. **[Vote aggregation index]** - Thiếu index cho vote tally
   - **File:** `schema.prisma:273`
   - **Lý do:** GROUP BY vote value cần scan toàn bộ
   - **Fix:** Thêm `@@index([spinSessionId, value])`

8. **[Friendship status index]** - Thiếu index cho pending queries
   - **File:** `schema.prisma:79-80`
   - **Lý do:** Tìm friend requests theo status cần index
   - **Fix:** Thêm `@@index([status])`

9. **[Missing Restaurant.googlePlaceId]** - Không link được Google Places
   - **File:** `schema.prisma:92-118`
   - **Lý do:** Google Places seed không có reference
   - **Fix:** Thêm `googlePlaceId String? @map("google_place_id") @unique`

10. **[Missing User onboarding fields]** - Không track onboarding progress
    - **File:** `schema.prisma:20-50`
    - **Lý do:** Không biết user đã onboarded chưa
    - **Fix:** Thêm `isOnboarded Boolean @default(false)`

### 🟢 LOW (Nice to Have)

11. **[SpinSession.categoryFilter]** - Không filter category khi spin
12. **[Locket.exifStripped]** - Audit trail cho anti-spoofing
13. **[CheckIn.verificationMethod]** - GPS vs QR vs Locket tracking
14. **[GroupMember.invitedBy]** - Invitation tracking

---

## 6. BẢN THIẾT KẾ ĐÃ SỬA

```prisma
// Food Roulette - Prisma Schema v5.0 (REVIEWED & OPTIMIZED)
// Review Date: 2026-08-06 | 15 entities (P0: 13, P1: 2)
// Changes: Fixed 10 issues, added 6 indexes, 4 new fields

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

// ============================================================
// P0 - CORE TABLES (13 tables)
// ============================================================

// User - Authentication and Profile
model User {
  id                  String    @id @default(uuid())
  email               String    @unique @db.VarChar(255)
  passwordHash        String    @map("password_hash") @db.VarChar(255)
  passwordVersion     Int       @default(1) @map("password_version")
  displayNamePrivate  String    @map("display_name_private") @db.VarChar(50)
  displayNamePublic   String    @map("display_name_public") @db.VarChar(50)
  publicId           String    @unique @map("public_id") @db.VarChar(20)
  avatarUrl          String?   @map("avatar_url") @db.VarChar(500)
  phone              String?   @map("phone") @db.VarChar(20)
  role               UserRole  @default(USER)
  subscriptionTier   SubTier   @default(FREE) @map("subscription_tier")
  isOnboarded        Boolean   @default(false) @map("is_onboarded") // NEW v5.0
  lastActiveAt       DateTime? @map("last_active_at") // NEW v5.0
  savedRestaurants   Json?     @map("saved_restaurants")
  createdAt          DateTime  @default(now()) @map("created_at")
  updatedAt          DateTime  @updatedAt @map("updated_at")
  deletedAt          DateTime? @map("deleted_at")

  friendshipsRequested  Friendship[] @relation("FriendshipRequester")
  friendshipsReceived   Friendship[] @relation("FriendshipAddressee")
  groupMemberships      GroupMember[]
  spinSessionsInitiated  SpinSession[] @relation("SpinInitiator")
  spinSessionsPersonal   SpinSession[] @relation("SpinPersonal")
  votes                  Vote[]
  spinWallet             SpinWallet?
  lockets                Locket[]
  checkIns               CheckIn[]
  photosUploaded         RestaurantPhoto[] @relation("PhotoUploader")

  @@index([subscriptionTier])
  @@index([deletedAt]) // Soft delete filter
  @@index([lastActiveAt]) // Inactive user queries
  @@map("users")
}

enum UserRole { USER STEWARD ADMIN }
enum SubTier { FREE PREMIUM }

// Friendship - Social Foundation
model Friendship {
  id           String          @id @default(uuid())
  requesterId  String         @map("requester_id")
  addresseeId  String         @map("addressee_id")
  status       FriendshipStatus @default(PENDING)
  createdAt    DateTime       @default(now()) @map("created_at")
  updatedAt    DateTime       @updatedAt @map("updated_at")

  requester User @relation("FriendshipRequester", fields: [requesterId], references: [id], onDelete: Cascade)
  addressee User @relation("FriendshipAddressee", fields: [addresseeId], references: [id], onDelete: Cascade)

  @@unique([requesterId, addresseeId])
  @@index([requesterId, status])
  @@index([addresseeId, status])
  @@index([status]) // NEW v5.0: Find pending requests
  @@map("friendships")
}

enum FriendshipStatus { PENDING ACCEPTED BLOCKED }

// Restaurant - Main entity with geo support
model Restaurant {
  id              String           @id @default(uuid())
  name            String           @db.VarChar(255)
  address         String?          @db.VarChar(500)
  googlePlaceId   String?          @map("google_place_id") @unique // NEW v5.0: Google Places link
  lat             Decimal?         @db.Decimal(10, 8) // FIXED v5.0: Precision
  lng             Decimal?         @db.Decimal(11, 8) // FIXED v5.0: Precision
  source          RestaurantSource @default(USER_SUBMITTED)
  category        String?          @db.VarChar(100)
  priceLevel      Int?            @map("price_level")
  rating          Float?          @default(0) // NEW v5.0: Display rating
  phone           String?          @map("phone") @db.VarChar(20) // NEW v5.0
  status          RestaurantStatus @default(PENDING)
  createdAt       DateTime        @default(now()) @map("created_at")
  updatedAt       DateTime        @updatedAt @map("updated_at")
  deletedAt       DateTime?       @map("deleted_at")

  hours             RestaurantHours[]
  photos            RestaurantPhoto[]
  lockets           Locket[]
  checkIns          CheckIn[]
  spinResults       SpinSession[] @relation("SpinResult")
  spinCandidates    SpinSessionCandidate[]

  @@index([status])
  @@index([status, category])
  @@index([source]) // NEW v5.0: Filter by Google Places vs User Submitted
  @@index([deletedAt]) // Soft delete filter
  // Note: For geo queries, use application-level Haversine formula
  // or MySQL 8.0+ spatial indexes with generated POINT column
  @@map("restaurants")
}

enum RestaurantSource { GOOGLE_PLACES USER_SUBMITTED }
enum RestaurantStatus { PENDING APPROVED REJECTED }

// RestaurantHours - 4NF normalized (FIXED v5.0: Time storage)
model RestaurantHours {
  id           String   @id @default(uuid())
  restaurantId String   @map("restaurant_id")
  dayOfWeek    Int      @map("day_of_week") // 0=Sunday, 6=Saturday
  openTime     String?  @db.VarChar(5) // FIXED v5.0: "HH:MM" format
  closeTime    String?  @db.VarChar(5) // FIXED v5.0: "HH:MM" format
  isClosed     Boolean  @default(false) @map("is_closed")

  restaurant Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)

  @@unique([restaurantId, dayOfWeek])
  @@index([restaurantId])
  @@map("restaurant_hours")
}

// RestaurantPhoto - 4NF normalized
model RestaurantPhoto {
  id           String   @id @default(uuid())
  restaurantId String   @map("restaurant_id")
  photoUrl     String   @db.VarChar(500)
  displayOrder Int      @default(0) @map("display_order")
  caption      String? @db.VarChar(255)
  uploadedBy   String?  @map("uploaded_by")
  uploadedAt   DateTime? @map("uploaded_at")

  restaurant Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)
  uploader   User?     @relation("PhotoUploader", fields: [uploadedBy], references: [id], onDelete: SetNull)

  @@unique([restaurantId, photoUrl])
  @@index([restaurantId, displayOrder])
  @@map("restaurant_photos")
}

// Group - For group spin sessions
model Group {
  id         String       @id @default(uuid())
  name       String?      @db.VarChar(100)
  maxMembers Int          @default(20) @map("max_members")
  status     GroupStatus  @default(WAITING)
  createdAt  DateTime     @default(now()) @map("created_at")
  updatedAt  DateTime     @updatedAt @map("updated_at")
  deletedAt  DateTime?    @map("deleted_at")

  members      GroupMember[]
  spinSessions SpinSession[]

  @@index([status])
  @@index([deletedAt])
  @@map("groups")
}

enum GroupStatus { WAITING SPINNING VOTING DONE CANCELLED }

// GroupMember - Membership with host role
model GroupMember {
  id        String         @id @default(uuid())
  groupId   String         @map("group_id")
  userId    String         @map("user_id")
  invitedBy String?        @map("invited_by") // NEW v5.0: Invitation tracking
  role      GroupRole      @default(MEMBER)
  status    MemberStatus   @default(PENDING)
  joinedAt  DateTime       @default(now()) @map("joined_at")
  updatedAt DateTime       @updatedAt @map("updated_at")

  group Group @relation(fields: [groupId], references: [id], onDelete: Cascade)
  user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([groupId, userId])
  @@index([groupId, status])
  @@index([userId]) // NEW v5.0: User's groups lookup
  @@map("group_members")
}

enum GroupRole { MEMBER HOST }
enum MemberStatus { PENDING ACCEPTED VETO }

// SpinSession - Individual or group spin
model SpinSession {
  id            String         @id @default(uuid())
  groupId       String?        @map("group_id")
  userId        String?        @map("user_id")
  initiatorId   String         @map("initiator_id")
  categoryFilter String?       @map("category_filter") @db.VarChar(100) // NEW v5.0
  resultId      String?        @map("result_id")
  status        SpinStatus     @default(ACTIVE)
  createdAt     DateTime       @default(now()) @map("created_at")
  completedAt   DateTime?      @map("completed_at")

  group   Group?      @relation(fields: [groupId], references: [id], onDelete: SetNull)
  user    User?       @relation("SpinPersonal", fields: [userId], references: [id], onDelete: SetNull)
  initiator User      @relation("SpinInitiator", fields: [initiatorId], references: [id], onDelete: Cascade)
  result  Restaurant? @relation("SpinResult", fields: [resultId], references: [id], onDelete: SetNull)
  votes   Vote[]
  candidates SpinSessionCandidate[] // NEW v5.0: Junction table

  @@index([groupId])
  @@index([userId])
  @@index([initiatorId])
  @@index([status]) // NEW v5.0: Active sessions
  @@index([createdAt]) // NEW v5.0: Time-based queries
  @@map("spin_sessions")
}

// NEW v5.0: SpinSessionCandidate junction table
// Replaces SpinSession.candidateIds JSON
model SpinSessionCandidate {
  id            String      @id @default(uuid())
  spinSessionId String      @map("spin_session_id")
  restaurantId  String      @map("restaurant_id")
  displayOrder  Int         @default(0) @map("display_order")
  isSelected    Boolean     @default(false) @map("is_selected") // Winner flag
  createdAt     DateTime    @default(now()) @map("created_at")

  spinSession SpinSession @relation(fields: [spinSessionId], references: [id], onDelete: Cascade)
  restaurant Restaurant  @relation(fields: [restaurantId], references: [id], onDelete: Cascade)

  @@unique([spinSessionId, restaurantId])
  @@index([spinSessionId])
  @@index([restaurantId])
  @@map("spin_session_candidates")
}

enum SpinStatus { ACTIVE VOTING COMPLETED CANCELLED }

// Vote - Group voting on spin result
model Vote {
  id            String     @id @default(uuid())
  spinSessionId String     @map("spin_session_id")
  userId        String     @map("user_id")
  value         VoteValue
  createdAt     DateTime   @default(now()) @map("created_at")
  updatedAt     DateTime   @updatedAt @map("updated_at")

  spinSession SpinSession @relation(fields: [spinSessionId], references: [id], onDelete: Cascade)
  user        User        @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([spinSessionId, userId])
  @@index([spinSessionId, value]) // NEW v5.0: Vote tally optimization
  @@map("votes")
}

enum VoteValue { ACCEPT VETO }

// SpinWallet - User's spin balance (1:1 with User)
// FIXED v5.0: balance type for overflow protection
model SpinWallet {
  id        String   @id @default(uuid())
  userId    String   @unique @map("user_id")
  balance   BigInt   @default(0) // FIXED v5.0: BigInt for overflow
  version   Int      @default(0) // NEW v5.0: Optimistic locking
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  user User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  logs SpinLog[]

  @@map("spin_wallets")
}

// SpinLog - Transaction history
model SpinLog {
  id           String      @id @default(uuid())
  walletId     String      @map("wallet_id")
  amount       BigInt      // FIXED v5.0: BigInt for overflow
  source       SpinSource
  purchaseId   String?     @map("purchase_id")
  adWatchLogId String?    @map("ad_watch_log_id")
  giftId       String?    @map("gift_id")
  referralId   String?    @map("referral_id")
  createdAt    DateTime   @default(now()) @map("created_at")

  wallet  SpinWallet @relation(fields: [walletId], references: [id], onDelete: Cascade)
  purchase SpinPack?  @relation(fields: [purchaseId], references: [id], onDelete: SetNull)

  @@index([walletId, createdAt])
  @@index([purchaseId])
  @@map("spin_logs")
}

enum SpinSource { PURCHASE AD_WATCH REFERRAL REWARD }

// SpinPack - Revenue model
model SpinPack {
  id        String   @id @default(uuid())
  name      String   @db.VarChar(100)
  spins     Int
  priceVND  Int      @map("price_vnd")
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at")

  purchases SpinLog[]

  @@index([isActive])
  @@map("spin_packs")
}

// ============================================================
// P1 - IMPORTANT TABLES (2 tables)
// ============================================================

// Locket - Camera-only photo capture
model Locket {
  id              String           @id @default(uuid())
  userId          String           @map("user_id")
  restaurantId    String?          @map("restaurant_id")
  imageUrl        String           @map("image_url") @db.VarChar(500)
  deviceHash      String           @map("device_hash") @db.VarChar(64)
  capturedAt      DateTime         @map("captured_at")
  exifStripped    Boolean          @default(false) @map("exif_stripped") // NEW v5.0: Audit
  lat             Decimal?         @db.Decimal(10, 8) // FIXED v5.0: Precision
  lng             Decimal?         @db.Decimal(11, 8) // FIXED v5.0: Precision
  visibility      LocketVisibility @default(FRIENDS)
  createdAt       DateTime         @default(now()) @map("created_at")

  user       User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  restaurant Restaurant? @relation(fields: [restaurantId], references: [id], onDelete: SetNull)
  checkIns   CheckIn[]

  @@index([userId, capturedAt])
  @@index([visibility, capturedAt]) // NEW v5.0: Feed queries
  @@index([restaurantId]) // NEW v5.0: Restaurant lockets
  @@map("lockets")
}

enum LocketVisibility { PRIVATE FRIENDS PUBLIC }

// CheckIn - Location verification
model CheckIn {
  id               String         @id @default(uuid())
  userId           String         @map("user_id")
  restaurantId     String         @map("restaurant_id")
  locketId         String?       @map("locket_id")
  verificationMethod CheckInMethod @default(GPS) // NEW v5.0
  accuracy         Float?         @map("accuracy") // NEW v5.0: GPS accuracy in meters
  status           CheckInStatus  @default(ACTIVE)
  createdAt        DateTime       @default(now()) @map("created_at")
  expiresAt        DateTime       @map("expires_at")

  user       User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  restaurant Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)
  locket     Locket?   @relation(fields: [locketId], references: [id], onDelete: SetNull)

  @@index([userId, status, expiresAt]) // FIXED v5.0: Critical query index
  @@index([restaurantId, createdAt]) // NEW v5.0: Restaurant check-ins
  @@map("check_ins")
}

enum CheckInStatus { ACTIVE EXPIRED VERIFIED }
enum CheckInMethod { GPS QR_CODE LOCKET }

// ============================================================
// IMPLEMENTATION NOTES (MySQL Level)
// ============================================================
// See Section 7 for detailed trigger definitions
```

---

## 7. IMPLEMENTATION NOTES

### 7.1 MySQL Triggers Required

```sql
-- ============================================================
// TRIGGER 1: SpinWallet Balance >= 0
-- Prevents negative balance on any update
-- ============================================================
DELIMITER //

CREATE TRIGGER trg_spinwallet_balance_check
BEFORE UPDATE ON spin_wallets
FOR EACH ROW
BEGIN
  IF NEW.balance < 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'SpinWallet balance cannot be negative';
  END IF;
END//

CREATE TRIGGER trg_spinwallet_insert_check
BEFORE INSERT ON spin_wallets
FOR EACH ROW
BEGIN
  IF NEW.balance < 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'SpinWallet balance cannot be negative';
  END IF;
END//

DELIMITER ;

-- ============================================================
// TRIGGER 2: Group Member Count <= 20
-- Enforces max 20 members per group
-- ============================================================
DELIMITER //

CREATE TRIGGER trg_group_member_count_check
BEFORE INSERT ON group_members
FOR EACH ROW
BEGIN
  DECLARE member_count INT;
  
  SELECT COUNT(*) INTO member_count
  FROM group_members
  WHERE group_id = NEW.group_id
    AND status IN ('PENDING', 'ACCEPTED');
  
  -- +1 for the new member
  IF (member_count + 1) > 20 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Group cannot have more than 20 members';
  END IF;
END//

DELIMITER ;

-- ============================================================
// TRIGGER 3: Locket Anti-Spoofing (capturedAt within 60s)
// Note: Server time is used as reference
-- ============================================================
DELIMITER //

CREATE TRIGGER trg_locket_capture_time_check
BEFORE INSERT ON lockets
FOR EACH ROW
BEGIN
  DECLARE time_diff BIGINT;
  
  SET time_diff = ABS(TIMESTAMPDIFF(SECOND, NEW.captured_at, NOW()));
  
  IF time_diff > 60 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Locket captured_at must be within 60 seconds of server time';
  END IF;
END//

DELIMITER ;

-- ============================================================
// TRIGGER 4: CheckIn Expiration (Background job fallback)
// Runs periodically to expire old check-ins
-- ============================================================
DELIMITER //

CREATE EVENT evt_expire_checkins
ON SCHEDULE EVERY 1 MINUTE
DO
BEGIN
  UPDATE check_ins
  SET status = 'EXPIRED'
  WHERE status = 'ACTIVE'
    AND expires_at < NOW();
END//

DELIMITER ;
```

### 7.2 MySQL Check Constraints (Note: MySQL ignores CHECK by default in older versions)

```sql
-- Alternative: Use triggers for constraint enforcement

-- CHECK: SpinLog.amount should never make balance negative
-- (Handled by SpinWallet trigger above)

-- CHECK: RestaurantHours.dayOfWeek must be 0-6
ALTER TABLE restaurant_hours
ADD CONSTRAINT chk_day_of_week CHECK (day_of_week >= 0 AND day_of_week <= 6);

-- CHECK: RestaurantHours.openTime/closeTime format validation
-- (Use application validation, MySQL cannot validate "HH:MM" easily)
```

### 7.3 Index Creation (Raw SQL for Fine-tuning)

```sql
-- Geo Index: If using MySQL 8.0+ spatial features
ALTER TABLE restaurants
ADD COLUMN location POINT GENERATED ALWAYS AS (POINT(lat, lng)) STORED;

CREATE SPATIAL INDEX idx_restaurants_location ON restaurants(location);

-- Partitioning Recommendation for High-Volume Tables

-- Locket: Partition by month on capturedAt
ALTER TABLE lockets
PARTITION BY RANGE (TO_DAYS(captured_at)) (
  PARTITION p_2026_01 VALUES LESS THAN (TO_DAYS('2026-02-01')),
  PARTITION p_2026_02 VALUES LESS THAN (TO_DAYS('2026-03-01')),
  PARTITION p_2026_03 VALUES LESS THAN (TO_DAYS('2026-04-01')),
  -- ... more partitions
  PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- SpinSession: Partition by month on createdAt
ALTER TABLE spin_sessions
PARTITION BY RANGE (TO_DAYS(created_at)) (
  -- Similar partition strategy
);
```

### 7.4 Recommended MySQL Config for Performance

```ini
# my.cnf / mysqld.cnf

[mysqld]
# InnoDB Settings
innodb_buffer_pool_size = 2G  # Adjust based on RAM
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2  # Balance durability vs speed

# Connection Settings
max_connections = 200

# Query Cache (MySQL 8.0 removed this, skip if using 8.0+)
# query_cache_type = 1
# query_cache_size = 128M

# Temp Tables
tmp_table_size = 256M
max_heap_table_size = 256M

# Logging
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2
```

---

## 8. MIGRATION CHECKLIST

### Pre-MVP Launch (Must Complete)

- [ ] Fix `RestaurantHours.openTime/closeTime` to use `VarChar(5)`
- [ ] Add `SpinSessionCandidate` junction table
- [ ] Add critical indexes: `[userId, status, expiresAt]`, `[visibility, capturedAt]`
- [ ] Add `SpinWallet.version` for optimistic locking
- [ ] Implement MySQL triggers for balance and member count
- [ ] Add `Locket.captured_at` 60s validation trigger
- [ ] Change `Float` to `Decimal` for lat/lng coordinates

### Post-MVP (Nice to Have)

- [ ] Implement spatial partitioning for Locket and SpinSession
- [ ] Add `googlePlaceId` for Google Places integration
- [ ] Create `AdWatchLog` table (referenced but not defined)
- [ ] Implement `TasteBoard` (replaces `User.savedRestaurants`)
- [ ] Add `CircleRecommendation` for v2.0

---

## 9. SUMMARY

### Schema Quality Score

| Category | Score | Notes |
|----------|-------|-------|
| Normalization | 9/10 | 4NF compliant, minor JSON to table needed |
| Performance | 7/10 | Missing indexes, needs geo optimization |
| Business Logic | 6/10 | Missing triggers for critical constraints |
| Data Integrity | 7/10 | Good FK, but no DB-level balance/group checks |
| Future Scale | 6/10 | Needs partitioning strategy for 100K+ users |

**Overall: 7/10** - MVP Ready with fixes, production-ready after implementing triggers.

### Top 3 Priorities

1. **Add `SpinSessionCandidate` junction table** - Security & queryability
2. **Add critical indexes** - Performance for common queries
3. **Implement MySQL triggers** - Data integrity at DB level

---

*Review completed by AI Database Architect | 2026-08-06*
