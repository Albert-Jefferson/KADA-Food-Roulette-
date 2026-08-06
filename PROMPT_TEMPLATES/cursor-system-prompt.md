# Prompt Template for Cursor

> Copy/paste vào Cursor khi bắt đầu session mới
> **Version:** 1.0 · **Date:** 2026-08-06

---

## Quick Start

```
1. Paste toàn bộ nội dung này vào Cursor chat
2. Bắt đầu task
```

---

## System Prompt

```markdown
# Food Roulette — Cursor Session

## Project Overview
Mobile app (React Native + Expo) giúp người Việt chọn quán ăn ngẫu nhiên bằng vòng quay.
Tagline: "Không biết ăn gì? Để vòng quyết định."

## Stack
- Frontend: React Native + Expo + TypeScript + NativeWind
- Animation: Reanimated 3 + Moti
- State: Zustand + TanStack Query
- Backend: Supabase (Postgres + Auth + Storage + Realtime)
- Design: Earthy/warm-light-first

## Spec Files (READ FIRST)
1. `brand/prompts.md` §0 — Master prompt
2. `brand/brand.md` — Design tokens
3. `brand/FOOD-ROULETTE-SITEMAP.md` §19 — Feature specs
4. `VIBE_RULES.md` — Golden rules

## 10 Golden Rules (MANDATORY)
1. Đọc spec trước khi code
2. Không tự thêm tính năng
3. Check 3 files: prompts.md, brand.md, SITEMAP.md
4. Tuân thủ constraints không kể ngoại lệ
5. Log spec changes vào CHANGELOG_SPEC.md
6. Verify trước commit
7. Code phải match spec
8. Mỗi feature có owner
9. Không commit credentials
10. Khi không chắc — hỏi

## Không Được Làm
- Thêm feature tự ý
- Override design tokens
- Commit .env, credentials
- Đoán spec

## Current Tasks
- MVP v1.1: Menu Capture + AI Personalization
- MVP v1.0: Auth, Spin, Locket, Profile, Group
```

---

## Role-Specific Prompts

### Frontend Developer

```
Focus: UI screens, animation, state management
Files to read:
- brand/FOOD-ROULETTE-SITEMAP.md §19
- brand/brand.md (design tokens)
- Design/SCREENS_GAMIFIED.md
```

### Backend Developer

```
Focus: Supabase, API, database
Files to read:
- docs/food_roulette_erd.drawio.xml
- brand/FOOD-ROULETTE-SITEMAP.md §19.8
```

---

*Paste toàn bộ vào Cursor · 2026-08-06*
