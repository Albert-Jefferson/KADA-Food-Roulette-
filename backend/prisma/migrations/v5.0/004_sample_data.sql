-- ============================================================
-- Food Roulette v5.0 - Sample Data (Extended)
-- Run AFTER 003_seed_data.sql
-- v5.0 | 2026-08-06
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. Sample Users (10 users)
-- ============================================================

INSERT INTO users (id, email, password_hash, password_version, display_name_private, display_name_public, public_id, role, subscription_tier, is_onboarded) VALUES
    (UUID(), 'minh.nguyen@example.com', '$2b$10$placeholder1', 1, 'Minh Nguyễn', 'Minh', 'FRUSR001', 'USER', 'FREE', TRUE),
    (UUID(), 'lan.pham@example.com', '$2b$10$placeholder2', 1, 'Lan Phạm', 'Lan', 'FRUSR002', 'USER', 'PREMIUM', TRUE),
    (UUID(), 'tuấn.tran@example.com', '$2b$10$placeholder3', 1, 'Tuấn Trần', 'Tuấn', 'FRUSR003', 'USER', 'FREE', TRUE),
    (UUID(), 'huy.hoang@example.com', '$2b$10$placeholder4', 1, 'Huy Hoàng', 'Huy', 'FRUSR004', 'USER', 'FREE', TRUE),
    (UUID(), 'thao.nguyen@example.com', '$2b$10$placeholder5', 1, 'Thảo Nguyễn', 'Thảo', 'FRUSR005', 'USER', 'PREMIUM', TRUE),
    (UUID(), 'khang.le@example.com', '$2b$10$placeholder6', 1, 'Khang Lê', 'Khang', 'FRUSR006', 'USER', 'FREE', TRUE),
    (UUID(), 'linh.vo@example.com', '$2b$10$placeholder7', 1, 'Linh Võ', 'Linh', 'FRUSR007', 'USER', 'FREE', TRUE),
    (UUID(), 'dat.dang@example.com', '$2b$10$placeholder8', 1, 'Đạt Đặng', 'Đạt', 'FRUSR008', 'USER', 'PREMIUM', TRUE),
    (UUID(), 'mai.pham@example.com', '$2b$10$placeholder9', 1, 'Mai Phạm', 'Mai', 'FRUSR009', 'USER', 'FREE', TRUE),
    (UUID(), 'vi.nguyen@example.com', '$2b$10$placeholder10', 1, 'Vĩ Nguyễn', 'Vĩ', 'FRUSR010', 'USER', 'FREE', TRUE);

-- ============================================================
-- 2. Sample Restaurants (30 restaurants - various categories)
-- ============================================================

