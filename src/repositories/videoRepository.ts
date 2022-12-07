import { prisma } from '../config';
import { CreateVideoParams, UpdateVideoParams } from '../services/videosService';

async function findAllVideos() {
  return prisma.video.findMany({
    distinct: ['id'],
    select: {
      id: true,
      name: true,
      url: true,
      userId: true,
      views: true,
      videoTags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: { id: 'asc' },
  });
}

async function findVideoById(videoId: number) {
  return prisma.video.findFirst({
    where: {
      id: videoId,
    },
    select: {
      id: true,
      name: true,
      url: true,
      userId: true,
      views: true,
      videoTags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
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

async function deleteVideo(videoId: number) {
  return prisma.video.delete({
    where: {
      id: videoId,
    },
  });
}

const videoRepository = {
  findAllVideos,
  findVideoById,
  updateViews,
  createVideo,
  updateVideo,
  deleteVideo,
};

export default videoRepository;

// select: {
//   videoTags: {
//     distinct: ['videoId'],
//     include: {
//       tag: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   },
// },
