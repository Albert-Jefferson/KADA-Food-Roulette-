# Food Roulette — Gamified Version
## User Flow & Screens với Psychological Mechanics

---

## Sơ đồ luồng

```
Khởi động app
    |
    ├── Chưa đăng nhập --> Đăng nhập / Đăng ký --> Onboarding ----┐
    |                                                             |
    └── Đã đăng nhập --> Onboarding (lần đầu) --------------------┘
                              |
                              v
                    +---------+---------+-----------------+
                    |                   |                 |
              Home / Spin         Locket Feed           Profile
                    |                   |                 |
            +-------+-------+           |                 |
            |               |           |                 |
      Solo Spin      Group Spin      Create Locket      Garden
            |               |           |                 |
            v               v           v                 v
      Kết quả Spin    Ai Spin?     Camera Capture       Streak
            |               |           |                 |
            v               v           v                 |
      Khế Ước --------> Vote -----> Kết quả Vote          |
            |                                             |
            v                                             |
      Confirmation                                        |
            |                                             |
      +-----+-----+                                       |
      |           |                                       |
Check-in       Để sau                                     |
      |                                                   |
      v                                                   |
Check-in Complete                                         |
      |                                                   |
      +------------------+------------------+-------------+
      |                  |                  |             |
      v                  v                  v             v
Rewards + XP      Viết Review          Tạo Locket     Lucky Spin
      |                  |                  |             |
      v                  v                  v             v
Garden +1          (có thể skip)   Locket Detail        Voucher
      |                                                   |
      v                                                   |
Season Garden <-------------------------------------------+
      |
      v
   Harvest
```

---

## Luồng chi tiết: Solo Spin với Gamification

```
Solo Spin
    |
    v
+-------------------------------------------------------------+
|                        KẾT QUẢ SPIN                          |
+-------------------------------------------------------------+
|                                                                 |
|  Bún Bò Bà Luân                                              |
|  ⭐ 4.5 (230) . 400m . Việt                                |
|                                                                 |
|  [Quay lại]    [Xác nhận]    [Chỉ đường]                   |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                      KHẾ ƯỚC SCREEN                          |
+-------------------------------------------------------------+
|                                                                 |
|  "Bạn có muốn tạo khế ước để cam kết đi?"                  |
|                                                                 |
|  +---------+  +---------+  +---------+                         |
|  |   0đ    |  |  5,000đ |  | 10,000đ|                        |
|  |Spin thôi|  | Cam kết  |  |Tự tin đi|                      |
|  +---------+  +---------+  +---------+                         |
|                                                                 |
|  Mời witness: [@tuan] [@lan] [@hung]                          |
|                                                                 |
|  [TẠO KHẾ ƯỚC]                                              |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    KHẾ ƯỚC CONFIRMATION                      |
+-------------------------------------------------------------+
|                                                                 |
|  Khế ước đã tạo!                                             |
|  Stake: 5,000đ                                                |
|  Witness: @tuan_foodie                                        |
|  Hết hạn: 1:00 chiều (còn 58:32)                            |
|                                                                 |
|  [Chia sẻ khế ước]    [Chỉ đường]                           |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    CHECK-IN VERIFICATION                      |
+-------------------------------------------------------------+
|                                                                 |
|  GPS đã xác nhận (32m từ quán)                              |
|  Khế ước còn: 47:28                                          |
|                                                                 |
|  +-------------------------------------------------------+   |
|  |                    CAMERA                              |   |
|  |                   [Chụp ảnh]                          |   |
|  +-------------------------------------------------------+   |
|                                                                 |
|  GPS + Time tự động gắn vào ảnh                             |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    CHECK-IN COMPLETE                          |
+-------------------------------------------------------------+
|                                                                 |
|  CHECK-IN THÀNH CÔNG!                                        |
|                                                                 |
|  KHẾ ƯỚC HOÀN THÀNH!                                        |
|  - Bạn đã giữ lời hứa!                                      |
|  - 5,000đ đã hoàn                                           |
|  - @tuan đã được thông báo                                  |
|                                                                 |
|  --- Rewards ---                                              |
|  🔥 Streak: 6 ngày (+1)                                     |
|  🌱 Garden: 9 seeds (+1)                                     |
|  💎 XP: +150                                                 |
|                                                                 |
|  --- Tiếp theo ---                                           |
|  +--------------------+                                        |
|  |   Viết Review     |                                        |
|  |   +25 XP          |                                        |
|  +--------------------+                                        |
|  +--------------------+ +--------------------+                |
|  |   Tạo Locket      | |   Để sau           |                |
|  +--------------------+ +--------------------+                |
|                                                                 |
|  --- Lucky Spin ---                                           |
|  [QUAY NGAY]                                                  |
|                                                                 |
+-------------------------------------------------------------+
    |
    +--> Viết Review --> Review Submitted --> Locket / Lucky Spin
    |
    +--> Tạo Locket --> Camera --> Locket Detail --> Locket Feed
    |
    +--> Lucky Spin --> Voucher --> Về Home
```

---

## Luồng chi tiết: Viết Review

```
Check-in Complete
    |
    v
+-------------------------------------------------------------+
|                    VIẾT REVIEW                              |
+-------------------------------------------------------------+
|                                                                 |
|  "Bạn đánh giá [Tên Quán] thế nào?"                        |
|                                                                 |
|  ⭐⭐⭐⭐⭐  [Tap để đánh giá]                              |
|                                                                 |
|  --- Ảnh (tối đa 5) ---                                     |
|  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────────┐                     |
|  │ 📷  │ │ 📷  │ │ 📷  │ │ + Thêm  │                     |
|  └─────┘ └─────┘ └─────┘ └─────────┘                     |
|  Ảnh từ Locket    Gallery                                    |
|                                                                 |
|  Tiêu đề: "Món [tên] ngon!" (AI draft)                      |
|                                                                 |
|  Bình luận: [AI suggest từ ảnh + check-in data]            |
|                                                                 |
|  Tags: #vị_ngon  #giá_ok  #view  #đông  #gần_trường        |
|                                                                 |
|  Đã ăn: [Món đã order] (auto-filled)                        |
|                                                                 |
|  [ĐĂNG REVIEW]  +25 XP                                       |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    REVIEW ĐÃ ĐĂNG!                           |
+-------------------------------------------------------------+
|                                                                 |
|  ✅ Review của bạn đã được đăng                             |
|  +25 XP                                                        |
|                                                                 |
|  --- Phần thưởng Review ---                                  |
|  Viết 5 review → Nhận badge "Food Critic"                   |
|                                                                 |
|  [XEM REVIEW]    [TẠO LOCKET]    [LUCKY SPIN]            |
|                                                                 |
+-------------------------------------------------------------+
```

