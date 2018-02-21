BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fb_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(500) ,
    avatar VARCHAR(8000) NOT NULL,
    newUser BOOLEAN DEFAULT 'false' NOT NULL,
    profile_url VARCHAR(8000) NOT NULL,
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR(300),
    genre_colour VARCHAR(100)
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    summary TEXT,
    category INT UNIQUE NOT NULL,
    genres VARCHAR(200) NOT NULL,
    game_modes VARCHAR(500) NOT NULL,
    cover VARCHAR(8000) NOT NULL,
    first_release_date BIGINT UNIQUE NOT NULL
);

CREATE TABLE game_genres (
    id SERIAL PRIMARY KEY,
    user_id INT references users(id),
    game_id INT references games(id)
);

CREATE TABLE community (
    id SERIAL PRIMARY KEY,
    name VARCHAR(300)
);

CREATE TABLE user_community (
    id SERIAL PRIMARY KEY,
    user_id INT references users(id),
    community_id INT references games(id)
);


INSERT INTO users (fb_id,name,email,avatar,newUser,profile_url) VALUES
  (12,'Aisha','aisha@fac.com','pig.png', 'true','facebook.com') ,
  (13,'Yahia','yahia@fac.com','cow.png', 'true', 'facebook.com');

COMMIT;
