Tôi có một bản thiết kế Database Schema (Prisma Schema) cho ứng dụng Food Roulette và muốn bạn kiểm tra, tối ưu hóa trước khi triển khai.

---

## 1. BỐI CẢNH ỨNG DỤNG

**Food Roulette** — Mobile app (React Native + Expo) giúp người dùng Việt Nam chọn quán ăn ngẫu nhiên bằng cách quay bánh xe.

### Tính năng MVP:
- **Spin cá nhân** — User chọn quán random xung quanh vị trí hiện tại
- **Group spin** — Tối đa 20 người, vote chấp nhận/veto quán được chọn
- **Locket camera-only** — Chỉ chụp ảnh từ camera app, có GPS + timestamp + device hash
- **CheckIn GPS verification** — Xác minh user đến quán thật

### Công nghệ:
- Database: **MySQL (Percona)** qua Supabase
- ORM: **Prisma**
- Schema hiện tại: **v4.1.1 Hybrid MVP** — 14 tables

### Quy mô dự kiến:
- ~50,000-100,000 user (MVP launch)
- Read-heavy (roulette queries, feed)
- Write: CheckIn, Locket, Vote (thấp hơn)

### Critical Queries cần tối ưu:
1. **Roulette query**: `SELECT * FROM restaurants WHERE status='APPROVED' AND category=? ORDER BY distance LIMIT 50`
2. **Group vote tally**: `SELECT value, COUNT(*) FROM votes WHERE spinSessionId=? GROUP BY value`
3. **CheckIn verification**: `SELECT * FROM check_ins WHERE userId=? AND status='ACTIVE' AND expiresAt > NOW()`
4. **Locket feed**: `SELECT * FROM lockets WHERE visibility='PUBLIC' OR (visibility='FRIENDS' AND userId IN (friends)) ORDER BY capturedAt DESC`

---

## 2. BẢN THIẾT KẾ HIỆN TẠI

