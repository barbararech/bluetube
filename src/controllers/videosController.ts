import { AuthenticatedRequest } from '../middlewares';
import videosService from '../services/videosService';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllVideos(req: AuthenticatedRequest, res: Response) {
  const videos = await videosService.getVideos();

  return res.status(httpStatus.OK).send(videos);
}
