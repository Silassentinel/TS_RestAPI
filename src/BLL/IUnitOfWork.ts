import { IUserOrder } from './Models/Interfaces/IUserOrder';
import { ICategoryRepo } from './Repositories/ICategoryRepo';
import { IOrderLineRepo } from './Repositories/IOrderLineRepo';
import { IOrderRepo } from './Repositories/IOrderRepo';
import { IProductCategoryRepo } from './Repositories/IProductCategoryRepo';
import { IProductRepo } from './Repositories/IProductRepo';
import { IUserRepo } from './Repositories/IUserRepo';

/** This is the unit of work interface
 */
export interface IUnitOfWork {
  // #region Props
  /**
   *
   */
  Categories: ICategoryRepo;
  /**
   *
   */
  OrderLines: IOrderLineRepo;
  /**
   *
   */
  Orders: IOrderRepo;
  /**
   *
   */
  Products: IProductRepo;
  /**
   *
   */
  ProductCategories: IProductCategoryRepo;
  /**
   *
   */
  Users: IUserRepo;
  /**
   *
   */
  UserOrders: IUserOrder;
  // #endregion

  // #region Meths
  Complete(): void;
  // #endregion
}