```prisma
// Food Roulette - Prisma Schema v4.1.1 Hybrid MVP
// 14 entities - BCNF compliant - MVP ready

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

// === P0: CORE TABLES (12 tables) ===

model User {
  id                  String    @id @default(uuid())
  email               String    @unique @db.VarChar(255)
  passwordHash        String    @map("password_hash") @db.VarChar(255)
  passwordVersion     Int       @default(1) @map("password_version")
  displayNamePrivate  String    @map("display_name_private") @db.VarChar(50)
  displayNamePublic   String    @map("display_name_public") @db.VarChar(50)
  publicId           String    @unique @map("public_id") @db.VarChar(20)
  avatarUrl          String?   @map("avatar_url") @db.VarChar(500)
  role               UserRole  @default(USER)
  subscriptionTier   SubTier   @default(FREE) @map("subscription_tier")
  savedRestaurants   Json?     @map("saved_restaurants")
  createdAt          DateTime  @default(now()) @map("created_at")
  updatedAt          DateTime  @updatedAt @map("updated_at")
  deletedAt          DateTime? @map("deleted_at") // soft delete

  friendshipsRequested  Friendship[]
  friendshipsReceived   Friendship[]
  groupMemberships      GroupMember[]
  spinSessionsInitiated SpinSession[] @relation("SpinInitiator")
  spinSessionsPersonal   SpinSession[] @relation("SpinPersonal")
  votes                  Vote[]
  spinWallet             SpinWallet?
  lockets                Locket[]
  checkIns               CheckIn[]
  photosUploaded         RestaurantPhoto[] @relation("PhotoUploader")

  @@index([subscriptionTier])
  @@map("users")
}

enum UserRole { USER STEWARD ADMIN }
enum SubTier { FREE PREMIUM }

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
  @@map("friendships")
}

enum FriendshipStatus { PENDING ACCEPTED BLOCKED }

model Restaurant {
  id          String           @id @default(uuid())
  name        String           @db.VarChar(255)
  address     String?          @db.VarChar(500)
  lat         Float?
  lng         Float?
  source      RestaurantSource @default(USER_SUBMITTED)
  category    String?          @db.VarChar(100)
  priceLevel  Int?            @map("price_level")
  status      RestaurantStatus @default(PENDING)
  createdAt   DateTime        @default(now()) @map("created_at")
  updatedAt   DateTime        @updatedAt @map("updated_at")
  deletedAt   DateTime?       @map("deleted_at")

  hours             RestaurantHours[]
  photos            RestaurantPhoto[]
  lockets           Locket[]
  checkIns          CheckIn[]
  spinResults       SpinSession[] @relation("SpinResult")
  spinCandidates    SpinSession[] @relation("SpinCandidates")

  @@index([status])
  @@index([status, category])
  @@index([lat, lng])
  @@map("restaurants")
}

enum RestaurantSource { GOOGLE_PLACES USER_SUBMITTED }
enum RestaurantStatus { PENDING APPROVED REJECTED }

model RestaurantHours {
  id           String   @id @default(uuid())
  restaurantId String   @map("restaurant_id")
  dayOfWeek    Int      @map("day_of_week")
  openTime     DateTime? @db.Time
  closeTime    DateTime? @db.Time
  isClosed     Boolean  @default(false) @map("is_closed")

  restaurant Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)

  @@unique([restaurantId, dayOfWeek])
  @@index([restaurantId])
  @@map("restaurant_hours")
}

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

  @@map("groups")
}

enum GroupStatus { WAITING SPINNING VOTING DONE CANCELLED }

model GroupMember {
  id        String         @id @default(uuid())
  groupId   String         @map("group_id")
  userId    String         @map("user_id")
  role      GroupRole      @default(MEMBER)
  status    MemberStatus   @default(PENDING)
  joinedAt  DateTime       @default(now()) @map("joined_at")
  updatedAt DateTime       @updatedAt @map("updated_at")

  group Group @relation(fields: [groupId], references: [id], onDelete: Cascade)
  user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([groupId, userId])
  @@index([groupId, status])
  @@map("group_members")
}

enum GroupRole { MEMBER HOST }
enum MemberStatus { PENDING ACCEPTED VETO }

model SpinSession {
  id            String         @id @default(uuid())
  groupId       String?        @map("group_id")
  userId        String?        @map("user_id")
  initiatorId   String         @map("initiator_id")
  candidateIds  Json?          @map("candidate_ids")
  resultId      String?        @map("result_id")
  status        SpinStatus     @default(ACTIVE)
  createdAt     DateTime       @default(now()) @map("created_at")
  completedAt   DateTime?      @map("completed_at")

  group   Group?      @relation(fields: [groupId], references: [id], onDelete: SetNull)
  user    User?       @relation("SpinPersonal", fields: [userId], references: [id], onDelete: SetNull)
  initiator User      @relation("SpinInitiator", fields: [initiatorId], references: [id], onDelete: Cascade)
  result  Restaurant? @relation("SpinResult", fields: [resultId], references: [id], onDelete: SetNull)
  votes   Vote[]

  @@index([groupId])
  @@index([userId])
  @@index([initiatorId])
  @@map("spin_sessions")
}

enum SpinStatus { ACTIVE VOTING COMPLETED CANCELLED }

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
  @@map("votes")
}

enum VoteValue { ACCEPT VETO }

model SpinWallet {
  id        String   @id @default(uuid())
  userId    String   @unique @map("user_id")
  balance   Int      @default(0)
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  user User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  logs SpinLog[]

  @@map("spin_wallets")
}

model SpinLog {
  id           String      @id @default(uuid())
  walletId     String      @map("wallet_id")
  amount       Int
  source       SpinSource
  purchaseId   String?     @map("purchase_id")
  adWatchLogId String?    @map("ad_watch_log_id")
  giftId       String?    @map("gift_id")
  referralId   String?    @map("referral_id")
  createdAt    DateTime   @default(now()) @map("created_at")

  wallet  SpinWallet @relation(fields: [walletId], references: [id], onDelete: Cascade)
  purchase SpinPack? @relation(fields: [purchaseId], references: [id], onDelete: SetNull)

  @@index([walletId, createdAt])
  @@index([purchaseId])
  @@map("spin_logs")
}

enum SpinSource { PURCHASE AD_WATCH REFERRAL REWARD }

model SpinPack {
  id        String   @id @default(uuid())
  name      String   @db.VarChar(100)
  spins     Int
  priceVND  Int      @map("price_vnd")
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at")

  purchases SpinLog[]

  @@map("spin_packs")
}

// === P1: IMPORTANT TABLES (2 tables) ===

model Locket {
  id           String        @id @default(uuid())
  userId       String        @map("user_id")
  restaurantId String?       @map("restaurant_id")
  imageUrl     String        @map("image_url") @db.VarChar(500)
  deviceHash   String        @map("device_hash") @db.VarChar(64)
  capturedAt   DateTime      @map("captured_at")
  lat          Float?
  lng          Float?
  visibility   LocketVisibility @default(FRIENDS)
  createdAt    DateTime      @default(now()) @map("created_at")

  user       User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  restaurant Restaurant? @relation(fields: [restaurantId], references: [id], onDelete: SetNull)
  checkIns   CheckIn[]

  @@index([userId, capturedAt])
  @@map("lockets")
}

enum LocketVisibility { PRIVATE FRIENDS PUBLIC }

model CheckIn {
  id           String         @id @default(uuid())
  userId       String         @map("user_id")
  restaurantId String         @map("restaurant_id")
  locketId     String?        @map("locket_id")
  status       CheckInStatus  @default(ACTIVE)
  createdAt    DateTime       @default(now()) @map("created_at")
  expiresAt    DateTime       @map("expires_at")

  user       User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  restaurant Restaurant @relation(fields: [restaurantId], references: [id], onDelete: Cascade)
  locket     Locket?   @relation(fields: [locketId], references: [id], onDelete: SetNull)

  @@index([userId, createdAt])
  @@map("check_ins")
}

enum CheckInStatus { ACTIVE EXPIRED VERIFIED }

// === P2: DEFERRED ===
// TasteBoard, Menu, UserPreference, CircleRecommendation,
// RestaurantPartner, CorporateAccount, CorporateMember, RestaurantVisit,
// Review, Commitment, AdWatchLog, SubscriptionPlan
```