INSERT INTO restaurants (id, name, address, lat, lng, source, category, price_level, rating, status) VALUES
    -- Phở
    (UUID(), 'Phở Gia Truyền', '1 Bà Triệu, Q1, HCMC', 10.7758, 106.7002, 'USER_SUBMITTED', 'Phở', 2, 4.6, 'APPROVED'),
    (UUID(), 'Phở Lệ', '25 Nguyễn Trãi, Q1, HCMC', 10.7629, 106.6934, 'USER_SUBMITTED', 'Phở', 2, 4.4, 'APPROVED'),
    (UUID(), 'Phở Thìn', '10 Lò Đúc, Q1, HCMC', 10.7825, 106.6875, 'USER_SUBMITTED', 'Phở', 2, 4.5, 'APPROVED'),
    -- Bún
    (UUID(), 'Bún Bò Huế Lề Xá', '50 Pasteur, Q1, HCMC', 10.7762, 106.6996, 'USER_SUBMITTED', 'Bún Bò Huế', 2, 4.3, 'APPROVED'),
    (UUID(), 'Bún Mắm Cô Ba', '88 Đề Thám, Q1, HCMC', 10.7645, 106.6955, 'USER_SUBMITTED', 'Bún Mắm', 3, 4.2, 'APPROVED'),
    (UUID(), 'Bún Cá Lóc Bạn Tân', '123 Lê Văn Sỹ, Q3, HCMC', 10.7892, 106.6856, 'USER_SUBMITTED', 'Bún Cá', 2, 4.1, 'APPROVED'),
    -- Cơm
    (UUID(), 'Cơm Tấm Kiều Giang', '78 Pasteur, Q1, HCMC', 10.7762, 106.6996, 'USER_SUBMITTED', 'Cơm Tấm', 1, 4.1, 'APPROVED'),
    (UUID(), 'Cơm Sườn Bụi', '15 Võ Văn Tần, Q3, HCMC', 10.7869, 106.6897, 'USER_SUBMITTED', 'Cơm', 1, 4.0, 'APPROVED'),
    -- Bánh Mì
    (UUID(), 'Bánh Mì Huỳnh Hoa', '26 Lê Thị Riêng, Q1, HCMC', 10.7678, 106.6976, 'USER_SUBMITTED', 'Bánh Mì', 1, 4.7, 'APPROVED'),
    (UUID(), 'Bánh Mì Bà Dưỡng', '99 Đường 3/2, Q10, HCMC', 10.7698, 106.6725, 'USER_SUBMITTED', 'Bánh Mì', 1, 4.5, 'APPROVED'),
    -- Hủ Tiếu / Mì
    (UUID(), 'Hủ Tiếu Nam Vang 5', '90 Đề Thám, Q1, HCMC', 10.7645, 106.6955, 'USER_SUBMITTED', 'Hủ Tiếu', 1, 4.2, 'APPROVED'),
    (UUID(), 'Mì Vịt Piêu Sài Gòn', '42 Nguyễn Huệ, Q1, HCMC', 10.7711, 106.7008, 'USER_SUBMITTED', 'Mì', 2, 4.4, 'APPROVED'),
    -- Nước uống
    (UUID(), 'Highlands Coffee', '15 Nguyễn Huệ, Q1, HCMC', 10.7711, 106.7008, 'USER_SUBMITTED', 'Cafe', 2, 4.0, 'APPROVED'),
    (UUID(), 'Gong Cha', '200 Võ Văn Tần, Q3, HCMC', 10.7869, 106.6897, 'USER_SUBMITTED', 'Trà Sữa', 2, 4.4, 'APPROVED'),
    (UUID(), 'The Coffee House', '50 Lê Lợi, Q1, HCMC', 10.7694, 106.6992, 'USER_SUBMITTED', 'Cafe', 2, 4.1, 'APPROVED'),
    -- Đồ Châu
    (UUID(), 'Vua Bánh Xèo', '77 Trần Hưng Đạo, Q1, HCMC', 10.7688, 106.6914, 'USER_SUBMITTED', 'Bánh Xèo', 3, 4.3, 'APPROVED'),
    (UUID(), 'Bánh Khọt Bà Dưỡng', '80 Trần Hưng Đạo, Q1, HCMC', 10.7688, 106.6914, 'USER_SUBMITTED', 'Bánh Khọt', 2, 4.4, 'APPROVED'),
    -- Lẩu / Nướng
    (UUID(), 'Lẩu Bò Mắm Ruốc', '166 Nguyễn Đình Chiểu, Q3, HCMC', 10.7888, 106.6912, 'USER_SUBMITTED', 'Lẩu', 3, 4.2, 'APPROVED'),
    (UUID(), 'Nướng Dookki', '88 Lê Lai, Q1, HCMC', 10.7732, 106.6865, 'USER_SUBMITTED', 'Nướng', 3, 4.5, 'APPROVED'),
    -- Pizza / Burger
    (UUID(), 'Pizza Hut Delivery', '123 Nguyễn Trãi, Q1, HCMC', 10.7629, 106.6934, 'USER_SUBMITTED', 'Pizza', 2, 3.8, 'APPROVED'),
    (UUID(), 'Lotteria', '45 Lê Lợi, Q1, HCMC', 10.7694, 106.6992, 'USER_SUBMITTED', 'Burger', 1, 3.5, 'APPROVED'),
    -- Nhật Bản
    (UUID(), 'Sushi Kei', '88 Đồng Khởi, Q1, HCMC', 10.7718, 106.7042, 'USER_SUBMITTED', 'Sushi', 4, 4.6, 'APPROVED'),
    (UUID(), 'Kichi Kichi', '60 Lê Lai, Q1, HCMC', 10.7732, 106.6865, 'USER_SUBMITTED', 'Lẩu Nhật', 3, 4.3, 'APPROVED'),
    -- Hàn Quốc
    (UUID(), 'KFC', '1 Lê Lợi, Q1, HCMC', 10.7694, 106.6992, 'USER_SUBMITTED', 'Gà Rán', 2, 3.9, 'APPROVED'),
    (UUID(), 'Bibigo', '99 Đồng Khởi, Q1, HCMC', 10.7718, 106.7042, 'USER_SUBMITTED', 'Hàn Quốc', 3, 4.4, 'APPROVED'),
    -- Đồ ăn vặt
    (UUID(), 'Trứng Vịt Lộn Hồng Thanh', '28 Võ Văn Tần, Q3, HCMC', 10.7869, 106.6897, 'USER_SUBMITTED', 'Đồ Ăn Vặt', 1, 4.0, 'APPROVED'),
    (UUID(), 'Xôi Xéo Bà Lễ', '55 Trần Hưng Đạo, Q1, HCMC', 10.7688, 106.6914, 'USER_SUBMITTED', 'Xôi', 1, 4.3, 'APPROVED'),
    -- Chưa duyệt (PENDING)
    (UUID(), 'Phở Võ Giáng', '99 Nguyễn Trãi, Q1, HCMC', 10.7629, 106.6934, 'USER_SUBMITTED', 'Phở', 2, 0, 'PENDING'),
    (UUID(), 'Bún Bò Bảy Sáng', '77 Lê Lai, Q1, HCMC', 10.7732, 106.6865, 'USER_SUBMITTED', 'Bún Bò Huế', 2, 0, 'PENDING'),
    (UUID(), 'Cơm Gà Hải Nam', '22 Pasteur, Q1, HCMC', 10.7762, 106.6996, 'USER_SUBMITTED', 'Cơm Gà', 2, 0, 'PENDING');

