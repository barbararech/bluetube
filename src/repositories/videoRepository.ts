import { prisma } from '../config';

async function findAllVideos() {
  return prisma.video.findMany();
}

async function findVideoById(videoId: number) {
  return prisma.video.findFirst({
    where: {
      id: videoId,
    },
  });
}

const videoRepository = {
  findAllVideos,
  findVideoById,
};

export default videoRepository;
