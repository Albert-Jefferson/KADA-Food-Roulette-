# Spin System v2 — Chi tiết thiết kế

> **File này:** Tổng hợp design decisions về Spin System v2 (Spin Wallet, Recharge, Economy)
> **Ngày tạo:** 2026-08-06
> **Status:** Design spec — chưa implement

---

## 1. Tổng quan

Spin System v2 thay thế model "5 spins/ngày free" bằng **Spin Wallet** — ví chứa spin credits có thể nạp lại qua nhiều cách.

### 1.1 Vấn đề với model cũ

| Model cũ (5 spins/ngày) | Vấn đề |
|-------------------------|---------|
| User muốn spin 10 lần → Chờ ngày mai | Friction cao |
| User muốn spin ngay → Không có cách | Lost engagement |
| Không có revenue stream | Không có monetization |

### 1.2 Giải pháp

Spin Wallet cho phép:
- User tích lũy spins
- Nạp thêm qua nhiều cách
- Không bị giới hạn thời gian

---

## 2. Spin Wallet

### 2.1 Data Model

```typescript
interface SpinWallet {
  id: string;              // UUID
  userId: string;          // FK → User (1:1)
  balance: number;         // Số spin hiện có
  lastRechargeAt: Date;   // Track daily recharge
  updatedAt: Date;
}

interface SpinLog {
  id: string;
  userId: string;
  type: 'FREE_DAILY' | 'PURCHASE' | 'AD_WATCH' | 'GIFT' | 'USE';
  amount: number;         // +/- số spin
  referenceId?: string;   // purchase_id, ad_id, gift_id
  createdAt: Date;
}
```

### 2.2 Balance Display

```
┌─────────────────────────────────────┐
│  🎰 42 spins còn lại              │
│  ─────────────────────────────────  │
│  Sẽ reset sau: 6 giờ 23 phút      │
│  [ Mua thêm ] [ Xem quảng cáo ]   │
└─────────────────────────────────────┘
```

---

## 3. Spin Economy

### 3.1 Nguồn Spin

| Nguồn | Số lượng | Chi phí | Daily Cap | Notes |
|--------|----------|---------|-----------|-------|
| **Free Daily** | 10 spins | Miễn phí | 10/day | Reset lúc 00:00 |
| **Ad Watch** | 1 spin | Miễn phí | 5/day | 15-30s ad |
| **Gift** | 1-5 spins | Miễn phí | - | From referral |
| **Spin Pack** | 5-100 | 15k-179k | - | One-time |
| **Pro Subscription** | ∞ | 59k/tháng | - | Auto-recharge |

### 3.2 Daily Recharge Logic

```typescript
async function rechargeDaily(userId: string) {
  const wallet = await getWallet(userId);
  const lastRecharge = wallet.lastRechargeAt;
  const now = new Date();
  
  // Check if midnight passed since last recharge
  const lastMidnight = startOfDay(lastRecharge);
  const todayMidnight = startOfDay(now);
  
  if (todayMidnight > lastMidnight) {
    // Recharge 10 spins
    await addSpins(userId, 10, 'FREE_DAILY');
    await updateLastRecharge(userId);
  }
}
```

### 3.3 Spin Usage Logic

```typescript
async function useSpin(userId: string): Promise<boolean> {
  const wallet = await getWallet(userId);
  
  if (wallet.balance <= 0) {
    throw new Error('INSUFFICIENT_SPINS');
  }
  
  await deductSpin(userId, 1, 'USE');
  return true;
}
```

---

## 4. Spin Packs (IAP)

### 4.1 Pricing

| Pack | Spins | Giá (VND) | Giá/spin | Best For |
|------|-------|------------|-----------|----------|
| Starter | 5 | 15,000 | 3,000đ | Thử nghiệm |
| Regular | 20 | 49,000 | 2,450đ | Dùng 1 tuần |
| Pro | 50 | 99,000 | 1,980đ | Dùng 1 tháng |
| Power | 100 | 179,000 | 1,790đ | Power user |

### 4.2 UI Flow

