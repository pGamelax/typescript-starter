-- CreateTable
CREATE TABLE "PlayerPush" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "season" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "PlayerPush_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
