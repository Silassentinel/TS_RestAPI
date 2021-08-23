import BaseException from '../BaseException';
/**
 * Category exception
 */
export default class CategoryException extends BaseException {
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
