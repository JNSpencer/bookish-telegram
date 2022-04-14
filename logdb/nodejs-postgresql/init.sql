CREATE TABLE public.Messages (
    id SERIAL,
    timestmp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    proxymsg VARCHAR(255)
);
CREATE SEQUENCE hibernate_sequence START 1;
