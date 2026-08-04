# Project Overview — Food Roulette

> **Nhóm: 5 chú sâu code**
> Dự án: Food Roulette · Giai đoạn: Pre-implementation

---

## 1. Team — Phân công vai trò

| # | Thành viên | MSSV | Vai trò chính | Mô tả công việc |
|---|-----------|------|---------------|-----------------|
| 1 | **Đặng Tuấn Anh** | N23DCAT003 | **Project Manager / Fullstack Lead** | Quản lý tiến độ, phân công, review code. Phát triển kiến trúc tổng thể, kết nối Frontend–Backend. Là người quyết định cuối cùng khi có conflict kỹ thuật. |
| 2 | **Lê Văn Hoàng Hiếu** | N24DECE018 | **Frontend Developer** | Xây dựng giao diện ứng dụng (React Native + Expo), implement UI/UX theo design system Earthy. Thiết kế UI trên Figma, xây dựng design system, assets. Phụ trách: Spin Roulette UI, Profile, Landing page. |
| 3 | **Trần Gia Bình** | N24DECE005 | **Frontend Developer + Content** | Xây dựng giao diện các trang: Locket Feed, Review, Khám phá, Onboarding. Viết nội dung app (UI text tiếng Việt, onboarding copy, marketing). |
| 4 | **Lê Huy Trường** | N23DCCN064 | **Backend Developer** | Thiết kế và triển khai backend trên Supabase (Postgres + PostGIS + Auth + Storage). Xây dựng API, database schema, RLS policies, Edge Functions. Phụ trách: Auth, Spin logic, Group Spin realtime. |
| 5 | **Nguyễn Thành Nam** | N23DCCN108 | **Backend Developer + DevOps** | Phát triển backend: Locket upload, Review API, Steward dashboard API. Setup CI/CD (GitHub Actions + EAS Build). Quản lý dữ liệu (Google Places seed), testing toàn bộ (iOS + Android). |

---

## 2. Dự án — Thông tin tổng quan

### 2.1 Làm cái gì?

**Food Roulette** là mobile app (React Native + Expo, iOS + Android) giúp người dùng Việt Nam **chọn quán ăn ngẫu nhiên** xung quanh vị trí hiện tại bằng cách quay một bánh xe (roulette).

> *"Không biết ăn gì? Để vòng quyết định."*

**5 tính năng cốt lõi:**
1. **Roulette thông minh** — Quay bánh xe chọn quán trong 3 giây, có filter theo loại món / khoảng cách / giá / chế độ ăn.
2. **Group Spin** — Quay chung cho nhóm tối đa 20 người, vote chấp nhận hoặc quay lại.
3. **Locket (camera-only)** — Chụp ảnh món ăn trực tiếp từ camera (không upload), có GPS + timestamp chống ảnh giả.
4. **Review thật** — Hệ thống đánh giá từ người dùng thật, không quảng cáo trá hình.
5. **Khám phá xung quanh** — Bản đồ tương tác hiển thị quán ăn gần bạn với gợi ý thông minh.

### 2.2 Nguồn cảm hứng

- **Nghịch lý lựa chọn (Paradox of Choice):** Khi có quá nhiều quán ăn, người dùng không biết chọn cái nào → stress → quay về quán cũ.
- **Trải nghiệm đời thực:** 67% người dùng smartphone mất hơn 15 phút chỉ để quyết định ăn gì. Dân văn phòng mất trung bình **2.5 giờ/tuần** để chọn địa điểm ăn.
- **Gamification:** Lấy cảm hứng từ vòng quay may mắn — biến việc chọn quán thành trò chơi vui và nhanh gọn.
- **Locket App (camera-first social):** Ý tưởng chia sẻ khoảnh khắc ẩm thực chỉ qua camera, tạo sự chân thực.

### 2.3 Vấn đề giải quyết

| Vấn đề | Chi tiết |
|--------|----------|
| **Không biết ăn gì** | Quá nhiều lựa chọn hoặc không có ý tưởng mới |
| **Tốn thời gian quyết định** | Scroll menu, hỏi bạn bè mất 30 phút mỗi bữa |
| **Cãi nhau khi đi nhóm** | 8/10 cặp đôi xung đột vì không thống nhất chỗ ăn |
| **Review giả, quảng cáo trá hình** | Review trên nền tảng hiện tại thường không đáng tin (~40% trust) |
| **Bỏ lỡ quán ngon** | Quán trong hẻm, không quảng cáo, không có trên Google Maps |
| **Ảnh review giả** | Upload ảnh từ internet, không chứng minh đã đến quán |

### 2.4 Cho ai?

**Đối tượng chính:**
- **Gen Z & Millennials (18–30 tuổi)** — sinh viên, nhân viên văn phòng tại TP lớn
- **Nhóm bạn / cặp đôi / gia đình** đang "đứng hình trước câu hỏi ăn gì"
- **Người thích khám phá** quán mới nhưng lười lọc, lười tìm

**4 nhóm đối tượng marketing:**

