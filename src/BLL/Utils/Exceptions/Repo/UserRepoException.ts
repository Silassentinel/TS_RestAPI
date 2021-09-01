import BLLLogger from '../../Tools/BLLLogger';
import BaseException from '../BaseException';
/**
 * UserRepo Exception
*/
export default class UserRepoException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserRepoException';
    this.message = message;
    BLLLogger.ErrorAsync(this.name, `${this.message}, ${error}, ${data}`);
  }
}
