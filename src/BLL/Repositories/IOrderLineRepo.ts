/* eslint-disable no-unused-vars */
import { IOrderLine } from '../Models/Interfaces/IOrderLine';
/**
 * Orderline Repository Interface.
 */
export interface IOrderLineRepo {
  // #region Meths
  /**
   * Add a new order line
   */
  Add(orderLine: IOrderLine): void;
  /**
   * Delete an order line
   */
  Delete(orderLine: IOrderLine): void;

  /**
   * Update an order line
   */
  Update(orderLine: IOrderLine): void;
  /**
   * Get an order line by id
   */
  GetById(id: number): IOrderLine;
  /**
   * Get orderline by order id
   */
  GetByOrderId(id: number): IOrderLine[];
  /**
   * Get all order lines
   */
  GetAll(): Array<IOrderLine>;
  /**
   * Check if an order line exists
   */
  Exists(id: number): boolean;
  /**
   * Check if an order line exists
   */
  Exists(orderId: number, productId: number): boolean;
  /**
   * Check if an order line exists
   */
  Exists(orderLine: IOrderLine): boolean;
  // #endregion
}
