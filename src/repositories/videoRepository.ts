import { prisma } from '../config';
import { CreateVideoParams, UpdateVideoParams } from '../services/videosService';

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

async function createVideo(data: CreateVideoParams) {
  return prisma.video.create({
    data: {
      ...data,
    },
  });
}

async function updateVideo(data: UpdateVideoParams) {
  return prisma.video.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      url: data.url,
      userId: data.userId,
    },
  });
}

const videoRepository = {
  findAllVideos,
  findVideoById,
  updateViews,
  createVideo,
  updateVideo,
};

export default videoRepository;
