# 🍜 Food Roulette - Sitemap & Đặc tả thiết kế

## 1. Mục tiêu của cấu trúc

- Giúp người dùng hiểu trong khoảng **5 giây**: đây là ứng dụng gì, giải quyết vấn đề gì và hoạt động như thế nào.
- Dẫn người dùng theo một luồng duy nhất: **thấy vấn đề → hiểu giải pháp → thử ngay → chia sẻ → tin tưởng**.
- Giữ phiên bản đầu gọn nhẹ: một landing page chính, module roulette, module Taste Board, và các trang phụ cần thiết.
- Không mô tả sản phẩm như đã hoàn thiện; mọi hình ảnh minh họa phải có nhãn **"Giao diện minh họa"** hoặc **"Tính năng dự kiến"**.

---

## 2. Pain Points cần giải quyết

| Vấn đề | Mô tả |
|--------|-------|
| 🤔 **Không biết ăn gì** | Quá nhiều lựa chọn hoặc không có ý tưởng |
| ⏰ **Tốn thời gian quyết định** | Scroll menu, hỏi bạn bè mất 30 phút |
| 📸 **Muốn chia sẻ món ăn** | Thấy món ngon nhưng không biết giới thiệu sao |
| ⭐ **Cần review thật** | Review trên mạng thường không đáng tin |

---

## 3. Sơ đồ sitemap

```text
/
├── #trang-chu
│   ├── Thanh điều hướng
│   └── Hero + CTA chính
├── #van-de
│   └── Ba tình huống phổ biến
├── #cach-hoat-dong
│   ├── Quy trình 3 bước
│   └── Tính năng chính
├── #tinh-nang
│   ├── 🎰 Roulette thông minh
│   ├── 🔒 Food Taste Board
│   ├── ⭐ Review thật
│   └── 📍 Khám phá xung quanh
├── #doi-tuong-su-dung
│   ├──Người độc thân
│   ├── 👫 Cặp đôi
│   ├── 👨‍👩‍👧‍👦 Gia đình
│   └── 👥 Nhóm bạn
├── #social-proof
│   ├── Thống kê người dùng
│   └── Testimonials
├── #dang-ky
│   └── Form đăng ký / Download app
├── #faq
│   └── Câu hỏi thường gặp
└── #cta-cuoi
    └── CTA đăng ký + Footer

/spin
├── Trang roulette chính
├── Bộ lọc (cuisine, khoảng cách, giá, chế độ ăn)
└── Kết quả spin + hành động

/taste-boards
├── Trang chủ Taste Board
├── Tạo Taste Board mới
├── Taste Board của tôi
├── Taste Board được chia sẻ
└── Khám phá Taste Board cộng đồng

/taste-boards/[id]
├── Chi tiết Taste Board
├── Gallery ảnh
├── Bình luận
└── Hành động (save, share, want this too)

/reviews
├── Trang reviews cộng đồng
├── Viết review
├── Chi tiết review
└── Bộ lọc (gần tôi, xu hướng, mới nhất)

/profile/[username]
├── Trang cá nhân
├── Thành tích
├── Hoạt động của tôi
└── Cài đặt

/dang-nhap
/dang-ky

/chinh-sach-bao-mat
/dieu-khoan-su-dung
```

---

## 4. Cấu trúc trang chủ

