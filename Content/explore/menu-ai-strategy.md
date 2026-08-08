# Menu Capture & AI Personalization Strategy

> **File này:** Chiến lược chi tiết cho Menu Capture và AI Personalization
> **Ngày tạo:** 2026-08-06
> **Status:** Strategy spec — chưa implement

---

## 1. Menu Capture

### 1.1 Concept

**Menu Capture** cho phép user chụp menu tại quán → AI đọc → Đưa vào vòng quay → Mỗi member trong circle được suggest best match.

### 1.2 User Flow Chi tiết

```
┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 1: CHỤP MENU                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  User đến quán                                              │
│       ↓                                                     │
│  Mở app → Tap "📷 Chụp Menu"                              │
│       ↓                                                     │
│  Camera viewfinder hiện lên                                │
│       ↓                                                     │
│  User chụp 1 hoặc nhiều ảnh menu                          │
│       ↓                                                     │
│  Gửi lên server để process                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 2: AI OCR & PARSE                                 │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Server nhận ảnh                                           │
│       ↓                                                     │
│  Vision API extract text                                   │
│       ↓                                                     │
│  NLP parse thành structured menu items                     │
│       ↓                                                     │
│  Extract: tên món, giá, category                          │
│       ↓                                                     │
│  Return list of MenuItem                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 3: USER VERIFICATION                               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  User xem danh sách đã parse                             │
│       ↓                                                     │
│  Có thể:                                                  │
│  - Thêm món bị thiếu                                      │
│  - Xóa món bị nhận diện sai                             │
│  - Chỉnh sửa tên/giá                                    │
│  - Thêm tags (cay, chay...)                              │
│       ↓                                                     │
│  Tap "Xác nhận Menu" → Lưu vào DB                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BƯỚC 4: MENU SPIN                                       │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  User chọn "Quay với Menu này"                            │
│       ↓                                                     │
│  Spin wheel hiện với các món từ menu                     │
│       ↓                                                     │
│  Quay → Kết quả là 1 món cụ thể                          │
│       ↓                                                     │
│  AI suggest best match cho từng member                    │
│       ↓                                                     │
│  Mọi người vote accept/respin                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.3 AI OCR Pipeline

#### Option A: Google ML Kit (On-device)
```
Ưu điểm:
- Free, fast
- Works offline
- Privacy-friendly

Nhược điểm:
- Accuracy có thể thấp hơn cloud
- Cần xử lý thêm cho tiếng Việt
```

#### Option B: Google Cloud Vision API
```
Ưu điểm:
- High accuracy
- Good Vietnamese support
- Auto-detect language

Nhược điểm:
- Có cost (pay-per-use)
- Need network
```

#### Option C: AWS Textract
```
Ưu điểm:
- High accuracy
- Table/form detection tốt

Nhược điểm:
- Cost cao hơn
- Need AWS setup
```

#### Recommended: Hybrid Approach
1. **On-device preview**: ML Kit để extract preview nhanh
2. **Cloud verification**: Gửi lên server dùng Vision API để confirm

### 1.4 Menu Parsing Logic

```typescript
interface ParsedMenuResult {
  items: MenuItem[];
  confidence: number;
  rawText: string;
}

async function parseMenu(imageUrl: string): Promise<ParsedMenuResult> {
  // 1. OCR - extract raw text
  const rawText = await visionAPI.extractText(imageUrl);

  // 2. Parse line by line
  const lines = rawText.split('\n');

  // 3. Pattern matching for Vietnamese menu
  const items: MenuItem[] = [];

  for (const line of lines) {
    // Skip headers, page numbers, etc.
    if (isHeader(line) || isPageNumber(line)) continue;

    // Extract price (Vietnamese format: "45.000đ", "45K", "45,000")
    const priceMatch = line.match(/(\d+[\.,]?\d*)\s*(K|đ|k|VND)?/i);
    const price = priceMatch ? normalizePrice(priceMatch[0]) : null;

    // Extract item name (everything before price)
    const name = line.replace(priceMatch?.[0] || '', '').trim();

    if (name.length > 2 && name.length < 100) {
      items.push({
        id: generateId(),
        name,
        priceVND: price,
        category: inferCategory(name),
        tags: inferTags(name)
      });
    }
  }

  return { items, confidence: calculateConfidence(items), rawText };
}

