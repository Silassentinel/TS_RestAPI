import BaseException from './BaseException';

/**
 * ApplicationManagerException
 */
export default class ApplicationManagerException extends BaseException {
  /**
   * ApplicationManagerException constructor.
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
