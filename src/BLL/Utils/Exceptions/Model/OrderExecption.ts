import BLLLogger from '../../Tools/BLLLogger';
import BaseException from '../BaseException';
/**
 * Order exception
 */
export default class OrderException extends BaseException {
  /**
   * Ctor
   * @param {string} name - Exception name
   * @param {string} message - Exception message
   * @param {error} error - Error
   * @param {unknown} data - Some additional data
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'OrderException';
    this.message = message;
    BLLLogger.ErrorAsync(this.name, `${this.message}, ${error}, ${data}`);
  }
}
