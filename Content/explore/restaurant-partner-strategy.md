# Restaurant Partner Strategy

> **File này:** Chiến lược thu hút và giữ chân Restaurant Partners (B2B Nhà hàng)
> **Ngày tạo:** 2026-08-06
> **Status:** Strategy spec — chưa implement

---

## 1. Tổng quan

### 1.1 Mô hình kinh doanh

Restaurant Partner là B2B revenue stream cho phép chủ quán tiếp cận người dùng Food Roulette.

**Mô hình hybrid:** Fixed Tier + Pay-Per-Visit (PPV)

### 1.2 Điểm khác biệt so với đối thủ

| Platform | Commission | Model |
|----------|------------|-------|
| ShopeeFood | 30% per order | % of revenue |
| GrabFood | 30% per order | % of revenue |
| **Food Roulette** | 0% per order | Fixed + PPV |

---

## 2. Pricing Tiers

### 2.1 Restaurant Partner Tiers

| Tier | Fixed Fee | PPV Rate | Giá/spin* | Features |
|------|-----------|----------|------------|----------|
| **Basic** | Miễn phí | - | - | Badge only |
| **Bronze PPV** | 99k/tháng | 5k/visit | ~200đ/ngày | Badge + Basic analytics |
| **Silver PPV** | 199k/tháng | 4k/visit | ~400đ/ngày | + Top 5 + Promo codes |
| **Gold PPV** | 399k/tháng | 3k/visit | ~800đ/ngày | + Top 3 + Full analytics + Priority |

*Giả định: 30 visits/tháng

### 2.2 Feature Breakdown

| Feature | Basic | Bronze | Silver | Gold |
|---------|:-----:|:------:|:------:|:----:|
| Verified Badge | ✅ | ✅ | ✅ | ✅ |
| Basic analytics | ❌ | ✅ | ✅ | ✅ |
| Featured Placement | ❌ | ❌ | ✅ (Top 5) | ✅ (Top 3) |
| Promo Codes | ❌ | ❌ | ✅ | ✅ |
| Full analytics | ❌ | ❌ | ❌ | ✅ |
| Priority Support | ❌ | ❌ | ❌ | ✅ |
| Dedicated Account Manager | ❌ | ❌ | ❌ | ✅ |

---

## 3. Pay-Per-Visit Model

### 3.1 Verification Mechanism

```
1. Khách đến quán
       ↓
2. Mở app → Tap "Check-in"
       ↓
3. App verify GPS (trong 100m của quán)
       ↓
4. Nếu verified → Tạo RestaurantVisit record
       ↓
5. End of month → Billing = fixed + (visits × ppvRate)
```

### 3.2 GPS Verification Logic

```typescript
interface VisitCheckin {
  partnerId: string;
  userId: string;
  checkinGps: { lat: number; lng: number };
  timestamp: Date;
}

async function verifyCheckin(checkin: VisitCheckin): Promise<boolean> {
  const partner = await getPartner(checkin.partnerId);
  const restaurant = await getRestaurant(partner.restaurantId);
  
  // Calculate distance using Haversine formula
  const distance = calculateDistance(
    checkin.checkinGps,
    restaurant.location
  );
  
  // Verified if within 100m
  return distance <= 100; // meters
}
```

### 3.3 Billing Cycle

```
┌─────────────────────────────────────────────────┐
│  BILLING EXAMPLE — Silver PPV                   │
│  ─────────────────────────────────────────────  │
│  Fixed fee: 199,000đ/tháng                     │
│  PPV rate: 4,000đ/visit                       │
│                                                 │
│  If 30 visits in month:                         │
│  Total = 199,000 + (30 × 4,000)               │
│       = 199,000 + 120,000                      │
│       = 319,000đ/tháng                         │
│                                                 │
│  Compare to ShopeeFood (30 orders × 35k × 30%):│
│  = 315,000đ → About same!                      │
│                                                 │
│  But: Only pay for REAL visits                 │
└─────────────────────────────────────────────────┘
```

---

## 4. Featured Placement Algorithm

### 4.1 Score Calculation

```typescript
interface RestaurantScore {
  restaurantId: string;
  distance: number;      // km from user
  rating: number;        // 1-5
  partnerTier: number;   // 0-3 for BASIC-GOLD
  lastCheckin: Date;     // recency
}

function calculateScore(restaurant: RestaurantScore): number {
  const distanceWeight = Math.max(0, 1 - (restaurant.distance / 10));
  const ratingWeight = restaurant.rating / 5;
  const tierWeight = restaurant.partnerTier / 3;
  const recencyDays = daysSince(restaurant.lastCheckin);
  const recencyWeight = Math.max(0, 1 - (recencyDays / 30));
  
  return (
    distanceWeight * 0.4 +
    ratingWeight * 0.3 +
    tierWeight * 0.2 +
    recencyWeight * 0.1
  );
}
```

