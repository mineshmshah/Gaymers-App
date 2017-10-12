BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fb_id BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(8000) NOT NULL,
    newUser BOOLEAN DEFAULT false NOT NULL,
    profile_url VARCHAR(8000) NOT NULL
);


INSERT INTO users (fb_id,name,email,avatar,newUser,profile_url) VALUES
  (12,'Aisha','aisha@fac.com','pig.png', 'false','facebook.com') ,
  (13,'Yahia','yahia@fac.com','cow.png', 'false', 'facebook.com');

COMMIT;