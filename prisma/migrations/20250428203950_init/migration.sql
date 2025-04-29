-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Inscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "experiencia" TEXT NOT NULL,
    "motivacion" TEXT NOT NULL,
    "comoNosConociste" TEXT NOT NULL,
    "referidoPor" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Insert admin user (password: admin123)
INSERT INTO "User" ("email", "password", "role", "createdAt", "updatedAt")
VALUES ('admin@hecatesecurity.com', '$2a$10$mKxXv.kr5Yv6qYYwNGzqAekfuH7wz.z4XQr6Q8YT.9fzT9RQH7wRm', 'ADMIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
