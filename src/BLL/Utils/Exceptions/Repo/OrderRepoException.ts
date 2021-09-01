import BLLLogger from '../../Tools/BLLLogger';
import BaseException from '../BaseException';
/**
 * Order Repo Exception.
*/
export default class OrderRepoException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown) {
    super(name, message, error, data);
    this.name = 'OrderRepoException';
    this.message = message;
    BLLLogger.ErrorAsync(this.name, `${this.message}, ${error}, ${data}`);
  }
}
