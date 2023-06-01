
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "catch" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"fish_id" INT REFERENCES "fish",
	"month" VARCHAR(80),
	"latitude" DECIMAL NOT NULL,
	"longitude" DECIMAL NOT NULL,
	"length" INTEGER,
	"water_temp" INTEGER 
)

CREATE TABLE "fish" (
	"id" SERIAL PRIMARY KEY,
  	"name" VARCHAR(80) NOT NULL
)

INSERT INTO "fish" ("name")
VALUES
('Largemouth_Bass'),
('Smallmouth_Bass'),
('Walleye'),
('Lake_Trout'),
('Northern_Pike'),
('Muskellunge')

-- DUMMY TEST DATA
INSERT INTO "catch" ("user_id", "fish_id", "month", "latitude", "longitude", "length", "water_temp")
VALUES
(1, 1, 'august', '47.418', '-93.507', '24', '65')