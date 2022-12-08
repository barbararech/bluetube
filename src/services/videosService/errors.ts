import { ApplicationError } from '@/protocols';

export function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'this video does not exist',
  };
}

export function duplicatedVideoError(): ApplicationError {
  return {
    name: 'DuplicatedVideoError',
    message: 'There is already an video with this name',
  };
}