| Thứ tự | Khu vực | Mục đích | Nội dung chính | Hành động |
|--------|---------|----------|----------------|-----------|
| 01 | Hero | Định vị sản phẩm ngay lập tức | Spin wheel animation, tagline chính | **Thử ngay** |
| 02 | Vấn đề | Tạo sự đồng cảm | Không biết ăn gì, tốn thời gian, muốn chia sẻ | Xem giải pháp |
| 03 | Cách hoạt động | Làm rõ cơ chế | Spin → Khám phá → Chia sẻ | Thử spin |
| 04 | Tính năng | Chứng minh tính hữu ích | Roulette, Taste Board, Reviews, Map | Khám phá thêm |
| 05 | Đối tượng | Cá nhân hóa thông điệp | 4 nhóm người dùng phổ biến | Đăng ký theo nhóm |
| 06 | Social Proof | Xây dựng niềm tin | Stats, testimonials, reviews | Đọc review |
| 07 | Đăng ký / CTA | Thu lead / download | Form đăng ký hoặc download app | **Bắt đầu ngay** |
| 08 | FAQ | Gỡ rào cản | Câu hỏi về tính năng, bảo mật, chi phí | Mở từng câu hỏi |
| 09 | CTA cuối | Chốt chuyển đổi | "Sẵn sàng quyết định nhanh hơn?" | **Thử miễn phí** |

---

## 5. Điều hướng chính

### Desktop

- Logo / `Food Roulette`
- Tính năng
- Cách hoạt động
- Reviews
- Câu hỏi thường gặp
- Nút **Thử ngay / Đăng ký**

### Mobile

- Logo / `Food Roulette`
- Menu thu gọn (hamburger)
- Nút CTA cố định ở bottom hoặc luôn hiện ở vùng dễ chạm
- Các liên kết cuộn đến đúng section trên cùng một trang

---

## 6. Luồng chuyển đổi chính

```text
Nguồn truy cập (Social, Search, Referral)
    ↓
Hero: hiểu lợi ích trong 5 giây (spin wheel + tagline)
    ↓
Vấn đề + cách hoạt động (3 bước)
    ↓
Tính năng chính (Roulette, Taste Board, Reviews)
    ↓
Social proof + testimonials
    ↓
Form đăng ký / Download app
    ↓
Onboarding → Spin đầu tiên
    ↓
Tạo Taste Board / Viết Review
    ↓
Chia sẻ với bạn bè
```

**CTA tracking labels:**

- `hero_primary` - CTA hero chính
- `spin_cta` - Nút spin ở giữa trang
- `features_card` - CTA ở card tính năng
- `locket_preview` - CTA xem trước Taste Board
- `final_cta` - CTA cuối trang

---

## 7. Metadata & SEO ban đầu

| Trang | Title đề xuất | Mô tả | Từ khóa |
|-------|--------------|-------|---------|
| `/` | Food Roulette - Quyết định món ăn trong 3 giây | Không biết ăn gì? Để Food Roulette chọn cho bạn. Spin ngẫu nhiên, khám phá món mới, chia sẻ với bạn bè. | quyết định món ăn, spin ăn uống, gợi ý nhà hàng, random food picker |
| `/spin` | Spin Ngay - Food Roulette | Thử vận may với bánh xe quay roulette ẩm thực. Bộ lọc theo loại món, khoảng cách, giá cả. | spin món ăn, roulette ẩm thực, quyết định ăn gì |
| `/lockets` | Food Taste Board - Chia sẻ & Sưu tầm món ngon | Tạo bộ sưu tập món ăn yêu thích. Chia sẻ với bạn bè, xem review thật từ cộng đồng. | food locket, chia sẻ món ăn, sưu tầm món ngon |
| `/reviews` | Reviews thật - Food Roulette | Đọc review ẩm thực từ người dùng thật. Tìm món ngon được đánh giá cao gần bạn. | review nhà hàng, review món ăn, đánh giá ẩm thực |

---

## 8. Phạm vi phiên bản đầu (v1.0)

### Làm ngay

- Landing page một trang với đầy đủ các section.
- Module Roulette cơ bản (spin wheel, filters, result card).
- Module Taste Board cơ bản (tạo, xem, chia sẻ).
- Trang Reviews cơ bản (xem, viết, filter).
- Trang Profile và Settings.
- Đăng ký / Đăng nhập.
- Chính sách bảo mật và điều khoản sử dụng.
- Theo dõi: spin, tạo locket, viết review, chia sẻ.

