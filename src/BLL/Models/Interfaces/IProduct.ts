/* eslint-disable no-unused-vars */
import { ICategory } from './ICategory';
/**
 * Product interface.
 */
export interface IProduct {
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
  // Price: number;
  // /**
  //  *
  //  */
  // ImageUrl?: string;
  // /**
  //  *
  //  */
  // CategoryId: number;
  // /**
  //  *
  //  */
  // Category: ICategory;
  // #endregion

  // #region Meths
  /**
   * Get product id.
   * @returns {number} Product id.
   */
  GetId(): number;
  /**
   * Set product id.
   * @param {number} id - Product id.
   */
  SetId(id: number): void;
  /**
   * Get product name.
   * @returns {string} Product name.
   */
  GetName(): string;
  /**
   * Set product name.
   * @param {string} name - Product name.
   */
  SetName(name: string): void;
  /**
   * Get product description.
   * @returns {string} Product description.
   */
  GetDescription(): string;
  /**
   * Set product description.
   * @param {string} description - Product description.
   */
  SetDescription(description: string): void;
  /**
   * Get product price.
   * @returns {number} Product price.
   */
  GetPrice(): number;
  /**
   * Set product price.
   * @param {number} price - Product price.
   */
  SetPrice(price: number): void;
  /**
   * Get product image url.
   * @returns {string} Product image url.
   */
  GetImageUrl(): string;
  /**
   * Set product image url.
   * @param {string} imageUrl - Product image url.
   */
  SetImageUrl(imageUrl: string): void;
  /**
   * Get product category id.
   * @returns {number} Product category id.
   */
  GetCategoryId(): number;
  /**
   * Set product category id.
   * @param {number} categoryId - Product category id.
   */
  SetCategoryId(categoryId: number): void;
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
  // #endregion
}
