# Food Roulette

> *"Không biết ăn gì? Để vòng quyết định."*

**Food Roulette** la web app (React + Vite) giup nguoi Viet Nam chon quan an ngau nhien xung quanh vi tri hien tai bang cach quay mot banh xe.

---

## Tinh nang noi bat

| Tinh nang | Mo ta |
|------------|--------|
| **Spin ca nhan** | Quay banh xe chon quan trong 3 giay, filter theo loai mon / khoang cach / gia |
| **Group Spin** | Quay chung cho nhom toi da 20 nguoi, vote chap nhan hoac quay lai |
| **Locket (camera-only)** | Chap anh mon an truc tiep tu camera, co GPS + timestamp chong anh gia |
| **Menu Capture** | Chap menu tai quan, AI doc va parse thanh danh sach mon |
| **AI Personalization** | Goi y best match cho tung member trong circle dua tren so thich |
| **Review that** | He thong danh gia tu nguoi dung that, khong quang cao tra hinh |

---

## Tech Stack

### Frontend (Web)
| Layer | Cong nghe |
|-------|-----------|
| Framework | React 19 + Vite 6 + TypeScript |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| State | Zustand |
| Data fetching | TanStack Query |
| HTTP | Axios |
| UI | Design tokens Earthy/warm-light-first |

### Backend
| Layer | Cong nghe |
|-------|-----------|
| Runtime | Node.js 20 LTS |
| Framework | Express.js |
| ORM | Prisma |
| Database | MySQL 8.0 (Docker local) |
| Auth | JWT + bcryptjs |
| API | REST |

---

## Bat dau

### Yeu cau

- Node.js 20+
- npm hoac yarn
- Docker (cho MySQL)

### Setup

**1. Clone repo**
```bash
git clone https://github.com/your-org/food-roulette.git
cd food-roulette
```

**2. Setup Database (Docker MySQL)**
```bash
cd docker
docker-compose up -d
```

**3. Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your settings (DATABASE_URL already configured for Docker)
npx prisma generate
npx prisma db push
npm run dev
```
Backend chay tai: http://localhost:3000

**4. Setup Web App**
```bash
cd apps/web
npm install
cp .env.example .env
# Edit .env - set VITE_API_URL=http://localhost:3000/api (hoac de mac dinh)
npm run dev
```
Web app chay tai: http://localhost:5173

### Environment Variables

**Backend (.env)**
```env
DATABASE_URL="mysql://food_user:foodpassword@localhost:3306/food_roulette"
JWT_SECRET="your-secret-key-min-32-characters-long"
PORT=3000
CLIENT_URL=http://localhost:5173
```

**Web App (.env)**
```env
VITE_API_URL=http://localhost:3000/api
```

---

## Cau truc du an

```
KADA-Food-Roulette/
├── apps/
│   └── web/                         # React + Vite web app
│       └── src/
│           ├── api/                 # API client layer
│           │   └── endpoints/       # API endpoint definitions
│           ├── components/           # Shared components
│           ├── features/             # Feature-based modules
│           │   ├── auth/            # Auth feature
│           │   ├── roulette/        # Spin/Roulette feature
│           │   ├── groups/          # Group spin feature
│           │   ├── lockets/         # Locket feature
│           │   ├── restaurants/     # Restaurant feature
│           │   ├── profile/         # Profile feature
│           │   ├── checkin/         # Check-in feature
│           │   ├── menu/            # Menu capture feature
│           │   └── rewards/         # Rewards/Gamification
│           ├── hooks/               # Global hooks
│           ├── stores/              # Zustand stores
│           └── lib/                 # Utils & constants
│
├── backend/                          # Express.js + Prisma backend
│   └── src/
│       ├── index.ts                 # Express app entry
│       ├── modules/                 # Feature modules
│       ├── shared/                  # Shared services
│       └── middleware/              # CORS, auth, error handling
│
├── docker/                           # Docker configs
├── docs/                             # Documentation
│   ├── API_SPEC.md
│   └── food_roulette_erd_v5.0_reviewed.xml
├── brand/                            # Brand & specs
├── CLAUDE.md                         # AI entry point
├── VIBE_RULES.md                    # Golden rules
└── AGENTS.md                         # AI conventions
```

---

## API Endpoints

### Auth
| Method | Endpoint | Mo ta |
|--------|----------|-------|
| POST | /api/v1/auth/register | Dang ky |
| POST | /api/v1/auth/login | Dang nhap |
| GET | /api/v1/auth/me | Lay thong tin user hien tai |
| POST | /api/v1/auth/refresh | Lam moi token |
| POST | /api/v1/auth/forgot-password | Quen mat khau |
| POST | /api/v1/auth/reset-password | Dat lai mat khau |

### Spins
| Method | Endpoint | Mo ta |
|--------|----------|-------|
| POST | /api/v1/spins/personal | Quay banh xe ca nhan |
| POST | /api/v1/spins/accept | Chap nhan ket qua |
| POST | /api/v1/spins/reroll | Quay lai |
| GET | /api/v1/spins/history | Lay lich su quay |

### Groups
| Method | Endpoint | Mo ta |
|--------|----------|-------|
| POST | /api/v1/groups | Tao nhom moi |
| GET | /api/v1/groups | Lay danh sach nhom |
| GET | /api/v1/groups/:id | Lay chi tiet nhom |
| POST | /api/v1/groups/:id/spin | Bat dau quay nhom |
| POST | /api/v1/groups/:id/vote | Binh chon ket qua |

### Restaurants
| Method | Endpoint | Mo ta |
|--------|----------|-------|
| GET | /api/v1/restaurants | Tim kiem quan an |
| GET | /api/v1/restaurants/:id | Lay chi tiet quan |
| POST | /api/v1/restaurants | Them quan moi |

### Lockets
| Method | Endpoint | Mo ta |
|--------|----------|-------|
| GET | /api/v1/lockets/feed | Lay feed locket |
| POST | /api/v1/lockets | Upload locket moi |

---

## Tai lieu

| File | Mo ta |
|------|--------|
| `brand/prompts.md` | Master prompt cho AI |
| `brand/brand.md` | Brand kit (mau, font, tone) |
| `brand/FOOD-ROULETTE-SITEMAP.md` | Sitemap & feature specs |
| `docs/API_SPEC.md` | Chi tiet API specification |
| `VIBE_RULES.md` | Golden rules cho vibe coding |
| `AGENTS.md` | AI agent conventions |

---

## Team

| Role | Nguoi | MSSV |
|------|-------|-------|
| PM / Fullstack Lead | Dang Tuan Anh | N23DCAT003 |
| Frontend Developer | Le Van Hoang Hieu | N24DECE018 |
| Frontend / Content | Tran Gia Binh | N24DECE005 |
| Backend Developer | Le Huy Truong | N23DCCN064 |
| Backend / DevOps | Nguyen Thanh Nam | N23DCCN108 |

---

## License

MIT
