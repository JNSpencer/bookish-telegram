-- CREATE USER docker1 WITH PASSWORD 'password1';
-- CREATE DATABASE messagedb;
-- GRANT ALL PRIVILEGES ON DATABASE messagedb TO docker1;

-- CREATE TABLE IF NOT EXISTS message(msg_id INT NOT NULL,message_data varchar(250) NOT NULL, PRIMARY KEY (msg_id));

CREATE TABLE public.Messages (
    id SERIAL,
    timestmp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userName VARCHAR(255),
    msg VARCHAR(255)
);
CREATE SEQUENCE hibernate_sequence START 1;
