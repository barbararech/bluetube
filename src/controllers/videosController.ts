import { AuthenticatedRequest } from '../middlewares';
import videosService from '../services/videosService';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllVideos(req: AuthenticatedRequest, res: Response) {
  const videos = await videosService.getVideos();

  return res.status(httpStatus.OK).send(videos);
}

export async function getVideoById(req: AuthenticatedRequest, res: Response) {
  const videoId = Number(req.params.id);
  const video = await videosService.getVideoById(videoId);

  return res.status(httpStatus.OK).send(video);
}

export async function createVideo(req: AuthenticatedRequest, res: Response) {
  await videosService.createVideo({ ...req.body, userId: res.locals.userId });

  return res.status(httpStatus.OK).send('Video created successfully');
}

export async function updateVideoById(req: AuthenticatedRequest, res: Response) {
  const id = Number(req.params.id);
  await videosService.updateVideoById({ ...req.body, id });

  return res.status(httpStatus.OK).send('Video updated successfully');
}

export async function deleteVideoById(req: AuthenticatedRequest, res: Response) {
  const videoId = Number(req.params.id);
  await videosService.deleteVideoById(videoId);

  return res.status(httpStatus.OK).send('Video deleted successfully');
}
