import { ICategory } from "../Interfaces/ICategory";
import { IProduct } from "../Interfaces/IProduct";
import { IProductCategory } from "../Interfaces/IProductCategory";
/**
 * ProductCategory class
 */
export default class ProductCategory implements IProductCategory {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    id: number,
    name: string,
    description: string,
    createdDate: string,
    modifiedDate: string,
    category: ICategory,
    categoryId: number,
    products: Array<IProduct>
  ) {
    this.SetId(id);
    this.SetName(name);
    this.SetDescription(description);
    this.SetCreatedDate(createdDate);
    this.SetModifiedDate(modifiedDate);
    this.SetCategory(category);
    this.SetCategoryId(categoryId);
    this.SetProducts(products);
  }
  // #endregion
  // #region Meths
  GetId(): number {
    throw new Error("Method not implemented.");
  }
  SetId(id: number): void {
    throw new Error("Method not implemented.");
  }
  GetName(): string {
    throw new Error("Method not implemented.");
  }
  SetName(name: string): void {
    throw new Error("Method not implemented.");
  }
  GetDescription(): string {
    throw new Error("Method not implemented.");
  }
  SetDescription(description: string): void {
    throw new Error("Method not implemented.");
  }
  GetCreatedDate(): string {
    throw new Error("Method not implemented.");
  }
  SetCreatedDate(date: string): void {
    throw new Error("Method not implemented.");
  }
  GetModifiedDate(): Date {
    throw new Error("Method not implemented.");
  }
  SetModifiedDate(date: string): void {
    throw new Error("Method not implemented.");
  }
  GetCategory(): ICategory {
    throw new Error("Method not implemented.");
  }
  SetCategory(category: ICategory): void {
    throw new Error("Method not implemented.");
  }
  GetCategoryId(): number {
    throw new Error("Method not implemented.");
  }
  SetCategoryId(categoryId: number): void {
    throw new Error("Method not implemented.");
  }
  GetProducts(): IProduct[] {
    throw new Error("Method not implemented.");
  }
  SetProducts(products: IProduct[]): void {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