---

## 3. YÊU CẦU KIỂM TRA

Hãy đóng vai một **Senior Database Architect** và phân tích kỹ thiết kế trên theo các tiêu chí sau:

### 1. Tính đúng đắn và chuẩn hóa (Normalization):
- Schema đã đạt **BCNF/3NF** chưa? Có vị trí nào vi phạm?
- Khóa chính (PK), khóa ngoại (FK), và quan hệ (1-1, 1-N, N-N) đã chính xác chưa?
- **Lưu ý đặc biệt**: Trường hợp `SpinSession.candidateIds` đang lưu JSON — có nên tách thành junction table không?

### 2. Hiệu năng & Khả năng mở rộng (Performance):
- Với **50,000-100,000 user**, bảng nào có thể thành bottleneck?
- Index hiện tại đã đủ cho các **Critical Queries** ở trên chưa?
- Có nên **denormalize** ở đâu để tăng tốc đọc không?
- **Geo queries** (PostGIS/Spherical) cần index đặc biệt gì?

### 3. Rủi ro & Thiếu sót nghiệp vụ:
- Data types đã tối ưu chưa? (VD: `Float` vs `Decimal` cho GPS, tiền tệ)
- Thiếu field nào cho MVP launch?
- **Locket anti-spoofing**: `capturedAt ≤ 60s` validation — nên xử lý ở app hay DB?
- **SpinWallet balance**: Nên dùng DB trigger hay app-level check?

### 4. Prisma-specific concerns:
- MySQL với Prisma có giới hạn gì cần lưu ý?
- `@@index` vs raw SQL index — performance khác nhau không?

---

## 4. KẾT QUẢ ĐẦU RA YÊU CẦU:

Hãy cung cấp:

1. **DANH SÁCH ĐIỂM YẾU**: Liệt kê cụ thể các vấn đề (kèm dòng/cấu trúc liên quan)

2. **BẢN THIẾT KẾ ĐÃ SỬA**: Cung cấp lại schema hoàn chỉnh bằng **Prisma syntax** với:
   - Đầy đủ `@@index`, `@@unique`, `@@map`
   - Comments cho các ràng buộc cần implement ở DB-level
   - Chú thích P0/P1/P2 features

3. **IMPLEMENTATION NOTES**: Ghi chú các trigger/constraint cần tạo ở MySQL (nếu Prisma không hỗ trợ)

---

*Lưu ý: Đây là MVP với 14 tables. Các features P2 (TasteBoard, Menu AI, B2B) sẽ được add sau. Chỉ tập trung vào P0 + P1 tables.*
