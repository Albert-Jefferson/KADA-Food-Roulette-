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
│   └── web/                         # React + Vite web app
│       ├── src/
│       │   ├── api/                 # API client layer
│       │   │   └── endpoints/      # API endpoint definitions
│       │   ├── components/          # Shared components
│       │   ├── features/            # Feature-based modules
│       │   │   ├── auth/           # Auth feature
│       │   │   ├── roulette/       # Spin/Roulette feature
│       │   │   ├── groups/         # Group spin feature
│       │   │   ├── lockets/        # Locket feature
│       │   │   ├── restaurants/    # Restaurant feature
│       │   │   ├── profile/        # Profile feature
│       │   │   ├── checkin/        # Check-in feature
│       │   │   ├── menu/           # Menu capture feature
│       │   │   └── rewards/        # Rewards/Gamification
│       │   ├── hooks/              # Global hooks
│       │   ├── stores/             # Zustand stores
│       │   └── lib/               # Utils & constants
│       └── package.json
│
├── backend/                         # Express.js + Prisma backend
│   ├── prisma/                     # Database schema & migrations
│   └── src/
│       ├── index.ts                # Express app entry
│       ├── modules/                 # Feature modules (auth, roulette, groups...)
│       ├── shared/                 # Shared services (middleware, utils)
│       ├── middleware/              # CORS, error handling
│       ├── utils/                  # JWT, hash, response helpers
│       └── lib/                    # Prisma client
│
├── docs/                           # Documentation
│   ├── food_roulette_erd_v5.0_reviewed.xml  # ERD v5.0 (latest)
│   ├── API_SPEC.md
│   ├── ERD_MIGRATION_NOTES.md
│   └── FUNCTIONAL_REQUIREMENTS.md
├── brand/                          # Brand & specs
├── docker/                         # Docker configs
├── .agents/                        # Agent skills
├── CLAUDE.md                       # AI entry point
├── VIBE_RULES.md                  # Golden rules
└── AGENTS.md                      # AI conventions
```

---

## Database Setup (MySQL)

### Yêu cầu

- MySQL 8.0+
- Docker (recommended) hoặc local MySQL

### Setup với Docker

```bash
# Pull MySQL image
docker pull mysql:8.0

# Run container
docker run -d \
  --name food_roulette_mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=food_roulette \
  mysql:8.0
```

### Setup Database

```bash
# 1. Create database
mysql -u root -p < backend/prisma/migrations/v5.0/000_create_database.sql

# 2. Create tables
mysql -u root -p food_roulette < backend/prisma/migrations/v5.0/complete_schema.sql

# 3. Seed test data
mysql -u root -p food_roulette < backend/prisma/migrations/v5.0/seed_data.sql
```

### Migrations

| File | Mục đích |
|------|----------|
| `000_create_database.sql` | Tạo database + user |
| `complete_schema.sql` | Tạo tất cả 15 tables |
| `seed_data.sql` | Seed data cho testing |
| `csv_data/import_csv.sql` | Import từ CSV (future) |
| `validation_queries.sql` | 5 complex validation queries |

### Tables (v5.0)

| Table | Entity | Priority |
|-------|--------|----------|
| `users` | User accounts | P0 |
| `restaurants` | Restaurant data | P0 |
| `restaurant_hours` | Opening hours (4NF) | P0 |
| `restaurant_photos` | Photos (4NF) | P0 |
| `friendships` | Social connections | P0 |
| `spin_groups` | Group spin sessions | P0 |
| `group_members` | Group members | P0 |
| `spin_sessions` | Spin results | P0 |
| `spin_session_candidates` | Restaurant candidates | P0 |
| `votes` | Group votes | P0 |
| `spin_wallets` | Spin balance | P0 |
| `spin_logs` | Spin history | P0 |
| `lockets` | Food photos | P1 |
| `check_ins` | Check-in records | P1 |
| `spin_packs` | Purchased spin packs | P1 |

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
| `docs/food_roulette_erd_v5.0_reviewed.xml` | Entity Relationship Diagram (v5.0) |

---

## License

MIT
