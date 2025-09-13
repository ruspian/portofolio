/*
  Warnings:

  - Added the required column `githubUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Post" ADD COLUMN     "githubUrl" TEXT NOT NULL,
ADD COLUMN     "webUrl" TEXT;
