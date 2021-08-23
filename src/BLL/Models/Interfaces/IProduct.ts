/* eslint-disable no-unused-vars */
import { ICategory } from './ICategory';
/**
 * Product interface.
 */
export interface IProduct {
  // #region Props
  /**
   *
   */
  Id: number;
  /**
   *
   */
  Name: string;
  /**
   *
   */
  Description: string;
  /**
   *
   */
  Price: number;
  /**
   *
   */
  ImageUrl?: string;
  /**
   *
   */
  CategoryId: number;
  /**
   *
   */
  Category: ICategory;
  // #endregion

  // #region Meths
  /**
   *
   */
  GetId(): number;
  /**
   *
   */
  SetId(id: number): void;
  /**
   *
   */
  GetName(): string;
  /**
   *
   */
  SetName(name: string): void;
  /**
   *
   */
  GetDescription(): string;
  /**
   *
   */
  SetDescription(description: string): void;
  /**
   *
   */
  GetPrice(): number;
  /**
   *
   */
  SetPrice(price: number): void;
  /**
   *
   */
  GetImageUrl(): string;
  /**
   *
   */
  SetImageUrl(imageUrl: string): void;
  /**
   *
   */
  GetCategoryId(): number;
  /**
   *
   */
  SetCategoryId(categoryId: number): void;
  /**
   *
   */
  GetCategory(): ICategory;
  /**
   *
   */
  SetCategory(category: ICategory): void;
  // #endregion
}