### Để giai đoạn sau (v1.5+)

- Trang bảng giá độc lập (nếu có premium).
- Module AI-powered suggestions.
- Interactive map đầy đủ.
- Push notifications.
- Gamification (achievements, streaks).
- Tích hợp đặt hàng trực tiếp.
- Multi-city support.
- Trang đối tác / nhà hàng.
- Trung tâm tài liệu / help center.

---

## 9. Nguyên tắc nội dung bắt buộc

### Tone giọng (5 tính từ)

**Rõ ràng, vui vẻ, tin cậy, nhanh, gần gũi.**

### Cách nói đúng

- Nói thẳng vào lợi ích: quyết định nhanh, chia sẻ dễ dàng, tìm món ngon.
- Dùng ngôn ngữ đời thường: spin, quay, locket, review, món ngon.
- Ưu tiên câu ngắn, có động từ mạnh.
- Tập trung vào cảm xúc (vui khi tìm được món mới, hào hứng khi chia sẻ).

### Cách nói tránh

- Không phóng đại kiểu "luôn luôn đúng", "tuyệt đối hoàn hảo".
- Không dùng thuật ngữ kỹ thuật nếu không cần thiết.
- Không hứa hẹn mơ hồ về kết quả.
- Không so sánh trực tiếp với đối thủ.

### Từ ngữ thống nhất

- Dùng: **"spin"**, không dùng "quay số", "lucky draw"
- Dùng: **"locket"**, không dùng "bộ sưu tập", "danh sách yêu thích"
- Dùng: **"review"**, không dùng "đánh giá" (dùng cho rating)
- Dùng: **"món ăn"**, "nhà hàng"**, không dùng "đồ ăn", "cửa hàng"

### Câu mẫu

- "Quyết định trong 3 giây, không phí thời gian."
- "Chia sẻ món ngon với bạn bè chỉ bằng một lần nhấn."
- "Review từ người dùng thật, không phải quảng cáo."
- "Khám phá món mới mỗi ngày, không bao giờ nhàm chán."

---

## 10. Design Language (Inspired by Orchexa)

### Bảng màu

| Vai trò | Màu | Hex | Cách dùng |
|---------|-----|-----|-----------|
| Màu chính | Cam năng lượng | `#FF6B35` | CTA, nhấn tiêu đề, trạng thái quan trọng |
| Màu phụ | Xanh navy đậm | `#1A1A2E` | Nền đặc biệt, header, footer |
| Màu accent | Teal mint | `#00D4AA` | Success, highlights, secondary actions |
| Nền chính | Đen nhẹ | `#0F0F1A` | Background toàn trang |
| Nền card | Xám đậm | `#1E1E2E` | Card, vùng nội dung |
| Chữ chính | Trắng | `#FFFFFF` | Tiêu đề, nội dung quan trọng |
| Chữ phụ | Xám nhạt | `#A0A0B0` | Ghi chú, caption, label |
| Gradient | Cam → Cam nhạt | `linear-gradient(135deg, #FF6B35, #FF8E53)` | Buttons, highlights |

### Typography

**Font đề xuất:**

- Heading: **Inter Bold / SemiBold** (700, 600)
- Body: **Inter Regular / Medium** (400, 500)

**Thang cỡ chữ:**

- H1: 48-56px, đậm, ngắn, ưu tiên nhịp thở rộng
- H2: 32-40px
- H3: 24-28px
- Body: 16-18px
- Caption: 13-14px

### Nguyên tắc thiết kế

1. Dark mode-first (như Orchexa)
2. Gradient accents cho năng lượng
3. Glassmorphism cards (nền trong suốt nhẹ)
4. Micro-interactions mượt
5. Trust signals ở khắp nơi (stats, badges, reviews)

---

## 11. Kiến trúc trang chi tiết

