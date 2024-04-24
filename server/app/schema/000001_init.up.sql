CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_tokens (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    role VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    access_token VARCHAR(255) UNIQUE NOT NULL,
    refresh_token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION update_user_token_updated_at()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_tokens_update_updated_at
    BEFORE UPDATE ON user_tokens
    FOR EACH ROW
EXECUTE FUNCTION update_user_token_updated_at();


CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    description TEXT,
    city VARCHAR(100),
    owner_id INTEGER NOT NULL,
    mode_from TIMESTAMP NOT NULL,
    mode_to TIMESTAMP NOT NULL,
    icon VARCHAR,
    can_work BOOLEAN DEFAULT FALSE,
    live_music BOOLEAN DEFAULT FALSE,
    banquet_hall BOOLEAN DEFAULT FALSE,
    hookah BOOLEAN DEFAULT FALSE,
    unlimited_beer BOOLEAN DEFAULT FALSE,
    rainy_rhythm BOOLEAN DEFAULT FALSE,
    kids_playroom BOOLEAN DEFAULT FALSE,
    own_confectioner BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_photos (
     id SERIAL PRIMARY KEY,
     photo VARCHAR NOT NULL,
     restaurant_id INTEGER NOT NULL,
     FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tables (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     type VARCHAR(100) NOT NULL,
     description TEXT,
     capacity INTEGER NOT NULL,
     photo VARCHAR,
     restaurant_id INTEGER NOT NULL,
     FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
     id SERIAL PRIMARY KEY,
     restaurant_id INTEGER NOT NULL,
     total_sum FLOAT NOT NULL,
     user_id INTEGER,
     table_id INTEGER,
     date TIMESTAMP NOT NULL,
     status VARCHAR(100) NOT NULL,
     FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE,
     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
     FOREIGN KEY (table_id) REFERENCES tables(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS foods (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(100) NOT NULL,
      description TEXT,
      price FLOAT NOT NULL,
      status VARCHAR(100) NOT NULL,
      photo VARCHAR,
      restaurant_id INTEGER NOT NULL,
      FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS order_foods (
     id SERIAL PRIMARY KEY,
     order_id INTEGER NOT NULL,
     food_id INTEGER NOT NULL,
     FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
     FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_reviews (
    id SERIAL PRIMARY KEY,
    stars INTEGER NOT NULL,
    DESCRIPTION VARCHAR,
    user_id INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
)