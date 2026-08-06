-- ============================================================
-- Food Roulette v5.0 - Step 1: Create Tables
-- Run this BEFORE add_constraints.sql
-- v5.0 | 2026-08-06
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. users (P0 - Authentication & Profile)
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
    id                   CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email                VARCHAR(255) NOT NULL,
    password_hash        VARCHAR(255) NOT NULL,
    password_version    INT DEFAULT 1,
    display_name_private VARCHAR(50) NOT NULL,
    display_name_public  VARCHAR(50) NOT NULL,
    public_id            VARCHAR(20) NOT NULL,
    avatar_url           VARCHAR(500) NULL,
    phone                VARCHAR(20) NULL COMMENT 'v5.0: SMS auth future',
    role                 ENUM('USER', 'STEWARD', 'ADMIN') DEFAULT 'USER',
    subscription_tier    ENUM('FREE', 'PREMIUM') DEFAULT 'FREE',
    is_onboarded         BOOLEAN DEFAULT FALSE,
    last_active_at       DATETIME NULL,
    saved_restaurants    JSON NULL COMMENT 'P2: TasteBoard',
    created_at           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at           DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 2. friendships (P0 - Social Foundation)
-- ============================================================
CREATE TABLE IF NOT EXISTS friendships (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    requester_id CHAR(36) NOT NULL,
    addressee_id CHAR(36) NOT NULL,
    status       ENUM('PENDING', 'ACCEPTED', 'BLOCKED') DEFAULT 'PENDING',
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 3. restaurants (P0 - Main Entity with Geo)
-- ============================================================
CREATE TABLE IF NOT EXISTS restaurants (
    id              CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name            VARCHAR(255) NOT NULL,
    address         VARCHAR(500) NULL,
    google_place_id VARCHAR(255) NULL,
    lat             DECIMAL(10, 8) NULL,
    lng             DECIMAL(11, 8) NULL,
    source          ENUM('GOOGLE_PLACES', 'USER_SUBMITTED') DEFAULT 'USER_SUBMITTED',
    category        VARCHAR(100) NULL,
    price_level     INT NULL,
    rating          FLOAT DEFAULT 0,
    phone           VARCHAR(20) NULL,
    status          ENUM('PENDING', 'APPROVED', 'REJECTED') DEFAULT 'PENDING',
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at      DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 4. restaurant_hours (4NF - v5.0: Time data normalized)
-- ============================================================
CREATE TABLE IF NOT EXISTS restaurant_hours (
    id            CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    restaurant_id CHAR(36) NOT NULL,
    day_of_week   TINYINT NOT NULL COMMENT '0=Sunday, 1=Monday...6=Saturday',
    open_time     TIME NOT NULL,
    close_time    TIME NOT NULL,
    is_closed     BOOLEAN DEFAULT FALSE,
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT chk_restaurant_hours_day CHECK (day_of_week BETWEEN 0 AND 6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 5. restaurant_photos (v5.0: Normalized photo gallery)
-- ============================================================
CREATE TABLE IF NOT EXISTS restaurant_photos (
    id            CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    restaurant_id CHAR(36) NOT NULL,
    photo_url     VARCHAR(500) NOT NULL,
    is_primary    BOOLEAN DEFAULT FALSE,
    uploaded_by   CHAR(36) NULL,
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 6. groups (P0 - Group Spin)
-- ============================================================
CREATE TABLE IF NOT EXISTS groups (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name         VARCHAR(100) NOT NULL,
    creator_id   CHAR(36) NOT NULL,
    invite_code  VARCHAR(10) NOT NULL,
    status       ENUM('ACTIVE', 'COMPLETED', 'CANCELLED') DEFAULT 'ACTIVE',
    max_members  INT DEFAULT 20 COMMENT 'Enforced by trigger',
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ended_at     DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 7. group_members (P0 - Group Spin Members)
-- ============================================================
CREATE TABLE IF NOT EXISTS group_members (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    group_id     CHAR(36) NOT NULL,
    user_id      CHAR(36) NOT NULL,
    status       ENUM('PENDING', 'ACCEPTED', 'DECLINED') DEFAULT 'PENDING',
    role         ENUM('CREATOR', 'MEMBER') DEFAULT 'MEMBER',
    joined_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 8. spin_sessions (P0 - Spin Core)
-- ============================================================
CREATE TABLE IF NOT EXISTS spin_sessions (
    id               CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    group_id         CHAR(36) NULL,
    creator_id       CHAR(36) NOT NULL,
    type             ENUM('PERSONAL', 'GROUP') DEFAULT 'PERSONAL',
    status           ENUM('PENDING', 'SPINNING', 'COMPLETED', 'CANCELLED') DEFAULT 'PENDING',
    selected_restaurant_id CHAR(36) NULL,
    latitude         DECIMAL(10, 8) NULL,
    longitude        DECIMAL(11, 8) NULL,
    radius_km        FLOAT DEFAULT 5.0,
    price_filter     INT NULL COMMENT 'Max price level 1-4',
    category_filter  VARCHAR(100) NULL,
    spun_at          DATETIME NULL,
    created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ended_at         DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 9. spin_session_candidates (v5.0: Normalized candidates)
-- ============================================================
CREATE TABLE IF NOT EXISTS spin_session_candidates (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    session_id   CHAR(36) NOT NULL,
    restaurant_id CHAR(36) NOT NULL,
    weight       INT DEFAULT 1 COMMENT 'Higher = more likely to be selected',
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 10. votes (P0 - Group Spin Voting)
-- ============================================================
CREATE TABLE IF NOT EXISTS votes (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    session_id   CHAR(36) NOT NULL,
    voter_id     CHAR(36) NOT NULL,
    restaurant_id CHAR(36) NOT NULL,
    vote_type    ENUM('ACCEPT', 'REJECT') NOT NULL,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 11. spin_wallets (P0 - Virtual Currency)
-- ============================================================
CREATE TABLE IF NOT EXISTS spin_wallets (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id      CHAR(36) NOT NULL,
    balance      INT DEFAULT 0 COMMENT 'Always >= 0 (enforced by trigger)',
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 12. spin_logs (v5.0: Spin history)
-- ============================================================
CREATE TABLE IF NOT EXISTS spin_logs (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id      CHAR(36) NOT NULL,
    session_id   CHAR(36) NOT NULL,
    restaurant_id CHAR(36) NOT NULL,
    action       ENUM('SPUN', 'ACCEPTED', 'REJECTED', 'RE_SPUN') NOT NULL,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 13. spin_packs (v5.0: Virtual items catalog)
-- ============================================================
CREATE TABLE IF NOT EXISTS spin_packs (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name         VARCHAR(100) NOT NULL,
    description  VARCHAR(500) NULL,
    spins_count  INT NOT NULL,
    price_usd    DECIMAL(10, 2) NOT NULL,
    is_active    BOOLEAN DEFAULT TRUE,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 14. lockets (P0 - Camera-only photo)
-- ============================================================
CREATE TABLE IF NOT EXISTS lockets (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id      CHAR(36) NOT NULL,
    restaurant_id CHAR(36) NULL,
    image_url    VARCHAR(500) NOT NULL,
    caption      VARCHAR(280) NULL,
    latitude     DECIMAL(10, 8) NULL,
    longitude    DECIMAL(11, 8) NULL,
    captured_at  DATETIME NOT NULL COMMENT 'Must be within 60s of server time',
    device_hash  VARCHAR(255) NOT NULL,
    visibility   ENUM('PRIVATE', 'FRIENDS', 'PUBLIC') DEFAULT 'FRIENDS',
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 15. check_ins (v5.0: Foursquare-style)
-- ============================================================
CREATE TABLE IF NOT EXISTS check_ins (
    id           CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id      CHAR(36) NOT NULL,
    restaurant_id CHAR(36) NOT NULL,
    status       ENUM('CHECKED_IN', 'NO_SHOW', 'COMPLETED', 'CANCELLED') DEFAULT 'CHECKED_IN',
    checked_in_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at   DATETIME NOT NULL COMMENT 'Auto-expire by EVENT',
    completed_at  DATETIME NULL,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

SELECT '✅ Tables created successfully!' AS result;