-- ============================================================
-- 3. Sample Spin Wallets
-- ============================================================

INSERT INTO spin_wallets (user_id, balance)
SELECT id, 10 FROM users WHERE email = 'admin@foodroulette.vn';

INSERT INTO spin_wallets (user_id, balance)
SELECT id, 5 FROM users LIMIT 5;

INSERT INTO spin_wallets (user_id, balance)
SELECT id, 3 FROM users OFFSET 5 LIMIT 5;

-- ============================================================
-- 4. Sample Groups
-- ============================================================

INSERT INTO groups (id, name, creator_id, invite_code, status, max_members)
SELECT UUID(), 'Team Đi Ăn', id, 'TEAM001', 'ACTIVE', 20 FROM users LIMIT 1;

INSERT INTO groups (id, name, creator_id, invite_code, status, max_members)
SELECT UUID(), 'Bạn Bè Sài Gòn', id, 'SGN002', 'ACTIVE', 20 FROM users OFFSET 1 LIMIT 1;

INSERT INTO groups (id, name, creator_id, invite_code, status, max_members)
SELECT UUID(), 'Office Lunch', id, 'OFF003', 'COMPLETED', 20 FROM users OFFSET 2 LIMIT 1;

-- ============================================================
-- 5. Sample Group Members
-- ============================================================

SET @group1 = (SELECT id FROM groups WHERE invite_code = 'TEAM001');
SET @group2 = (SELECT id FROM groups WHERE invite_code = 'SGN002');

INSERT INTO group_members (group_id, user_id, status, role)
SELECT @group1, id, 'ACCEPTED', 'CREATOR' FROM users LIMIT 1;

INSERT INTO group_members (group_id, user_id, status, role)
SELECT @group1, id, 'ACCEPTED', 'MEMBER' FROM users OFFSET 1 LIMIT 3;

INSERT INTO group_members (group_id, user_id, status, role)
SELECT @group2, id, 'ACCEPTED', 'CREATOR' FROM users OFFSET 4 LIMIT 1;

INSERT INTO group_members (group_id, user_id, status, role)
SELECT @group2, id, 'ACCEPTED', 'MEMBER' FROM users OFFSET 5 LIMIT 4;

-- ============================================================
-- 6. Sample Friendships
-- ============================================================

SET @user1 = (SELECT id FROM users LIMIT 1);
SET @user2 = (SELECT id FROM users OFFSET 1 LIMIT 1);
SET @user3 = (SELECT id FROM users OFFSET 2 LIMIT 1);
SET @user4 = (SELECT id FROM users OFFSET 3 LIMIT 1);

