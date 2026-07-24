# app/

> Source code chính của **Food Roulette** — sẽ là Expo + Expo Router (React Native).

## Trạng thái hiện tại

🚧 **Pre-implementation.** Chưa có code. Thư mục này chỉ chứa README mô tả stack và cấu trúc dự kiến.

Khi sẵn sàng code, tạo project bằng:

```bash
npx create-expo-app@latest . --template default
```

rồi tuân theo cấu trúc bên dưới.

## Stack

| Layer | Lựa chọn | Ghi chú |
|-------|----------|---------|
| Framework | **Expo SDK 52+** + TypeScript | Expo Router (file-based routing) |
| UI | **NativeWind** | Tailwind cho RN — tokens map 1-1 với `../brand/brand.md` |
| Animation | **Reanimated 3** + **Moti** | Spin wheel, micro-interactions |
| State | **Zustand** + **TanStack Query** | Cache server data |
| Map | **react-native-maps** + OpenStreetMap tiles | Không dùng Google Maps (license) |
| Camera | **expo-image-picker** (`cameraOnly: true`) | Chặn upload từ gallery |
| GPS | **expo-location** | Foreground + background khi cần |
| Push | **Expo Push Notifications** | Free cho v1 |
| Backend | **Supabase** | Postgres + Auth + Storage + Realtime + PostGIS |
| Lint/Format | ESLint + Prettier (Expo defaults) | |
| Test | Jest + React Native Testing Library (chưa setup) | |

## Cấu trúc thư mục dự kiến

```
app/
├── _layout.tsx                # Root layout (Expo Router)
├── (auth)/                    # Auth flow (ẩn tab bar)
│   ├── _layout.tsx
│   ├── login.tsx
│   ├── register.tsx
│   └── onboarding.tsx
├── (tabs)/                    # Main tabs (hiện tab bar)
│   ├── _layout.tsx
│   ├── index.tsx              # Home / Spin
│   ├── lockets.tsx            # Locket feed
│   ├── map.tsx                # Nearby map
│   └── profile.tsx            # My profile
├── spin/
│   ├── index.tsx              # Spin screen
│   ├── [spinId].tsx           # Spin result detail
│   └── group/
│       └── [groupId].tsx      # Group spin voting
├── locket/
│   ├── capture.tsx            # Camera-only capture
│   ├── [locketId].tsx         # Locket detail
│   └── new/
│       └── _layout.tsx        # Multi-step new locket
├── restaurants/
│   ├── [id].tsx               # Restaurant detail
│   └── add.tsx                # Submit user-submitted restaurant
├── steward/
│   ├── _layout.tsx
│   ├── queue.tsx              # Pending restaurants
│   └── [id].tsx               # Review one submission
├── settings/
│   ├── index.tsx
│   ├── privacy.tsx
│   └── notifications.tsx
└── +not-found.tsx             # 404

src/
├── components/                # Shared UI components
│   ├── primitives/            # Button, Input, Card (NativeWind base)
│   ├── spin/                  # SpinWheel, ResultModal
│   ├── locket/                # LocketCard, CaptureOverlay
│   └── map/                   # RestaurantPin, MapCluster
├── modules/                   # Feature modules (logic + UI)
│   ├── auth/
│   ├── spin/
│   ├── locket/
│   ├── restaurant/
│   ├── group/
│   ├── friendship/
│   └── steward/
├── hooks/                     # Shared hooks (useLocation, useCamera, ...)
├── lib/
│   ├── supabase.ts            # Supabase client
│   ├── expo-image-picker.ts   # Camera-only wrapper
│   ├── device-hash.ts         # Anonymized device ID
│   └── exif-strip.ts          # Strip EXIF before upload
├── stores/                    # Zustand stores
│   ├── auth-store.ts
│   ├── spin-store.ts
│   └── filters-store.ts
├── types/                     # Generated types from Supabase + custom
│   ├── database.ts
│   ├── models.ts              # User, Locket, Restaurant, Spin, Group, ...
│   └── env.d.ts
├── constants/
│   ├── colors.ts              # Tokens Earthy (mirror brand/brand.md)
│   ├── typography.ts
│   └── cuisines.ts            # Cuisine enum
└── assets/                    # Fonts, images (sync với brand/)

tailwind.config.js             # Tokens Earthy từ brand/brand.md
metro.config.js
babel.config.js
tsconfig.json
app.json                       # Expo config
eas.json                       # EAS Build config
package.json
```

## Brand tokens (map vào NativeWind)

`tailwind.config.js` phải map **1-1** với `brand/brand.md`. Ví dụ:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3D2314',
          'primary-dark': '#5C3317',
          'primary-soft': '#8B4513',
          accent: '#C68E17',
          'accent-soft': '#D4A574',
          'accent-bg': '#F5DEB3',
          bg: '#FDF5E6',
          'bg-soft': '#FAF0E6',
          'bg-card': '#F5F0EB',
          text: '#2C1810',
          'text-muted': '#9C8B7A',
          border: '#D4C5B5',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Be Vietnam Pro', 'system-ui'],
        body: ['Inter', 'Be Vietnam Pro', 'system-ui'],
      },
    },
  },
};
```

## Quy tắc code

- **TypeScript strict mode.**
- **No emoji** trong code / commit message.
- **Component props** dùng `interface`, có `displayName` nếu cần debug.
- **Hook** bắt đầu bằng `use` (vd: `useLocation`, `useCamera`).
- **Không hardcode color/font** trong component — luôn dùng className (NativeWind) hoặc token.
- **Không fetch trực tiếp** trong component — qua TanStack Query hoặc hook.
- **Error boundary** cho mỗi screen.
- **Loading state** cho mỗi async action.

## Test (chưa setup)

Khi có code, setup:
- **Unit:** Jest + React Native Testing Library.
- **E2E:** Maestro (Expo recommended).
- **Type:** `tsc --noEmit` chạy trong CI.

## Build & Deploy

```bash
# Dev
npx expo start

# Build cho TestFlight / Play Console internal
eas build --profile preview --platform ios
eas build --profile preview --platform android

# Production
eas build --profile production --platform all
eas submit --platform ios
eas submit --platform android
```

## Liên kết

- Spec dự án: [`../brand/prompts.md`](../brand/prompts.md)
- Brand & Design: [`../brand/brand.md`](../brand/brand.md)
- Sitemap & đặc tả: [`../brand/FOOD-ROULETTE-SITEMAP.md`](../brand/FOOD-ROULETTE-SITEMAP.md)
- Entry point cho AI: [`../CLAUDE.md`](../CLAUDE.md)
- Quy tắc AI: [`../AGENTS.md`](../AGENTS.md)