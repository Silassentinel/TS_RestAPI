import BaseException from '../BaseException';

/**
 * FileWriterException
*/
export default class FileWriterException extends BaseException {
  /**
     * constructor
    * @param {string} name
    * @param {string} message
    * @param {Error} error
    * @param {unknown|undefined} data
   */
  constructor(name: string, message: string, error: Error, data?: unknown | undefined) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
