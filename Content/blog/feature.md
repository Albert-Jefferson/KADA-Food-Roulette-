# Food Roulette — Feature Document

> **Tham chiếu Brand:** brand.md
> **Tone:** Rõ ràng · Vui vẻ · Tin cậy · Nhanh · Gần gũi
> **Phiên bản:** 1.0 · Cập nhật: 2026-07-24

---

# Mục lục

1. [Roulette thông minh](#1-roulette-thông-minh)
2. [Food Taste Board](#2-food-taste-board)
3. [Review thật](#3-review-thật)
4. [Khám phá xung quanh](#4-khám-phá-xung-quanh)
5. [Hồ sơ ẩm thực cá nhân](#5-hồ-sơ-ẩm-thực-cá-nhân)

---

# 1. Roulette thông minh

## Tên

**Roulette thông minh** — Smart Food Decision Engine

## Vấn đề nó giải

Người dùng mất trung bình **20–30 phút mỗi bữa** để quyết định ăn gì:

- Scroll menu nhà hàng
- Hỏi ý kiến bạn bè/đồng nghiệp
- Đắn đo giữa các lựa chọn
- Kết quả: vẫn không chọn được, quay về quán cũ quen thuộc

**Thống kê:**

- 67% người dùng smartphone mất >15 phút để quyết định bữa ăn
- 8/10 cặp đôi xung đột vì không thống nhất được chỗ ăn
- Nhân viên văn phòng mất trung bình **2.5 giờ/tuần** chỉ để chọn địa điểm ăn

## Cách hoạt động

### Luồng chính

1. **Mở ứng dụng** → Nhấn nút **"SPIN"** lớn ở giữa màn hình
2. **Tùy chọn:** Điều chỉnh bộ lọc trước khi spin:

   - **Loại món:** Việt Nam, Nhật Bản, Hàn Quốc, Thái Lan, Ý, Ấn Độ...
   - **Khoảng cách:** Slider 1–10 km
   - **Mức giá:** $ (dưới 50K), $$ (50-150K), $$$ (150-300K), $$$$ (trên 300K)
   - **Chế độ ăn:** Chay, Vegan, Halal, Keto, Gluten-free

3. **Bánh xe quay** với animation 3D xoay vòng (easing deceleration)
4. **Kết quả hiện ra:** Thông tin nhà hàng, hình ảnh, rating, khoảng cách
5. **Hành động:**

   - "Spin lại" nếu không thích
   - "Xem chi tiết" để đọc review
   - "Lưu vào Taste Board"
   - "Chia sẻ" cho bạn bè

### Bộ lọc nâng cao (Pro)

- Rating tối thiểu (4 sao trở lên)
- Thời gian mở cửa (đang mở/đóng)
- Tiêu chí đặc biệt: "Có chỗ ngồi ngoài trời", "Phù hợp nhóm đông", "Yên tĩnh"

## Lợi ích đo được

| Metric | Giá trị |
|--------|---------|
| Thời gian quyết định | Giảm từ ~25 phút xuống **≤ 3 giây** |
| Tiết kiệm thời gian/tháng | **~12 giờ** (người dùng thường xuyên) |
| Tỷ lệ spin → ghé thăm | **35%** |
| Số lần spin trung bình/session | **2.3 lần** |
| Discovery rate (quán mới) | **40%** trong tháng đầu |

---

# 2. Food Taste Board

## Tên

**Food Taste Board** — Nền tảng chia sẻ ẩm thực cá nhân

## Vấn đề nó giải

Khi thấy món ngon, người dùng muốn:

- Lưu lại để lần sau đi lại
- Chia sẻ cho bạn bè/người thân
- Xây dựng bộ sưu tập món yêu thích

**Nhưng không có công cụ phù hợp:**

- Gửi ảnh qua Zalo/chat → trôi mất sau vài ngày
- Bookmark Google Maps → không có review, không có hình ảnh đẹp
- Viết note trong Notes app → không chia sẻ được, không có context

## Cách hoạt động

### Tạo Taste Board

1. **Nhấn "+"** → Đặt tên board (VD: "Quán ngon Sài Gòn", "Bữa trưa team")
2. **Thêm món:**

   - Tìm kiếm nhà hàng hoặc thêm thủ công
   - Upload ảnh món ăn
   - Viết ghi chú, đánh giá (1-5 sao)
   - Thêm tags: "bún", "quán xá", "ăn vặt"

3. **Tùy chỉnh:**

   - **Công khai:** Ai cũng xem được
   - **Riêng tư:** Chỉ mình xem
   - **Chia sẻ:** Chỉ người được mời xem

### Chia sẻ & Tương tác

| Hành động | Mô tả |
|-----------|--------|
| **"Tôi cũng muốn ăn!"** | Bạn bè nhấn nút này → Món được lưu vào board của họ |
| **QR Code** | Quét → Mở board ngay, không cần đăng nhập |
| **Link chia sẻ** | Gửi qua Zalo, Messenger, SMS |
| **Nhúng web** | Copy embed code cho blog/website |

### Mẫu Taste Board phổ biến

- "Quán ngon quanh công ty" — cho dân văn phòng
- "Ăn vặt dưới 30K" — cho sinh viên
- "Cuối tuần gia đình" — cho gia đình có con nhỏ
- "Review từ food blogger" — cho người yêu ẩm thực

## Lợi ích đo được

| Metric | Giá trị |
|--------|---------|
| Tỷ lệ chia sẻ social | **3×** so với gửi ảnh chat thông thường |
| Người dùng mới từ chia sẻ | **2.4 người/board** (viral loop) |
| Số món trung bình/board | **8.5 món** |
| Tỷ lệ engagement (helpfulness) | **68%** |

---

# 3. Review thật

## Tên

**Review thật** — Community-Verified Food Reviews

## Vấn đề nó giải

**Vấn đề về trust:**

- Review trên các nền tảng hiện tại (Google, Facebook) thường bị nghi ngờ là quảng cáo trá hình
- Ảnh review thường là ảnh "lọt thỏm" trong điện thoại, không đại diện
- Không biết review là của ai, có thật hay không

**Hệ quả:**

- Người dùng mất niềm tin vào review online
- Tỷ lệ quyết định dựa trên review giảm
- Bỏ lỡ nhà hàng tốt vì không dám tin review

## Cách hoạt động

### Viết Review

1. **Tìm nhà hàng** → Nhấn "Viết Review"
2. **Đánh giá tổng:** 1-5 sao
3. **Đánh giá chi tiết:**

   - Vị (độ ngon của đồ ăn)
   - Phục vụ (thái độ, tốc độ)
   - Không gian (nội thất, view, độ yên tĩnh)
   - Giá (so với chất lượng)

4. **Viết nội dung:** Cảm nhận thật, chia sẻ trải nghiệm
5. **Upload ảnh:** Tối đa 5 ảnh thật
6. **Thêm tags:** Tối đa 5 tags (VD: "sạch sẽ", "nhân viên thân thiện", "ô tô đậu được")

### Xem & Lọc Review

| Bộ lọc | Mô tả |
|--------|--------|
| **Gần tôi** | Review từ người dùng trong bán kính 5 km |
| **Xu hướng** | Review được nhiều người đọc nhất tuần này |
| **Mới nhất** | Review vừa được đăng |
| **Theo dõi** | Review từ người tôi follow |

### Hệ thống Trust

- **Avatar + Username** thật của người viết
- **Stats profile:** Số review đã viết, số người useful
- **Badge verified** cho người dùng đã xác minh số điện thoại
- **Report system** để đánh dấu review giả

## Lợi ích đo được

| Metric | Giá trị |
|--------|---------|
| Tỷ lệ tin tưởng review | **> 85%** (so với ~40% trên nền tảng có quảng cáo) |
| Tỷ lệ chuyển đổi (đọc review → ghé nhà hàng) | **2.1×** cao hơn không đọc |
| Số review/tháng (user Pro) | Trung bình **4.2 review** |
| Tỷ lệ review có ảnh | **73%** |

---

# 4. Khám phá xung quanh

## Tên

**Khám phá xung quanh** — Nearby Discovery Engine

## Vấn đề nó giải

- **Luôn ăn quán cũ:** Không biết xung quanh mình có quán nào ngon
- **Bỏ lỡ quán ẩn:** Những quán ngon thường nằm trong hẻm, không quảng cáo
- **Review không đáng tin:** Review từ người xa không phù hợp với khu vực mình

## Cách hoạt động

### Bản đồ tương tác

1. **Mở tab "Khám phá"** → Bản đồ hiển thị nhà hàng lân cận
2. **Pin màu theo rating:**

   - 🟢 Xanh: 4.5+ sao
   - 🟡 Vàng: 3.5-4.4 sao
   - 🔴 Đỏ: Dưới 3.5 sao

3. **Tap vào pin** → Xem preview: tên, rating, khoảng cách, giá
4. **Filter bổ sung:**

   - Loại món
   - Mở cửa ngay bây giờ
   - Đang có khuyến mãi

### Gợi ý thông minh

- **Dựa trên vị trí:** Ưu tiên quán gần nhất
- **Dựa trên Taste Board:** Gợi ý quán có món giống board của bạn
- **Dựa trên xu hướng:** Quán đang được nhiều người review gần đây
- **Dựa trên thời gian:** Sáng/Trưa/Chiều/Tối → gợi ý phù hợp bữa ăn

## Lợi ích đo được

| Metric | Giá trị |
|--------|---------|
| Discovery rate (thử quán mới) | **40%** trong tháng đầu |
| Quán mới được khám phá/tháng | Trung bình **3 quán** |
| Khoảng cách trung bình đến quán mới | **1.8 km** |
| Tỷ lệ ghé thăm từ gợi ý | **28%** |

---

# 5. Hồ sơ ẩm thực cá nhân

## Tên

**Hồ sơ ẩm thực cá nhân** — Personal Taste Profile

## Vấn đề nó giải

- **Không có nơi thể hiện "gu ăn uống":** Mỗi lần đi ăn cùng người mới phải giải thích từ đầu
- **Không biết mình đã ăn gì:** Review cũ trôi mất, không theo dõi được
- **Thiếu gamification:** Ứng dụng ăn uống hiện tại không có yếu tố vui chơi

## Cách hoạt động

### Taste Profile tự động

Hệ thống tự động xây dựng biểu đồ dựa trên:

- **Lịch sử Spin:** Loại món nào hay xuất hiện
- **Review đã viết:** Rating cho từng loại món
- **Taste Board:** Những món đã lưu

### Hiển thị Profile

| Thành phần | Mô tả |
|-----------|--------|
| **Avatar & Username** | Thông tin cơ bản |
| **Stats** | Tổng spin, review, Taste Board, quán đã thử |
| **Taste Radar** | Biểu đồ radar thể hiện sở thích (Việt, Nhật, Hàn...) |
| **Achievements** | Badges: "Khám phá 10 quán mới", "Review 50 bài"... |
| **Hoạt động gần đây** | Timeline các review, spin, board mới |

### Achievements & Badges

| Badge | Cách đạt được |
|-------|---------------|
| 🏃 Spinner | Spin 100 lần |
| 📝 Reviewer | Viết 10 review |
| 🔒 Board Master | Tạo 5 Taste Board |
| 🗺️ Explorer | Thử 10 quán mới |
| ⭐ Helpful | 50 người đánh dấu review hữu ích |
| 🔥 Streak | Đăng nhập 7 ngày liên tiếp |

## Lợi ích đo được

| Metric | Giá trị |
|--------|---------|
| Thời gian ở lại ứng dụng | **+35%** so với không có gamification |
| D30 Retention (giữ chân sau 30 ngày) | **+20%** |
| Tỷ lệ mở app hàng ngày (DAU/MAU) | **38%** |
| Số badges trung bình/user (Pro) | **4.2 badges** |

---

# Tổng kết Feature Matrix

| Tính năng | Free | Pro | Business |
|-----------|:----:|:---:|:--------:|
| Roulette thông minh | 5 lần/ngày | ∞ | ∞ |
| Food Taste Board | 1 board | ∞ | ∞ |
| Review thật | 3/tháng | ∞ | ∞ |
| Khám phá xung quanh | 3 km | 20 km | 20 km |
| Hồ sơ ẩm thực | Cơ bản | Đầy đủ | Đầy đủ |
| Quảng cáo | Có | Không | Không |
| Analytics Dashboard | — | — | ✓ |
| Ưu tiên trên Roulette | — | — | ✓ |
| Chạy khuyến mãi | — | — | ✓ |

---

*Tham chiếu: brand.md · Phiên bản: 1.0 · Cập nhật: 2026-07-24*
