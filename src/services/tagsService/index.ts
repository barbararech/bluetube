import tagRepository from '../../repositories/tagRepository';
import { Tag } from '@prisma/client';

async function getTags(): Promise<ViewTagsParams[]> {
  const tags = await tagRepository.findAllTags();

  return tags;
}

async function getVideosByTag(tagName: string): Promise<any> {
  const videos = await tagRepository.findVideosByTag(tagName);

  //  const arrTags: string[] = [];
  // video.videoTags.map((el) => {
  //   arrTags.push(el.tag.name);
  // });

  // delete video.videoTags;
  // Object.assign(video, { tags: arrTags });

  // return video as unknown as ViewVideoParams;
  return videos;
}

export type ViewTagsParams = Pick<Tag, 'id' | 'name'>;

const videosService = {
  getTags,
  getVideosByTag,
};

export default videosService;
