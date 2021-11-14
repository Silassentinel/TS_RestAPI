import { IOrderLine } from "../Interfaces/IOrderLine";
import { IProduct } from "../Interfaces/IProduct";
/**
 * OrderLine class
 */
export default class OrderLine implements IOrderLine {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(id: number, orderId: number, productId: number, quantity: number, unitPrice: number, totalPrice: number, product: IProduct) {
    this.SetId(id);
    this.SetOrderId(orderId);
    this.SetProductId(productId);
    this.SetQuantity(quantity);
    this.SetUnitPrice(unitPrice);
    this.SetTotalPrice(totalPrice);
    this.SetProduct(product);
  }
  // #endregion
  // #region Meths
  SetId(id: number): void {
    throw new Error("Method not implemented.");
  }
  GetId(): number {
    throw new Error("Method not implemented.");
  }
  SetOrderId(orderId: number): void {
    throw new Error("Method not implemented.");
  }
  GetOrderId(): number {
    throw new Error("Method not implemented.");
  }
  SetProductId(productId: number): void {
    throw new Error("Method not implemented.");
  }
  GetProductId(): number {
    throw new Error("Method not implemented.");
  }
  SetQuantity(quantity: number): void {
    throw new Error("Method not implemented.");
  }
  GetQuantity(): number {
    throw new Error("Method not implemented.");
  }
  SetUnitPrice(unitPrice: number): void {
    throw new Error("Method not implemented.");
  }
  GetUnitPrice(): number {
    throw new Error("Method not implemented.");
  }
  SetTotalPrice(totalPrice: number): void {
    throw new Error("Method not implemented.");
  }
  GetTotalPrice(): number {
    throw new Error("Method not implemented.");
  }
  SetProduct(product: IProduct): void {
    throw new Error("Method not implemented.");
  }
  GetProduct(): IProduct {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
