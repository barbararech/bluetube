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

const tagRepository = {
  findAllTags,
};

export default tagRepository;