### 4.2 Tier Boost

| Tier | Boost | Placement |
|------|-------|----------|
| Basic | +0% | Normal pool |
| Bronze | +15% | Slightly higher |
| Silver | +25% | Top 5 in area |
| Gold | +35% | Top 3 in area |

### 4.3 Transparency

Show restaurant owners their score breakdown:

```
┌─────────────────────────────────────────────────┐
│  📊 Score Breakdown của bạn                     │
│  ─────────────────────────────────────────────  │
│                                                 │
│  🏆 Overall Score: 1.75                       │
│  Top 15% trong Q.10                            │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │ Distance    ████████░░  80%             │   │
│  │ Rating      ███████░░░  70%             │   │
│  │ Partner     ██████░░░░  60%             │   │
│  │ Recency     ████░░░░░░  40%             │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  💡 Tips: Tăng score của bạn:                 │
│  • Upgrade lên Silver để +15%                 │
│  • Thêm ảnh để cải thiện rating              │
│  • Check-in để tăng recency                   │
└─────────────────────────────────────────────────┘
```

---

## 5. Feedback từ Chủ Quán & Giải pháp

### 5.1 Key Concerns

| # | Concern | Severity | Solution |
|---|---------|----------|----------|
| 1 | "App có ai xài không?" | 🔴 Critical | Local Proof Strategy |
| 2 | "Khách có mua thật không?" | 🔴 Critical | Pay-Per-Visit Model |
| 3 | "Tại sao chọn quán tôi?" | 🔴 Critical | Transparent Algorithm |
| 4 | "Chi phí có xứng đáng?" | 🟡 Important | ROI Calculator + Guarantee |
| 5 | "Tôi không có thời gian học" | 🟡 Important | Zero-Effort Onboarding |
| 6 | "Không biết hiệu quả ra sao" | 🟡 Important | Weekly Digest |

### 5.2 Local Proof Strategy

Show restaurant owners local user density:

```
┌─────────────────────────────────────────────────┐
│  📍 Quận 10, TP.HCM                           │
│  ─────────────────────────────────────────────  │
│  👥 5,234 người dùng active                  │
│  📍 47 quán đối tác nearby                    │
│  🍜 1,200 lượt tìm quán hôm nay              │
│                                                 │
│  [ Bản đồ heatmap user density ]              │
└─────────────────────────────────────────────────┘
```

### 5.3 Risk Reversal Guarantees

| Guarantee | Description |
|-----------|-------------|
| **0 đơn = Hoàn tiền** | Hoàn 100% nếu 0 visit trong 30 ngày |
| **7 ngày free Gold** | Trial không cần credit card |
| **Pay-per-Visit** | Chỉ trả khi CÓ khách thật |

---

## 6. Onboarding

### 6.1 Zero-Effort Setup

```
Bước 1: Quét QR code từ flyer/email
Bước 2: Xác nhận thông tin quán (auto-fill từ Google)
Bước 3: Chụp 3 tấm ảnh (gợi ý có sẵn)
Bước 4: Xong! Quán đã online

⏱️ Tổng thời gian: 5 phút
📱 Không cần máy tính, chỉ cần điện thoại
```

### 6.2 Support Options

| Channel | Response Time | Availability |
|---------|---------------|--------------|
| 💬 In-app chat | < 1 phút | 24/7 |
| 📱 WhatsApp | < 5 phút | 8:00 - 22:00 |
| 📹 Video guide | N/A | Always |
| 👤 Account Manager | < 4 giờ | Gold tier only |

---

## 7. Dashboard cho Chủ Quán

### 7.1 Weekly Digest

```
┌─────────────────────────────────────────────────┐
│  📊 BÁO CÁO TUẦN #4 - Tháng 8                │
│  Quán Cơm Gà Bà Ba · Silver Partner            │
│  ─────────────────────────────────────────────  │
│                                                 │
│  📈 HIGHLIGHTS                                 │
│  ├─ 👀 1,247 lượt xem profile               │
│  ├─ 🎰 89 lần xuất hiện trên roulette        │
│  ├─ 📍 12 khách check-in (↑40%)             │
│  └─ 💬 3 review mới (4.5★ avg)              │
│                                                 │
│  🏆 TOP PERFORMANCE                            │
│  ├─ Best day: Thứ 7 (5 check-ins)             │
│  ├─ Peak time: 11:30-12:30                   │
│  └─ User gần nhất: 200m                      │
│                                                 │
│  💡 RECOMMENDATIONS                            │
│  ├─ Upload thêm 2 ảnh để cải thiện          │
│  └─ Tạo promo code để tăng 20% return        │
└─────────────────────────────────────────────────┘
```