```
FOOD-ROULETTE-WEBSITE
│
├── 🏠 Trang chủ (/)
│   ├── Hero với Spin Wheel animation
│   ├── Section "Vấn đề của bạn"
│   ├── Section "Cách hoạt động" (3 bước)
│   ├── Section "Tính năng chính"
│   ├── Section "Đối tượng sử dụng"
│   ├── Section "Social Proof"
│   ├── Section "Đăng ký / CTA"
│   ├── Section "FAQ"
│   └── Footer
│
├── 🎰 Trang Roulette (/spin)
│   ├── Spin Wheel Component
│   │   ├── Idle state
│   │   ├── Spinning animation
│   │   └── Result reveal
│   ├── Filters Panel
│   │   ├── Loại món (Vietnamese, Japanese, Korean...)
│   │   ├── Khoảng cách (slider 1-10km)
│   │   ├── Mức giá ($ - $$$$)
│   │   └── Chế độ ăn (vegetarian, vegan, halal...)
│   ├── Result Card
│   │   ├── Restaurant info
│   │   ├── Món ăn đề xuất
│   │   ├── Quick actions (view, save, share)
│   │   └── "Quay lại" / "Đây là lựa chọn của tôi!"
│   └── Quick Spin Button (bỏ qua filter)
│
├── 🔒 Trang Taste Board (/lockets)
│   ├── Tab: Taste Board của tôi
│   │   ├── Danh sách locket đã tạo
│   │   ├── Tạo locket mới
│   │   └── Quản lý locket
│   ├── Tab: Được chia sẻ với tôi
│   │   ├── Danh sách locket từ bạn bè
│   │   └── Thông báo locket mới
│   └── Tab: Khám phá
│       ├── Taste Board xu hướng
│       ├── Taste Board gần tôi
│       └── Taste Board từ người tôi theo dõi
│
├── 🔒 Chi tiết Taste Board (/lockets/[id])
│   ├── Header: Tên locket, người tạo, số items
│   ├── Gallery: Ảnh carousel ngang
│   ├── Items List
│   │   ├── Thông tin món ăn
│   │   ├── Rating & review
│   │   ├── Ghi chú từ người tạo
│   │   └── Tags
│   ├── Actions
│   │   ├── "Tôi cũng muốn ăn!" (Want This Too)
│   │   ├── Lưu vào Taste Board của tôi
│   │   └── Chia sẻ
│   ├── Comments
│   │   ├── Bình luận từ bạn bè
│   │   └── Thêm bình luận
│   └── QR Code để chia sẻ offline
│
├── ⭐ Trang Reviews (/reviews)
│   ├── Filters: Gần tôi, Xu hướng, Mới nhất, Theo dõi
│   ├── Review Cards Grid
│   │   ├── User avatar & name
│   │   ├── Restaurant info
│   │   ├── Rating stars
│   │   ├── Nội dung review
│   │   ├── Ảnh đính kèm
│   │   └── Actions (helpful, comment, save)
│   ├── Write Review Button (FAB trên mobile)
│   └── Write Review Modal
│       ├── Tìm kiếm nhà hàng
│       ├── Rating tổng + chi tiết
│       ├── Nội dung review
│       ├── Upload ảnh (tối đa 5)
│       ├── Tags (tối đa 5)
│       └── Tùy chọn lưu vào Taste Board
│
├── 👤 Trang Profile (/profile/[username])
│   ├── Avatar & Info
│   ├── Stats: Spins, Reviews, Taste Boards
│   ├── Achievements & Badges
│   ├── Taste Profile (biểu đồ)
│   ├── Tabs: Reviews, Taste Boards, Spins, Đã lưu
│   └── Settings Button (nếu là profile của mình)
│
├── 🔐 Dashboard (/dashboard)
│   ├── Tổng quan
│   │   ├── Stats overview
│   │   └── Recent activity
│   ├── Quản lý Taste Board
│   ├── Reviews của tôi
│   ├── Lịch sử Spin
│   ├── Nhà hàng đã lưu
│   └── Cài đặt
│       ├── Tài khoản
│       ├── Thông báo
│       ├── Quyền riêng tư
│       └── Ứng dụng đã kết nối
│
├── 🔐 Đăng nhập / Đăng ký (/login, /register)
├── 📄 Chính sách bảo mật (/chinh-sach-bao-mat)
├── 📄 Điều khoản sử dụng (/dieu-khoan-su-dung)
└── 📱 Mobile App (tương lai)
```

