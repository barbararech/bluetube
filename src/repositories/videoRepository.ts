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

async function updateViews(videoId: number) {
  return prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      views: { ['increment']: 1 },
    },
  });
}

const videoRepository = {
  findAllVideos,
  findVideoById,
  updateViews,
};

export default videoRepository;
