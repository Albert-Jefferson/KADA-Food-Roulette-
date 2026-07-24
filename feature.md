# 🍜 Food Roulette — Feature Doc

> **Tham chiếu brand**: [brand.md](./brand.md)
> Tone: Rõ ràng · Vui vẻ · Tin cậy · Nhanh · Gần gũi

---

## Mục lục

1. [Roulette thông minh](#1--roulette-thông-minh)
2. [Food Taste Board](#2--food-taste-board)
3. [Review thật](#3--review-thật)
4. [Khám phá xung quanh](#4--khám-phá-xung-quanh)
5. [Hồ sơ ẩm thực cá nhân](#5--hồ-sơ-ẩm-thực-cá-nhân)

---

## 1. 🎰 Roulette thông minh

| Mục | Chi tiết |
|-----|----------|
| **Tên** | Roulette thông minh |
| **Vấn đề nó giải** | Người dùng mất trung bình 20–30 phút mỗi bữa để quyết định ăn gì — scroll menu, hỏi bạn bè, rồi vẫn không chọn được. |
| **Cách hoạt động** | Người dùng nhấn **Spin**. Bánh xe quay với animation mượt (easing deceleration) rồi dừng lại ở một món ăn / nhà hàng. Trước khi spin, có thể tùy chỉnh bộ lọc: loại món (Việt, Nhật, Hàn…), khoảng cách (1–10 km), mức giá ($ → $$$$), chế độ ăn (chay, halal…). Nếu không thích kết quả — spin lại ngay. |
| **Lợi ích đo được** | Giảm thời gian quyết định từ ~25 phút xuống **≤ 3 giây** mỗi bữa. Trung bình tiết kiệm **~12 giờ/tháng** cho người dùng thường xuyên. |

---

## 2. 🔒 Food Taste Board

| Mục | Chi tiết |
|-----|----------|
| **Tên** | Food Taste Board |
| **Vấn đề nó giải** | Thấy món ngon muốn chia sẻ nhưng không có nơi lưu trữ tập trung. Gửi ảnh qua chat thì trôi mất, lưu bookmark thì lộn xộn. |
| **Cách hoạt động** | Người dùng tạo **Taste Board** — một bộ sưu tập trực quan gồm ảnh, ghi chú, rating cho từng món. Có thể giữ riêng hoặc chia sẻ cho bạn bè. Bạn bè nhận được có thể nhấn **"Tôi cũng muốn ăn!"** để lưu vào board của mình. Hỗ trợ QR Code để chia sẻ offline. |
| **Lợi ích đo được** | Tăng tỷ lệ chia sẻ social lên **3×** so với gửi ảnh qua chat thông thường. Mỗi board được chia sẻ trung bình tạo ra **2.4 người dùng mới** (viral loop). |

---

## 3. ⭐ Review thật

| Mục | Chi tiết |
|-----|----------|
| **Tên** | Review thật |
| **Vấn đề nó giải** | Review trên các nền tảng hiện tại thường bị nghi ngờ là quảng cáo trá hình hoặc đánh giá giả. Người dùng mất niềm tin, không biết tin ai. |
| **Cách hoạt động** | Chỉ người dùng thật mới viết được review. Hệ thống đánh giá chi tiết: rating tổng + rating từng tiêu chí (vị, phục vụ, không gian, giá). Đính kèm tối đa 5 ảnh + 5 tags. Review được sắp xếp theo bộ lọc: gần tôi, xu hướng, mới nhất, người tôi theo dõi. Tích lũy review → nhận badges & followers. |
| **Lợi ích đo được** | Tỷ lệ tin tưởng review đạt **> 85%** (so với ~40% trên các nền tảng có quảng cáo). Người dùng đọc review có tỷ lệ chuyển đổi (ghé nhà hàng) cao hơn **2.1×**. |

---

## 4. 📍 Khám phá xung quanh

| Mục | Chi tiết |
|-----|----------|
| **Tên** | Khám phá xung quanh |
| **Vấn đề nó giải** | Luôn ăn những chỗ quen, không biết xung quanh mình có nhà hàng / quán ăn nào hay. Bỏ lỡ những món ngon ngay gần nhà. |
| **Cách hoạt động** | Dựa trên vị trí thực, hiển thị nhà hàng và quán ăn lân cận kèm rating cộng đồng, khoảng cách, mức giá. Kết hợp dữ liệu từ review và Taste Board của những người dùng gần đó để đưa ra gợi ý phù hợp nhất. |
| **Lợi ích đo được** | Tăng **discovery rate** (tỷ lệ thử nhà hàng mới) lên **40%** trong tháng đầu sử dụng. Người dùng trung bình khám phá **3 quán mới/tháng**. |

---

## 5. 👤 Hồ sơ ẩm thực cá nhân

| Mục | Chi tiết |
|-----|----------|
| **Tên** | Hồ sơ ẩm thực cá nhân (Taste Profile) |
| **Vấn đề nó giải** | Không có nơi nào thể hiện "gu ăn uống" của mình một cách trực quan. Mỗi lần đi ăn cùng người mới lại phải giải thích sở thích từ đầu. |
| **Cách hoạt động** | Hệ thống tự động xây dựng biểu đồ Taste Profile dựa trên lịch sử spin, review, và Taste Board. Hiển thị trên trang cá nhân kèm stats (số lần spin, số review, số board), thành tích (badges), và hoạt động gần đây. Có thể chia sẻ profile để người khác hiểu "gu" của bạn. |
| **Lợi ích đo được** | Tăng thời gian ở lại ứng dụng **+35%** nhờ gamification. Tỷ lệ giữ chân người dùng sau 30 ngày (D30 retention) tăng **+20%**. |

---

*Tham chiếu: [brand.md](./brand.md) · Phiên bản: 1.0 · Cập nhật: 2026-07-24*
