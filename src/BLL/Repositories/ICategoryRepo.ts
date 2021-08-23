/* eslint-disable no-unused-vars */
import { ICategory } from '../Models/Interfaces/ICategory';
/**
 * Category Repository Interface.
 */
export interface ICategoryRepo {
  // #region Meths
  /**
   * Get all categories
   */
  GetAll(): Promise<ICategory[]>;
  /**
   * Get a category by id
   */
  GetById(id: number): Promise<ICategory>;
  /**
   * Get a category by name
   */
  GetByName(name: string): Promise<ICategory>;
  /**
   * Add a category
   */
  Add(category: ICategory): Promise<ICategory>;
  /**
   * Update a category
   */
  Update(category: ICategory): Promise<ICategory>;
  /**
   * Delete a category
   */
  Delete(id: number): Promise<void>;
  /**
   * Get all categories
   */
  GetAllCategories(): Promise<ICategory[]>;
  /**
   * Get all categories by name
   */
  GetAllCategoriesByName(): Promise<ICategory[]>;
  /**
   * Check Wether a category exists
   */
  Exists(id: number): Promise<boolean>;
  /**
   * Check Wether a category exists
   */
  Exists(name: string): Promise<boolean>;
  /**
   * Check Wether a category exists
   */
  Exists(category: ICategory): Promise<boolean>;
  // #endregion
}
