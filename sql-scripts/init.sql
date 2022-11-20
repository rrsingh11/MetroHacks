CREATE TABLE "Hospital" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE "Admin" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    "hospitalId" INTEGER NOT NULL,
    FOREIGN KEY ("hospitalId") REFERENCES "Hospital"(id)
);

CREATE TABLE "ResourceCategory" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE "Resource" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(255),
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("categoryId") REFERENCES "ResourceCategory"(id)
);

CREATE TABLE "ResourceAvailability" (
    id SERIAL PRIMARY KEY NOT NULL,
    available INTEGER,
    patients INTEGER,
    "resourceId" INTEGER NOT NULL,
    "hospitalId" INTEGER NOT NULL,
    FOREIGN KEY ("resourceId") REFERENCES "Resource"(id),
    FOREIGN KEY ("hospitalId") REFERENCES "Hospital"(id)
);