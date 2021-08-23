import BaseException from '../BaseException';
/**
 * Address Exception
 */
export default class AddressException extends BaseException {
  /**
   * Ctor
   * @param {string} message
   *
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
