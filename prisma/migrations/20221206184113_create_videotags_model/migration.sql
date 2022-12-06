-- CreateTable
CREATE TABLE "videoTags" (
    "id" SERIAL NOT NULL,
    "videoId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "videoTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videoTags" ADD CONSTRAINT "videoTags_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videoTags" ADD CONSTRAINT "videoTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
