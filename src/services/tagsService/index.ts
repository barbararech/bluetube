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

async function updateTagById(data: ViewTagsParams): Promise<Tag> {
  const tag = await tagRepository.findTagById(data.id);

  if (!tag) throw notFoundError();

  const tagByName = await tagRepository.findTagByName(data.name);

  if (tagByName) throw duplicatedTagError();

  await tagRepository.updateTag({ ...data });

  return;
}

async function deleteTagById(tagId: number): Promise<Tag> {
  const tag = await tagRepository.findTagById(tagId);

  if (!tag) throw notFoundError();

  await tagRepository.deleteTag(tagId);

  return;
}

export type CreateTagParams = Pick<Tag, 'name'>;
export type ViewTagsParams = Pick<Tag, 'id' | 'name'>;

const videosService = {
  getTags,
  getVideosByTag,
  createTag,
  updateTagById,
  deleteTagById,
};

export default videosService;
