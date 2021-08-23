import BaseException from '../BaseException';
/**
 * Shippinginfo exception class
 */
export default class ShippingInfoException extends BaseException {
  /**
   *
   * @param message
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
