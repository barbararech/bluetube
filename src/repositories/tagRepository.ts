import { prisma } from '../config';
import { CreateTagParams, ViewTagsParams } from '../services/tagsService';

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

async function findTagById(id: number) {
  return prisma.tag.findFirst({
    where: {
      id: id,
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

async function updateTag(data: ViewTagsParams) {
  return prisma.tag.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
    },
  });
}

async function deleteTag(tagId: number) {
  return prisma.tag.delete({
    where: {
      id: tagId,
    },
  });
}

const tagRepository = {
  findAllTags,
  findVideosByTag,
  findTagByName,
  createTag,
  findTagById,
  updateTag,
  deleteTag,
};

export default tagRepository;
