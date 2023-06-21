create table if not exists projects (
	id  VARCHAR PRIMARY KEY NOT NULL,
	title VARCHAR NOT NULL ,
	languages VARCHAR NOT NULL,
	img VARCHAR,
	repo VARCHAR NOT NULL UNIQUE,
	demo VARCHAR NOT NULL UNIQUE
);