---

## Luồng chi tiết: Group Spin

```
Danh sách nhóm
    |
    v
+-------------------------------------------------------------+
|                    AI SẼ QUAY?                              |
+-------------------------------------------------------------+
|                                                                 |
|  Để công bằng, chọn ngẫu nhiên người spin!                 |
|                                                                 |
|              +---------------+                                |
|             /                   \                               |
|            /    +-----------+    \                              |
|           |    /             \     |                             |
|           |   |    @tuan    |      |                             |
|           |    \             /     |                             |
|            \    +-----------+    /                              |
|             \                   /                                |
|              +---------------+                                 |
|                                                                 |
|                 [QUAY ĐI!]                                     |
|                                                                 |
|  Thành viên online: @minh, @tuan, @lan                         |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    VOTE KẾT QUẢ                              |
+-------------------------------------------------------------+
|                                                                 |
|  Bún Bò Bà Luân                                              |
|  ⭐ 4.5 . 400m                                               |
|                                                                 |
|  --- Ai vote gì? ---                                         |
|  +-------------------------------------------------------+   |
|  | @minh | online | Chấp nhận                            |   |
|  | @tuan | online | Chưa vote                            |   |
|  | @lan  | online | Quay lại                              |   |
|  | @hung | offline| Chưa vote                            |   |
|  +-------------------------------------------------------+   |
|                                                                 |
|  Progress: 1/4 voted . Cần >50%                              |
|  Tự động khóa: 09:42                                         |
|                                                                 |
|  --- Veto Tokens ---                                          |
|  Bạn có: 3/3 tokens tuần này                                 |
|                                                                 |
|  [CHẤP NHẬN]    [QUAY LẠI]    [DÙNG VETO]                   |
|                                                                 |
+-------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------+
|                    KẾT QUẢ VOTE                              |
+-------------------------------------------------------------+
|                                                                 |
|  Đa số chấp nhận --> ĐI THÔI!                               |
|                                                                 |
|  [Chỉ đường]    [Tạo Khế Ước]                              |
|                                                                 |
+-------------------------------------------------------------+
    |
    +--> (Tiếp tục luồng Solo Spin từ Khế Ước)
```

---

## Luồng chi tiết: Season Garden

```
+-------------------------------------------------------------+
|                    SEASON GARDEN                             |
+-------------------------------------------------------------+
|                                                                 |
|      MY FOODIE GARDEN                                        |
|                                                                 |
|  +-------------------------------------------------------+   |
|  |                                                         |   |
|  |   🌱   🌿   🌱   🌿   🌱                              |   |
|  |    |     |     |     |     |                           |   |
|  |  Day1  Day2 Day3  Day4 Day5                            |   |
|  |  Seed  Sprt  Leaf   Leaf  Bush                          |   |
|  |                                                         |   |
|  |   🌳   🌸   🌺   🌱   🌿                              |   |
|  |    |     |     |     |     |                           |   |
|  |  Day6  Day7 Day8  Day9 Day10                           |   |
|  |  Tree  Flwr Flower Seed  Sprt                           |   |
|  |                                                         |   |
|  +-------------------------------------------------------+   |
|                                                                 |
|  Garden: ████████████████░░░░░░░░░                          |
|  18/30 seeds planted                                         |
|                                                                 |
|  Next Harvest: 12 more check-ins                             |
|  Est. date: Aug 15, 2026                                     |
|                                                                 |
|  --- Harvest Rewards ---                                      |
|  +-----------+ +-----------+ +-----------+                   |
|  |  Voucher  | |  Mystery   | |  Gửi hoa  |                   |
|  |  15% off | |   Box      | |  tặng bạn |                   |
|  +-----------+ +-----------+ +-----------+                   |
|                                                                 |
|  --- Streak Bonus ---                                        |
|  Nếu complete tuần này: +20% seeds!                          |
|                                                                 |
+-------------------------------------------------------------+
    |
    v (Khi đủ 30 seeds)
+-------------------------------------------------------------+
|                    GARDEN HARVEST                            |
+-------------------------------------------------------------+
|                                                                 |
|  GARDEN ĐÃ SẴN SÀNG THU HOẠCH!                              |
|                                                                 |
|  Chọn 1 phần thưởng:                                         |
|                                                                 |
|  +-----------+ +-----------+ +-----------+                   |
|  |  Voucher  | |  Mystery   | |  Gửi hoa  |                   |
|  |  15% off | |   Box      | |  tặng bạn |                   |
|  | quán yêu | | quán đối  | | (nhập    |                   |
|  | thích    | | tác)      | | tên)     |                   |
|  +-----------+ +-----------+ +-----------+                   |
|                                                                 |
|  Garden reset sau khi harvest!                               |
|                                                                 |
+-------------------------------------------------------------+
```

---

## Tổng quan: Gamification Loop

```
+-------------------------------------------------------------+
|                    ANTICIPATION LOOP                         |
+-------------------------------------------------------------+
|                                                                 |
|              +-----------------------------------------+      |
|              |          CYCLE THÈM ĂN                   |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  1. WANT (Thèm)                          |      |
|              |     - Notification: "11h30 rồi, đói chưa?"|      |
|              |     - Streak reminder                     |      |
|              |     - Preview quán gần đây               |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  2. SEEK (Tìm kiếm)                      |      |
|              |     - Spin để tìm quán                   |      |
|              |     - Xem kết quả                        |      |
|              |     - Anticipation builds                 |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  3. COMMIT (Cam kết)                      |      |
|              |     - Tạo khế ước                       |      |
|              |     - Stake tiền + Chọn witness          |      |
|              |     - Share để tạo pressure              |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  4. PURSUE (Theo đuổi)                   |      |
|              |     - Đường đến quán                     |      |
|              |     - GPS check-in                       |      |
|              |     - Camera capture                     |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  5. CONSUME (Trải nghiệm)                |      |
|              |     - Ăn uống                            |      |
|              |     - Check-in complete                  |      |
|              |     - Rewards: Streak + XP + Garden       |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  6. CREATE (Tạo kỷ niệm)                  |      |
|              |     - Tạo Locket                          |      |
|              |     - Chia sẻ với bạn bè                 |      |
|              |     - Lucky Spin để nhận thêm            |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  7. REFLECT (Suy ngẫm)                    |      |
|              |     - Xem lại streak                     |      |
|              |     - Garden phát triển                   |      |
|              |     - Leaderboard update                  |      |
|              +-----------------------------------------+      |
|                            |                                 |
|                            v                                 |
|              +-----------------------------------------+      |
|              |  --> QUAY LẠI BƯỚC 1 (Tomorrow)          |      |
|              +-----------------------------------------+      |
|                                                                 |
+-------------------------------------------------------------+
```

