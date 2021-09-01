/* eslint-disable no-unused-vars */
import { IProduct } from './IProduct';

/**
 * Orderline Interface.
 *
 */
export interface IOrderLine {
  // #region Props
  // /**
  //  *
  //  */
  // Id: number;
  // /**
  //  *
  //  */
  // OrderId: number;
  // /**
  //  *
  //  */
  // ProductId: number;
  // /**
  //  *
  //  */
  // Quantity: number;
  // /**
  //  *
  //  */
  // UnitPrice: number;
  // /**
  //  *
  //  */
  // TotalPrice: number;
  // #region Object Props
  // Product: IProduct;
  // #endregion
  // #endregion

  // #region Meths
  /**
   * Set the OrderLine Id.
   * @param {number} id - The OrderLine Id.
   */
  SetId(id: number): void;
  /**
   * Get the OrderLine Id.
   * @returns {number} The OrderLine Id.
   */
  GetId(): number;
  /**
   * Set the OrderId.
   * @param {number} orderId - The OrderId.
   */
  SetOrderId(orderId: number): void;
  /**
   * Get the OrderId.
   * @returns {number} The OrderId.
   */
  GetOrderId(): number;
  /**
   * Set the ProductId.
   * @param {number} productId - The ProductId.
   */
  SetProductId(productId: number): void;
  /**
   * Get the ProductId.
   * @returns {number} The ProductId.
   */
  GetProductId(): number;
  /**
   * Set the Quantity.
   * @param {number} quantity - The Quantity.
   */
  SetQuantity(quantity: number): void;
  /**
   * Get the Quantity.
   * @returns {number} The Quantity.
   */
  GetQuantity(): number;
  /**
   * Set the UnitPrice.
   * @param {number} unitPrice - The UnitPrice.
   */
  SetUnitPrice(unitPrice: number): void;
  /**
   * Get the UnitPrice.
   * @returns {number} The UnitPrice.
   */
  GetUnitPrice(): number;
  /**
   * Set the TotalPrice.
   * @param {number} totalPrice - The TotalPrice.
   */
  SetTotalPrice(totalPrice: number): void;
  /**
   * Get the TotalPrice.
   * @returns {number} The TotalPrice.
   */
  GetTotalPrice(): number;
  /**
   * Set the Product.
   * @param {IProduct} product - The Product.
   */
  SetProduct(product: IProduct): void;
  /**
   * Get the Product.
   * @returns {IProduct} The Product.
   */
  GetProduct(): IProduct;
  // #endregion
}
