// Imports
import { IProductCategory } from "src/BLL/Models/Interfaces/IProductCategory";
import { IProductCategoryRepo } from "src/BLL/Repositories/IProductCategoryRepo";
/**
 * OrderLine Repo class
 */
export default class ProductCategoryRepo implements IProductCategoryRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  Add(productCategory: IProductCategory): void {
    throw new Error("Method not implemented.");
  }
  Update(productCategory: IProductCategory): void {
    throw new Error("Method not implemented.");
  }
  Delete(productCategory: IProductCategory): void {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): IProductCategory {
    throw new Error("Method not implemented.");
  }
  GetAll(): IProductCategory[] {
    throw new Error("Method not implemented.");
  }
  Exists(productCategory: IProductCategory): boolean {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
