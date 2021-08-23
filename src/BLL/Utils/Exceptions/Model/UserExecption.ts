import BaseException from '../BaseException';
/**
 * User exception
 */
export default class UserException extends BaseException {
  /**
   *
   * @param {string} message
   */

  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