function inferCategory(itemName: string): string {
  const name = itemName.toLowerCase();

  if (name.includes('cơm') || name.includes('cơ') || name.includes('bún') || name.includes('phở')) {
    return 'món chính';
  }
  if (name.includes('nước') || name.includes('trà') || name.includes('cà phê') || name.includes('sinh tố')) {
    return 'đồ uống';
  }
  if (name.includes('gà') || name.includes('heo') || name.includes('bò')) {
    return 'protein';
  }
  return 'khác';
}

function inferTags(itemName: string): string[] {
  const tags: string[] = [];
  const name = itemName.toLowerCase();

  if (name.includes('cay') || name.includes('bông') || name.includes('jalapeño')) {
    tags.push('cay');
  }
  if (name.includes('chay') || name.includes('vegetarian')) {
    tags.push('chay');
  }
  if (name.includes('đồng')) {
    tags.push('đông');
  }
  if (name.includes('chiên') || name.includes('rán')) {
    tags.push('chiên');
  }

  return tags;
}
```

### 1.5 UI Screens

#### Screen 1: Camera Capture
```
┌─────────────────────────────────────────┐
│  ← Quay lại                             │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │                                 │   │
│  │       CAMERA VIEWFINDER        │   │
│  │       (Menu in frame)          │   │
│  │                                 │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  📷 Chụp                              │
│  ─────────────────────────────────────  │
│  Chụp ảnh menu để AI đọc              │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 2: Menu Review
```
┌─────────────────────────────────────────┐
│  ← Quay lại     Xác nhận Menu ✓       │
│  ─────────────────────────────────────  │
│                                         │
│  Đã nhận diện 15 món:                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ ☑ Cơm gà xối mỡ         45,000│   │
│  │ ☑ Cơm gà teriyaki       50,000│   │
│  │ ☑ Cơm gà curry           48,000│   │
│  │ ☑ Bún gà nướng           40,000│   │
│  │ ☑ Gà rán KFC style       55,000│   │
│  │ ☐ [Món bị xóa]                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ─────────────────────────────────────  │
│  + Thêm món                           │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Tên món: ___________________   │   │
│  │ Giá: _______                    │   │
│  │ Tags: [Cay] [Chay] [Chiên]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [ Quay với Menu này → ]               │
│                                         │
└─────────────────────────────────────────┘
```

---

## 2. AI Personalization

### 2.1 Concept

**AI Personalization** học sở thích của user từ hành vi → Suggest best match cho từng member trong circle khi group spin.

### 2.2 Preference Learning Sources

| Source | Weight | Description |
|--------|--------|-------------|
| **Spin History** | 40% | Món nào đã spin trước đây, chấp nhận vs quay lại |
| **Locket Ratings** | 30% | Rating đã cho cho từng món |
| **Reviews Written** | 20% | Nội dung review → keyword extraction |
| **Explicit Settings** | 10% | User tự set trong profile |

### 2.3 Preference Data Model

```typescript
interface UserPreference {
  id: string;
  userId: string;                          // FK → User
  cuisineScores: Record<string, number>;    // { "Việt": 0.9, "Nhật": 0.7 }
  priceRange: 1 | 2 | 3 | 4;             // 1: <50k, 2: 50-150k, etc.
  dietaryRestrictions: string[];            // ["chay", "halal", "không gluten"]
  spiceTolerance: 'mild' | 'medium' | 'spicy';
  dislikedIngredients: string[];           // ["hải sản", "thịt bò"]
  updatedAt: Date;
}

// Price range thresholds (VND)
const PRICE_THRESHOLDS = {
  1: 50000,     // dưới 50k
  2: 150000,    // 50k - 150k
  3: 300000,    // 150k - 300k
  4: Infinity   // trên 300k
};
```

### 2.4 Learning Algorithm

