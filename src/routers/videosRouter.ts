import { Router } from 'express';
import { authenticateToken, validateBody } from '../middlewares';
import { getAllVideos } from '../controllers';

const videosRouter = Router();

videosRouter.all('/*', authenticateToken).get('/', getAllVideos);
// .get('/:id', getVideoById)
// .post('/', validateBody(createVideoSchema), createVideo)
// .put('/:id', updateVideoById)
// .delete('/:id',deleteVideoById)
export { videosRouter };
