# Feature Doc — Food Roulette

> **Loại tài liệu:** Tính năng · **Phòng ban:** Product · **Phiên bản:** 1.0

---

## Tên tính năng

**"Quay chọn quán" — Roulette Spin**

---

## 1. Vấn đề giải quyết

Người dùng mất trung bình **15–30 phút** lướt Foody, ShopeeFood, Google Maps mà vẫn không quyết định được ăn gì. Đây là **"nghịch lý lựa chọn"** — càng nhiều lựa chọn càng khó chọn.

**Hệ quả:**
- Lãng phí thời gian
- Trễ deadline ăn trưa
- Cuối cùng vẫn ăn món cũ

---

## 2. Cách hoạt động

```
┌─────────────────────────────────────────────────┐
│  1. Mở app  →  2. Đặt bộ lọc  →  3. Quay       │
│       ↓                ↓                ↓        │
│  GPS tự lấy      Cay/không cay    Vòng quay     │
│  vị trí          Cơm/lẩu/phở     xoay 3s       │
│                  Quán gần/xa                    │
│                                  ↓              │
│                            4. Hiện kết quả      │
│                            + thông tin quán      │
└─────────────────────────────────────────────────┘
```

### Luồng chi tiết

| Bước | Hành động | Thời gian |
|------|-----------|-----------|
| 1 | App tự lấy vị trí GPS | < 1s |
| 2 | Lọc theo bán kính, loại món, giá | 1–2s |
| 3 | User nhấn "Quay" | 1 click |
| 4 | Vòng quay xoay + dừng | 3s |
| 5 | Hiển thị thông tin quán + maps | < 1s |

---

## 3. Lợi ích

| Đối tượng | Lợi ích |
|-----------|---------|
| **Người dùng** | Quyết định trong 5 giây, không cần lướt |
| **Quán ăn** | Được giới thiệu ngẫu nhiên, tăng khách mới |
| **App** | Tăng retention, viral qua chia sẻ kết quả |

---

## 4. Tiêu chí thành công (KPI)

| Metric | Mục tiêu |
|--------|----------|
| Thời gian từ mở app → có kết quả | < 10s |
| Tỷ lệ quay lại 7 ngày | > 40% |
| Share rate | > 15% |

---

## 5. Phạm vi MVP

**Bao gồm:**
- ✅ Vòng quay cơ bản
- ✅ Lọc theo vị trí, loại món, giá
- ✅ Hiển thị thông tin quán

**Không bao gồm (giai đoạn sau):**
- ❌ Tích hợp đặt bàn
- ❌ Đánh giá trong app
- ❌ Recommendation AI
