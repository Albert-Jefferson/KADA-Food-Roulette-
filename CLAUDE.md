# CLAUDE.md

> **Đọc file này trước khi làm bất kỳ việc gì trong repo.**
> Đây là **entry point** cho AI (Claude, Cursor, v.v.) — mô tả dự án, kiến trúc, và nơi tìm chi tiết.

## 1. Dự án là gì

**Food Roulette** — mobile app (React Native + Expo, iOS + Android) giúp người dùng Việt Nam **chọn quán ăn ngẫu nhiên xung quanh vị trí hiện tại** bằng cách quay một bánh xe.

Tagline: *"Không biết ăn gì? Để vòng quyết định."*

### USP (điểm khác biệt so với Foody/ShopeeFood)
- **Spin cho nhóm** (tối đa 20 người, vote chấp nhận / quay lại).
- **Locket camera-only** — chỉ chụp từ camera trong app, có GPS + timestamp + device_hash.
- **2 tên hiển thị** — `display_name_private` (trong nhóm bạn) và `display_name_public` (trên profile công khai).
- **Bản đồ quán riêng** — seed Google Places + user-submitted + Steward duyệt.
- **Review thật** — cam kết "review từ người dùng thật, không phải quảng cáo".

## 2. Trạng thái hiện tại

- **Giai đoạn:** pre-implementation (chưa viết code).
- **Branch:** `main`, sạch.
- **Ngôn ngữ UI:** tiếng Việt.
- **Ngôn ngữ code:** TypeScript.

## 3. Cấu trúc repo

```
.
├── CLAUDE.md               ← File này (entry point cho AI)
├── AGENTS.md               ← Vai trò & ràng buộc của AI
├── README.md               ← Mô tả dự án cho người (con người)
├── brand/                  ← Brand & design (đã có)
│   ├── brand.md            ← Brand Kit đầy đủ
│   ├── prompts.md          ← Single-source-of-truth dạng prompt cho AI
│   └── FOOD-ROULETTE-SITEMAP.md  ← Sitemap & đặc tả thiết kế
├── content/
│   ├── source/             ← Nguyên liệu gốc (3 file .docx)
│   ├── explore/            ← Note/thử nghiệm phái sinh từ source
│   └── README.md           ← Cách dùng content/
├── app/                    ← Source code (sẽ là Expo + Expo Router)
│   └── README.md           ← Cấu trúc dự kiến
├── Content/                ← (legacy) Nơi chứa file .docx gốc ban đầu
├── ContentViral/           ← (placeholder) content viral
├── Videos/                 ← (placeholder) video demo
└── Food Roulette-web/      ← (placeholder) thư mục web placeholder
```

## 4. Nơi đọc chi tiết (theo độ ưu tiên)

Khi muốn hiểu sâu hơn, đọc theo thứ tự:

| # | File | Khi nào đọc |
|---|------|-------------|
| 1 | `brand/prompts.md` | Copy/paste vào AI bất kỳ để có context đầy đủ |
| 2 | `brand/brand.md` | Cần biết màu, font, tone, messaging |
| 3 | `brand/FOOD-ROULETTE-SITEMAP.md` | Cần biết cấu trúc trang, tính năng, data model |
| 4 | `content/source/*.docx` | Cần chi tiết marketing/pricing/solution |
| 5 | `app/README.md` | Cần biết stack & cấu trúc source code dự kiến |
| 6 | `AGENTS.md` | Cần biết AI được phép/không được phép làm gì |

**Quy tắc ưu tiên khi mâu thuẫn:**
```
brand/prompts.md  >  brand/brand.md  >  brand/FOOD-ROULETTE-SITEMAP.md  >  content/source/*.docx
```

## 5. Stack công nghệ (đã chốt)

| Layer | Lựa chọn |
|-------|----------|
| App | Expo SDK 52 + Expo Router + TypeScript (EAS Build) |
| UI | NativeWind (Tailwind cho RN) + tokens Earthy từ `brand/brand.md` |
| Animation | Reanimated 3 + Moti (spin wheel) |
| State | Zustand + TanStack Query |
| Map | react-native-maps + OpenStreetMap tiles |
| Backend | Supabase (Postgres + Auth + Storage + Realtime) |
| DB extension | PostGIS (query bán kính) |
| Camera | expo-image-picker (`cameraOnly: true`) |
| GPS | expo-location |
| Push | Expo Push Notifications |
| Deploy | EAS Build + Supabase Cloud |
| CI/CD | EAS Submit + GitHub Actions |

## 6. Phạm vi v1.0 (MVP)

✅ Auth (email + Google) · Onboarding · **Spin cá nhân** · **Group spin (max 20, mutual opt-in, vote)** · **Locket camera-only** · Locket feed · Profile công khai · **Thêm quán user-submitted** (chờ steward duyệt) · **Steward dashboard** · Google Places lookup/seed.

