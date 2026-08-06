-- ============================================================
-- Food Roulette v5.0 - Step 3: Seed Data
-- Run this AFTER constraints added
-- v5.0 | 2026-08-06
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. Spin Packs (Virtual Items Catalog)
-- ============================================================

INSERT INTO spin_packs (id, name, description, spins_count, price_usd, is_active) VALUES
    (UUID(), 'Free Daily', 'Daily free spins - no purchase required', 3, 0.00, TRUE),
    (UUID(), 'Starter Pack', '10 spins to get you started', 10, 0.99, TRUE),
    (UUID(), 'Basic Pack', '25 spins for casual players', 25, 1.99, TRUE),
    (UUID(), 'Party Pack', '50 spins for group gatherings', 50, 3.49, TRUE),
    (UUID(), 'Premium Pack', '100 spins for spin enthusiasts', 100, 5.99, TRUE),
    (UUID(), 'Unlimited Monthly', 'Unlimited spins for 30 days', -1, 9.99, TRUE);

-- ============================================================
-- 2. Restaurant Categories (for dropdown)
-- ============================================================

INSERT INTO restaurants (id, name, address, lat, lng, source, category, price_level, rating, status) VALUES
    (UUID(), 'Phở Hàng Bè', '123 Nguyễn Trãi, Q1, HCMC', 10.7629, 106.6934, 'USER_SUBMITTED', 'Phở', 2, 4.5, 'APPROVED'),
    (UUID(), 'Bún Chả Hương', '45 Lê Lợi, Q1, HCMC', 10.7694, 106.6992, 'USER_SUBMITTED', 'Bún Chả', 2, 4.3, 'APPROVED'),
    (UUID(), 'Cơm Tấm Kiều Giang', '78 Pasteur, Q1, HCMC', 10.7762, 106.6996, 'USER_SUBMITTED', 'Cơm Tấm', 1, 4.1, 'APPROVED'),
    (UUID(), 'Bánh Mì Huỳnh Hoa', '26 Lê Thị Riêng, Q1, HCMC', 10.7678, 106.6976, 'USER_SUBMITTED', 'Bánh Mì', 1, 4.7, 'APPROVED'),
    (UUID(), 'Hủ Tiếu Nam Vang', '90 Đề Thám, Q1, HCMC', 10.7645, 106.6955, 'USER_SUBMITTED', 'Hủ Tiếu', 1, 4.2, 'APPROVED'),
    (UUID(), 'Cafe Highlands', '15 Nguyễn Huệ, Q1, HCMC', 10.7711, 106.7008, 'USER_SUBMITTED', 'Cafe', 2, 4.0, 'APPROVED'),
    (UUID(), 'Trà Sữa Gong Cha', '200 Võ Văn Tần, Q3, HCMC', 10.7869, 106.6897, 'USER_SUBMITTED', 'Trà Sữa', 2, 4.4, 'APPROVED'),
    (UUID(), 'Súp Cua Gốc Điền', '12 Hai Bà Trưng, Q1, HCMC', 10.7724, 106.6988, 'USER_SUBMITTED', 'Súp', 2, 3.9, 'APPROVED');

-- ============================================================
-- 3. Default Admin User (password: admin123 - CHANGE IN PRODUCTION!)
-- ============================================================

INSERT INTO users (
    id, email, password_hash, password_version,
    display_name_private, display_name_public, public_id,
    role, subscription_tier, is_onboarded
) VALUES (
    UUID(), 'admin@foodroulette.vn',
    -- bcrypt hash of 'admin123' - REPLACE BEFORE PRODUCTION!
    '$2b$10$rQZ8K8QZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZ',
    1,
    'Admin', 'FoodRoulette Admin', 'FRADM001',
    'ADMIN', 'PREMIUM', TRUE
);

-- ============================================================
-- 4. Default Steward User (password: steward123 - CHANGE IN PRODUCTION!)
-- ============================================================

INSERT INTO users (
    id, email, password_hash, password_version,
    display_name_private, display_name_public, public_id,
    role, subscription_tier, is_onboarded
) VALUES (
    UUID(), 'steward@foodroulette.vn',
    -- bcrypt hash of 'steward123' - REPLACE BEFORE PRODUCTION!
    '$2b$10$sPsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsKsK',
    1,
    'Steward', 'Food Steward', 'FRSTW001',
    'STEWARD', 'PREMIUM', TRUE
);

-- ============================================================
-- 5. Restaurant Hours (sample for first restaurant)
-- ============================================================

SET @restaurant_id = (SELECT id FROM restaurants WHERE name = 'Phở Hàng Bè' LIMIT 1);

INSERT INTO restaurant_hours (id, restaurant_id, day_of_week, open_time, close_time, is_closed) VALUES
    (UUID(), @restaurant_id, 0, '06:00:00', '14:00:00', FALSE),  -- Sunday
    (UUID(), @restaurant_id, 1, '06:00:00', '21:00:00', FALSE),  -- Monday
    (UUID(), @restaurant_id, 2, '06:00:00', '21:00:00', FALSE),  -- Tuesday
    (UUID(), @restaurant_id, 3, '06:00:00', '21:00:00', FALSE),  -- Wednesday
    (UUID(), @restaurant_id, 4, '06:00:00', '21:00:00', FALSE),  -- Thursday
    (UUID(), @restaurant_id, 5, '06:00:00', '21:00:00', FALSE),  -- Friday
    (UUID(), @restaurant_id, 6, '06:00:00', '21:00:00', FALSE); -- Saturday

SET FOREIGN_KEY_CHECKS = 1;

SELECT '✅ Seed data inserted successfully!' AS result;
