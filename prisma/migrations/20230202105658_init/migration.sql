-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FAST_FOOD', 'CAFE', 'FINE_DINNING');

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phoneNo" INTEGER NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'FAST_FOOD',
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "images" TEXT,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_email_key" ON "Restaurant"("email");
