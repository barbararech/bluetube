import { prisma } from '../config';

async function findAllVideos() {
  return prisma.video.findMany();
}

const videoRepository = {
  findAllVideos,
};

export default videoRepository;
