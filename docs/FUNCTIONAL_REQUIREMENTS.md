# BẢNG YÊU CẦU CHỨC NĂNG NGHIỆP VỤ

## FOOD ROULETTE

> **Version:** 1.0 · **Date:** 2026-08-07  
> **Dựa trên mẫu:** PTITHCM Activity Manager Application

---

## MỤC LỤC

1. [Khảo sát hiện trạng](#i-khảo-sát-hiện-trạng)
2. [Yêu cầu chức năng nghiệp vụ](#ii-yêu-cầu-chức-năng-nghiệp-vụ)
   - [2.1 Sinh viên (USER)](#21-sinh-viên-user-mã-số-user)
   - [2.2 Spin (SPIN)](#22-spin-spin-mã-số-spin)
   - [2.3 Locket (LOCKET)](#23-locket-locket-mã-số-locket)
   - [2.4 Review + Discover (REVIEW)](#24-review--discover-review-mã-số-review)
   - [2.5 Profile + B2B (PROFILE)](#25-profile--b2b-profile-mã-số-profile)
3. [Yêu cầu chức năng hệ thống](#iii-yêu-cầu-chức-năng-hệ-thống)
4. [Yêu cầu về chất lượng](#iv-yêu-cầu-về-chất-lượng)

---

## I. KHẢO SÁT HIỆN TRẠNG

### 1. Giới thiệu

**Food Roulette** — mobile app giúp người dùng Việt Nam **chọn quán ăn ngẫu nhiên xung quanh vị trí hiện tại** bằng cách quay một bánh xe.

Tagline: *"Không biết ăn gì? Để vòng quyết định."*

### 2. Quy mô

- Hệ thống phục vụ người dùng di động (iOS + Android)
- Người dùng tham gia spin cá nhân hoặc group spin
- Quán ăn được seed từ Google Places + user-submitted
- Steward duyệt quán user-submitted
- Restaurant Partner đăng ký quán trực tiếp

### 3. Cơ cấu người dùng

| Nhóm | Mã | Vai trò |
|------|-----|---------|
| Người dùng thường | USER | Tham gia spin, chụp locket, viết review |
| Nhóm (Group) | GROUP | Spin cùng bạn bè (max 20 người) |
| Steward | STEWARD | Duyệt quán user-submitted |
| Restaurant Partner | PARTNER | Đăng ký quán ăn |
| Quản trị hệ thống | ADMIN | Quản lý tài khoản, cấu hình |

### 4. Các tính năng chính

| # | Tính năng | Mô tả |
|---|------------|-------|
| 1 | Auth + Onboarding | Đăng ký, đăng nhập, setup preferences |
| 2 | Personal Spin | Quay bánh xe chọn quán ngẫu nhiên |
| 3 | Group Spin | Quay bánh xe cùng bạn bè (max 20), vote accept/respin |
| 4 | Locket | Chụp ảnh camera-only, GPS, visibility |
| 5 | Review + Discover | Đánh giá quán, bản đồ, thêm quán mới |
| 6 | Profile + B2B | Public/private profile, partner registration |

---

## II. YÊU CẦU CHỨC NĂNG NGHIỆP VỤ

---

### 2.1 Sinh viên (USER) — Mã số: USER

**Vai trò:** Người dùng ứng dụng Food Roulette

#### Bảng yêu cầu chức năng nghiệp vụ - USER

| STT | Công việc | Loại công việc | Quy định/Công thức liên quan | Biểu mẫu liên quan | Ghi chú |
|-----|-----------|----------------|-------------------------------|--------------------|---------|
| 1 | Đăng ký tài khoản mới | Lưu trữ | USER_QĐ_1 | USER_BM_1 | Email + Password hoặc Google OAuth |
| 2 | Đăng nhập | Lưu trữ | USER_QĐ_2 | — | Xác thực JWT token |
| 3 | Đăng nhập Google OAuth | Lưu trữ | USER_QĐ_2 | — | Chuyển hướng Google |
| 4 | Quên mật khẩu | Lưu trữ | USER_QĐ_3 | — | Gửi email reset |
| 5 | Đăng xuất | Lưu trữ | — | — | Xóa local token |
| 6 | Xin quyền GPS | Lưu trữ | USER_QĐ_4 | — | Bắt buộc trước khi spin |
| 7 | Xin quyền Camera | Lưu trữ | USER_QĐ_5 | — | Bắt buộc trước khi chụp locket |
| 8 | Chọn cuisine preferences | Lưu trữ | — | — | Onboarding step |
| 9 | Chọn dietary preferences | Lưu trữ | — | — | Onboarding step |
| 10 | Đặt display_name_private | Lưu trữ | USER_QĐ_6 | — | Chỉ hiển thị trong nhóm bạn |
| 11 | Đặt display_name_public | Lưu trữ | USER_QĐ_6 | — | Hiển thị trên profile công khai |
| 12 | Xem trang cá nhân (profile) | Tra cứu | — | — | Hiển thị thông tin user |
| 13 | Chỉnh sửa profile | Lưu trữ | USER_QĐ_7 | — | Avatar, bio, preferences |
| 14 | Xem lịch sử spin của mình | Tra cứu | — | — | Có bộ lọc theo ngày/tháng |
| 15 | Xem lịch sử locket của mình | Tra cứu | — | — | Có bộ lọc visibility |
| 16 | Nhận thông báo | Tra cứu | — | — | Pop-up hoặc badge |
| 17 | Gửi yêu cầu kết bạn | Lưu trữ | USER_QĐ_8 | — | Mutual opt-in |
| 18 | Chấp nhận/từ chối yêu cầu kết bạn | Lưu trữ | USER_QĐ_8 | — | Mutual mới là bạn |
| 19 | Xóa bạn bè | Lưu trữ | — | — | Không cần duyệt |
| 20 | Xem danh sách bạn bè | Tra cứu | — | — | Phân biệt display_name_private |
| 21 | Bật/tắt notification | Lưu trữ | — | — | Cài đặt cá nhân |

---

#### Bảng Quy định/Công thức liên quan - USER

| STT | Mã số | Tên Quy định/Công thức | Mô tả chi tiết | Ghi chú |
|-----|-------|------------------------|----------------|---------|
| 1 | USER_QĐ_1 | Quy định đăng ký hợp lệ | 1. Email hợp lệ và chưa tồn tại<br>2. Password >= 8 ký tự, có chữ hoa, số<br>3. Username (public_id) chưa tồn tại, không trùng, không chứa ký tự đặc biệt | Nếu vi phạm: Ném lỗi tương ứng lên UI |
| 2 | USER_QĐ_2 | Quy định đăng nhập | 1. Tài khoản tồn tại và active<br>2. Password đúng hoặc Google OAuth verified<br>3. Trả về JWT token với expiry | Token lưu trong local storage |
| 3 | USER_QĐ_3 | Quy định quên mật khẩu | 1. Email tồn tại trong hệ thống<br>2. Gửi email reset link (expire 1h)<br>3. User đặt lại password mới | Reset token là single-use |
| 4 | USER_QĐ_4 | Quy định quyền GPS | 1. User phải cấp quyền GPS trước khi spin<br>2. GPS phải enable trên thiết bị<br>3. Lấy tọa độ hiện tại (accuracy <= 100m) | Không spin được nếu không có GPS |
| 5 | USER_QĐ_5 | Quy định quyền Camera | 1. User phải cấp quyền Camera trước khi chụp locket<br>2. Chỉ chụp từ camera trong app<br>3. Strip EXIF metadata gốc | Từ chối upload nếu thiếu device_hash |
| 6 | USER_QĐ_6 | Quy định display_name | 1. display_name_private: 2-50 ký tự, unique trong danh sách bạn<br>2. display_name_public: 2-30 ký tự, unique toàn hệ thống, immutable sau khi tạo | Dùng làm public_id share profile |
| 7 | USER_QĐ_7 | Quy định chỉnh sửa profile | 1. Avatar <= 5MB, định dạng jpg/png<br>2. Bio <= 500 ký tự<br>3. Không thay đổi public_id sau khi tạo |  |
| 8 | USER_QĐ_8 | Quy định kết bạn | 1. Gửi yêu cầu: User A chưa gửi, chưa là bạn<br>2. Chấp nhận: User B đã nhận yêu cầu từ A<br>3. Mutual: Cả 2 bên accepted mới là bạn<br>4. Mỗi user tối đa 500 bạn | Friendship status: pending/accepted/blocked |

---

#### Biểu mẫu liên quan - USER

**USER_BM_1: PHIẾU ĐĂNG KÝ TÀI KHOẢN**

```
Họ và tên: .................................................
Email: .....................................................
Mật khẩu: .................................................
Xác nhận mật khẩu: ........................................
Username (để chia sẻ profile): ............................

☐ Tôi đồng ý với Điều khoản sử dụng
☐ Tôi đồng ý với Chính sách bảo mật

[Đăng ký]                          [Đăng nhập Google]
```

**Ghi chú:**
- Dữ liệu hệ thống tự động trích xuất (Read-only):
  - Email: validation format email
  - Username: kiểm tra trùng, tự động thêm suffix nếu trùng
- Mật khẩu: hash trước khi lưu (bcrypt)

---

### 2.2 Spin (SPIN) — Mã số: SPIN

**Vai trò:** Quay bánh xe chọn quán ăn ngẫu nhiên (cá nhân hoặc nhóm)

#### Bảng yêu cầu chức năng nghiệp vụ - SPIN

| STT | Công việc | Loại công việc | Quy định/Công thức liên quan | Biểu mẫu liên quan | Ghi chú |
|-----|-----------|----------------|-------------------------------|--------------------|---------|
| 1 | Xem màn hình Spin | Tra cứu | — | — | Giao diện bánh xe |
| 2 | Cài đặt bộ lọc (cuisine, distance, price) | Lưu trữ | SPIN_QĐ_1 | — | Filter preferences |
| 3 | Quay bánh xe (Personal Spin) | Tính toán | SPIN_QĐ_2, SPIN_QĐ_3 | — | Random kết quả |
| 4 | Xem kết quả spin | Tra cứu | — | — | Restaurant card |
| 5 | Điều hướng đến quán (Google Maps) | Kết xuất | — | — | Deep link |
| 6 | Gọi điện cho quán | Kết xuất | — | — | Click-to-call |
| 7 | Xem chi tiết quán | Tra cứu | — | — | Địa chỉ, giờ mở cửa, menu |
| 8 | Quay lại (Respin) | Lưu trữ | SPIN_QĐ_4 | — | Giới hạn 3 lần/session |
| 9 | Tạo Group Spin | Lưu trữ | SPIN_QĐ_5 | SPIN_BM_1 | Tối đa 20 thành viên |
| 10 | Mời bạn bè vào Group | Lưu trữ | SPIN_QĐ_6 | — | Mutual opt-in required |
| 11 | Tham gia Group Spin | Lưu trữ | SPIN_QĐ_7 | — | Qua invite link/code |
| 12 | Xem realtime kết quả Group Spin | Tra cứu | — | — | WebSocket realtime |
| 13 | Vote Accept kết quả Group | Lưu trữ | SPIN_QĐ_8 | — | Mỗi người 1 vote |
| 14 | Vote Respin kết quả Group | Lưu trữ | SPIN_QĐ_8 | — | Majority quyết định |
| 15 | Xem lịch sử vote của Group | Tra cứu | — | — | Audit trail |
| 16 | Rời khỏi Group | Lưu trữ | — | — | Không can thiệp khi đang spin |
| 17 | Kết thúc Group Spin | Lưu trữ | SPIN_QĐ_9 | — | Chỉ host được kết thúc |

---

#### Bảng Quy định/Công thức liên quan - SPIN

| STT | Mã số | Tên Quy định/Công thức | Mô tả chi tiết | Ghi chú |
|-----|-------|------------------------|----------------|---------|
| 1 | SPIN_QĐ_1 | Quy định bộ lọc Spin | 1. Distance: 0.5km - 10km (mặc định 3km)<br>2. Cuisine: multi-select từ preferences<br>3. Price: $, $$, $$$, $$$$ hoặc any<br>4. Open now: boolean filter | Filter được lưu user preference |
| 2 | SPIN_QĐ_2 | Quy định random kết quả | 1. Lấy danh sách quán trong bán kính<br>2. Filter theo preferences<br>3. Weighted random (higher rating = higher weight)<br>4. Đảm bảo không trùng kết quả gần nhất | Thuật toán: weighted random sampling |
| 3 | SPIN_QĐ_3 | Quy định Restaurant hợp lệ để spin | 1. Restaurant.status = 'approved'<br>2. Restaurant.source IN ('google_places', 'user_submitted', 'partner')<br>3. Distance <= filter distance<br>4. Open now (nếu filter bật) | User-submitted chỉ spin được khi approved |
| 4 | SPIN_QĐ_4 | Quy định Respin | 1. Tối đa 3 respin/session<br>2. Mỗi respin có cooldown 10s<br>3. Kết quả respin không trùng respin trước<br>4. Log mỗi lần respin | Session reset khi thoát app |
| 5 | SPIN_QĐ_5 | Quy định Group Spin | 1. Group.member_ids.length <= 20<br>2. Group có 1 host (creator)<br>3. Group có unique invite_code<br>4. Group có expiry (30 phút không spin) | Enforced cả DB + app |
| 6 | SPIN_QĐ_6 | Quy định mời vào Group | 1. Inviter phải là thành viên Group<br>2. Invitee phải là bạn của inviter (mutual accepted)<br>3. Invitee chưa trong Group<br>4. Invitee chưa bị banned khỏi Group | Mutual friendship required |
| 7 | SPIN_QĐ_7 | Quy định tham gia Group | 1. Invite code còn hiệu lực (chưa expired)<br>2. User không trong Group khác đang active<br>3. Group chưa đạt max 20 members | Reject nếu vi phạm điều kiện |
| 8 | SPIN_QĐ_8 | Quy định Vote Group Spin | 1. Mỗi thành viên có 1 vote<br>2. Vote options: Accept, Respin<br>3. Majority (>50%) quyết định<br>4. Tie: automatic respin<br>5. Timeout 60s không vote = Accept | Realtime update qua WebSocket |
| 9 | SPIN_QĐ_9 | Quy định kết thúc Group Spin | 1. Chỉ host được kết thúc<br>2. Kết thúc khi: đã Accept, timeout 5 phút, manual<br>3. Khi kết thúc: notify all members, archive Group | Group sau kết thúc không thể join lại |

---

#### Biểu mẫu liên quan - SPIN

**SPIN_BM_1: TẠO NHÓM SPIN**

```
Tên nhóm (tùy chọn): .................................................

Số lượng thành viên tối đa: ☐ 5  ☐ 10  ☐ 20

Cài đặt bộ lọc:
- Khoảng cách: [____] km (0.5 - 10)
- Ẩm thực: [multi-select chips]
- Mức giá: ☐$  ☐$$  ☐$$$  ☐$$$$  ☐ Any
- ☐ Chỉ quán đang mở cửa

[Tạo nhóm]                          [Hủy]
```

**SPIN_BM_2: KẾT QUẢ GROUP VOTE**

```
Nhóm: .................................................
Quán được chọn: .................................................
Địa chỉ: .................................................

Phiếu bầu:
┌──────────────────┬─────────┐
│ Tên thành viên   │ Vote    │
├──────────────────┼─────────┤
│ User A           │ Accept  │
│ User B           │ Respin  │
│ User C           │ Accept  │
└──────────────────┴─────────┘

Kết quả: ☐ Chấp nhận  ☐ Quay lại

[Chip kết quả]    [Điều hướng]    [Chia sẻ nhóm]
```

---

### 2.3 Locket (LOCKET) — Mã số: LOCKET

**Vai trò:** Chụp và chia sẻ ảnh kỷ niệm khi đến quán ăn

#### Bảng yêu cầu chức năng nghiệp vụ - LOCKET

| STT | Công việc | Loại công việc | Quy định/Công thức liên quan | Biểu mẫu liên quan | Ghi chú |
|-----|-----------|----------------|-------------------------------|--------------------|---------|
| 1 | Mở camera chụp Locket | Tra cứu | LOCKET_QĐ_1 | — | Chỉ camera trong app |
| 2 | Chụp ảnh Locket | Lưu trữ | LOCKET_QĐ_2, LOCKET_QĐ_3 | — | Auto-strip EXIF |
| 3 | Thêm note vào Locket | Lưu trữ | LOCKET_QĐ_4 | — | Tối đa 500 ký tự |
| 4 | Thêm rating (1-5 sao) | Lưu trữ | — | — | Tùy chọn |
| 5 | Gắn tag quán ăn | Lưu trữ | LOCKET_QĐ_5 | — | Từ kết quả spin hoặc search |
| 6 | Đặt visibility | Lưu trữ | LOCKET_QĐ_6 | — | public/friends/private |
| 7 | Upload Locket | Lưu trữ | LOCKET_QĐ_7 | — | Auto GPS tag |
| 8 | Xem Locket Feed | Tra cứu | — | — | Infinite scroll |
| 9 | Like Locket | Lưu trữ | — | — | Heart reaction |
| 10 | Comment Locket | Lưu trữ | — | — | Không quá 200 ký tự |
| 11 | Xóa Locket của mình | Lưu trữ | — | — | Soft delete |
| 12 | Report Locket vi phạm | Lưu trữ | — | — | Spam/inappropriate/location |
| 13 | Xóa comment trên Locket | Lưu trữ | — | — | Chỉ owner Locket hoặc comment |
| 14 | Ẩn Locket khỏi feed | Lưu trữ | — | — | Không xóa, chỉ ẩn |

---

#### Bảng Quy định/Công thức liên quan - LOCKET

| STT | Mã số | Tên Quy định/Công thức | Mô tả chi tiết | Ghi chú |
|-----|-------|------------------------|----------------|---------|
| 1 | LOCKET_QĐ_1 | Quy định Camera Locket | 1. Chỉ chụp từ camera trong app<br>2. Không cho phép chọn ảnh từ gallery<br>3. Camera phải enable trước<br>4. Flash: auto/on/off | Camera-only enforced by API |
| 2 | LOCKET_QĐ_2 | Quy định upload Locket | 1. Ảnh <= 10MB, định dạng jpg/png<br>2. Strip EXIF metadata gốc<br>3. Thêm device_hash vào metadata<br>4. Thêm captured_at timestamp<br>5. Từ chối nếu thiếu device_hash hoặc captured_at lệch server > 60s | Security: prevent fake photos |
| 3 | LOCKET_QĐ_3 | Quy định GPS khi upload | 1. GPS phải enable và accuracy <= 100m<br>2. Tự động gắn GPS coordinates<br>3. GPS không bắt buộc nhưng khuyến khích | Recommend nhưng không force |
| 4 | LOCKET_QĐ_4 | Quy định Locket note | 1. Tối đa 500 ký tự<br>2. Không chứa link external<br>3. Auto-censor từ khóa vi phạm | Pre-moderation optional |
| 5 | LOCKET_QĐ_5 | Quy định gắn tag quán | 1. Quán phải tồn tại và approved<br>2. User có thể search quán<br>3. Hoặc auto-fill từ kết quả spin gần nhất | Không bắt buộc gắn quán |
| 6 | LOCKET_QĐ_6 | Quy định Visibility | 1. `public`: hiển thị trên profile công khai, KHÔNG lộ display_name_private<br>2. `friends`: chỉ bạn bè (mutual accepted) thấy<br>3. `private`: chỉ mình thấy<br>4. Owner luôn thấy Locket của mình | Enforced query filter |
| 7 | LOCKET_QĐ_7 | Quy định upload validation | 1. User đã đăng nhập và token valid<br>2. Image từ camera trong app (validated by device_hash)<br>3. captured_at không lệch server time > 60s<br>4. Nếu vi phạm: return 403 + reject | Backend validation required |

---

#### Biểu mẫu liên quan - LOCKET

**LOCKET_BM_1: TẠO LOCKET**

```
┌─────────────────────────────────────┐
│                                     │
│         [Camera Preview]            │
│                                     │
│                                     │
│    [Flip]    [Capture]    [Flash]   │
└─────────────────────────────────────┘

Quán ăn (tùy chọn): [Search hoặc chọn từ spin gần nhất]

Note (tùy chọn, tối đa 500 ký tự):
┌─────────────────────────────────────┐
│                                     │
└─────────────────────────────────────┘

Đánh giá: ★ ★ ★ ★ ★ (tùy chọn)

Visibility: ○ Public  ○ Bạn bè  ○ Riêng tư

[Đăng]                    [Hủy]
```

---

### 2.4 Review + Discover (REVIEW) — Mã số: REVIEW

**Vai trò:** Đánh giá quán ăn, khám phá quán mới, thêm quán mới

#### Bảng yêu cầu chức năng nghiệp vụ - REVIEW

| STT | Công việc | Loại công việc | Quy định/Công thức liên quan | Biểu mẫu liên quan | Ghi chú |
|-----|-----------|----------------|-------------------------------|--------------------|---------|
| 1 | Xem danh sách quán đã review | Tra cứu | — | — | Phân trang |
| 2 | Viết review cho quán | Lưu trữ | REVIEW_QĐ_1 | REVIEW_BM_1 | Rating + text |
| 3 | Upload ảnh trong review | Lưu trữ | REVIEW_QĐ_2 | — | Tối đa 5 ảnh |
| 4 | Chỉnh sửa review | Lưu trữ | REVIEW_QĐ_3 | — | Chỉ owner |
| 5 | Xóa review | Lưu trữ | — | — | Soft delete |
| 6 | Xem chi tiết quán | Tra cứu | — | — | Thông tin đầy đủ |
| 7 | Xem bản đồ quán xung quanh | Tra cứu | — | — | OpenStreetMap/Google Maps |
| 8 | Search quán theo tên | Tra cứu | — | — | Full-text search |
| 9 | Filter quán theo loại/khoảng cách | Tra cứu | — | — | Multi-filter |
| 10 | Đề xuất thêm quán mới | Lưu trữ | REVIEW_QĐ_4 | REVIEW_BM_2 | User-submitted |
| 11 | Upload ảnh quán mới | Lưu trữ | REVIEW_QĐ_2 | — | Tối đa 3 ảnh |
| 12 | Steward duyệt quán user-submitted | Lưu trữ | REVIEW_QĐ_5 | — | Chỉ Steward |
| 13 | Steward từ chối quán | Lưu trữ | REVIEW_QĐ_6 | — | Kèm lý do |
| 14 | Xem dashboard Steward | Tra cứu | — | — | Pending queue |
| 15 | Xem thống kê review của mình | Tổng hợp | — | — | Tổng số, trung bình |

---

#### Bảng Quy định/Công thức liên quan - REVIEW

| STT | Mã số | Tên Quy định/Công thức | Mô tả chi tiết | Ghi chú |
|-----|-------|------------------------|----------------|---------|
| 1 | REVIEW_QĐ_1 | Quy định viết Review | 1. User phải đăng nhập<br>2. Rating 1-5 sao (bắt buộc)<br>3. Text review tối đa 2000 ký tự<br>4. Mỗi user 1 review/quán (update nếu đã có)<br>5. Review không chứa link external<br>6. Auto-censor từ khóa vi phạm | Commitment: "review từ người dùng thật" |
| 2 | REVIEW_QĐ_2 | Quy định upload ảnh Review | 1. Mỗi ảnh <= 5MB<br>2. Định dạng jpg/png<br>3. Strip EXIF metadata<br>4. Tối đa 5 ảnh/review<br>5. Tối đa 3 ảnh/đề xuất quán mới | Compress before upload recommended |
| 3 | REVIEW_QĐ_3 | Quy định chỉnh sửa Review | 1. Chỉ owner mới được sửa<br>2. Sửa trong vòng 30 ngày kể từ ngày tạo<br>3. Sửa không thay đổi timestamp gốc<br>4. Log lịch sử chỉnh sửa | Audit trail |
| 4 | REVIEW_QĐ_4 | Quy định đề xuất quán mới | 1. User đăng nhập<br>2. Thông tin bắt buộc: Tên, Địa chỉ, Latitude, Longitude<br>3. Thông tin tùy chọn: Phone, Hours, Website, Photos<br>4. Trạng thái ban đầu: pending<br>5. Review đầu tiên sẽ auto-approve | Commitment: steward review |
| 5 | REVIEW_QĐ_5 | Quy định Steward duyệt quán | 1. Chỉ Steward hoặc Admin được duyệt<br>2. Duyệt: status = 'approved', quán xuất hiện trong roulette<br>3. Gửi notification cho user đề xuất<br>4. Nếu có review đầu tiên: auto-approve | Priority: first-come-first-served |
| 6 | REVIEW_QĐ_6 | Quy định Steward từ chối quán | 1. Phải kèm lý do từ chối<br>2. Gửi notification cho user đề xuất<br>3. User có thể chỉnh sửa và resubmit<br>4. Tối đa 3 lần resubmit | Prevent spam submissions |

---

#### Biểu mẫu liên quan - REVIEW

**REVIEW_BM_1: VIẾT REVIEW**

```
Quán ăn: .................................................

Đánh giá của bạn: ★ ★ ★ ★ ★

Viết review của bạn (tối đa 2000 ký tự):
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

Ảnh (tối đa 5 ảnh):
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│ +  │ │     │ │     │ │     │ │     │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘

[Đăng Review]                      [Hủy]
```

**REVIEW_BM_2: ĐỀ XUẤT QUÁN MỚI**

```
Tên quán *: .................................................
Địa chỉ *: .................................................

Vị trí trên bản đồ:
┌─────────────────────────────────────────────────────┐
│                   [Map Picker]                      │
│                                                     │
└─────────────────────────────────────────────────────┘

Số điện thoại: .................................................
Giờ mở cửa: .................................................
Website: .................................................

Loại ẩm thực: [Multi-select chips]

Ảnh quán (tối đa 3 ảnh):
┌─────┐ ┌─────┐ ┌─────┐
│ +  │ │     │ │     │
└─────┘ └─────┘ └─────┘

[Đề xuất]                          [Hủy]
```

---

### 2.5 Profile + B2B (PROFILE) — Mã số: PROFILE

**Vai trò:** Quản lý profile công khai, đăng ký Restaurant Partner

#### Bảng yêu cầu chức năng nghiệp vụ - PROFILE

| STT | Công việc | Loại công việc | Quy định/Công thức liên quan | Biểu mẫu liên quan | Ghi chú |
|-----|-----------|----------------|-------------------------------|--------------------|---------|
| 1 | Xem public profile (/u/:public_id) | Tra cứu | PROFILE_QĐ_1 | — | Không cần đăng nhập |
| 2 | Xem private profile (của mình) | Tra cứu | — | — | Cần đăng nhập |
| 3 | Chỉnh sửa thông tin cá nhân | Lưu trữ | PROFILE_QĐ_2 | — | Avatar, bio, preferences |
| 4 | Quản lý friends list | Tra cứu, Lưu trữ | — | — | Xem, xóa, block |
| 5 | Xem Locket công khai của user | Tra cứu | PROFILE_QĐ_3 | — | Chỉ visibility=public |
| 6 | Xem Review công khai của user | Tra cứu | PROFILE_QĐ_3 | — | Review hiển thị trên profile |
| 7 | Đăng ký Restaurant Partner | Lưu trữ | PROFILE_QĐ_4 | PROFILE_BM_1 | B2B flow |
| 8 | Quản lý thông tin quán (Partner) | Lưu trữ | PROFILE_QĐ_5 | — | Update thông tin quán |
| 9 | Xem analytics quán (Partner) | Tổng hợp | — | — | Views, check-ins, reviews |
| 10 | Xem dashboard Partner | Tra cứu | — | — | Tổng quan tài khoản |
| 11 | Thêm menu quán (Partner) | Lưu trữ | — | — | Upload/paste menu |
| 12 | Cập nhật giờ mở cửa (Partner) | Lưu trữ | — | — | Real-time update |
| 13 | Xem lịch sử giao dịch (Partner) | Tra cứu | — | — | Billing history |
| 14 | Admin quản lý tài khoản Partner | Lưu trữ | PROFILE_QĐ_6 | — | Approve/suspend |
| 15 | Admin xem dashboard tổng | Tra cứu | — | — | Toàn hệ thống |

---

#### Bảng Quy định/Công thức liên quan - PROFILE

| STT | Mã số | Tên Quy định/Công thức | Mô tả chi tiết | Ghi chú |
|-----|-------|------------------------|----------------|---------|
| 1 | PROFILE_QĐ_1 | Quy định Public Profile | 1. URL: /u/:public_id (immutable)<br>2. Hiển thị: display_name_public, avatar, bio_public<br>3. Hiển thị: Locket visibility=public (KHÔNG lộ display_name_private)<br>4. Hiển thị: Reviews (không ẩn)<br>5. Không hiển thị: email, phone, friends list, private settings | Privacy-first design |
| 2 | PROFILE_QĐ_2 | Quy định chỉnh sửa Profile | 1. Avatar <= 5MB, jpg/png<br>2. Bio <= 500 ký tự<br>3. display_name_private: 2-50 ký tự<br>4. display_name_public: 2-30 ký tự, unique, immutable sau tạo<br>5. Preferences: cuisine, dietary multi-select | Save as draft hoặc publish |
| 3 | PROFILE_QĐ_3 | Quy định hiển thị trên Profile | 1. Chỉ hiển thị content có visibility=public<br>2. Locket: strip EXIF, show location name thay vì GPS<br>3. Reviews: show star rating + truncated text<br>4. Không hiển thị: friends count, pending requests, private notes | Privacy enforced |
| 4 | PROFILE_QĐ_4 | Quy định đăng ký Partner | 1. Thông tin bắt buộc: Tên quán, Địa chỉ, GPS, Phone, Email, Loại ẩm thực<br>2. Thông tin tùy chọn: Website, Photos, Menu<br>3. Upload giấy phép kinh doanh (nếu require)<br>4. Trạng thái: pending → approved/suspended<br>5. Phí đăng ký (nếu có) | B2B onboarding flow |
| 5 | PROFILE_QĐ_5 | Quy định Partner quản lý quán | 1. Partner chỉ quản lý quán đã được approve<br>2. Thay đổi thông tin cần re-verify nếu thay đổi địa chỉ<br>3. Partner có thể tạm đóng quán (không hiển thị trong spin)<br>4. Partner không thể xóa quán (soft delete) | Prevent data loss |
| 6 | PROFILE_QĐ_6 | Quy định Admin quản lý Partner | 1. Admin approve/suspend Partner account<br>2. Suspended Partner không thể đăng nhập<br>3. Suspended quán không hiển thị trong spin<br>4. Gửi notification khi status thay đổi | Audit trail required |

---

#### Biểu mẫu liên quan - PROFILE

**PROFILE_BM_1: ĐĂNG KÝ RESTAURANT PARTNER**

```
═══════════════════════════════════════════
        ĐĂNG KÝ QUÁN ĂN CỦA BẠN
═══════════════════════════════════════════

THÔNG TIN QUÁN
───────────────────────────────────────────
Tên quán *: .................................................
Địa chỉ *: .................................................
Số điện thoại *: .................................................
Email *: .................................................

Vị trí (GPS):
┌─────────────────────────────────────────────────────┐
│                   [Map Picker]                      │
│                                                     │
│   Latitude: [........]  Longitude: [........]        │
└─────────────────────────────────────────────────────┘

Loại ẩm thực: [Multi-select chips]

THÔNG TIN BỔ SUNG
───────────────────────────────────────────
Website: .................................................
Giờ mở cửa: .................................................

Ảnh quán (tối đa 5 ảnh):
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│ +  │ │     │ │     │ │     │ │     │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘

TẢI LÊN GIẤY TỜ (nếu cần)
───────────────────────────────────────────
Giấy phép kinh doanh: [Chọn file]

THÔNG TIN ĐẠI DIỆN
───────────────────────────────────────────
Người đại diện: .................................................
Chức vụ: .................................................

[Đăng ký]                              [Hủy]

───────────────────────────────────────────
Sau khi đăng ký, bạn sẽ nhận được email xác nhận 
trong vòng 24 giờ làm việc.
═══════════════════════════════════════════
```

---

## III. YÊU CẦU CHỨC NĂNG HỆ THỐNG

| STT | Nội dung | Mô tả chi tiết | Ghi chú |
|-----|----------|----------------|---------|
| 1 | Phân quyền sử dụng | - **USER**: Spin, Locket, Review, Profile<br>- **STEWARD**: Duyệt quán user-submitted<br>- **PARTNER**: Quản lý thông tin quán, xem analytics<br>- **ADMIN**: Quản lý tài khoản, cấu hình hệ thống | Role-based access control |
| 2 | Xác thực và bảo mật | - JWT token authentication<br>- Password hash với bcrypt<br>- OAuth Google sign-in<br>- Token expiry và refresh mechanism | Security-first |
| 3 | Thông báo realtime | - Push notification cho iOS/Android<br>- In-app notification<br>- WebSocket cho Group Spin realtime | Firebase Cloud Messaging |
| 4 | Upload & Storage | - Image upload với validation<br>- Strip EXIF metadata<br>- Device hash verification<br>- CDN for image delivery | Supabase Storage |
| 5 | Location Services | - GPS coordinates extraction<br>- Distance calculation<br>- Map integration (OpenStreetMap) | expo-location |
| 6 | Camera-only enforcement | - Chỉ nhận ảnh từ camera trong app<br>- Validate captured_at timestamp<br>- Validate device_hash | Security: prevent fake photos |
| 7 | Soft delete | - Không xóa vĩnh viễn dữ liệu<br>- Archive thay vì delete<br>- Restore capability | Data retention policy |
| 8 | Rate limiting | - Giới hạn request/period<br>- Prevent spam submissions<br>- API throttling | Security |
| 9 | Caching | - Cache restaurant data<br>- Cache user preferences<br>- Invalidate on update | TanStack Query |

---

## IV. YÊU CẦU VỀ CHẤT LƯỢNG

| STT | Nội dung | Tiêu chuẩn | Mô tả chi tiết | Ghi chú |
|-----|----------|------------|----------------|---------|
| 1 | Hiệu suất Spin | **Hiệu quả** | Spin response < 2 giây (từ lúc nhấn đến kết quả)<br>Animation 60fps | Performance critical |
| 2 | Realtime Group Spin | **Hiệu quả** | Vote sync < 500ms<br>WebSocket latency < 1s | Realtime requirement |
| 3 | Camera capture | **Tiện dụng** | Shutter lag < 200ms<br>Preview smooth 30fps | UX requirement |
| 4 | Tương thích đa nền tảng | **Tương thích** | iOS 14+, Android 8+ (API 26+)<br>React Native latest stable | Mobile-first |
| 5 | Offline support | **Tiện dụng** | Cache last spin results<br>Queue Locket upload khi offline | PWA optional |
| 6 | Bảo mật | **An toàn** | - Strip EXIF tất cả ảnh upload<br>- Validate device_hash<br>- Prevent GPS spoofing<br>- Rate limiting | Security-first |
| 7 | Privacy | **Tiến hóa** | - Visibility settings per Locket<br>- display_name_private vs public separation<br>- No doxxing possible | Privacy by design |
| 8 | Accessibility | **Tiện dụng** | - Screen reader support<br>- VoiceOver/TalkBack compatible<br>- Dynamic text sizing | WCAG 2.1 AA |
| 9 | Scalability | **Tiến hóa** | - Support 10K+ concurrent users<br>- Horizontal scaling ready<br>- Database sharding plan | Future-ready |
| 10 | Data integrity | **An toàn** | - Soft delete everywhere<br>- Audit trail for sensitive operations<br>- Backup/restore capability | Data safety |

---

## PHỤ LỤC

### A. Mã lỗi thường gặp

| Mã | Mô tả | Giải thích |
|----|-------|------------|
| AUTH_001 | Invalid credentials | Email/password không đúng |
| AUTH_002 | Token expired | JWT token hết hạn |
| AUTH_003 | Google OAuth failed | Xác thực Google thất bại |
| SPIN_001 | No restaurant in range | Không có quán nào trong bán kính |
| SPIN_002 | Respin limit exceeded | Đã vượt quá giới hạn respin |
| LOCKET_001 | Camera permission denied | Chưa cấp quyền camera |
| LOCKET_002 | Invalid image source | Ảnh không từ camera trong app |
| LOCKET_003 | GPS permission denied | Chưa cấp quyền GPS |
| REVIEW_001 | Restaurant not found | Quán không tồn tại |
| REVIEW_002 | Duplicate review | Đã viết review cho quán này |
| GROUP_001 | Group full | Đã đạt max 20 thành viên |
| GROUP_002 | Not group host | Chỉ host mới được thực hiện |
| GROUP_003 | Invite code expired | Mã mời đã hết hạn |

### B. State Diagrams

#### User Authentication States
```
[Guest] --login--> [Authenticated] --logout--> [Guest]
    |                      |
    +--register--------->[Pending Verification]--verify--> [Authenticated]
```

#### Restaurant Status States
```
[Pending] --approve--> [Approved] --suspend--> [Suspended]
    |                      |                        |
    +--reject--------->[Rejected] <--resubmit----+
```

#### Group Spin States
```
[Created] --join--> [Waiting] --spin--> [Spinning]
    |                                    |
    +--timeout------------------------> [Expired]
    
[Spinning] --majority--> [Result] --accept--> [Completed]
    |                    |                            |
    +--respin----------->+--timeout----------------->+
```

---

*Document Version: 1.0*  
*Created: 2026-08-07*  
*Author: Food Roulette Team*
