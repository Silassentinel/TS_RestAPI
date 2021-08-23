import BaseException from '../BaseException';
/**
 * Product Exception
 */
export default class ProductException extends BaseException {
  /**
   *
   * @param {string} message
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'ProductException';
    this.message = message;
  }
}
