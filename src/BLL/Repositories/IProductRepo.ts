/* eslint-disable no-unused-vars */
import { IProduct } from '../Models/Interfaces/IProduct';
/**
 * Product repository interface.
 */
export interface IProductRepo {
  /**
   * Get all products.
   * @returns {Promise<IProduct[]>} A Promise that resolves to an array of products.
   */
  GetAll(): Promise<IProduct[]>;
  /**
   * Get a product by id.
   * @param {number} id - The product id.
   * @returns {Promise<IProduct>} A Promise that resolves to the product.
   */
  GetById(id: number): Promise<IProduct>;
  /**
   * Add a product.
   * @param {IProduct} product - The product to add.
   * @returns {Promise<void>} The void.
   */
  Add(product: IProduct): Promise<void>;
  /**
   * Update a Product
   * @param {IProduct} product
   * @returns {Promise<void> the void
   */
  Update(product: IProduct): Promise<void>;
  /**
   * Delete a product via Id.
   * @param {number} id - The product Id.
   * @returns {Promise<void> the void
   */
  Delete(id: number): Promise<void>;
  /**
   * Check whether a product exists.
   * @param {IProduct} product - The product to check.
   * @returns {Promise<boolean>} a promise that resolves to true if the
   *  product exists, false otherwise.
   */
  Exists(product: IProduct): Promise<boolean>;
  /**
   * Get all by category Id
   * @param {number} categoryId
   * @returns {Promise<IProduct[]>} a promise that resolves to an array of products.
   */
  GetAllByCategoryId(categoryId: number): Promise<IProduct[]>;
  /**
   * Get all by Category Id and Name
   * @param {number} categoryId -
   * @param {string} name -
   * @returns {Promise<IProduct[]>} a promise that resolves to an array of products.
   */
  GetAllByCategoryIdAndName(
    categoryId: number,
    name: string
  ): Promise<IProduct[]>;
  /**
   * Get all by Category Id and Name and price
   * @param {number} categoryId -
   * @param {string} name -
   * @param {number} price -
   * @returns {Promise<IProduct[]>} a promise that resolves to an array of products.
   */
  GetAllByCategoryIdAndNameAndPrice(
    categoryId: number,
    name: string,
    price: number
  ): Promise<IProduct[]>;
}
