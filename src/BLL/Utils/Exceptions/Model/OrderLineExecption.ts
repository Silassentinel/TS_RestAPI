import BaseException from '../BaseException';
/**
 * OrderLine Exception
 */
export default class OrderLineException extends BaseException {
  /**
   *
   * @param {string} message
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'OrderLineException';
    this.message = message;
  }
}
