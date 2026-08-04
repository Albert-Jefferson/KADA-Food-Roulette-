# Food Roulette - Frontend Application

## Overview

**Food Roulette** là một ứng dụng web gamified (hóa thưởng) phục vụ việc khám phá ẩm thực. Ứng dụng biến trải nghiệm chọn địa điểm ăn uống thành một trò chơi thú vị với các cơ chế streak, vườn, khế ước, vote nhóm, check-in GPS, review, và bảng xếp hạng.

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | React 18.3.1 + TypeScript 5.6.3 |
| **Build Tool** | Vite 6.0.5 |
| **Routing** | react-router-dom 6.28.0 |
| **Styling** | Tailwind CSS 3.4.17 + @tailwindcss/forms + @tailwindcss/container-queries |
| **Icons** | lucide-react 0.460.0 + Material Symbols Outlined (Google Fonts) |
| **Fonts** | Inter (body) + Plus Jakarta Sans (headings) |

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

Dev server chạy tại `http://localhost:5173`

---

## Project Structure

```
src/
├── assets/                    # Static assets
├── components/
│   └── layout/
│       └── MainLayout.tsx    # Layout wrapper (header, nav, footer)
├── pages/                    # 22 Page Components
│   ├── HomeSpinRewards.tsx           # Trang chính
│   ├── LuckySpinWheel.tsx            # Quay vòng may mắn
│   ├── SpinResult.tsx                # Kết quả quay
│   ├── MysteryBoxReveal.tsx          # Mở quà bí mật
│   ├── CheckInVerification.tsx        # Xác minh GPS
│   ├── CheckInCompleteRewards.tsx     # Phần thưởng
│   ├── WriteReview.tsx                # Viết review
│   ├── ReviewSubmitted.tsx            # Review đã gửi
│   ├── LocketFeed.tsx                # Social feed
│   ├── ProfileTasteProfile.tsx        # Profile + radar chart
│   ├── SeasonGarden.tsx               # Khu vườn
│   ├── EnhancedSeasonGardenProgress.tsx
│   ├── StreakDashboard.tsx           # Dashboard streak
│   ├── FriendsLeaderboardDetail.tsx   # BXH bạn bè
│   ├── NearbyRestaurantsLeaderboard.tsx
│   ├── NearbyRestaurantsMapView.tsx
│   ├── KhCCommitment.tsx            # Khế ước
│   ├── GroupSpinWhoSpins.tsx         # Chọn người quay
│   ├── GroupVoteVeto.tsx             # Vote veto
│   ├── GroupVoteResult.tsx           # Kết quả vote
│   ├── GroupCheckInVerification.tsx  # Check-in nhóm
│   ├── GroupCheckInCompleteRewards.tsx
│   └── ShareYourHarvestSuccess.tsx
├── App.tsx                  # Router configuration
├── main.tsx                 # Entry point
└── index.css                # Tailwind + custom CSS
```

---

## Routes & Navigation

| Route | Component |
|-------|-----------|
| `/` | HomeSpinRewards |
| `/spin` | LuckySpinWheel |
| `/spin/result` | SpinResult |
| `/mystery-box` | MysteryBoxReveal |
| `/check-in` | CheckInVerification |
| `/check-in/rewards` | CheckInCompleteRewards |
| `/review` | WriteReview |
| `/review/submitted` | ReviewSubmitted |
| `/locket` | LocketFeed |
| `/profile` | ProfileTasteProfile |
| `/garden` | SeasonGarden |
| `/garden/enhanced` | EnhancedSeasonGardenProgress |
| `/streak` | StreakDashboard |
| `/leaderboard` | FriendsLeaderboardDetail |
| `/leaderboard/restaurants` | NearbyRestaurantsLeaderboard |
| `/leaderboard/map` | NearbyRestaurantsMapView |
| `/commitment` | KhCCommitment |
| `/group-spin/who-spins` | GroupSpinWhoSpins |
| `/group-spin/veto` | GroupVoteVeto |
| `/group-spin/result` | GroupVoteResult |
| `/group-check-in` | GroupCheckInVerification |
| `/group-check-in/rewards` | GroupCheckInCompleteRewards |
| `/share/harvest` | ShareYourHarvestSuccess |

---

## Design System

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#b52330` | Nút chính, logo |
| Primary Container | `#ff5a5f` | Background nút |
| Secondary | `#8e4e14` | Màu phụ |
| Tertiary | `#166b47` | Màu xanh |
| Surface | `#fff8ef` | Nền chính (kem ấm) |
| Streak Gold | `#FFC107` | Streak, fire |

### Typography

| Class | Font | Size |
|-------|------|------|
| `display-hero` | Plus Jakarta Sans | 40px |
| `headline-lg` | Plus Jakarta Sans | 32px |
| `body-lg` | Inter | 18px |
| `body-md` | Inter | 16px |
| `label-strong` | Inter | 14px |
| `caption` | Inter | 12px |

---

## Features

### Gamification
- Lucky Spin Wheel với CSS animation
- Streak System với milestone badges
- Season Garden (30 ngày check-in)
- XP & Coins System
- Mystery Box Reveal

### Social
- Locket Feed (bạn bè & khám phá)
- Friends Leaderboard
- Group Spin & Vote

### Check-in
- GPS Verification
- Witness System
- Commitment System (khế ước)

### Reviews
- Write Review với rating 5 sao
- Taste Profile với radar chart

---

## Build Output

```
dist/
├── index.html
└── assets/
    ├── index-*.css
    └── index-*.js
```

---

**Last updated**: August 2026
