// Imports
import { IUserOrder } from "../../BLL/Models/Interfaces/IUserOrder";
import { IUserOrderRepo } from "../../BLL/Repositories/IUserOrderRepo";
/**
 * OrderLine Repo class
 */
export default class UserOrderRepo implements IUserOrderRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  GetById(id: number): Promise<IUserOrder> {
    throw new Error("Method not implemented.");
  }
  GetByUserId(userId: number): Promise<IUserOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetByUserIdAndOrderId(userId: number, orderId: number): Promise<IUserOrder> {
    throw new Error("Method not implemented.");
  }
  Exists(userId: number, orderId: number): Promise<boolean>;
  Exists(userOrder: IUserOrder): Promise<boolean>;
  Exists(userId: any, orderId?: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
