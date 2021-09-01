/* eslint-disable no-unused-vars */
import { ICategory } from './ICategory';
import { IProduct } from './IProduct';

/**
 * Product category interface.
 */
export interface IProductCategory {
  // #region Props
  // /**
  //  *
  //  */
  // Id: number;
  // /**
  //  *
  //  */
  // Name: string;
  // /**
  //  *
  //  */
  // Description: string;
  // /**
  //  *
  //  */
  // CreatedDate: Date;
  // /**
  //  *
  //  */
  // ModifiedDate: Date;

  // // Navigation properties
  // /**
  //  *
  //  */
  // Category: ICategory;
  // /**
  //  *
  //  */
  // CategoryId: number;
  // /**
  //  *
  //  */
  // Products: Array<IProduct>;
  // #endregion

  // #region Meths
  /**
   * Get product category id.
   * @returns {number} Product category id.
   */
  GetId(): number;
  /**
   * Set product category id.
   * @param {number} id - Product category id.
   */
  SetId(id: number): void;
  /**
   * Get product category name.
   * @returns {string} Product category name.
   */
  GetName(): string;
  /**
   * Set product category name.
   * @param {string} name - Product category name.
   */
  SetName(name: string): void;
  /**
   * Get product category description.
   * @returns {string} Product category description.
   */
  GetDescription(): string;
  /**
   * Set product category description.
   * @param {string} description - Product category description.
   */
  SetDescription(description: string): void;
  /**
   * Get product category created date.
   * @returns {string} Product category created date.
   */
  GetCreatedDate(): string;
  /**
   * Set product category created date.
   * @param {string} createdDate - Product category created date.
   */
  SetCreatedDate(date: string): void;
  /**
   * Get product category modified date.
   * @returns {string} Product category modified date.
   */
  GetModifiedDate(): Date;
  /**
   * Set product category modified date.
   * @param {string} modifiedDate - Product category modified date.
   */
  SetModifiedDate(date: string): void;
  /**
   * Get product category.
   * @returns {ICategory} Product category.
   */
  GetCategory(): ICategory;
  /**
   * Set product category.
   * @param {ICategory} category - Product category.
   */
  SetCategory(category: ICategory): void;
  /**
   * Get product category category id.
   * @returns {number} Product category category id.
   */
  GetCategoryId(): number;
  /**
   * Set product category category id.
   * @param {number} categoryId - Product category category id.
   */
  SetCategoryId(categoryId: number): void;
  /**
   * Get product category products.
   * @returns {Array<IProduct>} Product category products.
   */
  GetProducts(): Array<IProduct>;
  /**
   * Set product category products.
   * @param {Array<IProduct>} products - Product category products.
   */
  SetProducts(products: Array<IProduct>): void;
  // #endregion
}
