-- CreateTable
CREATE TABLE "Last_positions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "trophies" INTEGER NOT NULL,
    CONSTRAINT "Last_positions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "trophies" INTEGER NOT NULL DEFAULT 0,
    "best_position" INTEGER,
    "earnigns" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("email", "id", "password", "tag", "username") SELECT "email", "id", "password", "tag", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_tag_key" ON "User"("tag");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
