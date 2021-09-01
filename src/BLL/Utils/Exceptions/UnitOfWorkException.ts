import BLLLogger from '../Tools/BLLLogger';
import BaseException from './BaseException';
/**
 * UnitOfWorkException class
 */
export default class UnitOfWorkException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UnitOfWorkException';
    this.message = message;
    BLLLogger.ErrorAsync(this.name, `${this.message}, ${error}, ${data}`);
  }
}
