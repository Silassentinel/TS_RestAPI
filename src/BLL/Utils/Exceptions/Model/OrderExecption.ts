import BaseException from '../BaseException';
/**
 * Order exception
 */
export default class OrderException extends BaseException {
  /**
   *
   * @param {string} message
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'OrderException';
    this.message = message;
  }
}
