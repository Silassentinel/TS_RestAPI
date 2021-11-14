// Imports
import { IOrderLine } from "src/BLL/Models/Interfaces/IOrderLine";
import { IOrderLineRepo } from "src/BLL/Repositories/IOrderLineRepo";
/**
 * OrderLine Repo class
 */
export default class OrderLineRepo implements IOrderLineRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  Add(orderLine: IOrderLine): void {
    throw new Error("Method not implemented.");
  }
  Delete(orderLine: IOrderLine): void {
    throw new Error("Method not implemented.");
  }
  Update(orderLine: IOrderLine): void {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): IOrderLine {
    throw new Error("Method not implemented.");
  }
  GetByOrderId(id: number): IOrderLine[] {
    throw new Error("Method not implemented.");
  }
  GetAll(): IOrderLine[] {
    throw new Error("Method not implemented.");
  }
  Exists(id: number): boolean;
  Exists(orderId: number, productId: number): boolean;
  Exists(orderLine: IOrderLine): boolean;
  Exists(orderId: any, productId?: any): boolean {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
