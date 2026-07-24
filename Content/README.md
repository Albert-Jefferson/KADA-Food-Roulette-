# content/

> Thư mục chứa toàn bộ **content nguyên bản** của dự án Food Roulette — phân biệt với `brand/` (định danh & thiết kế) và `app/` (code).

## Cấu trúc

```
content/
├── source/    Nguyên liệu gốc (file .docx, draft thô) — KHÔNG chỉnh sửa trực tiếp
├── explore/   Note/thử nghiệm phái sinh từ source — được phép tạo mới
└── README.md  File này
```

## Quy tắc

### `source/` — chỉ đọc
- Chứa các file `.docx`/`.md` gốc (feature, pricing, solution, briefs...).
- **Không sửa trực tiếp.** Nếu cần sửa → lấy version mới từ team/PM.
- Nếu file cũ → giữ nguyên + thêm `archived/` subfolder.

### `explore/` — được viết
- Chứa **note, draft, idea** phái sinh từ `source/`.
- Đặt tên file theo chủ đề: `kebab-case.md` (vd: `group-spin-flow.md`, `locket-mvp-scope.md`).
- Format gợi ý cho mỗi note:
  ```markdown
  # <Title>
  
  **Từ:** source/<file>.docx (mục X.Y)
  **Trạng thái:** Draft | Review | Accepted | Rejected
  **Ngày:** YYYY-MM-DD
  
  ## Vấn đề
  ...
  ## Đề xuất
  ...
  ## Câu hỏi mở
  ...
  ```
- Khi note được **chấp nhận** → cập nhật spec trong `brand/`.

## Quy trình content mới

1. Có brief mới từ team → đặt vào `content/source/` (file .docx hoặc .md).
2. AI (hoặc người) đọc → viết note phân tích trong `content/explore/`.
3. Note được user duyệt → chuyển thành spec trong `brand/`.
4. Spec ổn định → làm input cho code ở `app/`.

## Liên kết

- Brand & Design: [`../brand/`](../brand/)
- Code: [`../app/`](../app/)
- Entry point cho AI: [`../CLAUDE.md`](../CLAUDE.md)