// Imports
import { ICategory } from "src/BLL/Models/Interfaces/ICategory";
import { ICategoryRepo } from "src/BLL/Repositories/ICategoryRepo";
/**
 * Category Repository
 */
export default class CategoryRepo implements ICategoryRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  GetAll(): Promise<ICategory[]> {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): Promise<ICategory> {
    throw new Error("Method not implemented.");
  }
  GetByName(name: string): Promise<ICategory> {
    throw new Error("Method not implemented.");
  }
  Add(category: ICategory): Promise<ICategory> {
    throw new Error("Method not implemented.");
  }
  Update(category: ICategory): Promise<ICategory> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  GetAllCategories(): Promise<ICategory[]> {
    throw new Error("Method not implemented.");
  }
  GetAllCategoriesByName(): Promise<ICategory[]> {
    throw new Error("Method not implemented.");
  }
  Exists(id: number): Promise<boolean>;
  Exists(name: string): Promise<boolean>;
  Exists(category: ICategory): Promise<boolean>;
  Exists(category: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
