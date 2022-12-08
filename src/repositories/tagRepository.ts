import { prisma } from '../config';

async function findAllTags() {
  return prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: { id: 'asc' },
  });
}

async function findVideosByTag(tagName: string) {
  return prisma.tag.findFirst({
    where: {
      name: tagName,
    },
    select: {
      id: true,
      name: true,
      videoTags: {
        select: {
          video: {
            select: {
              id: true,
              name: true,
              url: true,
              views: true,
              userId: true,
            },
          },
        },
      },
    },
  });
}

const tagRepository = {
  findAllTags,
  findVideosByTag,
};

export default tagRepository;
