
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

select * from "user";

create table "goals" (
	"id" SERIAL PRIMARY KEY,
	"text" varchar (1000) UNIQUE NOT NULL,
	"user_id" int,
	 FOREIGN KEY ("user_id") references "user"("id")
);

ALTER TABLE "goals" ADD COLUMN 
"inserted_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


create table "answers" (
	"id" SERIAL PRIMARY KEY,
	"goal_met" boolean,
	"goal_id" int,
	 FOREIGN KEY ("goal_id") references "goals"("id")
);

ALTER TABLE "answers" ADD COLUMN 
"inserted_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


select * from "answers";

select * from "goals";

select * from "user";

INSERT INTO "goals" ("text", "user_id", "inserted_at")
  VALUES ($1, $2, $3)
  RETURNING "id";







