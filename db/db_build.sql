BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fb_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(8000) NOT NULL,
    newUser BOOLEAN DEFAULT 'false' NOT NULL,
    profile_url VARCHAR(8000) NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category INT UNIQUE NOT NULL,
    genres VARCHAR(200) NOT NULL,
    game_modes VARCHAR(500) NOT NULL,
    cover VARCHAR(8000) NOT NULL,
    first_release_date BIGINT UNIQUE NOT NULL
);



INSERT INTO users (fb_id,name,email,avatar,newUser,profile_url) VALUES
  (12,'Aisha','aisha@fac.com','pig.png', 'true','facebook.com') ,
  (13,'Yahia','yahia@fac.com','cow.png', 'true', 'facebook.com');

INSERT INTO games (name, category, genres, game_modes, cover, first_release_date) VALUES ('Overwatch', 0, '[2]', '[5,12,15]', '{
            "url": "//images.igdb.com/igdb/image/upload/t_thumb/yob05bs5ffigu3rmrni1.jpg",
            "cloudinary_id": "yob05bs5ffigu3rmrni1",
            "width": 1059,
            "height": 1500
        }',  1464048000000);

COMMIT;
