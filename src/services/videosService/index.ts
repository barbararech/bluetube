import { notFoundError } from './errors';
import videoRepository from '../../repositories/videoRepository';
import { Video } from '@prisma/client';

async function getVideos(): Promise<any> {
  const videos = await videoRepository.findAllVideos();

  videos.map((video) => {
    const arrTags: string[] = [];

    video.videoTags.map((el) => {
      arrTags.push(el.tag.name);
    });

    delete video.videoTags;
    Object.assign(video, { tags: arrTags });
  });

  return videos;
}

async function getVideoById(videoId: number): Promise<any> {
  const video = await videoRepository.findVideoById(videoId);

  if (!video) throw notFoundError();
  await videoRepository.updateViews(videoId);

  const arrTags: string[] = [];
  video.videoTags.map((el) => {
    arrTags.push(el.tag.name);
  });

  delete video.videoTags;
  Object.assign(video, { tags: arrTags });

  return video;
}

async function createVideo(data: CreateVideoParams): Promise<Video> {
  await videoRepository.createVideo(data);

  return;
}

async function updateVideoById(data: UpdateVideoParams): Promise<Video> {
  const video = await videoRepository.findVideoById(data.id);

  if (!video) throw notFoundError();
  await videoRepository.updateVideo({ ...data, userId: video.userId });

  return;
}

async function deleteVideoById(videoId: number): Promise<Video> {
  const video = await videoRepository.findVideoById(videoId);

  if (!video) throw notFoundError();

  await videoRepository.deleteVideo(videoId);

  return;
}

export type CreateVideoParams = Pick<Video, 'name' | 'url' | 'userId'>;
export type UpdateVideoParams = Pick<Video, 'id' | 'name' | 'url' | 'userId'>;
// export type ViewVideoParams =

const videosService = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideoById,
  deleteVideoById,
};

export default videosService;
