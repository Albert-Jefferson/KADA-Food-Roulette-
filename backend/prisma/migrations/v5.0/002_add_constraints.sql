-- ============================================================
-- Food Roulette v5.0 - Step 2: Add Constraints, Indexes & Triggers
-- Run this AFTER create_tables.sql
-- v5.0 | 2026-08-06
-- ============================================================

-- ============================================================
-- FOREIGN KEYS
-- ============================================================

-- friendships
ALTER TABLE friendships
    ADD CONSTRAINT fk_friendships_requester FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_friendships_addressee FOREIGN KEY (addressee_id) REFERENCES users(id) ON DELETE CASCADE;

-- restaurant_hours
ALTER TABLE restaurant_hours
    ADD CONSTRAINT fk_restaurant_hours_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE;

-- restaurant_photos
ALTER TABLE restaurant_photos
    ADD CONSTRAINT fk_restaurant_photos_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_restaurant_photos_uploader FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL;

-- groups
ALTER TABLE groups
    ADD CONSTRAINT fk_groups_creator FOREIGN KEY (creator_id) REFERENCES users(id);

-- group_members
ALTER TABLE group_members
    ADD CONSTRAINT fk_group_members_group FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_group_members_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- spin_sessions
ALTER TABLE spin_sessions
    ADD CONSTRAINT fk_spin_sessions_group FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE SET NULL,
    ADD CONSTRAINT fk_spin_sessions_creator FOREIGN KEY (creator_id) REFERENCES users(id),
    ADD CONSTRAINT fk_spin_sessions_restaurant FOREIGN KEY (selected_restaurant_id) REFERENCES restaurants(id) ON DELETE SET NULL;