### 7.2 Key Metrics Tracked

| Metric | Description |
|--------|-------------|
| Profile views | Số lần quán hiện trên roulette |
| Check-ins | Số khách verify check-in |
| Reviews | Số review mới |
| Promo usage | Lượt sử dụng promo code |

---

## 8. Sales Strategy

### 8.1 Target Segments

| Segment | Description | Strategy |
|---------|-------------|----------|
| Quán bình dân | Cơm, phở, bún | Entry với Bronze |
| Nhà hàng casual | Ẩm thực, cafe | Silver tier |
| Nhà hàng cao cấp | Fine dining | Gold tier |
| Chuỗi nhà hàng | Multiple locations | Corporate package |

### 8.2 Outreach Channels

| Channel | Tactics |
|---------|---------|
| **Direct Sales** | HR/Admin outreach, flyer tại khu vực đông |
| **Food Blogger/KOL** | Partner để promote restaurant tier |
| **Event/Conference** | Demo tại team building events |
| **Referral** | "Giới thiệu nhận 1 tháng free" |
| **Landing page** | Dedicated page cho restaurant partners |

### 8.3 Sales Script

```
Khi tiếp cận chủ quán:

1️⃣ "Anh/chị có đang trả bao nhiêu cho ShopeeFood mỗi tháng?"
   → Thường: 1-3 triệu

2️⃣ "Với số đó, trung bình anh/chị nhận được bao nhiêu đơn?"
   → Tính ra cost-per-order

3️⃣ "Chúng tôi không lấy % đơn hàng. Chỉ 99k cố định + 5k 
    mỗi khách THẬT SỰ đến ăn. Nếu 0 khách, anh/chị không 
    mất gì cả."

4️⃣ "Để em show anh/chị bản đồ xem có bao nhiêu người 
    đang tìm quán ăn gần đây nhé..."
```

---

## 9. ROI Calculator

### 9.1 For Restaurant Owner

```
┌─────────────────────────────────────────────────┐
│  🧮 ROI Calculator cho "[Tên Quán]"            │
│  ─────────────────────────────────────────────  │
│                                                 │
│  1️⃣ Chi phí hiện tại                          │
│     └─ ShopeeFood: 200 đơn × 35k × 30%        │
│         = 2,100,000đ/tháng                      │
│                                                 │
│  2️⃣ Mục tiêu của bạn                          │
│     └─ Cần thêm: 15 khách/tháng từ app        │
│                                                 │
│  3️⃣ Kết quả tính toán                          │
│     └─ Bronze PPV: 99k + (15 × 5k) = 174k     │
│     └─ So với 2.1M hoa hồng → TIẾT KIỆM 1.9M │
│                                                 │
│  4️⃣ Cam kết của chúng tôi                      │
│     └─ Nếu 0 khách trong 30 ngày              │
│         → Hoàn tiền 100%                       │
└─────────────────────────────────────────────────┘
```

### 9.2 Break-even Analysis

| Tier | Fixed | PPV | Break-even Visits |
|------|-------|-----|-------------------|
| Bronze | 99k | 5k | 20/tháng |
| Silver | 199k | 4k | 50/tháng |
| Gold | 399k | 3k | 133/tháng |

---

## 10. Competitive Analysis

### 10.1 Comparison

| Feature | ShopeeFood | GrabFood | Food Roulette |
|---------|------------|----------|---------------|
| Commission | 30% | 30% | 0% |
| Fixed fee | ❌ | ❌ | ✅ (99k+) |
| PPV model | ❌ | ❌ | ✅ |
| Badge | ✅ | ✅ | ✅ |
| Analytics | ✅ | ✅ | ✅ (Gold) |
| Promos | ✅ | ✅ | ✅ (Silver+) |
| Commitment | Orders | Orders | Monthly |

### 10.2 Positioning

> *"Không lấy % — chỉ trả khi có khách thật."*

---

## 11. Success Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| Restaurant signups | 100 | Month 3 |
| Avg revenue/restaurant | 150k/month | Month 6 |
| Retention rate | 70% | Month 12 |
| Check-in verification | >80% | Ongoing |
| NPS score | >40 | Month 6 |

---

## 12. Related Documents

| Document | Reference |
|----------|-----------|
| `brand/prompts.md` §11 | B2B Restaurant Partner overview |
| `docs/food_roulette_erd.drawio.xml` | RestaurantPartner, RestaurantVisit entities |
| `brand/FOOD-ROULETTE-SITEMAP.md` §19.12 | Pricing details |
