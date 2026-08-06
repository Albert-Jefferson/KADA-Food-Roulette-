# CHANGELOG_SPEC.md

> **Track tất cả thay đổi spec** — ai, khi nào, thay đổi gì
> **Version:** 1.0 · **Date:** 2026-08-06

---

## Mục đích

- Team biết spec thay đổi ở đâu, khi nào
- AI tools đang có context cũ có thể sync lại
- PM theo dõi spec evolution

---

## Format

```markdown
## YYYY-MM-DD

### Added
- [Mô tả feature/tính năng mới]
  - By: [Tên người] - [Role]
  - Via: [AI Tool]
  - Spec: [File và section]
  - Files affected: [Danh sách files]

### Changed
- [Mô tả thay đổi]
  - By: [Tên người] - [Role]
  - Via: [AI Tool]
  - Spec: [File và section]
  - Reason: [Tại sao thay đổi]

### Deprecated
- [Tính năng bị loại bỏ]
  - By: [Tên người] - [Role]
  - Spec: [File và section]
  - Reason: [Tại sao]

### Fixed
- [Fix bug/sai sót trong spec]
  - By: [Tên người] - [Role]
  - Spec: [File và section]
  - Original: [Nội dung cũ]
  - Fixed: [Nội dung mới]
```

---

## Changelog

### 2026-08-06

#### Added

- **Menu Capture Feature**
  - By: PM - AI Assistant
  - Via: Cursor
  - Spec: `brand/prompts.md` §13, `brand/FOOD-ROULETTE-SITEMAP.md` §19.15-16
  - Files affected:
    - `docs/food_roulette_erd.drawio.xml` (Menu, MenuItem entities)
    - `brand/prompts.md` (new §13)
    - `brand/FOOD-ROULETTE-SITEMAP.md` (new §19.15-16)
    - `content/explore/menu-ai-strategy.md` (new file)

- **AI Personalization Feature**
  - By: PM - AI Assistant
  - Via: Cursor
  - Spec: `brand/prompts.md` §13.2, `brand/FOOD-ROULETTE-SITEMAP.md` §19.16
  - Files affected:
    - `docs/food_roulette_erd.drawio.xml` (UserPreference, CircleRecommendation entities)
    - `brand/prompts.md` (new §13.2)
    - `brand/FOOD-ROULETTE-SITEMAP.md` (new §19.16)

- **Vibe Coding Rules**
  - By: PM - AI Assistant
  - Via: Cursor
  - Spec: N/A (process document)
  - Files affected:
    - `VIBE_RULES.md` (new file)
    - `CURSOR_RULES.md` (new file)
    - `AGENTS.md` (updated §10-11)
    - `.cursorrules` (new file)
    - `PROMPT_TEMPLATES/` (new folder)

#### Changed

- **MVP Scope v1.1**
  - By: PM - AI Assistant
  - Via: Cursor
  - Spec: `brand/FOOD-ROULETTE-SITEMAP.md` §19.6
  - Change: Added Menu Capture + AI Personalization to MVP scope

---

## Current Spec Versions

| File | Version | Date | Last Change |
|------|---------|------|-------------|
| `brand/prompts.md` | 2.4 | 2026-08-06 | Added §13 Menu Capture + AI |
| `brand/brand.md` | - | - | - |
| `brand/FOOD-ROULETTE-SITEMAP.md` | 2.4 | 2026-08-06 | Added §19.15-16 |
| `docs/food_roulette_erd.drawio.xml` | 2.4 | 2026-08-06 | Added Menu + AI entities |
| `VIBE_RULES.md` | 1.0 | 2026-08-06 | Initial version |
| `AGENTS.md` | 1.2 | 2026-08-06 | Added Role Templates |

---

## Team Roles

| Role | Người | Trách nhiệm |
|------|-------|-------------|
| PM / Architecture Lead | Đặng Tuấn Anh | Spec, review, architecture, AI architecture, Circle Recommendation |
| Frontend Lead | Lê Văn Hoàng Hiếu | UI/UX design, animation, AI Suggestion UI |
| Content + AI Frontend | Trần Gia Bình | UI screens, copywriting, Menu Review UI, AI Feedback UX |
| Backend Lead + AI | Lê Huy Trường | API, database, AI OCR pipeline, AI Suggestion backend |
| DevOps + AI Support | Nguyễn Thành Nam | CI/CD, testing, AI pipeline deployment, User Preference learning |

*Lưu ý: Mỗi người tự chọn AI tool phù hợp với công việc của mình*

---

*Auto-generated · 2026-08-06*
