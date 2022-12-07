import { notFoundError } from './errors';
import videoRepository from '../../repositories/videoRepository';
import { Video } from '@prisma/client';

async function getVideos(): Promise<Video[]> {
  const videos = await videoRepository.findAllVideos();

  return videos;
}

async function getVideoById(videoId: number): Promise<Video> {
  const video = await videoRepository.findVideoById(videoId);

  if (!video) throw notFoundError();
  await videoRepository.updateViews(videoId);

  return video;
}

async function createVideo(data: CreateVideoParams): Promise<Video> {
  const video = await videoRepository.createVideo(data);

  return video;
}

export type CreateVideoParams = Pick<Video, 'name' | 'url' | 'userId'>;

const videosService = {
  getVideos,
  getVideoById,
  createVideo,
};

export default videosService;