```typescript
async function updatePreference(
  userId: string,
  action: PreferenceAction
): Promise<UserPreference> {
  const current = await getPreference(userId);
  const updated = { ...current };

  switch (action.type) {
    case 'SPIN_ACCEPTED':
      // User chấp nhận kết quả spin
      const cuisine = action.restaurant.cuisine;
      updated.cuisineScores[cuisine] =
        (current.cuisineScores[cuisine] || 0.5) + 0.1;
      break;

    case 'SPIN_REROLL':
      // User quay lại → giảm score
      const rerollCuisine = action.restaurant.cuisine;
      updated.cuisineScores[rerollCuisine] =
        (current.cuisineScores[rerollCuisine] || 0.5) - 0.05;
      break;

    case 'LOCKET_RATED':
      // User rate locket → học từ rating
      if (action.rating >= 4) {
        updated.cuisineScores[action.cuisine] =
          (current.cuisineScores[action.cuisine] || 0.5) + 0.05;
      }
      break;

    case 'REVIEW_WRITTEN':
      // Extract keywords từ review
      const keywords = extractKeywords(action.content);
      for (const keyword of keywords) {
        updated.cuisineScores[keyword] =
          (current.cuisineScores[keyword] || 0.5) + 0.02;
      }
      break;
  }

  // Normalize scores to 0-1
  for (const cuisine in updated.cuisineScores) {
    updated.cuisineScores[cuisine] = Math.max(0,
      Math.min(1, updated.cuisineScores[cuisine]));
  }

  updated.updatedAt = new Date();
  await savePreference(updated);

  return updated;
}
```

### 2.5 Circle Recommendation Algorithm

```typescript
interface CircleRecommendation {
  id: string;
  groupId: string;
  menuItems: MenuItem[];
  memberScores: MemberScore[];
}

interface MemberScore {
  userId: string;
  userName: string;
  topItem: MenuItem;
  matchScore: number;
  reasons: string[];
  alternativeItems: MenuItem[];
}

async function generateCircleRecommendation(
  groupId: string,
  menuItems: MenuItem[]
): Promise<CircleRecommendation> {
  const members = await getGroupMembers(groupId);
  const memberScores: MemberScore[] = [];

  for (const member of members) {
    const pref = await getPreference(member.userId);
    const scores = menuItems.map(item => ({
      item,
      score: calculateMatchScore(item, pref)
    }));

    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);

    const topMatch = scores[0];

    memberScores.push({
      userId: member.userId,
      userName: member.displayNamePrivate,
      topItem: topMatch.item,
      matchScore: topMatch.score,
      reasons: generateReasons(topMatch.item, pref),
      alternativeItems: scores.slice(1, 4).map(s => s.item)
    });
  }

  return {
    id: generateId(),
    groupId,
    menuItems,
    memberScores
  };
}

function calculateMatchScore(item: MenuItem, pref: UserPreference): number {
  let score = 0;

  // Cuisine match (40%)
  const cuisineScore = pref.cuisineScores[item.category] || 0.5;
  score += cuisineScore * 0.4;

  // Price match (30%)
  const maxPrice = PRICE_THRESHOLDS[pref.priceRange];
  const priceScore = item.priceVND <= maxPrice ? 1 :
    item.priceVND <= maxPrice * 1.5 ? 0.5 : 0;
  score += priceScore * 0.3;

  // Dietary match (20%)
  const dietaryOk = item.tags.every(tag =>
    !pref.dislikedIngredients.includes(tag)
  );
  score += dietaryOk ? 0.2 : 0;

  // Spice tolerance (10%)
  const spiceOk = item.spiceLevel <= pref.spiceTolerance;
  score += spiceOk ? 0.1 : 0.05;

  return Math.round(score * 100) / 100;
}

function generateReasons(item: MenuItem, pref: UserPreference): string[] {
  const reasons: string[] = [];

  // Cuisine reason
  const cuisineScore = pref.cuisineScores[item.category];
  if (cuisineScore > 0.7) {
    reasons.push(`Bạn thích món ${item.category}`);
  }

  // Price reason
  const maxPrice = PRICE_THRESHOLDS[pref.priceRange];
  if (item.priceVND <= maxPrice) {
    reasons.push(`Trong budget của bạn ✓`);
  } else if (item.priceVND <= maxPrice * 1.5) {
    reasons.push(`Hơi cao nhưng đáng thử`);
  }

  // Dietary reason
  if (item.tags.includes('chay') && pref.dietaryRestrictions.includes('chay')) {
    reasons.push(`Phù hợp chế độ ăn của bạn`);
  }

  // Spice reason
  if (item.spiceLevel === 'spicy' && pref.spiceTolerance === 'spicy') {
    reasons.push(`Bạn thích món cay đúng không? 🔥`);
  }

  return reasons;
}
```

### 2.6 UI: AI Suggestion Display

