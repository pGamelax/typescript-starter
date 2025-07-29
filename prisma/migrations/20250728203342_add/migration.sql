/*
  Warnings:

  - Added the required column `season` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "mode" TEXT NOT NULL,
    "season" TEXT NOT NULL
);
INSERT INTO "new_Tickets" ("id", "mode", "uuid", "value") SELECT "id", "mode", "uuid", "value" FROM "Tickets";
DROP TABLE "Tickets";
ALTER TABLE "new_Tickets" RENAME TO "Tickets";
CREATE UNIQUE INDEX "Tickets_season_key" ON "Tickets"("season");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
