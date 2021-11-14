// Imports
import { IProduct } from "src/BLL/Models/Interfaces/IProduct";
import { IProductRepo } from "src/BLL/Repositories/IProductRepo";
/**
 * OrderLine Repo class
 */
export default class ProductRepo implements IProductRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  GetAll(): Promise<IProduct[]> {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): Promise<IProduct> {
    throw new Error("Method not implemented.");
  }
  Add(product: IProduct): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Update(product: IProduct): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Exists(product: IProduct): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  GetAllByCategoryId(categoryId: number): Promise<IProduct[]> {
    throw new Error("Method not implemented.");
  }
  GetAllByCategoryIdAndName(
    categoryId: number,
    name: string
  ): Promise<IProduct[]> {
    throw new Error("Method not implemented.");
  }
  GetAllByCategoryIdAndNameAndPrice(
    categoryId: number,
    name: string,
    price: number
  ): Promise<IProduct[]> {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
