-- CreateTable
CREATE TABLE "Tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "mode" TEXT NOT NULL
);
