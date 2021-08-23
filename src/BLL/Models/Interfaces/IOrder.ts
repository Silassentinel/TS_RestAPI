/* eslint-disable no-unused-vars */
import { IOrderLine } from './IOrderLine';
import { IShippingInfo } from './IShippingInfo';
import { IUserOrder } from './IUserOrder';
/**
 * Order interface.
 */
export interface IOrder {
  // #region Props
  /**
   *
   */
  Id: number;
  /**
   *
   */
  OrderNumber: string;
  /**
   *
   */
  OrderDate: Date;
  /**
   *
   */
  OrderStatus: string;
  /**
   *
   */
  OrderType: string;
  /**
   *
   */
  OrderTotal: number;
  /**
   *
   */
  OrderLines: Array<IOrderLine>;
  /**
   *
   */
  UserId: number;
  /**
   *
   */
  UserOrder: IUserOrder;
  /**
   *
   */
  ShippingInfo: IShippingInfo;
  // #endregion

  // #region Meths
  /**
   *
   */
  GetId(): number;
  /**
   *
   */
  SetId(value: number): void;
  /**
   *
   */
  GetOrderNumber(): string;
  /**
   *
   */
  SetOrderNumber(value: string): void;
  /**
   *
   */
  GetOrderDate(): Date;
  /**
   *
   */
  SetOrderDate(value: Date): void;
  /**
   *
   */
  GetOrderStatus(): string;
  /**
   *
   */
  SetOrderStatus(value: string): void;
  /**
   *
   */
  GetOrderType(): string;
  /**
   *
   */
  SetOrderType(value: string): void;
  /**
   *
   */
  GetOrderTotal(): number;
  /**
   *
   */
  SetOrderTotal(value: number): void;
  /**
   *
   */
  GetOrderLines(): Array<IOrderLine>;
  /**
   *
   */
  SetOrderLines(value: Array<IOrderLine>): void;
  /**
   *
   */
  GetUserId(): number;
  /**
   *
   */
  SetUserId(value: number): void;
  /**
   *
   */
  GetUserOrder(): IUserOrder;
  /**
   *
   */
  SetUserOrder(value: IUserOrder): void;
  /**
   *
   */
  GetShippingInfo(): IShippingInfo;
  /**
   *
   */
  SetShippingInfo(value: IShippingInfo): void;
  // #endregion
}
