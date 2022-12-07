import { CreateVideoParams } from '../services/videosService';
import Joi from 'joi';

const youtubeLinkRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

export const createVideoSchema = Joi.object<CreateVideoParams>({
  name: Joi.string().required(),
  url: Joi.string().required().pattern(youtubeLinkRegex),
});
