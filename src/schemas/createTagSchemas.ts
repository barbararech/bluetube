import { CreateTagParams } from '../services/tagsService';
import Joi from 'joi';

export const createTagSchema = Joi.object<CreateTagParams>({
  name: Joi.string().required(),
});
