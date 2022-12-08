/*
  Warnings:

  - A unique constraint covering the columns `[videoId,tagId]` on the table `videoTags` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "videoTags" DROP CONSTRAINT "videoTags_tagId_fkey";

-- DropForeignKey
ALTER TABLE "videoTags" DROP CONSTRAINT "videoTags_videoId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "videoTags_videoId_tagId_key" ON "videoTags"("videoId", "tagId");

-- AddForeignKey
ALTER TABLE "videoTags" ADD CONSTRAINT "videoTags_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videoTags" ADD CONSTRAINT "videoTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
