/*
  Warnings:

  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "trophies" INTEGER NOT NULL DEFAULT 0,
    "best_position" INTEGER,
    "earnigns" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("best_position", "earnigns", "email", "id", "password", "tag", "trophies", "username") SELECT "best_position", "earnigns", "email", "id", "password", "tag", "trophies", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE UNIQUE INDEX "User_tag_key" ON "User"("tag");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
