# VIBE_RULES.md

> **Bộ rules cho VIBE CODING** — tất cả AI phải tuân thủ
> **Version:** 1.0 · **Date:** 2026-08-06
> **Applies to:** Cursor, ChatGPT, Claude, Gemini, và mọi AI tool khác

---

## 1. Tổng quan

Khi team dùng AI để code, mỗi người có thể dùng tool khác nhau (Cursor, ChatGPT, Claude, Gemini...). Bộ rules này đảm bảo:

- **Consistency:** Tất cả AI nhận cùng context và constraints
- **Quality:** Spec được follow, không tự thêm tính năng
- **Traceability:** Ai thay đổi gì, khi nào đều có log

---

## 2. 10 Golden Rules

### Rule 1: Đọc Spec Trước Khi Code

**LUÔN LUÔN** đọc files theo thứ tự ưu tiên:

1. `brand/prompts.md` §0 — Master prompt (copy/paste vào AI)
2. `brand/brand.md` — Brand kit (màu, font, tone)
3. `brand/FOOD-ROULETTE-SITEMAP.md` §19 — Spec chi tiết

**KHÔNG BAO GIỜ** code khi chưa đọc spec.

### Rule 2: Không Tự Thêm Tính Năng

- Muốn thêm tính năng → hỏi PM/team trước
- AI không được tự quyết định "tính năng này có vẻ hay"
- Nếu thấy spec thiếu → báo PM, không tự bổ sung

### Rule 3: Check 3 Files Trước Khi Code

| Thứ tự | File | Mục đích |
|---------|------|----------|
| 1 | `brand/prompts.md` | Single source of truth |
| 2 | `brand/brand.md` | Design language |
| 3 | `brand/FOOD-ROULETTE-SITEMAP.md` | Data model & UI |

### Rule 4: Mỗi AI Đều Phải Tuân Thủ

| AI Tool | Cách áp dụng |
|---------|-------------|
| Cursor | Tự động load `.cursorrules`, `CLAUDE.md`, `VIBE_RULES.md` |
| ChatGPT | Copy `PROMPT_TEMPLATES/chatgpt-context.md` vào chat |
| Claude | Copy `PROMPT_TEMPLATES/claude-context.md` vào chat |
| Gemini | Copy `PROMPT_TEMPLATES/gemini-context.md` vào chat |

### Rule 5: Spec Thay Đổi → Log

**BẮT BUỘC** log mọi thay đổi spec vào `CHANGELOG_SPEC.md`:

```markdown
## YYYY-MM-DD
- Changed: [Mô tả thay đổi]
- By: [Tên người] - [Role]
- Via: [AI Tool]
- Spec: [File và section]
```

### Rule 6: Verify Trước Khi Commit

**Checklist trước commit:**

- [ ] `npm run typecheck` pass
- [ ] `npm run lint` pass
- [ ] Không có credentials trong code
- [ ] Code match spec đã đọc
- [ ] Unit tests pass (nếu có)

### Rule 7: Code Phải Match Spec

- Không "pragmatic override" spec
- Nếu spec không rõ → hỏi, không đoán
- Nếu muốn deviate → discuss với team trước

### Rule 8: Mỗi Feature Có Owner

| Feature | Owner | AI Tool |
|---------|-------|---------|
| Auth & Onboarding | Backend | Claude |
| Spin System | Frontend | Cursor |
| AI Personalization | AI/ML | ChatGPT |
| ... | ... | ... |

### Rule 9: Privacy & Security

**KHÔNG BAO GIỜ commit:**

- `.env`, credentials
- API keys, tokens
- Personal data của user
- File binary lớn (>500KB)

### Rule 10: Khi Không Chắc — Hỏi

- Đừng đoán spec
- Đừng "大概" (khoảng) khi không biết
- Hỏi team/PM để clarify

---

## 3. Quy Trình Spec → Implement → Verify

```
┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 1: SPEC REVIEW                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  1. Đọc brand/prompts.md §0                               │
│  2. Đọc brand/brand.md                                    │
│  3. Đọc brand/FOOD-ROULETTE-SITEMAP.md §19               │
│  4. Đọc feature spec cụ thể (nếu có)                     │
│                                                              │
│  Checklist: □ Đã hiểu spec □ Đã check conflicts □ Đã hỏi  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 2: IMPLEMENT                                       │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  1. Code theo spec đã đọc                                │
│  2. Dùng đúng design tokens từ brand.md                  │
│  3. Tuân thủ naming conventions                          │
│  4. Comment chỉ khi cần giải thích intent               │
│                                                              │
│  Checklist: □ Code done □ Match spec □ Naming correct     │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 3: VERIFY                                          │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  1. Chạy typecheck                                         │
│  2. Chạy linter                                           │
│  3. Review code với spec                                  │
│  4. Self-review: "Code có match spec không?"              │
│                                                              │
│  Checklist: □ Typecheck pass □ Lint pass □ Spec match      │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 4: COMMIT & LOG                                    │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  1. Commit message theo Conventional Commits             │
│  2. Update CHANGELOG_SPEC.md nếu có spec change         │
│  3. Nếu spec change → phải được PM approve              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Constraints — Không Được Làm

### Tuyệt đối không được:

| ❌ | Thay vì | ✅ |
|----|----------|-----|
| Thêm feature tự ý | Hỏi PM trước | Báo cáo spec thiếu |
| Override design tokens | Dùng brand.md tokens | Hỏi design team |
| Commit credentials | Không bao giờ | Dùng .env.example |
| Hardcode config | Dùng config files | Hỏi backend |
| Tạo file mới không hỏi | Hỏi team trước | Follow conventions |
| Đoán spec | Hỏi khi không rõ | Đừng assume |

### Khi muốn làm những việc này → phải hỏi:

| Việc | Hỏi ai |
|-------|--------|
| Thêm feature mới | PM |
| Thay đổi design tokens | Design/Frontend lead |
| Thay đổi API contracts | Backend lead |
| Thêm dependency mới | Team vote |
| Refactor lớn (>1 file) | PM approve |
| Sửa brand/*.md | PM + Design approve |

---

## 5. Priority Khi Mâu Thuẫn

Khi các file spec mâu thuẫn, thứ tự ưu tiên:

```
brand/prompts.md > brand/brand.md > brand/FOOD-ROULETTE-SITEMAP.md > content/*.docx
```

---

## 6. Quick Reference Card

### Khi bắt đầu chat mới với AI:

```
1. Copy brand/prompts.md §0
2. Copy VIBE_RULES.md §1-2
3. Paste vào AI chat
4. Bắt đầu hỏi/bàn giao task
```

### Checklist trước mỗi task:

- [ ] Đã đọc 3 spec files
- [ ] Hiểu feature cần làm
- [ ] Biết ai là owner
- [ ] Có spec link để reference

### Checklist sau mỗi task:

- [ ] Typecheck pass
- [ ] Lint pass
- [ ] Code match spec
- [ ] Log vào CHANGELOG_SPEC.md (nếu có change)
- [ ] Commit theo Conventional Commits

---

## 7. Related Files

| File | Mục đích |
|------|----------|
| `CLAUDE.md` | Entry point cho AI |
| `AGENTS.md` | Role-specific rules |
| `CURSOR_RULES.md` | Cursor IDE rules |
| `PROMPT_TEMPLATES/*` | Context packets cho từng AI |
| `CHANGELOG_SPEC.md` | Spec change log |

---

*Version 1.0 · 2026-08-06 · Food Roulette Team*
