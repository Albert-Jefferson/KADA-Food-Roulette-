# Prompt Template for Gemini

> Copy/paste vào Gemini (gemini.google.com) khi bắt đầu session mới
> **Version:** 1.0 · **Date:** 2026-08-06

---

## Quick Start

```
1. Paste toàn bộ nội dung này vào Gemini chat
2. Bắt đầu task
```

---

## Context Packet

```markdown
# Food Roulette Context

## Project
Mobile app (React Native + Expo) giúp người Việt chọn quán ăn ngẫu nhiên.
Tagline: "Không biết ăn gì? Để vòng quyết định."

## USP
- Spin cho nhóm (max 20 người, vote)
- Locket camera-only với metadata
- 2 display names (private/public)
- Menu Capture (AI OCR)
- AI Personalization (suggest best match)

## Tech Stack
- Frontend: React Native + Expo + TypeScript + NativeWind
- Animation: Reanimated 3 + Moti
- State: Zustand + TanStack Query
- Backend: Supabase + PostGIS
- Design: Earthy/warm-light-first (nâu-vàng)

## Spec Files
- brand/prompts.md — Single source of truth
- brand/brand.md — Design tokens
- brand/FOOD-ROULETTE-SITEMAP.md — Feature specs
- VIBE_RULES.md — Golden rules

## 10 Golden Rules
1. Đọc spec trước khi code
2. Không tự thêm tính năng
3. Check 3 files: prompts.md, brand.md, SITEMAP.md
4. Tuân thủ constraints
5. Log spec changes
6. Verify trước commit
7. Code phải match spec
8. Mỗi feature có owner
9. Không commit credentials
10. Khi không chắc — hỏi

## Key Constraints
- Group.member_ids.length <= 20
- Locket chỉ từ camera app
- Restaurant.status='approved' mới trong roulette
- User.publicId immutable

## Không Được Làm
- Thêm feature tự ý
- Override design tokens
- Commit credentials
- Đoán spec
```

---

## Cách Dùng

### Bắt đầu task

```
Paste context → Mô tả task → Execute
```

### Hỏi về spec

```
"Check spec trong brand/ cho feature X"
```

### Code generation

```
"Tạo code theo spec. Đã đọc: [files]"
```

---

## Lưu Ý

- Gemini có context limit — chia nhỏ prompts nếu cần
- Không assume spec — hỏi user khi không rõ
- Tuân thủ golden rules

---

*Paste toàn bộ vào Gemini · 2026-08-06*
