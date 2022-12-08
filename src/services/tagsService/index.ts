import tagRepository from '../../repositories/tagRepository';
import { Tag } from '@prisma/client';

async function getTags(): Promise<ViewTagsParams[]> {
  const tags = await tagRepository.findAllTags();

  return tags;
}

export type ViewTagsParams = Pick<Tag, 'id' | 'name'>;

const videosService = {
  getTags,
};

export default videosService;
