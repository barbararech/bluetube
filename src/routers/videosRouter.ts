import { Router } from 'express';
import { createVideoSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { getAllVideos, getVideoById, createVideo, updateVideoById, deleteVideoById } from '../controllers';

const videosRouter = Router();

videosRouter
  .all('/*', authenticateToken)
  .get('/', getAllVideos)
  .get('/:id', getVideoById)
  .post('/', validateBody(createVideoSchema), createVideo)
  .put('/:id', validateBody(createVideoSchema), updateVideoById)
  .delete('/:id', deleteVideoById);
export { videosRouter };
