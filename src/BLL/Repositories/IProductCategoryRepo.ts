/* eslint-disable no-unused-vars */
import { IProductCategory } from '../Models/Interfaces/IProductCategory';
/**
 * Product category interface.
 */
export interface IProductCategoryRepo {
  /**
   * All product category
   */
  Add(productCategory: IProductCategory): void;
  /**
   * Update product category
   */
  Update(productCategory: IProductCategory): void;
  /**
   * Delete product category
   */
  Delete(productCategory: IProductCategory): void;
  /**
   * Get product category by id
   */
  GetById(id: number): IProductCategory;
  /**
   * Get All productcategories
   */
  GetAll(): IProductCategory[];
  /**
   * Check Whether product category exists
   */
  Exists(productCategory: IProductCategory): boolean;
}
