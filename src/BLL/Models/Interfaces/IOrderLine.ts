/* eslint-disable no-unused-vars */
import { IProduct } from './IProduct';

/**
 * Orderline Interface.
 *
 */
export interface IOrderLine {
  // #region Props
  /**
   *
   */
  Id: number;
  /**
   *
   */
  OrderId: number;
  /**
   *
   */
  ProductId: number;
  /**
   *
   */
  Quantity: number;
  /**
   *
   */
  UnitPrice: number;
  /**
   *
   */
  TotalPrice: number;
  // #region Object Props
  Product: IProduct;
  // #endregion
  // #endregion

  // #region Meths
  /**
   *
   */
  SetId(val: number): void;
  /**
   *
   */
  GetId(): number;
  /**
   *
   */
  SetOrderId(val: number): void;
  /**
   *
   */
  GetOrderId(): number;
  /**
   *
   */
  SetProductId(val: number): void;
  /**
   *
   */
  GetProductId(): number;
  /**
   *
   */
  SetQuantity(val: number): void;
  /**
   *
   */
  GetQuantity(): number;
  /**
   *
   */
  SetUnitPrice(val: number): void;
  /**
   *
   */
  GetUnitPrice(): number;
  /**
   *
   */
  SetTotalPrice(val: number): void;
  /**
   *
   */
  GetTotalPrice(): number;
  /**
   *
   */
  SetProduct(val: IProduct): void;
  /**
   *
   */
  GetProduct(): IProduct;
  // #endregion
}