```
┌─────────────────────────────────────────────────────────────┐
│  🎰 Kết quả Spin cho cả nhóm                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🥇 Cơm gà xối mỡ                                  │   │
│  │  45,000đ                                            │   │
│  │  ────────────────────────────────────────           │   │
│  │  Phổ biến nhất • Đã order 234 lần                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  🔮 AI GỢI Ý CHO TỪNG NGƯỜI                            │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  👤 Minh (bạn)                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Match: 87% ✓                                         │   │
│  │ • Bạn thích món Việt ✓                             │   │
│  │ • Trong budget của bạn ✓                            │   │
│  │ • Món này ăn với cơm rất ngon                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  👤 Lan                                                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Match: 72%                                           │   │
│  │ • Món này Lan thường hay order                      │   │
│  │ • Gà không cay, phù hợp khẩu vị                     │   │
│  │ ┌─────────┐ ┌─────────┐ ┌─────────┐                 │   │
│  │ │Cơm gà  │ │Bún gà  │ │Phở gà  │  ← Alt picks     │   │
│  │ │teriyaki │ │nướng   │ │         │                 │   │
│  │ └─────────┘ └─────────┘ └─────────┘                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  👤 Tuấn                                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Match: 45% ⚠️                                       │   │
│  │ • Món này hơi cay (bạn thích mild)                 │   │
│  │ • Gợi ý: Bún gà nướng (không cay, 68%)            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  [ Chấp nhận ]  [ Quay lại ]                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Privacy & Data

### 3.1 Data Collection

| Data | Collection Method | Storage | Usage |
|------|-------------------|---------|-------|
| Cuisine preferences | Implicit (spin history) | On-device + Cloud | AI matching |
| Price range | Implicit + Explicit | On-device + Cloud | AI matching |
| Dietary restrictions | Explicit (settings) | On-device + Cloud | AI matching |
| Menu photos | User uploads | Cloud | Menu parsing |
| Menu parsed items | AI + User verification | Cloud | Spin candidates |

### 3.2 Privacy Controls

```
┌─────────────────────────────────────────────────────────────┐
│  🔒 QUYỀN RIÊNG TƯ                                       │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Sở thích của bạn                                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☑ Dùng để suggest cho nhóm của bạn                  │   │
│  │ ☑ Học từ lịch sử spin                             │   │
│  │ ☑ Chia sẻ với friend khi họ mời bạn               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  Menu đã chụp                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ○ Công khai (ai cũng thấy)                        │   │
│  │ ● Chỉ mình tôi                                    │   │
│  │ ○ Chia sẻ với circle                               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 GDPR Compliance

- User có thể export dữ liệu preference
- User có thể xóa preference history
- Menu photos có thể xóa bất kỳ lúc nào
- Không share preference với 3rd party advertisers

---

## 4. Technical Implementation

### 4.1 Stack

| Layer | Technology |
|-------|------------|
| On-device OCR | Google ML Kit / react-native-mlkit-ocr |
| Cloud OCR | Google Cloud Vision API |
| AI Matching | Local model + Cloud fallback |
| Storage | Supabase |

### 4.2 API Endpoints

```typescript
// POST /api/menu/capture
interface MenuCaptureRequest {
  restaurantId: string;
  images: string[];      // Base64 or URLs
}

interface MenuCaptureResponse {
  menuId: string;
  items: MenuItem[];
  confidence: number;
  requiresVerification: boolean;
}

// POST /api/menu/verify
interface MenuVerifyRequest {
  menuId: string;
  items: MenuItem[];     // Verified/edited items
}

// GET /api/preferences/:userId
interface GetPreferencesResponse {
  cuisineScores: Record<string, number>;
  priceRange: 1 | 2 | 3 | 4;
  dietaryRestrictions: string[];
  spiceTolerance: string;
}

// POST /api/circle/recommend
interface CircleRecommendRequest {
  groupId: string;
  menuItems: MenuItem[];
}

interface CircleRecommendResponse {
  recommendations: MemberScore[];
}
```

---

## 5. Success Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| Menu capture completion rate | >80% | Month 3 |
| OCR accuracy | >90% items correct | Month 3 |
| User preference update rate | >50% users | Month 6 |
| AI suggestion acceptance rate | >40% | Month 6 |
| Privacy opt-out rate | <5% | Month 6 |

---

## 6. Related Documents

| Document | Reference |
|----------|-----------|
| `brand/prompts.md` §13 | Menu Capture & AI Personalization overview |
| `docs/food_roulette_erd.drawio.xml` | Menu, MenuItem, UserPreference, CircleRecommendation entities |
| `brand/FOOD-ROULETTE-SITEMAP.md` §19.15-16 | Flow & Algorithm details |
