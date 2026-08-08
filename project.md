# Project Overview — Food Roulette

> **Nhóm: 5 chú sâu code**
> Dự án: Food Roulette · Giai đoạn: Pre-implementation
> **Phiên bản:** 2.4 · **Cập nhật:** 2026-08-06

---

## 1. Team — Phân công vai trò

| # | Thành viên | MSSV | Vai trò chính | Mô tả công việc |
|---|-----------|------|---------------|-----------------|
| 1 | **Đặng Tuấn Anh** | N23DCAT003 | **PM / Architecture Lead** | Quản lý tiến độ, spec, architecture decisions, code review, AI architecture review |
| 2 | **Lê Văn Hoàng Hiếu** | N24DECE018 | **Frontend Lead** | UI/UX design (Figma), design system, Spin Roulette UI, Profile, Landing page, AI Suggestion UI |
| 3 | **Trần Gia Bình** | N24DECE005 | **Content + AI Frontend** | UI screens (Locket Feed, Review, Khám phá, Onboarding), copywriting, UX writing, Menu Review UI, AI Feedback UX |
| 4 | **Lê Huy Trường** | N23DCCN064 | **Backend Lead + AI** | Supabase (Auth, API, Database, Realtime), AI OCR pipeline, AI Suggestion backend |
| 5 | **Nguyễn Thành Nam** | N23DCCN108 | **DevOps + AI Support** | CI/CD (GitHub Actions + EAS Build), Locket/Review API, AI pipeline deployment, Testing |

---

## 2. Dự án — Thông tin tổng quan

### 2.1 Làm cái gì?

**Food Roulette** là mobile app (React Native + Expo, iOS + Android) giúp người dùng Việt Nam **chọn quán ăn ngẫu nhiên** xung quanh vị trí hiện tại bằng cách quay một bánh xe (roulette).

> *"Không biết ăn gì? Để vòng quyết định."*

**6 tính năng cốt lõi:**
1. **Roulette thông minh** — Quay bánh xe chọn quán trong 3 giây, có filter theo loại món / khoảng cách / giá / chế độ ăn.
2. **Group Spin** — Quay chung cho nhóm tối đa 20 người, vote chấp nhận hoặc quay lại.
3. **Locket (camera-only)** — Chụp ảnh món ăn trực tiếp từ camera (không upload), có GPS + timestamp chống ảnh giả.
4. **Menu Capture (v1.1)** — Chụp menu tại quán, AI OCR đọc và parse thành danh sách món.
5. **AI Personalization (v1.1)** — Suggest best match cho từng member trong circle dựa trên sở thích cá nhân.
6. **Review thật** — Hệ thống đánh giá từ người dùng thật, không quảng cáo trá hình.

### 2.2 Nguồn cảm hứng

- **Nghịch lý lựa chọn (Paradox of Choice):** Khi có quá nhiều quán ăn, người dùng không biết chọn cái nào → stress → quay về quán cũ.
- **Trải nghiệm đời thực:** 67% người dùng smartphone mất hơn 15 phút chỉ để quyết định ăn gì. Dân văn phòng mất trung bình **2.5 giờ/tuần** để chọn địa điểm ăn.
- **Gamification:** Lấy cảm hứng từ vòng quay may mắn — biến việc chọn quán thành trò chơi vui và nhanh gọn.
- **Locket App (camera-first social):** Ý tưởng chia sẻ khoảnh khắc ẩm thực chỉ qua camera, tạo sự chân thực.
- **AI Personalization:** Gợi ý thông minh dựa trên sở thích cá nhân và khẩu vị.

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
| AI (v1.1) | Google Cloud Vision API (OCR) + Supabase Edge Functions |
| Deploy | EAS Build + Supabase Cloud |
| CI/CD | EAS Submit + GitHub Actions |

**3 luồng người dùng chính:**

1. **Quay chọn quán (cá nhân/nhóm):**
   Mở app → Chọn nhóm (hoặc solo) → Nhấn SPIN → Bánh xe quay → Kết quả hiện → Vote (nếu nhóm) → Xem chi tiết / Đi ăn

2. **Chụp & chia sẻ (Locket):**
   Ăn xong → Mở app → "Tạo locket" → Chụp ảnh bằng camera → App gắn GPS + timestamp → Ghi chú + rating → Chọn visibility → Đăng

3. **Menu Capture & AI Suggest (v1.1):**
   Đến quán → "Chụp Menu" → AI OCR đọc menu → Xác nhận/chỉnh sửa → Spin với các món → AI suggest best match cho từng member

---

## 3. Vibe Coding Team Rules

> **Team dùng AI tools khác nhau** (Cursor, ChatGPT, Claude, Gemini) để đảm bảo consistency

### 3.1 AI Tool Usage

Mỗi người **tự chọn AI tool** phù hợp với công việc (Cursor, ChatGPT, Claude, Gemini...). Template context packets có sẵn trong `PROMPT_TEMPLATES/`.

