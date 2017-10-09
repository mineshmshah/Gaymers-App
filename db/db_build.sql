BEGIN;

DROP TABLE IF EXISTS [table-name] CASCADE;

CREATE TABLE [table-name] (id SERIAL PRIMARY KEY,[rest of schema]);

INSERT INTO [table-name] (fields) VALUES ();

COMMIT;
