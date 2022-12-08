import tagRepository from '../../repositories/tagRepository';
import { notFoundError, duplicatedTagError } from './errors';
import { Tag } from '@prisma/client';

async function getTags(): Promise<ViewTagsParams[]> {
  const tags = await tagRepository.findAllTags();

  return tags;
}

async function getVideosByTag(tagName: string): Promise<any> {
  const videos = await tagRepository.findVideosByTag(tagName);
  return videos;
}

async function createTag(data: CreateTagParams): Promise<Tag> {
  const tag = await tagRepository.findTagByName(data.name);

  if (tag) throw duplicatedTagError();

  await tagRepository.createTag(data);

  return;
}

export type CreateTagParams = Pick<Tag, 'name'>;
export type ViewTagsParams = Pick<Tag, 'id' | 'name'>;

const videosService = {
  getTags,
  getVideosByTag,
  createTag,
};

export default videosService;
