# SESSION CONTEXT & PROJECT HANDOVER DOCUMENT

> **Dự án:** Food Roulette — Quản lý vòng quay ẩm thực & gợi ý cá nhân hóa AI
> **Cập nhật lần cuối:** 2026-08-08 (Session Current)
> **Mục đích:** File này lưu trữ toàn bộ trạng thái dự án, cấu trúc module, spec và công việc đang làm dở để agent ở session mới có thể nắm bắt ngay mà không cần đọc lại từ đầu.

---

## 1. Tổng quan Dự án (Project Summary)

- **Ứng dụng:** Food Roulette (Mobile/Web + Backend API).
- **Mục tiêu:** Giải quyết "nghịch lý lựa chọn" khi đi ăn (cá nhân & nhóm) bằng vòng quay roulette 3D ngẫu nhiên, Locket camera-only, Review cộng đồng, và AI gợi ý cá nhân hóa món ăn.
- **Role hiện tại:** **Trường** (Backend Lead - Auth & Onboarding, API, Database, AI Features Pipeline).

---

## 2. Tech Stack & Architecture

- **Frontend (Web/Mobile):** React / React Native + Expo + NativeWind + TypeScript.
- **Backend API:** Node.js + Express.js + TypeScript (tại `backend/`).
- **Database / ORM:** MySQL 8.0+ / Prisma ORM v5.22.0 (`backend/prisma/schema.prisma`).
- **Authentication:** JWT (Bearer token) + Passwords Hash (bcrypt).
- **OCR Engine (Local):** `tesseract.js` (nhận dạng tiếng Việt/Anh `vie+eng`).
- **Upload Middleware:** `multer` (lưu local `backend/uploads/`).

---

## 3. Cấu trúc Module Backend (`backend/src/modules/`)

| Module | Chức năng chính | Trạng thái |
|--------|-----------------|------------|
| `auth` | Register, Login, OAuth, Auth Middleware, **Onboarding Setup**, **Forgot/Reset Password** | ✅ Done (v1.1) |
| `restaurants` | Quản lý nhà hàng, tìm kiếm geo, danh mục | ✅ Done (v1.0) |
| `roulette` | Personal spin, Spin history, Weighted random | ✅ Done (v1.0) |
| `groups` | Tạo nhóm (max 20 member), Group spin, Voting | ✅ Done (v1.0) |
| `lockets` | Camera-only capture, strip EXIF, Feed | ✅ Done (v1.0) |
| `steward` | Steward dashboard duyệt quán user-submitted | ✅ Done (v1.0) |
| `menu` | **[Phase 4]** Chụp menu (multer) → Tesseract OCR → Parse item → Verify menu | ✅ Done (v1.1) |
| `preferences` | **[Phase 4]** AI user taste profile (cuisineScores, price, spice, dietary) | ✅ Done (v1.1) |
| `circle` | **[Phase 4]** Match algorithm cho group spin & gợi ý theo member | ✅ Done (v1.1) |

---

## 4. Shared Services (`backend/src/shared/services/`)

- `ocr.service.ts`: Wrapper `Tesseract.recognize(path, 'vie+eng')`.
- `menuParser.service.ts`: Tách dòng, lọc header, parse giá (45k, 45.000đ), suy luận category & tags.
- `preferenceLearner.service.ts`: Real-time score updater (SPIN_ACCEPTED, SPIN_REROLL, LOCKET_RATED, REVIEW_WRITTEN).

---

## 5. Data Model Snapshot (19 Entities trong `schema.prisma`)

- **Core (v1.0):** `User`, `Friendship`, `Restaurant`, `RestaurantHours`, `RestaurantPhoto`, `Group`, `GroupMember`, `SpinSession`, `SpinSessionCandidate`, `Vote`, `SpinWallet`, `SpinLog`, `SpinPack`, `Locket`, `CheckIn`.
- **Phase 4 (v1.1):**
  - `Menu`: `id`, `restaurantId`, `imageUrl`, `extractedText`, `confidence`, `capturedBy`, `capturedAt`, `status` (`PENDING`/`VERIFIED`/`REJECTED`).
  - `MenuItem`: `id`, `menuId`, `name`, `priceVND`, `category`, `tags` (Json), `sortOrder`.
  - `UserPreference`: `id`, `userId` (1:1), `cuisineScores` (Json), `priceRange` (1-4), `dietaryRestrictions` (Json), `spiceTolerance`, `dislikedIngredients` (Json).
  - `CircleRecommendation`: `id`, `groupId`, `spinSessionId`, `menuId`, `memberScores` (Json).

---

## 6. Trạng thái Hoàn thành (Completed Checklist)

- [x] Thêm 4 Prisma models (`Menu`, `MenuItem`, `UserPreference`, `CircleRecommendation`) & update relations trong `schema.prisma`.
- [x] Chạy `npx prisma validate` & `npx prisma generate` thành công.
- [x] Install npm packages backend & frontend: `tesseract.js`, `multer`, `@types/multer`.
- [x] Backend: Tạo `shared/services/ocr.service.ts` (Tesseract.js local OCR).
- [x] Backend: Tạo `shared/services/menuParser.service.ts` (Rules NLP tiếng Việt).
- [x] Backend: Tạo `shared/services/preferenceLearner.service.ts` (Real-time learner).
- [x] Backend: Tạo `modules/menu`, `modules/preferences`, `modules/circle`.
- [x] Backend: Đăng ký router (`/api/menu`, `/api/preferences`, `/api/circle`) & `/uploads` static file server trong `backend/src/index.ts`.
- [x] Backend: Hook `PreferenceLearnerService` vào `roulette.controller.ts` (endpoints `/api/spin/accept`, `/api/spin/reroll`).
- [x] Backend: Kiểm tra biên dịch TypeScript `npm run build` ở `backend/` → **Passed 0 errors**.
- [x] Frontend: Tạo API Clients (`menu.ts`, `preferences.ts`, `circle.ts`, update `roulette.ts`, `index.ts`).
- [x] Frontend: Tạo UI screens & components:
  - `MenuCaptureScreen.tsx`: Giao diện camera viewfinder, chọn ảnh, animation quét AI OCR.
  - `MenuReviewScreen.tsx`: Danh sách món đã parse, chỉnh sửa inline, gán tag, nút Quay với Menu này.
  - `PreferencesScreen.tsx`: Quản lý AI taste profile, budget, độ cay, thành phần không thích.
  - `CircleAiSuggestionCard.tsx`: Thẻ gợi ý món Best Match cho từng thành viên trong nhóm kèm lý do tiếng Việt.
- [x] Frontend: Đăng ký routes mới (`/spin/menu-capture`, `/spin/menu-review`, `/preferences`) trong `App.tsx`.
- [x] Frontend: Kiểm tra biên dịch `npm run build` ở `Food Roulette-web/` → **Passed 0 errors**.

---

## 7. Ghi chú & Ràng buộc cho Agent Session Mới

1. **Không tự ý sửa spec** trong `brand/` mà chưa có sự đồng ý của PM/User.
2. **Luôn dùng `authenticateJWT`** khi đính kèm auth middleware cho router.
3. **Mọi câu hỏi kiến trúc lớn:** Hỏi trực tiếp user (Trường - Backend Lead).
4. **Sau khi sửa code:** Bắt buộc chạy `npm run build` để kiểm tra compile.
