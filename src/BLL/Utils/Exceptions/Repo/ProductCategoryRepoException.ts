import BaseException from '../BaseException';
/**
 * Product category repository exception
*/
export default class ProductCategoryRepoException extends BaseException {
  /**
   * Construtor
   * @param {string} name
   * @param {string} message
   * @param {Error} error
   * @param {unknown|undefined} data
  */
  constructor(name: string, message: string, error: Error, data?: unknown) {
    super(name, message, error, data);
    this.name = 'ProductCategoryRepoException';
    this.message = message;
  }
}
