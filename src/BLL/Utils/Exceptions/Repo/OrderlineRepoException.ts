import BaseException from '../BaseException';
/**
 * Orderlne Repo Exception
*/
export default class OrderlineRepoException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
    */
  constructor(name: string, message: string, error: Error, data?: unknown) {
    super(name, message, error, data);
    this.name = 'UserOrderException';
    this.message = message;
  }
}
