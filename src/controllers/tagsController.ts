import { AuthenticatedRequest } from '../middlewares';
import tagsService from '../services/tagsService';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllTags(req: AuthenticatedRequest, res: Response) {
  const tags = await tagsService.getTags();

  return res.status(httpStatus.OK).send(tags);
}

export async function getVideosByTag(req: AuthenticatedRequest, res: Response) {
  const tagName = req.params.title_tag;
  const videos = await tagsService.getVideosByTag(tagName);

  return res.status(httpStatus.OK).send(videos);
}

export async function createTag(req: AuthenticatedRequest, res: Response) {
  await tagsService.createTag({ ...req.body });

  return res.status(httpStatus.OK).send('Tag created successfully');
}

export async function updateTagById(req: AuthenticatedRequest, res: Response) {
  const id = Number(req.params.id);
  await tagsService.updateTagById({ ...req.body, id });

  return res.status(httpStatus.OK).send('Tag updated successfully');
}

export async function deleteTagById(req: AuthenticatedRequest, res: Response) {
  const tagId = Number(req.params.id);
  await tagsService.deleteTagById(tagId);

  return res.status(httpStatus.OK).send('Tag deleted successfully');
}
