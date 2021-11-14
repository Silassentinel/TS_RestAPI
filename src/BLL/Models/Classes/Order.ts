import { IOrder } from "../Interfaces/IOrder";
import { IOrderLine } from "../Interfaces/IOrderLine";
import { IShippingInfo } from "../Interfaces/IShippingInfo";
import { IUserOrder } from "../Interfaces/IUserOrder";
/**
 * Order class
 */
export default class Order implements IOrder {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    id: number,
    orderNumber: string,
    orderDate: string,
    orderStatus: string,
    orderType: string,
    orderTotal: number,
    orderLines: IOrderLine[],
    userId: number,
    userOrder: IUserOrder,
    shippingInfo: IShippingInfo
  ) {
    this.SetId(id);
    this.SetOrderNumber(orderNumber);
    this.SetOrderDate(orderDate);
    this.SetOrderStatus(orderStatus);
    this.SetOrderType(orderType);
    this.SetOrderTotal(orderTotal);
    this.SetOrderLines(orderLines);
    this.SetUserId(userId);
    this.SetUserOrder(userOrder);
    this.SetShippingInfo(shippingInfo);
  }
  // #endregion
  // #region Meths
  GetId(): number {
    throw new Error("Method not implemented.");
  }
  SetId(id: number): void {
    throw new Error("Method not implemented.");
  }
  GetOrderNumber(): string {
    throw new Error("Method not implemented.");
  }
  SetOrderNumber(OrderNumber: string): void {
    throw new Error("Method not implemented.");
  }
  GetOrderDate(): string {
    throw new Error("Method not implemented.");
  }
  SetOrderDate(orderDate: string): void {
    throw new Error("Method not implemented.");
  }
  GetOrderStatus(): string {
    throw new Error("Method not implemented.");
  }
  SetOrderStatus(orderStatus: string): void {
    throw new Error("Method not implemented.");
  }
  GetOrderType(): string {
    throw new Error("Method not implemented.");
  }
  SetOrderType(orderType: string): void {
    throw new Error("Method not implemented.");
  }
  GetOrderTotal(): number {
    throw new Error("Method not implemented.");
  }
  SetOrderTotal(orderTotal: number): void {
    throw new Error("Method not implemented.");
  }
  GetOrderLines(): IOrderLine[] {
    throw new Error("Method not implemented.");
  }
  SetOrderLines(orderLines: IOrderLine[]): void {
    throw new Error("Method not implemented.");
  }
  GetUserId(): number {
    throw new Error("Method not implemented.");
  }
  SetUserId(value: number): void {
    throw new Error("Method not implemented.");
  }
  GetUserOrder(): IUserOrder {
    throw new Error("Method not implemented.");
  }
  SetUserOrder(value: IUserOrder): void {
    throw new Error("Method not implemented.");
  }
  GetShippingInfo(): IShippingInfo {
    throw new Error("Method not implemented.");
  }
  SetShippingInfo(value: IShippingInfo): void {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
