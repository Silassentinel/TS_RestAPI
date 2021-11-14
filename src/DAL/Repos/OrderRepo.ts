// Imports
import { IOrder } from "src/BLL/Models/Interfaces/IOrder";
import { IOrderRepo } from "src/BLL/Repositories/IOrderRepo";
/**
 * OrderLine Repo class
 */
export default class OrderRepo implements IOrderRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  GetAll(): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrder(id: number): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  AddOrder(order: IOrder): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  UpdateOrder(order: IOrder): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  DeleteOrder(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByCustomerId(customerId: number): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByCustomerIdAndProductId(
    customerId: number,
    productId: number
  ): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByProductId(productId: number): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByProductIdAndCustomerId(
    productId: number,
    customerId: number
  ): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByDate(date: Date): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByProductIdAndCustomerIdAndStatus(
    productId: number,
    customerId: number,
    status: string
  ): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByProductIdAndCustomerIdAndStatusAndDate(
    productId: number,
    customerId: number,
    status: string,
    date: Date
  ): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  GetOrdersByProductIdAndCustomerIdAndStatusAndDateAndPage(
    productId: number,
    customerId: number,
    status: string,
    date: Date,
    page: number,
    size: number
  ): Promise<IOrder[]> {
    throw new Error("Method not implemented.");
  }
  Exists(id: number): Promise<boolean>;
  Exists(order: IOrder): Promise<boolean>;
  Exists(order: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
