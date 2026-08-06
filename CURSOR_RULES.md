# CURSOR_RULES.md

> **Cursor IDE Rules** — tối ưu khi dùng Cursor cho Food Roulette
> **Version:** 1.0 · **Date:** 2026-08-06

---

## 1. Tổng Quan

Cursor là AI tool chính của team. File này hướng dẫn cách dùng Cursor hiệu quả trong workflow của team.

---

## 2. Auto-Load Files

Khi mở project trong Cursor, các files sau được auto-load:

1. `CLAUDE.md` — Entry point
2. `VIBE_RULES.md` — Golden rules
3. `AGENTS.md` — Agent conventions
4. `.cursorrules` — IDE-level rules

**KHÔNG cần copy/paste** — Cursor tự đọc khi project mở.

---

## 3. Cách Dùng Cursor Hiệu Quả

### 3.1 Bắt Đầu Task Mới

**Luôn làm theo flow:**

```
1. Mở project trong Cursor
2. AI tự load CLAUDE.md + VIBE_RULES.md
3. Bắt đầu hỏi/bàn giao task
4. Nếu cần fresh context → gõ /agent
```

### 3.2 Các Commands Hữu Ích

| Command | Mục đích |
|---------|----------|
| `/agent` | Chạy task tự động |
| `/plan` | Tạo plan trước khi code |
| `/review` | Code review |
| `/test` | Viết/running tests |

### 3.3 Agent Modes

| Mode | Khi nào dùng |
|------|--------------|
| **Agent Mode** | Task lớn, cần nhiều bước |
| **Plan Mode** | Thiết kế architecture, nhiều trade-offs |
| **Debug Mode** | Fix bug cụ thể |
| **Ask Mode** | Chỉ đọc, hỏi, không sửa |

---

## 4. Sub-Agents Guidelines

Khi dùng `/agent` hoặc Task tool:

### 4.1 Khi Nào Dùng Sub-Agent

- Task độc lập với task hiện tại
- Cần explore nhiều files cùng lúc
- Task có thể chia nhỏ được

### 4.2 Cách Gọi Sub-Agent

```markdown
Dùng Task tool với subagent_type="generalPurpose"
Include: Task description đầy đủ + Files cần đọc + Constraints
```

### 4.3 Sub-Agent Prompt Template

```markdown
## Task
[Mô tả task rõ ràng]

## Context
- Project: Food Roulette mobile app
- Stack: React Native + Expo + TypeScript
- Design: Earthy/warm-light-first

## Files to Read
1. brand/prompts.md §0
2. VIBE_RULES.md
3. [File cụ thể liên quan đến task]

## Constraints
- Không thêm feature mới
- Tuân thủ brand tokens
- TypeScript strict mode

## Expected Output
[Mô tả output mong muốn]
```

---

## 5. Cursor Settings Khuyến Nghị

### 5.1 `.cursor/settings.json`

```json
{
  "cursor.autoLoad": true,
  "cursor.rules": [".cursorrules", "CLAUDE.md", "VIBE_RULES.md"],
  "cursor.agentMode": "agent",
  "cursor.turboMode": true
}
```

### 5.2 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+K` / `Ctrl+K` | Mở AI chat |
| `Cmd+L` / `Ctrl+L` | Inline edit |
| `Cmd+Shift+P` | Command palette |

---

## 6. Workflow Với Cursor

### 6.1 Task Nhỏ (<30 phút)

```
1. Mở Cursor → AI load context
2. Hỏi AI thực hiện task
3. AI code trực tiếp
4. Review changes
5. Commit
```

### 6.2 Task Lớn (>30 phút)

```
1. Mở Cursor → AI load context
2. Dùng /plan để design approach
3. Approve plan
4. Dùng /agent hoặc Task tool
5. Sub-agent thực hiện từng phần
6. Review tất cả changes
7. Commit
```

### 6.3 Code Review

```
1. Dùng /review command
2. Hoặc gọi bugbot subagent
3. Fix issues được suggest
4. Re-verify
```

---

## 7. Integration Với Skills

Team có thể dùng Cursor Skills để mở rộng:

| Skill | Khi nào dùng |
|-------|--------------|
| `automate/SKILL.md` | Tạo Cursor automation |
| `create-hook/SKILL.md` | Tạo custom hooks |
| `review-bugbot/SKILL.md` | Code review tự động |
| `review-security/SKILL.md` | Security audit |

---

## 8. Common Pitfalls

### ❌ KHÔNG NÊN

| Pitfall | Giải thích |
|---------|------------|
| Dùng AI mà không đọc spec | Dẫn đến code không match spec |
| Accept tất cả AI suggestions | AI có thể sai hoặc thêm feature |
| Không review changes | Miss bugs hoặc spec violations |
| Dùng /agent cho task nhỏ | Overkill, tốn thời gian |

### ✅ NÊN LÀM

| Practice | Giải thích |
|----------|------------|
| Luôn review AI output | AI có thể sai |
| Hỏi khi không rõ | Đừng assume |
| Dùng /plan cho task lớn | Tránh rework |
| Split task thành pieces nhỏ | Dễ verify hơn |

---

## 9. Related Files

| File | Mục đích |
|------|----------|
| `VIBE_RULES.md` | Golden rules cho vibe coding |
| `CLAUDE.md` | Entry point cho AI |
| `AGENTS.md` | Agent conventions |
| `.cursorrules` | IDE auto-load rules |

---

*Version 1.0 · 2026-08-06 · Food Roulette Team*
