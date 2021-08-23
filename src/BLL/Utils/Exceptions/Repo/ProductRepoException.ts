import BaseException from '../BaseException';
/**
 * ProductRepo Exception
*/
export default class ProductRepoException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown) {
    super(name, message, error, data);
    this.name = 'ProductRepoException';
    this.message = message;
  }
}