---

## Danh sách màn hình đầy đủ

### Nhóm A: Auth & Onboarding
1. Splash
2. Đăng nhập
3. Đăng ký
4. Onboarding

### Nhóm G: Gamification
5. Home / Spin (Enhanced)
6. Kết quả spin
7. Chi tiết quán
8. Bản đồ / Chỉ đường
9. Khế Ước Screen
10. Khế Ước Confirmation
11. Check-in Verification
12. Check-in Complete + Locket Prompt
13. Group Spin - Ai sẽ quay?
14. Group Vote
15. Season Garden
16. Streak & Challenge Dashboard
17. Lucky Spin Wheel
18. Anticipation Notifications

### Nhóm L: Locket
19. Locket Feed
20. Tạo Locket mới
21. Chi tiết Locket

### Nhóm P: Profile & System
22. Profile cá nhân
23. Cài đặt

---

## Tổng hợp

| Nhóm | # | Màn hình | Giá trị cốt lõi |
|------|---|----------|------------------|
| **A: Auth** | 1 | Splash | First impression |
| | 2 | Đăng nhập | Entry point |
| | 3 | Đăng ký | Create account |
| | 4 | Onboarding | Personalization setup |
| **G: Gamification** | 5 | Home Enhanced | **Gamified hub** - Streak + Garden |
| | 6 | Kết quả spin | Result + actions |
| | 7 | Chi tiết quán | Deep info |
| | 7.5 | Viết Review | **UGC generation** - Trust signals |
| | 7.6 | Thêm quán mới | **Crowdsourcing** - Restaurant database |
| | 7.7 | Lưu quán | **Personal list** - Favorites |
| | 8 | Bản đồ | Navigation |
| | 9 | Khế Ước Screen | **Commitment** - Stake + Witness |
| | 10 | Khế Ước Confirmation | Share + Accountability |
| | 11 | Check-in Verification | **GPS + Camera** - Proof of visit |
| | 12 | Check-in Complete | **Rewards** - Streak + XP + Garden + Review |
| | 13 | Group Spin - Ai quay? | **Fair chance** - Random selector |
| | 14 | Group Vote | **Voice** - Veto tokens |
| | 15 | Season Garden | **Delayed reward** - Visual garden |
| | 16 | Streak Dashboard | **Motivation** - Challenges + Leaderboard |
| | 17 | Lucky Spin | **Variable reward** - Slot machine |
| | 18 | Notifications | **Anticipation** - Triggers |
| **L: Locket** | 19 | Locket Feed | **Discovery** - Social proof |
| | 20 | Tạo Locket | **Memory** - Camera + GPS |
| | 21 | Locket Detail | **Engagement** - Like + Comment |
| **P: Profile** | 22 | Profile cá nhân | Identity + Stats |
| | 23 | Cài đặt | Control center |

---

## Bảng mapping: Cơ chế -> Screens

| Cơ chế | Screens | Chức năng |
|--------|---------|-----------|
| **KHẾ ƯỚC** | G9, G10, G11 | Tạo commitment + Stake + Witness |
| **WITNESS** | G9, G10, G12 | Social accountability |
| **ANTICIPATION** | G5, G18 | Notification triggers |
| **SEASON GARDEN** | G15, G16 | Delayed gratification |
| **GROUP SPIN** | G13, G14 | Fair chance + Voting |
| **LOCKET** | L19, L20, L21 | Memory + Social proof |
| **LUCKY SPIN** | G17, G12 | Variable reward |
| **STREAK** | G16, G12 | Daily habit loop |
| **REVIEW** | G7.5, G12 | UGC generation + Trust signals |
| **CROWDSOURCING** | G7.6 | Add restaurant to database |
| **FAVORITES** | G7.7 | Personal + Group favorites |

---

## 8 CƠ CHẾ CHÍNH

```
+---------------------------------------------------------------+
|                    8 CƠ CHẾ CHÍNH                              |
+---------------------------------------------------------------+
|                                                                   |
|  1. KHẾ ƯỚC         |  Stake tiền + Witness                   |
|  2. WITNESS          |  Bạn bè giám sát                       |
|  3. ANTICIPATION     |  Thèm --> Tìm --> Theo --> Ăn --> Locket|
|  4. SEASON GARDEN    |  Delayed gratification                  |
|  5. GROUP SPIN       |  Ai spin? Ai vote?                      |
|  6. LOCKET           |  Kỷ niệm + Social proof                 |
|  7. LUCKY SPIN       |  Variable reward                        |
|  8. REVIEW           |  Trust signals + UGC                     |
|  9. CROWDSOURCING   |  User add restaurant                      |
|  10. FAVORITES      |  Personal + Group list                    |
|                                                                   |
+---------------------------------------------------------------+
```

---

## Psychological Triggers

| Trigger | Cơ chế | Screens |
|---------|--------|---------|
| **Loss Aversion** | Stake tiền | G9, G10, G12 |
| **Social Accountability** | Witness | G9, G10, G12 |
| **Sunk Cost** | Streak + Garden | G15, G16 |
| **Variable Reward** | Lucky Spin | G17 |
| **Anticipation** | Notifications | G18 |
| **FOMO** | Leaderboard | G16 |
| **Achievement** | Badges + Stats | G16, P22 |
| **Ownership** | Voucher countdown | G17 |
| **Fairness** | Group Wheel | G13 |
| **Voice** | Veto Token | G14 |
| **Social Proof** | Locket Feed | L19 |
| **Trust** | Camera + GPS | G11, L20 |
| **Contribution** | Add Restaurant | G7.6 |
| **Social Sharing** | Group Favorites | G7.7 |

---

## Priority Implementation

