/* eslint-disable no-unused-vars */
import { ICategory } from './ICategory';
import { IProduct } from './IProduct';

/**
 * Product category interface.
 */
export interface IProductCategory {
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
  CreatedDate: Date;
  /**
   *
   */
  ModifiedDate: Date;

  // Navigation properties
  /**
   *
   */
  Category: ICategory;
  /**
   *
   */
  CategoryId: number;
  /**
   *
   */
  Products: Array<IProduct>;
  // #endregion

  // #region Meths
  /**
   *
   */
  GetId(): number;
  /**
   *
   */
  SetId(value: number): void;
  /**
   *
   */
  GetName(): string;
  /**
   *
   */
  SetName(value: string): void;
  /**
   *
   */
  GetDescription(): string;
  /**
   *
   */
  SetDescription(value: string): void;
  /**
   *
   */
  GetCreatedDate(): Date;
  /**
   *
   */
  SetCreatedDate(value: Date): void;
  /**
   *
   */
  GetModifiedDate(): Date;
  /**
   *
   */
  SetModifiedDate(value: Date): void;
  /**
   *
   */
  GetCategory(): ICategory;
  /**
   *
   */
  SetCategory(value: ICategory): void;
  /**
   *
   */
  GetCategoryId(): number;
  /**
   *
   */
  SetCategoryId(value: number): void;
  /**
   *
   */
  GetProducts(): Array<IProduct>;
  /**
   *
   */
  SetProducts(value: Array<IProduct>): void;
  // #endregion
}
