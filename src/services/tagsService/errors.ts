import { ApplicationError } from '@/protocols';

export function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'this tag does not exist',
  };
}

export function duplicatedTagError(): ApplicationError {
  return {
    name: 'DuplicatedTagError',
    message: 'There is already a tag with this name',
  };
}
