# Prompt Template for Claude

> Copy/paste vào Claude (claude.ai) khi bắt đầu session mới
> **Version:** 1.0 · **Date:** 2026-08-06

---

## Quick Start

```
1. Paste toàn bộ nội dung này vào Claude chat
2. Bắt đầu task
```

---

## System Prompt

```markdown
# Food Roulette Context

## Project Overview
Mobile app (React Native + Expo) giúp người Việt chọn quán ăn ngẫu nhiên bằng vòng quay.
Tagline: "Không biết ăn gì? Để vòng quyết định."

## USP
- Spin cho nhóm (max 20 người, vote)
- Locket camera-only với metadata
- 2 display names (private/public)
- Bản đồ quán riêng
- Review thật

## Tech Stack
- Frontend: React Native + Expo + TypeScript + NativeWind
- Animation: Reanimated 3 + Moti
- State: Zustand + TanStack Query
- Backend: Supabase + PostGIS
- Design: Earthy/warm-light-first

## Spec Priority Order
brand/prompts.md > brand/brand.md > brand/FOOD-ROULETTE-SITEMAP.md > content/*.docx

## 10 Golden Rules (MANDATORY)
1. Đọc spec trước khi code
2. Không tự thêm tính năng
3. Check 3 files trước: prompts.md, brand.md, SITEMAP.md
4. Tuân thủ constraints
5. Log spec changes vào CHANGELOG_SPEC.md
6. Verify trước commit (typecheck, lint)
7. Code phải match spec
8. Mỗi feature có owner
9. Không commit credentials
10. Khi không chắc — hỏi

## Key Constraints
- Group.member_ids.length <= 20
- Locket.image_url chỉ từ app camera
- Restaurant.status='approved' mới xuất hiện trong roulette
- Friendship mutual: cả 2 accepted mới là bạn
- User.publicId immutable

## Không Được Làm
- Thêm feature tự ý
- Override design tokens (dùng brand/brand.md)
- Commit .env, API keys
- Đoán spec
- Over-engineer

## MVP Scope (v1.0)
✅ Auth, Onboarding, Spin cá nhân, Spin nhóm, Locket, Taste Board, Profile, User-submitted restaurants, Steward dashboard, Google Places seed

## v1.1 Features
✅ Menu Capture (AI OCR)
✅ AI Personalization (suggest best match)

## Data Model (key entities)
- User, Group, Friendship, Restaurant, Locket, SpinSession, Vote, SpinWallet, TasteBoard, Menu, MenuItem, UserPreference, CircleRecommendation
```

---

## Cách Dùng

### Bắt đầu task

```markdown
Paste context → "Tôi cần làm [task]. Đây là spec: [link/path]"
```

### Hỏi về spec

```markdown
"Tôi cần xem spec cho [feature]. Tìm trong brand/prompts.md §[section]"
```

### Code generation

```markdown
"Tạo [component/file] theo spec. Files đã đọc: [list]"
```

---

## Lưu Ý Quan Trọng

- **Luôn check spec trước** — Không assume
- **Không thêm feature** — Hỏi PM nếu thấy thiếu
- **Code phải match spec** — Không pragmatic override
- **Hỏi khi không rõ** — Đừng đoán

---

*Paste toàn bộ vào Claude · 2026-08-06*