❌ Để **v1.2**: AI moderation text, AI gợi ý khẩu vị. Để **v2.0**: gamification/streak, chat, AI Food Advisor.

## 7. Ràng buộc cốt lõi (đọc trước khi code)

1. `Group.member_ids.length <= 20` (enforced DB + app).
2. `Locket.image_url` chỉ nhận từ endpoint upload của app — backend từ chối nếu thiếu `device_hash` hoặc `captured_at` lệch server time > 60s.
3. `Locket.visibility='public'` hiển thị trên profile công khai, **không** lộ `display_name_private`.
4. `Restaurant.source='user_submitted'` chỉ xuất hiện trong roulette sau khi `status='approved'`.
5. `Friendship` mutual: cả 2 bên `accepted` mới là bạn.
6. `User.public_id` immutable sau khi tạo (dùng để share profile an toàn).
7. Camera permission phải được xin trước khi mở capture screen.
8. EXIF gốc của ảnh bị strip trước khi lưu.
9. Design language: **Earthy / nâu-vàng, warm-light-first** — KHÔNG dùng dark mode làm default, KHÔNG dùng cam đỏ.

Chi tiết hơn → `brand/FOOD-ROULETTE-SITEMAP.md` §19.

## 8. Quy ước khi viết code

- **Ngôn ngữ:** TypeScript, strict mode.
- **Style:** ESLint + Prettier (Expo defaults + Airbnb-ish).
- **Commit:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`...).
- **Branch:** `feature/<slug>` cho mỗi feature, PR vào `main`.
- **Folder trong app:** dùng Expo Router (file-based routing, `app/`).
- **Tailwind tokens:** map 1-1 với `brand/brand.md` — đặt trong `app/tailwind.config.js`.

## 9. Cách dùng file này

1. **Bắt đầu chat mới với AI?** Copy nội dung file này + `brand/prompts.md` (hoặc copy nguyên §0 của `prompts.md`) là đủ.
2. **AI đang đọc nhầm spec?** Trỏ AI về `brand/prompts.md` và `brand/FOOD-ROULETTE-SITEMAP.md` §19.
3. **Cập nhật spec?** Sửa `brand/prompts.md` trước (single-source-of-truth), rồi sửa các file liên quan.

## 10. Dataset Reference

### googleplaystore_cleaned.csv

**Source:** `i:\My Drive\Bài Tập\AI-FullStack\Module 4\Dataset\googleplaystore_cleaned.csv`

**Mô tả:** Dữ liệu ứng dụng Google Play Store đã chuẩn hóa (~8,892 dòng)

| # | Tên cột | Kiểu | Mô tả |
|---|---------|------|--------|
| 1 | `App` | str | Tên ứng dụng |
| 2 | `Category` | str | Danh mục (ART_AND_DESIGN, FAMILY, GAME...) |
| 3 | `Rating` | float64 | Đánh giá (0-5) |
| 4 | `Reviews` | int64 | Số lượt đánh giá |
| 5 | `Size` | str | Kích thước gốc (có M, k, Varies...) |
| 6 | `Type` | str | Free / Paid |
| 7 | `Price` | str | Giá gốc (có $, 0 cho miễn phí) |
| 8 | `Content Rating` | str | Phân loại nội dung (Everyone, Teen...) |
| 9 | `Genres` | str | Thể loại (có ; cho multi-category) |
| 10 | `Last Updated` | str | Ngày cập nhật gốc (dạng text) |
| 11 | `Current Ver` | str | Phiên bản hiện tại |
| 12 | `Android Ver` | str | Phiên bản Android tối thiểu |
| 13 | `Size_MB` | float64 | **Cột mới** - Kích thước đã chuẩn hóa (MB) |
| 14 | `Installs_Num` | int64 | **Cột mới** - Số lượt cài đặt (đã bỏ +, ,) |
| 15 | `Price_Num` | float64 | **Cột mới** - Giá đã chuẩn hóa (USD, đã bỏ $) |
| 16 | `Last_Updated_Date` | datetime64 | **Cột mới** - Ngày cập nhật (datetime) |
| 17 | `Main_Genre` | str | **Cột mới** - Thể loại chính (lấy phần trước `;`) |

**Các cột mới được tạo trong quá trình chuẩn hóa:** `Size_MB`, `Installs_Num`, `Price_Num`, `Last_Updated_Date`, `Main_Genre`

**Các bước chuẩn hóa đã thực hiện:**
- Xóa 483 dòng trùng
- Xóa dòng Reviews không phải số
- Xóa dòng Rating ngoài [0, 5]
- Xóa cột `Installs` gốc (đã thay bằng `Installs_Num`)
- Điền Rating NaN bằng trung bình theo Category

---

*Phiên bản: 1.1 · Cập nhật: 2026-07-29 · Pre-implementation*