| Role | Trách nhiệm chính |
|------|-------------------|
| **PM / Architecture Lead** | Tuấn Anh | Quản lý spec, review code, architecture, AI architecture |
| **Frontend Lead** | Hoàng Hiếu | UI/UX design, animation, AI Suggestion UI |
| **Content + AI Frontend** | Gia Bình | UI screens, copywriting, Menu Review UI, AI Feedback UX |
| **Backend Lead + AI** | Trường | API, database, AI OCR pipeline, AI Suggestion backend |
| **DevOps + AI Support** | Thành Nam | CI/CD, testing, AI pipeline deployment |

### 3.2 10 Golden Rules

1. **Đọc spec trước** — Không code khi chưa đọc `brand/prompts.md` §0
2. **Không tự thêm tính năng** — Muốn thêm phải hỏi PM/team
3. **Check 3 files trước khi code** — prompts.md, brand.md, SITEMAP.md
4. **Tuân thủ spec** — Dùng AI nào cũng phải follow cùng rules
5. **Spec thay đổi → Log** vào `CHANGELOG_SPEC.md`
6. **Verify trước khi commit** — Type check, lint pass
7. **Code phải match spec** — Không pragmatic override
8. **Mỗi feature có owner** — Role responsible được ghi rõ
9. **Privacy & Security** — Không bao giờ commit credentials
10. **Khi không chắc — Hỏi** — Đừng đoán spec

### 3.3 Spec Files

| File | Mô tả |
|------|--------|
| `brand/prompts.md` | Single source of truth — copy/paste vào AI |
| `brand/brand.md` | Design tokens (màu, font, tone) |
| `brand/FOOD-ROULETTE-SITEMAP.md` | Feature specs, data models |
| `VIBE_RULES.md` | Golden rules cho vibe coding |
| `AGENTS.md` | Role templates, conventions |
| `CHANGELOG_SPEC.md` | Track spec changes |

---

## 4. Phân chia công việc theo giai đoạn

### Phase 1 — Nền tảng (Tuần 1–2)

| Task | Người phụ trách | Hỗ trợ |
|------|----------------|--------|
| Setup Expo project + TypeScript, ESLint, Prettier | Tuấn Anh | Hoàng Hiếu |
| Thiết kế DB schema (Supabase + PostGIS) | Trường | Thành Nam |
| Thiết kế UI trên Figma (toàn bộ màn hình chính) | Hoàng Hiếu | Gia Bình |
| Viết nội dung UI text (onboarding, labels, messages) | Gia Bình | Hoàng Hiếu |
| Setup CI/CD pipeline, testing framework | Thành Nam | Tuấn Anh |

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

### Phase 4 — AI Features v1.1 (Tuần 9–10)

| Task | Người phụ trách | Hỗ trợ |
|------|----------------|--------|
| Menu Capture UI (chụp menu) | Hoàng Hiếu | Gia Bình |
| AI OCR pipeline (Vision API) | Trường | Thành Nam |
| User Preference learning | Thành Nam | Trường |
| Circle Recommendation algorithm | Tuấn Anh | Trường |
| Menu Review UI | Gia Bình | Hoàng Hiếu |
| AI Suggestion UI | Hoàng Hiếu | Gia Bình |
| AI Feedback UX | Gia Bình | Hoàng Hiếu |

---

## 5. MVP Scope

### v1.0 (Phase 1-3)

✅ Auth (email + Google) · Onboarding · Spin cá nhân · Group Spin · Locket camera-only · Locket feed · Profile công khai · Thêm quán user-submitted · Steward dashboard · Google Places seed · Restaurant Partner (B2B) · Corporate Account (B2B) · Spin System v2

### v1.1 (Phase 4)

✅ **Menu Capture** · **AI Personalization**

### v1.2

❌ AI moderation text

### v2.0

❌ Gamification/streak · In-app chat · AI Food Advisor

---

## 6. Quy tắc làm việc nhóm

- **Branch:** `feature/<tên-feature>` cho mỗi tính năng, PR vào `main`.
- **Commit:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`...).
- **Code review:** Mỗi PR cần ít nhất 1 người review trước khi merge.
- **Ngôn ngữ code:** TypeScript, tiếng Anh. UI text: tiếng Việt.
- **AI Context:** Khi bắt đầu chat mới với AI, copy context từ `PROMPT_TEMPLATES/`
- **Spec Change:** Mọi thay đổi spec phải được log vào `CHANGELOG_SPEC.md`
- **Meeting:** Stand-up ngắn đầu tuần, review cuối tuần.

---

## 7. Tài liệu tham khảo

| File | Mục đích |
|------|----------|
| `CLAUDE.md` | Entry point cho AI |
| `brand/prompts.md` | Master prompt (single source of truth) |
| `brand/brand.md` | Brand kit (màu, font, tone) |
| `brand/FOOD-ROULETTE-SITEMAP.md` | Sitemap & feature specs |
| `VIBE_RULES.md` | Golden rules cho vibe coding |
| `AGENTS.md` | Role templates & conventions |
| `CHANGELOG_SPEC.md` | Spec change log |
| `docs/food_roulette_erd.drawio.xml` | Entity Relationship Diagram |

---

*Phiên bản: 2.4 · Ngày: 2026-08-06 · Nhóm: 5 chú sâu code*