| Nhóm | Nỗi đau chính | Giải pháp Food Roulette |
|------|---------------|------------------------|
| **Dân văn phòng** | 30 phút cãi nhau, cuối cùng quay về canteen | Spin 3 giây, filter bán kính 500m–1km |
| **Sinh viên** | Ngân sách hẹp, sợ quán lạ, ăn cùng món | Filter giá <50K, board "Ăn vặt dưới 30K" |
| **Gia đình** | Con khó tính, cần không gian phù hợp | Filter "Phù hợp nhóm đông", "Yên tĩnh" |
| **Nhà hàng / quán ăn (B2B)** | Quán mới mở thiếu visibility | Gói Business: ưu tiên Roulette + analytics |

### 2.5 Như thế nào? (Cách hoạt động)

**Stack công nghệ:**

| Layer | Công nghệ |
|-------|-----------|
| Mobile App | Expo SDK 52 + Expo Router + TypeScript |
| UI Framework | NativeWind (Tailwind cho RN) + Design tokens Earthy |
| Animation | Reanimated 3 + Moti (spin wheel) |
| State Management | Zustand + TanStack Query |
| Backend | Supabase (Postgres + Auth + Storage + Realtime) |
| Database | Postgres + PostGIS (query bán kính) |
| Map | react-native-maps + OpenStreetMap tiles |
| Deploy | EAS Build + Supabase Cloud |
| CI/CD | EAS Submit + GitHub Actions |

**3 luồng người dùng chính:**

1. **Quay chọn quán (cá nhân/nhóm):**
   Mở app → Chọn nhóm (hoặc solo) → Nhấn SPIN → Bánh xe quay → Kết quả hiện → Vote (nếu nhóm) → Xem chi tiết / Đi ăn

2. **Chụp & chia sẻ (Locket):**
   Ăn xong → Mở app → "Tạo locket" → Chụp ảnh bằng camera → App gắn GPS + timestamp → Ghi chú + rating → Chọn visibility → Đăng

3. **Thêm quán mới:**
   Phát hiện quán chưa có trên app → "Thêm quán" → Điền form → `pending` → Steward duyệt → Xuất hiện trên bản đồ

---

## 3. Phân chia công việc theo giai đoạn

### Phase 1 — Nền tảng (Tuần 1–2)

| Task | Người phụ trách | Hỗ trợ |
|------|----------------|--------|
| Setup Expo project + cấu hình TypeScript, ESLint, Prettier | Tuấn Anh | Hoàng Hiếu |
| Thiết kế DB schema (Supabase + PostGIS) | Trường | Thành Nam |
| Thiết kế UI trên Figma (toàn bộ màn hình chính) | Hoàng Hiếu | Gia Bình |
| Viết nội dung UI text (onboarding, labels, messages) | Gia Bình | Hoàng Hiếu |
| Setup CI/CD, testing framework | Thành Nam | Tuấn Anh |

### Phase 2 — Core Features (Tuần 3–5)

| Task | Người phụ trách | Hỗ trợ |
|------|----------------|--------|
| Auth (email + Google) + Onboarding flow | Trường | Gia Bình |
| Spin Roulette UI + animation | Hoàng Hiếu | Gia Bình |
| Spin logic + API (filter, random, result) | Trường | Tuấn Anh |
| Group Spin (realtime + vote) | Tuấn Anh | Trường |
| Map + Nearby Discovery UI | Gia Bình | Hoàng Hiếu |
| Google Places seed data + Map API | Thành Nam | Trường |

### Phase 3 — Locket + Review + Polish (Tuần 6–8)

| Task | Người phụ trách | Hỗ trợ |
|------|----------------|--------|
| Locket camera-only + upload (Backend) | Thành Nam | Trường |
| Locket feed UI (cá nhân + nhóm + public) | Gia Bình | Hoàng Hiếu |
| Review system (Backend) | Trường | Thành Nam |
| Review system (Frontend) | Gia Bình | Hoàng Hiếu |
| Profile công khai (Frontend) | Hoàng Hiếu | Gia Bình |
| Steward dashboard | Tuấn Anh | Trường |
| Testing toàn bộ (iOS + Android) | Thành Nam | Cả nhóm |
| Landing page web (marketing) | Hoàng Hiếu | Gia Bình |

---

## 4. Quy tắc làm việc nhóm

- **Branch:** `feature/<tên-feature>` cho mỗi tính năng, PR vào `main`.
- **Commit:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`...).
- **Code review:** Mỗi PR cần ít nhất 1 người review trước khi merge.
- **Ngôn ngữ code:** TypeScript, tiếng Anh. UI text: tiếng Việt.
- **Meeting:** Stand-up ngắn đầu tuần, review cuối tuần.
- **Tài liệu tham khảo:** Đọc `CLAUDE.md` → `brand/prompts.md` → `brand/brand.md` trước khi code.

---

*Phiên bản: 1.0 · Ngày: 2026-08-04 · Nhóm: 5 chú sâu code*
