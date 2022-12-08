import { AuthenticatedRequest } from '../middlewares';
import tagsService from '../services/tagsService';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllTags(req: AuthenticatedRequest, res: Response) {
  const tags = await tagsService.getTags();

  return res.status(httpStatus.OK).send(tags);
}
