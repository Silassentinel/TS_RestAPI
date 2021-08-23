import { IUnitOfWork } from './IUnitOfWork';
import { IAddress } from './Models/Interfaces/IAddress';
import { ICategory } from './Models/Interfaces/ICategory';
import { IOrder } from './Models/Interfaces/IOrder';
import { IOrderLine } from './Models/Interfaces/IOrderLine';
import { IProduct } from './Models/Interfaces/IProduct';
import { IProductCategory } from './Models/Interfaces/IProductCategory';
import { IShippingInfo } from './Models/Interfaces/IShippingInfo';
import { IUser } from './Models/Interfaces/IUser';
import DomainException from './Utils/Exceptions/DomainExecption';

/**
 * Application manager Via UoW.
 */
export default class ApplicationManager {
  // #region Props
  /**
   * The unit of work.
   */
  private readonly _uow: IUnitOfWork;

  // #endregion
  // #region Ctor
  /**
   * Ctor.
   * @param {IUnitOfWork} uow The unit of work.
   */
  constructor(UnitOfWork: IUnitOfWork) {
    this._uow = UnitOfWork;
  }

  // #endregion
  // #region Meths
  public async Exists(
    model:
      | IAddress
      | ICategory
      | IUser
      | IOrder
      | IProduct
      | IOrderLine
      | IProductCategory
      | IShippingInfo,
  ): Promise<boolean | undefined> {
    try {
      switch (model.constructor.name) {
        case 'Category':
          return await this._uow.Categories.Exists(model as ICategory);
        case 'User':
          return await this._uow.Users.Exists(model as IUser);
        case 'Order':
          return await this._uow.Orders.Exists(model as IOrder);
        case 'Product':
          return await this._uow.Products.Exists(model as IProduct);
        default:
          throw new DomainException('', '', new Error(), {}); // TODO - correct error implement
      }
    } catch (error) {
      return false;
    }
  }
  // #endregion
}
