/* eslint-disable no-unused-vars */
import { IOrder } from '../Models/Interfaces/IOrder';
/**
 * Order interface.
 */
export interface IOrderRepo {
  // #region Meths
  /**
   * Get all orders
   */
  GetAll(): Promise<Array<IOrder>>;
  /**
   *Get order by id
   */
  GetOrder(id: number): Promise<IOrder>;
  /**
   * Add new order
   */
  AddOrder(order: IOrder): Promise<IOrder>;
  /**
   * Update order
   */
  UpdateOrder(order: IOrder): Promise<IOrder>;
  /**
   * Delete order
   */
  DeleteOrder(id: number): Promise<void>;
  /**
   * Get orders by Customer id
   */
  GetOrdersByCustomerId(customerId: number): Promise<Array<IOrder>>;
  /**
   * Get orders by Order customer id & Product id
   */
  GetOrdersByCustomerIdAndProductId(
    customerId: number,
    productId: number
  ): Promise<Array<IOrder>>;
  /**
   * Get orders by Product Id
   */
  GetOrdersByProductId(productId: number): Promise<Array<IOrder>>;
  /**
   *
   */
  GetOrdersByProductIdAndCustomerId(
    productId: number,
    customerId: number
  ): Promise<Array<IOrder>>;
  /**
   *
   */
  GetOrdersByDate(date: Date): Promise<Array<IOrder>>;
  /**
   *
   */
  GetOrdersByProductIdAndCustomerIdAndStatus(
    productId: number,
    customerId: number,
    status: string
  ): Promise<Array<IOrder>>;
  /**
   *
   */
  GetOrdersByProductIdAndCustomerIdAndStatusAndDate(
    productId: number,
    customerId: number,
    status: string,
    date: Date
  ): Promise<Array<IOrder>>;
  /**
   *
   */
  GetOrdersByProductIdAndCustomerIdAndStatusAndDateAndPage(
    productId: number,
    customerId: number,
    status: string,
    date: Date,
    page: number,
    size: number
  ): Promise<Array<IOrder>>;
  /**
   * Check whether order exists
   */
  Exists(id: number): Promise<boolean>;
  /**
   * Check whether order exists
   */
  Exists(order: IOrder): Promise<boolean>;
  // #endregion
}