INSERT INTO friendships (requester_id, addressee_id, status)
VALUES (@user1, @user2, 'ACCEPTED');

INSERT INTO friendships (requester_id, addressee_id, status)
VALUES (@user1, @user3, 'ACCEPTED');

INSERT INTO friendships (requester_id, addressee_id, status)
VALUES (@user2, @user3, 'PENDING');

INSERT INTO friendships (requester_id, addressee_id, status)
VALUES (@user4, @user1, 'ACCEPTED');

-- ============================================================
-- 7. Sample Restaurant Photos
-- ============================================================

SET @restaurant1 = (SELECT id FROM restaurants WHERE name = 'Phở Gia Truyền' LIMIT 1);
SET @restaurant2 = (SELECT id FROM restaurants WHERE name = 'Bánh Mì Huỳnh Hoa' LIMIT 1);
SET @restaurant3 = (SELECT id FROM restaurants WHERE name = 'Sushi Kei' LIMIT 1);

INSERT INTO restaurant_photos (restaurant_id, photo_url, is_primary, uploaded_by)
SELECT @restaurant1, 'https://example.com/photos/pho-gia-truyen-1.jpg', TRUE, id FROM users LIMIT 1;

INSERT INTO restaurant_photos (restaurant_id, photo_url, is_primary, uploaded_by)
SELECT @restaurant1, 'https://example.com/photos/pho-gia-truyen-2.jpg', FALSE, id FROM users OFFSET 1 LIMIT 1;

INSERT INTO restaurant_photos (restaurant_id, photo_url, is_primary, uploaded_by)
SELECT @restaurant2, 'https://example.com/photos/banhmi-huynhhoa-1.jpg', TRUE, id FROM users OFFSET 2 LIMIT 1;

INSERT INTO restaurant_photos (restaurant_id, photo_url, is_primary, uploaded_by)
SELECT @restaurant3, 'https://example.com/photos/sushi-kei-1.jpg', TRUE, id FROM users OFFSET 3 LIMIT 1;

-- ============================================================
-- 8. Sample Restaurant Hours
-- ============================================================

SET @restaurant_pho = (SELECT id FROM restaurants WHERE name = 'Phở Gia Truyền' LIMIT 1);
SET @restaurant_sushi = (SELECT id FROM restaurants WHERE name = 'Sushi Kei' LIMIT 1);

INSERT INTO restaurant_hours (restaurant_id, day_of_week, open_time, close_time, is_closed) VALUES
    (@restaurant_pho, 0, '06:00:00', '14:00:00', FALSE),  -- Chủ nhật
    (@restaurant_pho, 1, '06:00:00', '21:00:00', FALSE),  -- Thứ 2
    (@restaurant_pho, 2, '06:00:00', '21:00:00', FALSE),  -- Thứ 3
    (@restaurant_pho, 3, '06:00:00', '21:00:00', FALSE),  -- Thứ 4
    (@restaurant_pho, 4, '06:00:00', '21:00:00', FALSE),  -- Thứ 5
    (@restaurant_pho, 5, '06:00:00', '22:00:00', FALSE),  -- Thứ 6
    (@restaurant_pho, 6, '06:00:00', '22:00:00', FALSE); -- Thứ 7

INSERT INTO restaurant_hours (restaurant_id, day_of_week, open_time, close_time, is_closed) VALUES
    (@restaurant_sushi, 0, '11:00:00', '22:00:00', FALSE),  -- Chủ nhật
    (@restaurant_sushi, 1, '11:00:00', '22:00:00', FALSE),  -- Thứ 2
    (@restaurant_sushi, 2, '11:00:00', '22:00:00', FALSE),  -- Thứ 3
    (@restaurant_sushi, 3, '11:00:00', '22:00:00', FALSE),  -- Thứ 4
    (@restaurant_sushi, 4, '11:00:00', '22:00:00', FALSE),  -- Thứ 5
    (@restaurant_sushi, 5, '11:00:00', '23:00:00', FALSE),  -- Thứ 6
    (@restaurant_sushi, 6, '11:00:00', '23:00:00', FALSE); -- Thứ 7

SET FOREIGN_KEY_CHECKS = 1;

SELECT '✅ Sample data inserted successfully!' AS result;