-- spin_session_candidates
ALTER TABLE spin_session_candidates
    ADD CONSTRAINT fk_candidates_session FOREIGN KEY (session_id) REFERENCES spin_sessions(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_candidates_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE;

-- votes
ALTER TABLE votes
    ADD CONSTRAINT fk_votes_session FOREIGN KEY (session_id) REFERENCES spin_sessions(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_votes_voter FOREIGN KEY (voter_id) REFERENCES users(id),
    ADD CONSTRAINT fk_votes_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE;

-- spin_wallets
ALTER TABLE spin_wallets
    ADD CONSTRAINT fk_spin_wallets_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- spin_logs
ALTER TABLE spin_logs
    ADD CONSTRAINT fk_spin_logs_user FOREIGN KEY (user_id) REFERENCES users(id),
    ADD CONSTRAINT fk_spin_logs_session FOREIGN KEY (session_id) REFERENCES spin_sessions(id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_spin_logs_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);

-- lockets
ALTER TABLE lockets
    ADD CONSTRAINT fk_lockets_user FOREIGN KEY (user_id) REFERENCES users(id),
    ADD CONSTRAINT fk_lockets_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE SET NULL;

-- check_ins
ALTER TABLE check_ins
    ADD CONSTRAINT fk_checkins_user FOREIGN KEY (user_id) REFERENCES users(id),
    ADD CONSTRAINT fk_checkins_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);

-- ============================================================
-- UNIQUE CONSTRAINTS
-- ============================================================

ALTER TABLE users
    ADD CONSTRAINT uk_users_email UNIQUE (email),
    ADD CONSTRAINT uk_users_public_id UNIQUE (public_id);

ALTER TABLE friendships
    ADD CONSTRAINT uk_friendships_pair UNIQUE (requester_id, addressee_id);

ALTER TABLE restaurants
    ADD CONSTRAINT uk_restaurants_google_place_id UNIQUE (google_place_id);

ALTER TABLE groups
    ADD CONSTRAINT uk_groups_invite_code UNIQUE (invite_code);

ALTER TABLE restaurant_hours
    ADD CONSTRAINT uk_restaurant_hours_day UNIQUE (restaurant_id, day_of_week);

-- ============================================================
-- CHECK CONSTRAINTS
-- ============================================================

ALTER TABLE restaurants
    ADD CONSTRAINT chk_restaurants_price_level CHECK (price_level IS NULL OR (price_level BETWEEN 1 AND 4)),
    ADD CONSTRAINT chk_restaurants_rating CHECK (rating IS NULL OR (rating BETWEEN 0 AND 5));

ALTER TABLE restaurant_hours
    ADD CONSTRAINT chk_restaurant_hours_day CHECK (day_of_week BETWEEN 0 AND 6);

-- ============================================================
-- INDEXES
-- ============================================================

-- users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_public_id ON users(public_id);
CREATE INDEX idx_users_subscription_tier ON users(subscription_tier);
CREATE INDEX idx_users_deleted_at ON users(deleted_at);
CREATE INDEX idx_users_last_active_at ON users(last_active_at);

-- friendships
CREATE INDEX idx_friendships_requester ON friendships(requester_id);
CREATE INDEX idx_friendships_addressee ON friendships(addressee_id);
CREATE INDEX idx_friendships_status ON friendships(status);
CREATE INDEX idx_friendships_pair ON friendships(requester_id, addressee_id, status);

-- restaurants
CREATE INDEX idx_restaurants_status ON restaurants(status);
CREATE INDEX idx_restaurants_source ON restaurants(source);
CREATE INDEX idx_restaurants_category ON restaurants(category);
CREATE INDEX idx_restaurants_geo ON restaurants(lat, lng);
CREATE INDEX idx_restaurants_deleted_at ON restaurants(deleted_at);
CREATE INDEX idx_restaurants_status_category ON restaurants(status, category);

-- restaurant_hours
CREATE INDEX idx_restaurant_hours_restaurant ON restaurant_hours(restaurant_id);

-- restaurant_photos
CREATE INDEX idx_restaurant_photos_restaurant ON restaurant_photos(restaurant_id);

-- groups
CREATE INDEX idx_groups_invite_code ON groups(invite_code);
CREATE INDEX idx_groups_status ON groups(status);
CREATE INDEX idx_groups_creator ON groups(creator_id);

-- group_members
CREATE INDEX idx_group_members_group ON group_members(group_id);
CREATE INDEX idx_group_members_user ON group_members(user_id);
CREATE INDEX idx_group_members_status ON group_members(status);

-- spin_sessions
CREATE INDEX idx_spin_sessions_group ON spin_sessions(group_id);
CREATE INDEX idx_spin_sessions_creator ON spin_sessions(creator_id);
CREATE INDEX idx_spin_sessions_status ON spin_sessions(status);
CREATE INDEX idx_spin_sessions_created ON spin_sessions(created_at);

-- spin_session_candidates
CREATE INDEX idx_candidates_session ON spin_session_candidates(session_id);
CREATE INDEX idx_candidates_restaurant ON spin_session_candidates(restaurant_id);

-- votes
CREATE INDEX idx_votes_session ON votes(session_id);
CREATE INDEX idx_votes_voter ON votes(voter_id);
CREATE INDEX idx_votes_restaurant ON votes(restaurant_id);
CREATE INDEX idx_votes_session_voter ON votes(session_id, voter_id);

-- spin_wallets
CREATE INDEX idx_spin_wallets_user ON spin_wallets(user_id);

-- spin_logs
CREATE INDEX idx_spin_logs_user ON spin_logs(user_id);
CREATE INDEX idx_spin_logs_session ON spin_logs(session_id);
CREATE INDEX idx_spin_logs_created ON spin_logs(created_at);

-- lockets
CREATE INDEX idx_lockets_user ON lockets(user_id);
CREATE INDEX idx_lockets_restaurant ON lockets(restaurant_id);
CREATE INDEX idx_lockets_visibility ON lockets(visibility);
CREATE INDEX idx_lockets_captured_at ON lockets(captured_at);

-- check_ins
CREATE INDEX idx_checkins_user ON check_ins(user_id);
CREATE INDEX idx_checkins_restaurant ON check_ins(restaurant_id);
CREATE INDEX idx_checkins_status ON check_ins(status);
CREATE INDEX idx_checkins_expires_at ON check_ins(expires_at);

-- ============================================================
-- TRIGGERS
-- ============================================================

-- 1. Trigger: Ensure SpinWallet.balance >= 0
DELIMITER //
CREATE TRIGGER trg_spin_wallet_balance_check
BEFORE UPDATE ON spin_wallets
FOR EACH ROW
BEGIN
    IF NEW.balance < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'SpinWallet balance cannot be negative';
    END IF;
END//
DELIMITER ;

-- 2. Trigger: Ensure GroupMember count <= 20
DELIMITER //
CREATE TRIGGER trg_group_member_limit_insert
BEFORE INSERT ON group_members
FOR EACH ROW
BEGIN
    DECLARE member_count INT;
    SELECT COUNT(*) INTO member_count FROM group_members
    WHERE group_id = NEW.group_id AND status != 'DECLINED';
    IF member_count >= 20 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Group cannot have more than 20 members';
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE TRIGGER trg_group_member_limit_update
BEFORE UPDATE ON group_members
FOR EACH ROW
BEGIN
    IF NEW.status = 'ACCEPTED' THEN
        DECLARE member_count INT;
        SELECT COUNT(*) INTO member_count FROM group_members
        WHERE group_id = NEW.group_id AND status != 'DECLINED' AND id != NEW.id;
        IF member_count >= 20 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Group cannot have more than 20 members';
        END IF;
    END IF;
END//
DELIMITER ;

-- 3. Trigger: Locket capturedAt must be within 60s of server time
DELIMITER //
CREATE TRIGGER trg_locket_captured_at_validation
BEFORE INSERT ON lockets
FOR EACH ROW
BEGIN
    DECLARE time_diff INT;
    SET time_diff = ABS(TIMESTAMPDIFF(SECOND, NEW.captured_at, NOW()));
    IF time_diff > 60 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Locket captured_at must be within 60 seconds of server time';
    END IF;
END//
DELIMITER ;

-- 4. EVENT: Auto-expire check_ins
SET GLOBAL event_scheduler = ON;

DELIMITER //
CREATE EVENT evt_checkin_auto_expiration
ON SCHEDULE EVERY 1 MINUTE
DO
BEGIN
    UPDATE check_ins
    SET status = 'CANCELLED'
    WHERE status = 'CHECKED_IN'
      AND expires_at < NOW();
END//
DELIMITER ;

SELECT '✅ Constraints, indexes and triggers added successfully!' AS result;
