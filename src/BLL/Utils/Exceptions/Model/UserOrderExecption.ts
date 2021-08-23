import BaseException from '../BaseException';
/**
 * User Order Exception.
 */
export default class UserOrderException extends BaseException {
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
