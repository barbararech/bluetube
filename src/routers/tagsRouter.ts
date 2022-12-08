import { Router } from 'express';
// import { createTagSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { getAllTags } from '../controllers';

const tagsRouter = Router();

tagsRouter.all('/*', authenticateToken).get('/', getAllTags);
// .get('/:title_tag/videos', getVideosByTag)
// .post('/', validateBody(createTagSchema), createTag)
// .put('/:id', validateBody(createTagSchema), updateTagById)
// .delete('/:id', deleteTagById);
export { tagsRouter };
