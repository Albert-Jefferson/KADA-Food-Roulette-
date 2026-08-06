# Food Roulette

> *"Không biết ăn gì? Để vòng quyết định."*

**Food Roulette** là mobile app (React Native + Expo) giúp người Việt Nam chọn quán ăn ngẫu nhiên xung quanh vị trí hiện tại bằng cách quay một bánh xe.

---

## Tính năng nổi bật

| Tính năng | Mô tả |
|------------|--------|
| **Spin cá nhân** | Quay bánh xe chọn quán trong 3 giây, filter theo loại món / khoảng cách / giá |
| **Group Spin** | Quay chung cho nhóm tối đa 20 người, vote chấp nhận hoặc quay lại |
| **Locket (camera-only)** | Chụp ảnh món ăn trực tiếp từ camera, có GPS + timestamp chống ảnh giả |
| **Menu Capture** | Chụp menu tại quán, AI đọc và parse thành danh sách món |
| **AI Personalization** | Gợi ý best match cho từng member trong circle dựa trên sở thích |
| **Review thật** | Hệ thống đánh giá từ người dùng thật, không quảng cáo trá hình |

---

## Tech Stack

| Layer | Công nghệ |
|-------|-----------|
| Mobile App | Expo SDK 52 + Expo Router + TypeScript |
| UI | NativeWind (Tailwind cho RN) + Design tokens Earthy |
| Animation | Reanimated 3 + Moti |
| State | Zustand + TanStack Query |
| Backend | Supabase (Postgres + Auth + Storage + Realtime) |
| Database | Postgres + PostGIS |
| Map | react-native-maps + OpenStreetMap |

---

## Bắt đầu

### Yêu cầu

- Node.js 20+
- npm hoặc yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo account (để build)

### Setup

```bash
# Clone repo
git clone https://github.com/your-org/food-roulette.git
cd food-roulette

# Install dependencies
npm install

# Copy env template
cp .env.example .env

# Start development
npm start
```

### Environment Variables

```env
# Supabase
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Maps (optional)
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

---

## Cấu trúc dự án

```
KADA-Food-Roulette/
├── apps/
│   └── mobile/                    # Expo + React Native app
│       └── app/                  # Expo Router pages
├── brand/                        # Brand & specs
│   ├── prompts.md               # Master prompt (single source of truth)
│   ├── brand.md                 # Brand kit
│   └── FOOD-ROULETTE-SITEMAP.md # Feature specs
├── content/                     # Content & exploration
│   └── explore/                 # Strategy docs
├── docs/                        # Documentation
│   └── food_roulette_erd.drawio.xml # ERD
├── VIBE_RULES.md               # Vibe coding rules
├── AGENTS.md                   # AI agent conventions
├── CHANGELOG_SPEC.md           # Spec change log
└── PROMPT_TEMPLATES/          # AI context templates
```

---

## Team

| Role | Người | MSSV |
|------|-------|------|
| PM / Fullstack Lead | Đặng Tuấn Anh | N23DCAT003 |
| Frontend Developer | Lê Văn Hoàng Hiếu | N24DECE018 |
| Frontend / Content | Trần Gia Bình | N24DECE005 |
| Backend Developer | Lê Huy Trường | N23DCCN064 |
| Backend / DevOps | Nguyễn Thành Nam | N23DCCN108 |

---

## Tài liệu

| File | Mô tả |
|------|--------|
| `brand/prompts.md` | Master prompt cho AI (copy/paste vào AI) |
| `brand/brand.md` | Brand kit (màu, font, tone) |
| `brand/FOOD-ROULETTE-SITEMAP.md` | Sitemap & feature specs |
| `VIBE_RULES.md` | Golden rules cho vibe coding |
| `AGENTS.md` | AI agent conventions & role templates |
| `docs/food_roulette_erd.drawio.xml` | Entity Relationship Diagram |

---

## License

MIT
