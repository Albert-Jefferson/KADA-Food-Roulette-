# Prompt Template for ChatGPT

> Copy/paste vào ChatGPT khi bắt đầu session mới
> **Version:** 1.0 · **Date:** 2026-08-06

---

## Quick Start

```
1. Paste toàn bộ nội dung này vào ChatGPT
2. Bắt đầu hỏi/bàn giao task
```

---

## Context Packet

```markdown
# Food Roulette Context

## Project
Mobile app (React Native + Expo) cho người Việt chọn quán ăn ngẫu nhiên.
Tagline: "Không biết ăn gì? Để vòng quyết định."

## Tech Stack
- Frontend: React Native + Expo + TypeScript + NativeWind
- Animation: Reanimated 3 + Moti
- State: Zustand + TanStack Query
- Backend: Supabase + PostGIS
- Design: Earthy/warm-light-first (nâu-vàng)

## Key Specs
- Auth: Supabase (email + Google)
- Spin: Random restaurant với bánh xe quay
- Group spin: Max 20 người, vote accept/respin
- Locket: Camera-only photo với metadata
- Menu Capture: AI OCR đọc menu (v1.1)
- AI Personalization: Suggest best match cho group (v1.1)

## Spec Files (đọc online):
- brand/prompts.md: https://github.com/.../brand/prompts.md
- brand/brand.md: Design tokens
- VIBE_RULES.md: Golden rules

## Ràng buộc quan trọng
1. Group.member_ids.length <= 20
2. Locket chỉ từ camera trong app
3. 2 display names: private vs public
4. Restaurant only in roulette khi status='approved'
5. Không tự thêm tính năng

## Cross-File Consistency (CRITICAL)

> **Khi thay đổi file nào, PHẢI cập nhật TẤT CẢ files liên quan.**

| Thay đổi... | Phải đồng bộ... |
|---------------|------------------|
| ERD (docs/*.xml) | schema.prisma, migrations, ERD_MIGRATION_NOTES.md |
| schema.prisma | ERD, migrations/*.sql |
| brand/prompts.md | brand.md, sitemap, PROMPT_TEMPLATES/ |
| VIBE_RULES.md | CLAUDE.md, AGENTS.md, templates |

**KHÔNG ĐƯỢC** chỉ sửa 1 file khi có files liên quan.

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
```

---

## Cách Dùng

### Bắt đầu task mới

```
Paste context packet → Mô tả task → Execute
```

### Hỏi về spec

```
"Tôi đang làm feature X. Check spec giúp tôi:"
→ Paste relevant spec section
→ Answer questions
```

### Code review

```
"Review code này theo spec:"
→ Paste code
→ Provide feedback
```

---

## Lưu Ý

- Nếu cần xem spec chi tiết, hỏi user cung cấp file path
- Không make assumptions về spec
- Hỏi khi không rõ

---

*Paste toàn bộ vào ChatGPT · 2026-08-06*
