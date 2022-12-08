import { notFoundError, duplicatedVideoError } from './errors';
import videoRepository from '../../repositories/videoRepository';
import { Video } from '@prisma/client';
import tagService from '../tagsService';

async function getVideos(): Promise<ViewVideoParams> {
  const videos = await videoRepository.findAllVideos();

  videos.map((video) => {
    const arrTags: string[] = [];

    video.videoTags.map((el) => {
      arrTags.push(el.tag.name);
    });

    delete video.videoTags;
    Object.assign(video, { tags: arrTags });
  });

  return videos as unknown as ViewVideoParams;
}

async function getVideoById(videoId: number): Promise<ViewVideoParams> {
  const video = await videoRepository.findVideoById(videoId);

  if (!video) throw notFoundError();
  await videoRepository.updateViews(videoId);

  const arrTags: string[] = [];
  video.videoTags.map((el) => {
    arrTags.push(el.tag.name);
  });

  delete video.videoTags;
  Object.assign(video, { tags: arrTags });

  return video as unknown as ViewVideoParams;
}

async function createVideo(data: any): Promise<Video> {
  const video = await videoRepository.findVideoByName(data.name);

  if (video) throw duplicatedVideoError();

  const newVideo = await videoRepository.createVideo({ name: data.name, url: data.url, userId: data.userId });

  data.tags.map(async (tag: string) => {
    const newTag = await tagService.createTag({ name: tag });
    await tagService.createVideoTags({ videoId: newVideo.id, tagId: newTag.id });
  });

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
export type ViewVideoParams = keyof UpdateVideoParams | 'tags';

const videosService = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideoById,
  deleteVideoById,
};

export default videosService;