---

## 12. Luồng người dùng chính

### Luồng 1: Quyết định nhanh

```
Mở app/landing → Nhấn "Spin" → (Tùy chọn) Điều chỉnh bộ lọc →
Bánh xe quay → Xem kết quả → [Thích] → Xem chi tiết →
Điều hướng / Gọi món
          ↓
     [Không thích] → Quay lại spin
```

### Luồng 2: Chia sẻ món ăn

```
Thấy/tự ăn món ngon → "Lưu vào Taste Board" → Chọn hoặc tạo Taste Board →
Thêm ghi chú, ảnh → Chia sẻ cho bạn bè →
Bạn bè nhận thông báo → Họ có thể "Tôi cũng muốn ăn!"
```

### Luồng 3: Xây dựng uy tín

```
Ghé thăm nhà hàng → Viết Review →
Đánh giá (tổng + chi tiết) → Thêm ảnh & tags →
Tùy chọn lưu vào Taste Board → Đăng review →
Nhận likes & comments → Tích lũy followers & badges
```

---

## 13. Component Inventory

### 1. Spin Wheel Component

| Trạng thái | Mô tả |
|------------|-------|
| Idle | Bánh xe đứng yên, có thể nhấn spin |
| Spinning | Animation 3D rotation với easing deceleration |
| Result | Hiệu ứng reveal kết quả với confetti/chime |
| Error | Thông báo lỗi, nút retry |

- **Interaction**: Click/tap to spin, haptic feedback on mobile
- **Sound**: Tiếng quay (tùy chọn), tiếng kết quả

### 2. Restaurant Card

| Trạng thái | Mô tả |
|------------|-------|
| Default | Ảnh, tên, rating, khoảng cách, giá |
| Hover | Slight lift, hiện quick actions |
| Expanded | Full details, menu preview, directions |
| Loading | Skeleton với shimmer |
| Empty | "Không tìm thấy nhà hàng phù hợp" |

### 3. Taste Board Card

| Trạng thái | Mô tả |
|------------|-------|
| Default | Cover image, tên, số items, người tạo |
| Hover | Preview items (carousel) |
| Shared | Hiện số chia sẻ, reactions |
| Empty | "Chưa có món nào" state |

### 4. Review Card

| Trạng thái | Mô tả |
|------------|-------|
| Default | Avatar, rating stars, excerpt, photos |
| Expanded | Full review, detailed ratings, tags |
| Own Review | Hiện Edit/Delete actions |

### 5. User Avatar

| Kích thước | Pixel | Sử dụng |
|------------|-------|---------|
| Small | 32px | Comments, notifications |
| Medium | 48px | Cards, lists |
| Large | 96px | Profile header |
| XL | 128px | Profile page |

- **States**: Online indicator, verified badge, achievement ring
- **Fallback**: Initials on gradient background

### 6. Action Buttons

| Loại | Mô tả |
|------|-------|
| Primary | Gradient background (Orange), white text |
| Secondary | Ghost/outline style |
| Icon | Circular với tooltip |
| Loading | Spinner replacement |

### 7. Filter Chips

| Trạng thái | Mô tả |
|------------|-------|
| Default | Outlined, secondary color |
| Selected | Filled với accent color |
| Category Groups | Cuisine, Distance, Price, Dietary |

---

## 14. Technical Considerations

