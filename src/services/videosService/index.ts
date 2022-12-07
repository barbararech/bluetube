import { notFoundError } from './errors';
import videoRepository from '../../repositories/videoRepository';
import { Video } from '@prisma/client';

async function getVideos(): Promise<GetVideoResult[]> {
  const video = await videoRepository.findAllVideos();

  return video;
}

export type GetVideoResult = Omit<Video, 'createdAt' | 'updatedAt'>;

const videosService = {
  getVideos,
};

export default videosService;
