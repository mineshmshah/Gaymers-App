BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fb_id INTEGER UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(300) ,
    avatar VARCHAR(50) NOT NULL,
    newUser BOOLEAN DEFAULT false
);


INSERT INTO users (fb_id,name,email,avatar,newUser) VALUES
  (12,'Aisha','aisha@fac.com','pig.png', 'false') ,
  (13,'Yahia','yahia@fac.com','cow.png', 'false');

COMMIT;