### Frontend Stack

| Công nghệ | Gợi ý |
|-----------|-------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + custom design tokens |
| Animation | Framer Motion |
| Maps | Mapbox hoặc Google Maps API |
| State Management | Zustand |
| UI Components | shadcn/ui hoặc Radix |

### Backend Stack

| Công nghệ | Gợi ý |
|-----------|-------|
| API | Next.js API Routes hoặc tRPC |
| Database | Supabase hoặc PostgreSQL |
| Auth | NextAuth.js / Supabase Auth |
| Storage | Cloudinary hoặc Supabase Storage (images) |
| Search | Algolia hoặc Meilisearch |
| Location | Google Places API |

### Data Models

```typescript
// User
interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  preferences: FoodPreferences;
  stats: UserStats;
  achievements: Achievement[];
}

// Restaurant
interface Restaurant {
  id: string;
  name: string;
  location: GeoLocation;
  cuisine: CuisineType[];
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  reviewCount: number;
  images: string[];
  menu?: MenuItem[];
}

// Taste Board
interface Taste Board {
  id: string;
  ownerId: string;
  title: string;
  description?: string;
  type: 'photo' | 'review' | 'recommendation' | 'discovery';
  items: Taste BoardItem[];
  isPublic: boolean;
  sharedWith?: string[]; // user IDs
  createdAt: Date;
  updatedAt: Date;
}

// Taste BoardItem
interface Taste BoardItem {
  id: string;
  restaurantId?: string;
  dishName?: string;
  image: string;
  note?: string;
  rating?: number;
  addedBy: string;
  addedAt: Date;
}

// Review
interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  overallRating: number;
  ratings: DetailRatings;
  content: string;
  photos: string[];
  tags: string[];
  createdAt: Date;
  helpful: number;
  locketId?: string;
}
```

---

## 15. Responsive Breakpoints

| Breakpoint | Chiều rộng | Điều chỉnh layout |
|------------|------------|-------------------|
| Mobile | < 640px | Single column, bottom nav, cards full-width |
| Tablet | 640-1024px | 2-column grid, sidebar collapses |
| Desktop | 1024-1440px | 3-column grid, persistent sidebar |
| Large | > 1440px | Max-width container, centered |

---

## 16. Accessibility Requirements

- **Độ tương phản màu**: Tối thiểu 4.5:1 cho text
- **Điều hướng bàn phím**: Hỗ trợ tab đầy đủ
- **Screen Reader**: Labels ARIA đúng cách
- **Motion**: Tôn trọng `prefers-reduced-motion`
- **Focus States**: Indicators hiển thị rõ ràng

---

## 17. Tính năng tương lai (v2.0)

- 🤖 AI Food Advisor (chat với bot)
- 📱 Apple Watch / Wear OS app
- 🎮 Gamification (streaks, challenges)
- 🛒 Tích hợp đặt hàng trực tiếp
- 🍴 Tích hợp kế hoạch ăn uống
- 🎥 Video reviews ngắn (TikTok-style)
- 🌍 Hỗ trợ đa thành phố
- 👨‍🍳 Trang dành cho nhà hàng/đối tác

---

## 18. Success Metrics

| Metric | Mô tả |
|--------|-------|
| 📈 DAU | Daily Active Users |
| 🎰 Spins/session | Trung bình số lần spin mỗi phiên |
| 🔒 Taste Boards created | Số locket được tạo & chia sẻ |
| ⭐ Reviews submitted | Số review được đăng |
| 👥 Social shares | Số lần chia sẻ mạng xã hội |
| 📍 Discovery rate | Tỷ lệ khám phá nhà hàng mới |
| ⏱️ Time-to-decision | Thời gian quyết định (nên giảm) |

---

*Tài liệu phiên bản: 2.0*
*Cập nhật lần cuối: 2026-07-24*
*Lấy cảm hứng từ Orchexa Design System*
