import BaseException from '../BaseException';

/**
 * FileWriterException
*/
export default class BLLLoggerException extends BaseException {
  /**
     * constructor
    * @param {string} name
    * @param {string} message
    * @param {Error} error
    * @param {unknown|undefined} data
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'BLLLoggerException';
    this.message = message;
  }
}