### Phase 1: MVP (Weeks 1-4)
```
A1-A4.  Auth + Onboarding
G5.     Home Enhanced (Streak visible)
G6.     Kết quả spin
G9.     Khế Ước Screen (Stake + Witness)
G10.    Khế Ước Confirmation
G11.    Check-in Verification (GPS)
G12.    Check-in Complete (Rewards + Locket Prompt)
L20.    Tạo Locket (Simple)
G18.    Anticipation Notifications
```

### Phase 2: Growth (Weeks 5-8)
```
G15.    Season Garden (Delayed Reward)
G16.    Streak Dashboard + Challenges
G13.    Group Spin Wheel
G14.    Group Vote with Veto
G17.    Lucky Spin Wheel
L19.    Locket Feed
```

### Phase 3: Engagement (Weeks 9-12)
```
L21.    Locket Detail + Engagement
G7.     Chi tiết quán
G8.     Bản đồ
P22.    Profile Enhanced + Taste Profile
P23.    Settings + Notification Controls
```

---

## So sánh: Original vs Gamified

| Aspect | Original | Gamified |
|--------|----------|----------|
| **Core loop** | Spin --> Go --> Locket | Spin --> Khế Ước --> GPS Check-in --> Locket --> Rewards |
| **Motivation** | Fun + Social | Fun + Social + **Psychological** |
| **Stake** | None | Money stake (0/5k/10k) |
| **Witness** | None | Social accountability |
| **Streak** | None | 7 ngày cycle |
| **Garden** | None | 30 check-ins harvest |
| **Lucky Spin** | None | Variable reward |
| **Group** | Owner decides | Random who spins |
| **Notifications** | Basic | Anticipation triggers |

---

---

## CHI TIẾT TỪNG MÀN HÌNH

---

### NHÓM A: AUTH & ONBOARDING

---

## A1. Splash

**TITLE:**
> "Không biết ăn gì? Để vòng quyết định."