```
┌─────────────────────────────────────┐
│  🎁 Gói Spin                       │
│  ─────────────────────────────────  │
│  ┌─────────────────────────────┐   │
│  │ ⚡ Power                    │   │
│  │ 100 spins                   │   │
│  │ 179,000đ                   │   │
│  │ 1,790đ/spin                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌───────┐ ┌───────┐ ┌───────┐   │
│  │  5    │ │  20   │ │  50   │   │
│  │  15k  │ │  49k  │ │  99k  │   │
│  └───────┘ └───────┘ └───────┘   │
│                                     │
│  [ Mua ngay ]                      │
└─────────────────────────────────────┘
```

---

## 5. Ad Watch Integration

### 5.1 Flow

```
1. User hết spin hoặc muốn thêm
       ↓
2. Tap "Xem quảng cáo +1 spin"
       ↓
3. Show interstitial ad (15-30s)
       ↓
4. Ad completed → +1 spin
       ↓
5. Log to AdWatchLog
```

### 5.2 Daily Cap Enforcement

```typescript
async function canWatchAd(userId: string): Promise<boolean> {
  const today = startOfDay(new Date());
  const watchCount = await AdWatchLog.count({
    userId,
    watchedAt: { gte: today },
    rewarded: true
  });
  
  return watchCount < 5; // Max 5 ads/day
}
```

### 5.3 SDK Integration

```typescript
// Using Expo Ads or React Native AdMob
import { AdMobInterstitial } from 'expo-ads-admob';

// Request ad
await AdMobInterstitial.requestAdAsync();

// Show ad
await AdMobInterstitial.showAdAsync();

// Reward user
await addSpins(userId, 1, 'AD_WATCH');
```

---

## 6. Pro Subscription

### 6.1 Benefits

| Feature | Free | Pro |
|---------|:----:|:---:|
| Daily spins | 10 | ∞ |
| Ad watching | 5/day | 0 ads |
| Spin history | 7 days | ∞ |
| Priority support | ❌ | ✅ |

### 6.2 Subscription Flow

```typescript
// Using Expo InAppPurchases
const subscription = await Subscription.requestSubscription({
  sku: 'spin_pro_monthly',
  // sku: 'spin_pro_yearly' (future)
});
```

---

## 7. Gift System

### 7.1 Referral Gift

When user A refers user B:
- User A receives: 5 spins
- User B receives: 10 spins on first spin

```typescript
interface SpinGift {
  id: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  type: 'REFERRAL' | 'PROMO';
  createdAt: Date;
}
```

---

## 8. Edge Cases

### 8.1 Balance Going Negative

**Invariant:** `SpinWallet.balance >= 0` at all times.

```typescript
// Before any spin operation
if (wallet.balance <= 0) {
  throw new Error('INSUFFICIENT_SPINS');
}
```

### 8.2 Race Conditions

Use database transaction with row-level locking:

```sql
BEGIN TRANSACTION;
  SELECT balance FROM spin_wallets WHERE user_id = $1 FOR UPDATE;
  -- Check balance
  -- Update balance
COMMIT;
```

### 8.3 Daily Reset Edge Case

If user doesn't open app for 3 days:
- Day 1: Get 10 spins
- Day 2: No open, no recharge
- Day 3: Open → Recharge 10 spins (cumulative, not replace)

---

## 9. Analytics

### 9.1 Key Metrics

| Metric | Description |
|--------|-------------|
| DAU spins | Daily active spins |
| Spins/spin | Average spins per session |
| IAP conversion | % users buying packs |
| Ad completion rate | % ads watched to completion |
| Daily recharge rate | % users getting daily recharge |

### 9.2 Logging

Every spin action logs to SpinLog for analytics:
- Daily recharge events
- IAP purchases
- Ad watches
- Spin usages

---

## 10. Future Considerations

### 10.1 Possible Expansions

- [ ] Gift spins to friends
- [ ] Spin betting (stake coins)
- [ ] Seasonal packs (Tết,夏季)
- [ ] Team/gang spins pool

### 10.2 A/B Test Ideas

- Daily recharge amount (5 vs 10 vs 15)
- Ad reward timing (immediate vs delayed)
- Pack pricing psychology (199k vs 179k)

---

## 11. Related Documents

| Document | Reference |
|----------|-----------|
| `brand/prompts.md` §10 | Spin System overview |
| `docs/food_roulette_erd.drawio.xml` | SpinWallet, SpinLog, SpinPack entities |
| `brand/FOOD-ROULETTE-SITEMAP.md` §19.11 | Pricing details |
