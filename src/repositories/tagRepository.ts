import { prisma } from '../config';
import { CreateTagParams } from '../services/tagsService';

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

async function findTagByName(name: string) {
  return prisma.tag.findFirst({
    where: {
      name: name,
    },
  });
}

async function createTag(data: CreateTagParams) {
  return prisma.tag.create({
    data: {
      ...data,
    },
  });
}

const tagRepository = {
  findAllTags,
  findVideosByTag,
  findTagByName,
  createTag,
};

export default tagRepository;