**WHAT (Mô tả):**
Màn hình khởi động hiển thị khi mở app. Logo Food Roulette với animation bánh xe đang quay nhẹ. Tagline xuất hiện phía dưới. Background màu Cream (#FDF5E6). Thời gian hiển thị: 2-3 giây hoặc cho đến khi app load xong.

**WHY (Tại sao):**
- Tạo first impression - ấm áp, thân thiện
- Hiểu ngay đây là app gì qua animation và tagline
- Định vị thương hiệu (earthy, food, roulette)
- Chuyển flow mượt sang Login hoặc Home

**USER ĐƯỢC GÌ:**
- Hiểu app làm gì trong 2 giây đầu
- Trải nghiệm thị giác dễ chịu (không có loading spinner cứng nhắc)
- Vào thẳng Home nếu đã đăng nhập

---

## A2. Đăng nhập

**TITLE:**
> "Chào mừng trở lại!"

**WHAT (Mô tả):**
Màn hình đăng nhập với 2 phương thức: Email + Password và Google Sign-In. Layout: logo trên, form giữa, nút đăng nhập dưới. Có link "Quên mật khẩu?" và "Chưa có tài khoản? Đăng ký". Validation real-time.

**WHY (Tại sao):**
- Entry point bắt buộc cho user mới
- Google = friction thấp nhất (không cần nhớ password)
- Email/Password = backup option
- Quick access sang register nếu chưa có tài khoản

**USER ĐƯỢC GÌ:**
- 2 cách đăng nhập: email hoặc Google (nhanh hơn)
- Quên mật khẩu: recover account dễ dàng
- Validation rõ ràng: biết ngay lỗi gì
- Chuyển nhanh sang đăng ký nếu chưa có tài khoản

---

## A3. Đăng ký

**TITLE:**
> "Tạo tài khoản Food Roulette"

**WHAT (Mô tả):**
Form đăng ký: Email, Password (với confirm), Full Name. Validation từng trường. Checkbox đồng ý Điều khoản và Chính sách bảo mật (bắt buộc). Sau đăng ký thành công → Onboarding.

**WHY (Tại sao):**
- Tạo account mới cho user
- Legal compliance qua Terms & Privacy
- Full name = personalization xuyên suốt app
- Auto-login sau khi register = friction thấp

**USER ĐƯỢC GÌ:**
- Đăng ký nhanh qua Google hoặc form email
- Hiểu rõ điều khoản và quyền riêng tư trước khi tham gia
- Validation giúp điền đúng format từ đầu
- Automatic login sau khi đăng ký thành công

---

## A4. Onboarding

**TITLE:**
> "Thiết lập Food Roulette của bạn"

**WHAT (Mô tả):**
3 step swipeable. Step 1: Cho phép truy cập vị trí. Step 2: Chọn loại món yêu thích (grid icons). Step 3: Đặt tên hiển thị (2 trường: private và public). Có nút Skip ở mỗi step.

**WHY (Tại sao):**
- Location = core functionality (tìm quán gần)
- Cuisine preference = personalization cho spin
- 2 tên = riêng tư trong nhóm vs công khai
- Skip option = không block user

**USER ĐƯỢC GÌ:**
- Location permission → app tìm quán xung quanh được
- Personalization → spin được filter theo sở thích ẩm thực
- 2 tên riêng biệt → riêng tư trong nhóm vs công khai
- Skip option → không bị ép buộc, setup sau trong Settings

---

### NHÓM G: GAMIFICATION

---

## G5. Home / Spin (Enhanced)

**TITLE:**
> "Spin nào! Hôm nay ăn gì?"

**WHAT (Mô tả):**
Màn hình chính với gamification layer. Header: streak counter + flame animation (khi streak > 3), garden progress mini view. Giữa: bánh xe roulette với animation idle. 3 buttons: Solo Spin, Group Spin, Locket Feed. Preview quán gần đó.

**WHY (Tại sao):**
- ONE primary action: SPIN - dễ thấy, dễ bấm
- Streak visible = psychological pressure giữ streak
- Garden progress = thấy reward đang đến
- Quick access Locket = social engagement

**USER ĐƯỢC GÌ:**
- Motivation từ streak + garden visible ngay
- Customize kết quả với filter (cuisine, price, distance)
- Visual feedback: spinning wheel animation thú vị
- Preview quán gần đó - biết app hoạt động thực sự

---

## G6. Kết quả spin

**TITLE:**
> "Hôm nay ăn ở đây nhé!"

**WHAT (Mô tả):**
Hero section: ảnh quán lớn với overlay gradient. Thông tin: tên, rating stars + số review, khoảng cách, mức giá, giờ mở cửa (xanh/đỏ). 3 action buttons: Quay lại, Xác nhận, Chỉ đường. 2 buttons phụ: Lưu vào Locket, Chia sẻ cho nhóm.

**WHY (Tại sao):**
- Result = payoff của việc spin
- Thông tin đầy đủ để quyết định
- 3 lựa chọn rõ ràng cho user flow
- Quick save + share = social virality

**USER ĐƯỢC GÌ:**
- Kết quả hấp dẫn: ảnh lớn, info đầy đủ
- 3 lựa chọn rõ ràng: Quay lại / Xác nhận / Đi ngay
- Quick save: lưu kỷ niệm vào Locket
- Social share: hỏi ý kiến bạn bè qua nhóm

---

## G7. Chi tiết quán

**TITLE:**
> "Khám phá [Tên Quán]"

**WHAT (Mô tả):**
Header: ảnh quán carousel, tên, rating, địa chỉ. Thông tin: giờ mở cửa, khoảng cách, loại món, mức giá. Locket của user khác tại quán: grid ảnh check-in. Reviews section. Actions: Chỉ đường, Gọi điện, Lưu vào Locket, Viết review.

**WHY (Tại sao):**
- Deep dive vào thông tin quán
- Social proof qua Locket của người khác
- Reviews = trust signals
- Multiple actions = không cần back

**USER ĐƯỢC GÌ:**
- Thông tin toàn diện về quán trước khi quyết định
- Xem ảnh thật từ người dùng khác (Locket)
- Đọc reviews từ cộng đồng (trust signals)
- Direct actions: chỉ đường, gọi điện, lưu lại

---

## G7.5. Viết Review

**TITLE:**
> "Bạn đánh giá [Tên Quán] thế nào?"

**WHAT (Mô tả):**
Màn hình viết review sau khi check-in. 3 thành phần chính:
1. **Rating**: 5 stars (tap hoặc swipe)
2. **Ảnh**: Tối đa 5 ảnh từ camera hoặc gallery (auto-từ Locket nếu có)
3. **Nội dung**:
   - Tiêu đề ngắn (AI draft: "Món [tên] ngon!")
   - Bình luận chi tiết (AI suggest từ ảnh + check-in data)
   - Tags: [#món_này](#vị](#giá](#service) - chọn từ gợi ý

Auto-filled: Tên quán, món đã ăn (từ check-in), ngày check-in, GPS location.

**WHY (Tại sao):**
- Review sau check-in = context rõ ràng (đã ăn thật)
- GPS + timestamp = trust signal cho reviews
- AI assist = giảm friction viết review
- Photo upload = reviews có credibility cao hơn

**USER ĐƯỢC GÌ:**
- Viết review dễ dàng với AI assist
- Không cần nhớ đã ăn gì (auto-filled)
- Contribute cho cộng đồng = cảm thấy có ích
- +XP + badges khi viết review được likes

---

## G7.6. Thêm quán mới

**TITLE:**
> "Bạn biết quán nào ngon?"

**WHAT (Mô tả):**
Form để user contribute quán mới vào hệ thống:
1. **Ảnh quán**: Tối đa 5 ảnh (từ camera/gallery)
2. **Thông tin cơ bản**:
   - Tên quán (bắt buộc)
   - Địa chỉ (GPS auto-fill hoặc nhập tay)
   - Loại món (chips: Việt, Nhật, Hàn, Thái, Pizza, Coffee...)
   - Mức giá (chips: <50k, 50-100k, 100-200k, >200k)
3. **Thông tin bổ sung**:
   - Giờ mở cửa
   - Số điện thoại
   - Website
4. **Gợi ý từ AI**: Nhận diện quán từ ảnh + auto-fill thông tin

**WHY (Tại sao):**
- Crowdsourcing = database mở rộng không tốn chi phí
- User biết quán ngon = nguồn content có giá trị
- AI assist = giảm effort contribute

**USER ĐƯỢC GÌ:**
- Contribute cho cộng đồng
- Quán mình thêm sẽ xuất hiện trong spin
- +XP khi quán được check-in bởi người khác

**Rewards:**
| Hành động | XP |
|-----------|-----|
| Thêm quán mới | +10 XP |
| Quán được 5 check-ins | +25 XP |
| Quán được 20 check-ins | +100 XP |

---

## G7.7. Lưu quán (Favorites)

**TITLE:**
> "Quán của bạn"

**WHAT (Mô tả):**
Màn hình quản lý quán đã lưu. Có 2 tab:

**Tab 1: Quán của tôi (Cá nhân)**
- Danh sách quán user đã lưu
- Filter: Tất cả, Gần đây lưu, Hay đi nhất
- Quick actions: Spin riêng quán này, Chỉ đường, Xóa khỏi danh sách

**Tab 2: Quán nhóm (Group Favorites)**
- Quán được thêm bởi thành viên nhóm
- Thêm quán vào nhóm (từ danh sách cá nhân hoặc tạo mới)
- Vote quán trong nhóm
- Mỗi thành viên có thể suggest quán

**Quick add từ G7 (Chi tiết quán):**
- Nút "Lưu quán" → Hiện options: "Quán của tôi" / "Quán nhóm [Tên nhóm]"
- Nếu chọn nhóm → Thêm vào group favorites + notify thành viên

**WHY (Tại sao):**
- Personal favorites = quick access khi muốn ăn quen
- Group favorites = shared list cho team/company
- Suggest trong nhóm = democratic decision making

**USER ĐƯỢC GÌ:**
- Lưu quán yêu thích để spin riêng
- Chia sẻ quán hay với nhóm
- Nhận XP khi quán được suggest được chọn đi

---

## G8. Bản đồ / Chỉ đường

**TITLE:**
> "Đường đi đến [Tên Quán]"

**WHAT (Mô tả):**
Bản đồ tích hợp (OpenStreetMap). Hiển thị vị trí user + quán. Tùy chỉnh loại bản đồ: Standard, Satellite. Mở Google Maps/Apple Maps để điều hướng. Discovery: pins màu theo rating (xanh 4.5+, vàng 3.5-4.4, đỏ <3.5).

**WHY (Tại sao):**
- Điều hướng = action cuối cùng trước khi đến quán
- In-app map = không cần switch app
- Discovery mode = khám phá quán mới
- Color-coded pins = quick scan khu vực

**USER ĐƯỢC GÌ:**
- Điều hướng dễ dàng đến quán được chọn
- Context về vị trí: cách bao xa, đường đi thế nào
- Discovery: khám phá quán mới trên bản đồ
- Visual rating: màu pin giúp quick scan khu vực

---

## G9. Khế Ước Screen

**TITLE:**
> "Cam kết đi ăn nào!"

**WHAT (Mô tả):**
Hiển thị thông tin quán đã chọn. 3 mức stake: 0đ (Spin thôi), 5,000đ (Cam kết nhẹ), 10,000đ (Tự tin đi). Chọn witness từ bạn bè online. Countdown timer. Nút "TẠO KHẾ ƯỚC".

**WHY (Tại sao):**
- Stake tiền = psychological commitment (loss aversion)
- Witness = social accountability
- Countdown = urgency
- 3 mức = phù hợp với mọi user

**USER ĐƯỢC GÌ:**
- Psychological commitment qua stake
- Social accountability qua witness
- Urgency qua countdown timer
- Flexibility với 3 mức stake

---

## G10. Khế Ước Confirmation

**TITLE:**
> "Khế ước đã tạo!"

**WHAT (Mô tả):**
Hiển thị tất cả details: quán, stake amount, witness, countdown còn lại. Share options: Zalo, Messenger, Copy Link. Quick actions: Chỉ đường, Quay về Home.

**WHY (Tại sao):**
- Confirmation = commitment solidification
- Share = tăng social pressure
- Countdown visible = urgency maintained
- Quick nav = frictionless đến quán

**USER ĐƯỢC GÌ:**
- Confirmation rõ ràng về commitment
- Social pressure qua share
- Easy navigation để đi ngay
- Awareness về witness đang theo dõi

---

## G11. Check-in Verification

**TITLE:**
> "Bạn đã đến nơi rồi!"

**WHAT (Mô tả):**
GPS verification tự động (hiển thị khoảng cách đến quán). Countdown khế ước còn lại. Camera capture để verify thật sự đến quán. GPS + timestamp tự động gắn vào ảnh. Option "Check-in không chụp ảnh" (không nhận Lucky Spin).

**WHY (Tại sao):**
- GPS verify = đảm bảo đi thật (anti-gaming)
- Camera = proof of visit
- Countdown = urgency maintained
- Không chụp = penalty (lose Lucky Spin)

**USER ĐƯỢC GÌ:**
- GPS verify → đảm bảo check-in hợp lệ
- Camera capture → proof of visit
- Urgency → không quên deadline khế ước
- Flexibility với option không chụp

---

## G12. Check-in Complete

**TITLE:**
> "Bạn đã giữ lời hứa!"

**WHAT (Mô tả):**
Celebration với confetti animation. Hiển thị: Khế ước hoàn thành, Stake hoàn, Witness notified. Rewards: Streak +1, Garden +1 seed, XP +150. Prompt tạo Locket. Lucky Spin option. Nút về Home.

**WHY (Tại sao):**
- Celebration = dopamine hit
- Khế ước hoàn = positive reinforcement
- Streak/Garden = progression feedback
- Locket prompt = UGC generation
- Lucky Spin = variable reward

**USER ĐƯỢC GÌ:**
- Celebration → dopamine hit
- Tất cả rewards visible
- Prompt tạo Locket → lưu kỷ niệm
- Lucky Spin → surprise reward

---

## G13. Group Spin - Ai sẽ quay?

**TITLE:**
> "Ai sẽ bấm nút spin?"

**WHAT (Mô tả):**
Mini wheel với avatar các thành viên online. Animation spin để chọn random người quay. Giải thích: "Để công bằng, chọn ngẫu nhiên". Nút "QUAY ĐI!".

**WHY (Tại sao):**
- Random = công bằng cho tất cả
- Ai cũng có cơ hội bấm
- Fun element với wheel animation
- Engagement cho cả nhóm

**USER ĐƯỢC GÌ:**
- Công bằng - ai cũng có cơ hội
- Fun - xem wheel quay
- Engagement - mọi người đều participate
- Excitement chờ kết quả

---

## G14. Group Vote

**TITLE:**
> "Mọi người vote gì?"

**WHAT (Mô tả):**
Kết quả spin hiển thị (quán ăn). Danh sách thành viên với avatar + tên + vote status (Chấp nhận/Quay lại/Chưa vote). Progress bar: "X/Y đã vote. Cần >50%". Countdown timer. Veto tokens indicator. 2 buttons: Chấp nhận, Quay lại. Button "Dùng Veto Token".

**WHY (Tại sao):**
- Democracy = mọi người có voice
- Veto = edge case protection
- Progress = transparency
- Countdown = urgency

**USER ĐƯỢC GÌ:**
- Voice trong quyết định - không ai bị ép
- Transparency - thấy ai vote gì
- Fair outcome - đa số thắng
- Urgency - countdown tạo quyết định nhanh

---

## G15. Season Garden

**TITLE:**
> "Khu vườn của bạn"

**WHAT (Mô tả):**
Visual garden với cây ở các giai đoạn khác nhau (Seed → Sprout → Tree → Flower → Fruit). Progress bar: X/30 seeds. Harvest rewards preview (Voucher, Mystery Box, Gửi hoa). Streak bonus indicator. Tap vào cây xem chi tiết.

**WHY (Tại sao):**
- Delayed gratification = anticipation
- Visual progress = motivation
- Multiple rewards = options
- Streak bonus = compound motivation

**USER ĐƯỢC GÌ:**
- Visual progress → motivation
- Delayed gratification → anticipation
- Goal clarity với harvest rewards
- Bonus motivation từ streak

---

## G16. Streak & Challenge Dashboard

**TITLE:**
> "Thử thách & Thành tích của bạn"

**WHAT (Mô tả):**
Calendar view streak tháng này. Streak rewards milestones (7/14/30/60/100 ngày). Active challenges với progress bars. Leaderboard top 3 tuần này. Phần thưởng cho mỗi challenge.

**WHY (Tại sao):**
- Streak = daily habit loop
- Challenges = goal-oriented motivation
- Leaderboard = FOMO + competition
- Milestones = achievement system

**USER ĐƯỢC GÌ:**
- Clarity về progress
- Motivation qua challenges
- Competition qua leaderboard
- Achievement qua badges/milestones

---

## G17. Lucky Spin Wheel

**TITLE:**
> "Vòng quay may mắn!"

**WHAT (Mô tả):**
Bánh xe với các segment phần thưởng (Món thêm, Nước tặng, Credit 5k, Voucher 10%). Animation physics-based với deceleration curve. Celebration effects khi có kết quả. Voucher của bạn section (nếu đã có).

**WHY (Tại sao):**
- Variable reward = slot machine effect
- Surprise = dopamine hit
- Collectible voucher = ownership
- One more action sau check-in

**USER ĐƯỢC GÌ:**
- Variable reward → slot machine effect
- Surprise → dopamine hit
- Collectible voucher để sử dụng sau
- Excitement chờ kết quả

---

## G18. Anticipation Notifications

**TITLE:**
> "Đói chưa?"

**WHAT (Mô tả):**
3 loại notification:
1. **Reminder**: "11h30 rồi! Đói chưa? Streak 5 ngày"
2. **Preview**: "Preview hôm nay: Bún Bò Bà Luân"
3. **Urgency**: "30 phút nữa hết hạn khế ước!"

**WHY (Tại sao):**
- Trigger anticipation cycle
- Streak reminder = daily habit reinforcement
- Preview = curiosity
- Urgency = action

**USER ĐƯỢC GÌ:**
- Reminder không bỏ lỡ streak
- Preview tạo anticipation
- Urgency khi cần action
- Tiện lợi với deep links

---

### NHÓM L: LOCKET

---

## L19. Locket Feed

**TITLE:**
> "Cộng đồng Food Roulette"

**WHAT (Mô tả):**
Danh sách Locket từ bạn bè và cộng đồng. Tabs: Tất cả / Của tôi / Bạn bè / Khám phá. Mỗi card: avatar + tên, thời gian, ảnh món (4:3), tên quán, rating, ghi chú, likes/comments. Actions: ❤️ Like, 💬 Comment, 🍽️ "Tôi cũng muốn ăn!" (spin quán đó).

**WHY (Tại sao):**
- Social proof = trust
- Discovery = tìm quán mới
- Engagement = likes/comments
- "Tôi cũng muốn ăn!" = virality + UX

**USER ĐƯỢC GÌ:**
- Inspiration - xem món ngon từ bạn bè
- Discovery - tìm quán mới từ cộng đồng
- Trust - ảnh có GPS + timestamp là thật
- Quick action - spin quán ngay

---

## L20. Tạo Locket mới

**TITLE:**
> "Lưu kỷ niệm này!"

**WHAT (Mô tả):**
Preview ảnh từ check-in camera. Tên món (AI auto-suggest). Rating 5 stars. Ghi chú (AI draft). Quán ăn (auto-filled). Visibility: Riêng tư / Bạn bè / Công khai. GPS + timestamp read-only. Nút "ĐĂNG LOCKET".

**WHY (Tại sao):**
- Post-check-in = UGC generation
- AI assistance = friction reduction
- GPS/timestamp = trust
- Visibility = privacy control

**USER ĐƯỢC GÌ:**
- Form đơn giản để ghi nhận kỷ niệm
- AI hỗ trợ tên món và ghi chú
- Privacy control - chọn ai thấy bài của mình
- XP bonus khi đăng Locket

---

## L21. Chi tiết Locket

**TITLE:**
> "[Tên món] tại [Tên quán]"

**WHAT (Mô tả):**
Ảnh lớn full width. Avatar + tên người đăng, thời gian. Tên món, quán, rating, ghi chú. Metadata: GPS (tap xem map), thời gian chụp. Actions: ❤️ Like, 💬 Comment, 🍽️ "Tôi cũng muốn ăn!", 📤 Share. Comments section. Input box bình luận.

**WHY (Tại sao):**
- Deep dive = full context
- Engagement = likes, comments, shares
- "Tôi cũng muốn ăn!" = conversion
- Trust metadata cho verification

**USER ĐƯỢC GÌ:**
- Full detail view của một Locket
- Xem thông tin quán được tag
- Engagement: like, comment, share
- Quick action để spin quán đó

---

### NHÓM P: PROFILE & SYSTEM

---

## P22. Profile cá nhân

**TITLE:**
> "Profile của bạn"

**WHAT (Mô tả):**
Avatar lớn, display_name, username (@handle), bio. Stats: Locket / Check-in / Streak. Taste Profile: radar chart khẩu vị (từ lịch sử ăn uống). Tabs: Locket công khai / Reviews / Garden. Actions: Chỉnh sửa Profile, Chia sẻ Profile, Dashboard, Settings.

**WHY (Tại sao):**
- Identity = who you are in app
- Stats = achievement showcase
- Taste Profile = personalization insight
- Public/private separation

**USER ĐƯỢC GÌ:**
- Xem profile công khai của mình
- Stats tự động cập nhật theo hoạt động
- Taste Profile - biểu đồ khẩu vị cá nhân
- Showcase Locket công khai cho người khác xem

---

## P23. Cài đặt

**TITLE:**
> "Cài đặt"

**WHAT (Mô tả):**
Sections: Account (email, password, phone), Bạn bè & Nhóm, Thông báo (toggles), Quyền riêng tư (location, camera, visibility), Ngôn ngữ & Khu vực, App (dark mode, font size). Bottom: Đăng xuất, Xóa tài khoản.

**WHY (Tại sao):**
- Control center cho app
- Notification management = not spammed
- Privacy controls = data ownership
- Account management = exit option

**USER ĐƯỢC GÌ:**
- Full control các cài đặt trong app
- Notification management - không bị spam
- Privacy controls - kiểm soát thông tin cá nhân
- Account management - logout hoặc delete

---

## Bảng tổng hợp: Mỗi Screen - 4 câu hỏi

| # | Screen | TITLE | WHAT | WHY | USER ĐƯỢC GÌ |
|---|--------|-------|------|-----|--------------|
| A1 | Splash | "Không biết ăn gì?" | Logo + animation | First impression | Hiểu app trong 2s |
| A2 | Đăng nhập | "Chào mừng trở lại!" | Email/Google form | Entry point | 2 cách login nhanh |
| A3 | Đăng ký | "Tạo tài khoản" | Form đăng ký | Create account | Register dễ dàng |
| A4 | Onboarding | "Thiết lập của bạn" | 3 steps setup | Personalization | App personalized |
| G5 | Home Enhanced | "Spin nào!" | Wheel + streak | ONE action | Motivation streak |
| G6 | Kết quả spin | "Ăn ở đây!" | Quán + actions | Payoff spin | Info đầy đủ |
| G7 | Chi tiết quán | "Khám phá quán" | Deep info | Trust signals | Info toàn diện |
| G7.5 | Viết Review | "Đánh giá thế nào?" | Rating + Ảnh + Nội dung | UGC + Trust | Contribute cho cộng đồng |
| G7.6 | Thêm quán mới | "Bạn biết quán nào ngon?" | Form thêm quán | Crowdsourcing | Database mở rộng |
| G7.7 | Lưu quán | "Quán của bạn" | Personal + Group list | Favorites management | Quick access + Nhóm |
| G8 | Bản đồ | "Đường đi" | Map + navigation | Action final | Điều hướng dễ |
| G9 | Khế Ước | "Cam kết đi ăn!" | Stake + witness | Commitment | Psychological pressure |
| G10 | Confirmation | "Khế ước đã tạo!" | Details + share | Solidify | Social pressure |
| G11 | Check-in Verify | "Bạn đã đến nơi!" | GPS + camera | Proof of visit | Verify hợp lệ |
| G12 | Check-in Complete | "Bạn đã giữ lời!" | Celebration | Dopamine hit | Rewards + XP |
| G13 | Ai sẽ quay? | "Ai bấm nút?" | Random wheel | Fairness | Công bằng |
| G14 | Group Vote | "Vote gì?" | Members + veto | Democracy | Voice trong quyết định |
| G15 | Season Garden | "Khu vườn" | Visual garden | Delayed reward | Anticipation |
| G16 | Streak Dashboard | "Thành tích" | Calendar + leaderboard | Motivation | Competition |
| G17 | Lucky Spin | "Vòng quay!" | Reward wheel | Variable reward | Dopamine hit |
| G18 | Notifications | "Đói chưa?" | Reminders | Anticipation | Daily habit |
| L19 | Locket Feed | "Cộng đồng" | Social feed | Discovery | Social proof |
| L20 | Tạo Locket | "Lưu kỷ niệm" | Post form | UGC generation | Memory capture |
| L21 | Locket Detail | "Chi tiết" | Full view | Engagement | Trust metadata |
| P22 | Profile | "Profile của bạn" | Stats + taste | Identity | Achievement showcase |
| P23 | Cài đặt | "Cài đặt" | All settings | Control | Full control |

---

### G7.5 Chi tiết: Viết Review

```
Check-in Complete
      │
      ▼
┌─────────────────────────────────────────────────────────────────┐
│              VIẾT REVIEW [Tên Quán]                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ─── Đánh giá của bạn ───                                      │
│                                                                 │
│  ⭐⭐⭐⭐⭐                                                       │
│  [Tap để đánh giá]                                             │
│                                                                 │
│  ─── Ảnh (tối đa 5) ───                                       │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────────┐                          │
│  │ 📷  │ │ 📷  │ │ 📷  │ │ + Thêm  │                          │
│  └─────┘ └─────┘ └─────┘ └─────────┘                          │
│  Ảnh từ Locket (3)    Gallery                                  │
│                                                                 │
│  ─── Tiêu đề ───                                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 🍜 Món Bún Bò Huế ở đây ngon tuyệt! (AI draft)       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ─── Bình luận ───                                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Quán này nằm gần trường ĐH, đi bộ 5 phút là tới.     │   │
│  │ Bún bò huế ở đây nước dùng đậm đà, thịt mềm...      │   │
│  │ Giá hơi cao chút nhưng worth để thử. (AI suggest)     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ─── Tags ───                                                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │#vị_ngon│ │#giá_ok│ │#view │ │#gần_trường│ │#đông│    │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘              │
│                                                                 │
│  ─── Đã ăn ───                                                 │
│  🍜 Bún Bò Huế (auto-filled từ Locket)                        │
│                                                                 │
│  [ĐĂNG REVIEW]                                                 │
│  +25 XP khi đăng review                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────────────────────────────────────┐
│              REVIEW ĐÃ ĐĂNG!                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ✅ Review của bạn đã được đăng                               │
│  +25 XP                                                        │
│  ──── Phần thưởng Review ────                                 │
│  Viết 5 review trong tháng → Nhận badge "Food Critic"         │
│                                                                 │
│  [XEM REVIEW]    [VỀ TRANG QUÁN]    [VỀ HOME]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Review Flow Integration

```
Spin Result
    │
    ├────────────────────┐
    ▼                    ▼
Đi ăn              Không đi
    │                    │
    ▼                    ▼
Check-in           (End flow)
    │
    ├────────────────────┐
    ▼                    ▼
Tạo Locket          Skip
    │                    │
    ▼                    ▼
Viết Review          (End flow)
    │
    ▼
Check-in Complete
    │
    ▼
Về Home
```

---

### Rewards cho Review

| Hành động | XP | Badge |
|-----------|-----|-------|
| Viết review đầu tiên | +25 XP | "First Review" |
| Review có ảnh | +15 XP bonus | - |
| Review được 10 likes | +50 XP | "Rising Star" |
| Review được 50 likes | +200 XP | "Food Critic" |
| Viết 5 review/tháng | - | Monthly Contributor |
| Viết 50 review tổng | - | "Veteran Reviewer" |

---

### Trust Signals trong Review

```
┌─────────────────────────────────────────────────────────────────┐
│                    REVIEW CARD                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  @username · 2 ngày trước                                       │
│  ⭐⭐⭐⭐⭐                                                       │
│                                                                 │
│  🍜 Bún Bò Huế                                                 │
│  "Quán này nằm gần trường..."                                 │
│                                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐                                       │
│  │ IMG │ │ IMG │ │ IMG │                                       │
│  └─────┘ └─────┘ └─────┘                                       │
│                                                                 │
│  ─── Metadata (Trust) ───                                       │
│  📍 123 Nguyễn Trãi, Q.5                                       │
│  📅 Check-in: T6, 15/07/2026                                   │
│  🍽 Ăn tại đây: 3 lần                                         │
│                                                                 │
│  ❤️ 42 · 💬 8 replies                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

*M document Version: 2.0 - Gamified Edition (Added Review Screen)*
*Last Updated: July 28, 2026*
