import { notFoundError } from './errors';
import videoRepository from '../../repositories/videoRepository';
import { Video } from '@prisma/client';

async function getVideos(): Promise<GetVideoResult[]> {
  const videos = await videoRepository.findAllVideos();

  return videos;
}

async function getVideoById(videoId: number): Promise<GetVideoResult> {
  const video = await videoRepository.findVideoById(videoId);

  if (!video) throw notFoundError();

  return video;
}

export type GetVideoResult = Omit<Video, 'createdAt' | 'updatedAt'>;

const videosService = {
  getVideos,
  getVideoById,
};

export default videosService;
