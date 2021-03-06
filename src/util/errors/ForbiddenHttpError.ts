import { HttpError } from './HttpError';

/**
 * An error thrown when an agent is not allowed to access data.
 */
export class ForbiddenHttpError extends HttpError {
  public constructor(message?: string) {
    super(403, 'ForbiddenHttpError', message);
  }

  public static isInstance(error: any): error is ForbiddenHttpError {
    return HttpError.isInstance(error) && error.statusCode === 403;
  }
}
