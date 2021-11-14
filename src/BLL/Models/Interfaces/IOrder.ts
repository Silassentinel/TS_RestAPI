/* eslint-disable no-unused-vars */
import { IOrderLine } from './IOrderLine';
import { IShippingInfo } from './IShippingInfo';
import { IUserOrder } from './IUserOrder';
/**
 * Order interface.
 */
export interface IOrder {
  // #region Props
  // /**
  //  *
  //  */
  // Id: number;
  // /**
  //  *
  //  */
  // OrderNumber: string;
  // /**
  //  *
  //  */
  // OrderDate: Date;
  // /**
  //  *
  //  */
  // OrderStatus: string;
  // /**
  //  *
  //  */
  // OrderType: string;
  // /**
  //  *
  //  */
  // OrderTotal: number;
  // /**
  //  *
  //  */
  // OrderLines: Array<IOrderLine>;
  // /**
  //  *
  //  */
  // UserId: number;
  // /**
  //  *
  //  */
  // UserOrder: IUserOrder;
  // /**
  //  *
  //  */
  // ShippingInfo: IShippingInfo;
  // #endregion

  // #region Meths
  /**
   * Get Id.
   * @returns {number} Id.
   */
  GetId(): number;
  /**
   * Set Id.
   * @param {number} id - Id.
   */
  SetId(id: number): void;
  /**
   * Get OrderNumber.
   * @returns {string} OrderNumber.
   */
  GetOrderNumber(): string;
  /**
   * Set OrderNumber.
   * @param {string} orderNumber - OrderNumber.
   */
  SetOrderNumber(OrderNumber: string): void;
  /**
   * Get OrderDate.
   * @returns {string} OrderDate.
   */
  GetOrderDate(): string;
  /**
   * Set OrderDate.
   * @param {string} orderDate - OrderDate.
   */
  SetOrderDate(orderDate: string): void;
  /**
   * Get OrderStatus.
   * @returns {string} OrderStatus.
   */
  GetOrderStatus(): string;
  /**
   * Set OrderStatus.
   * @param {string} orderStatus - OrderStatus.
   */
  SetOrderStatus(orderStatus: string): void;
  /**
   * Get OrderType.
   * @returns {string} OrderType.
   */
  GetOrderType(): string;
  /**
   * Set OrderType.
   * @param {string} orderType - OrderType.
   */
  SetOrderType(orderType: string): void;
  /**
   * Get OrderTotal.
   * @returns {number} OrderTotal.
   */
  GetOrderTotal(): number;
  /**
   * Set OrderTotal.
   * @param {number} orderTotal - OrderTotal.
   */
  SetOrderTotal(orderTotal: number): void;
  /**
   * Get OrderLines.
   * @returns {Array<IOrderLine>} OrderLines.
   */
  GetOrderLines(): Array<IOrderLine>;
  /**
   * Set OrderLines.
   * @param {Array<IOrderLine>} orderLines - OrderLines.
   */
  SetOrderLines(orderLines: Array<IOrderLine>): void;
  /**
   * Get UserId.
   * @returns {number} UserId.
   */
  GetUserId(): number;
  /**
   * Set UserId.
   * @param {number} userId - UserId.
   */
  SetUserId(value: number): void;
  /**
   * Get UserOrder.
   * @returns {IUserOrder} UserOrder.
   */
  GetUserOrder(): IUserOrder;
  /**
   * Set UserOrder.
   * @param {IUserOrder} userOrder - UserOrder.
   */
  SetUserOrder(value: IUserOrder): void;
  /**
   * Get ShippingInfo.
   * @returns {IShippingInfo} ShippingInfo.
   */
  GetShippingInfo(): IShippingInfo;
  /**
   * Set ShippingInfo.
   * @param {IShippingInfo} shippingInfo - ShippingInfo.
   */
  SetShippingInfo(value: IShippingInfo): void;
  // #endregion
}
