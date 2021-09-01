/* eslint-disable no-unused-vars */
import { IAddress } from './IAddress';

/**
 * Shipping info interface
 */
export interface IShippingInfo extends IAddress {
  // /**
  //  *
  //  */
  // ShippingComments: string;
  // /**
  //  *
  //  */
  // ShippingMethod: string;
  // /**
  //  *
  //  */
  // ShippingMethodId: number;
  // /**
  //  *
  //  */
  // ShippingMethodName: string;
  // /**
  //  *
  //  */
  // ShippingMethodDescription: string;
  // /**
  //  *
  //  */
  // ShippingMethodPrice: number;
  // /**
  //  *
  //  */
  // ShippingMethodTax: number;
  // /**
  //  *
  //  */
  // ShippingMethodTotal: number;
  // /**
  //  *
  //  */
  // ShippingMethodTaxTotal: number;
  // #endregion

  // #region Meths
  /**
   * Get the shipping comments.
   * @returns {string} The shipping comments.
   */
  GetShippingComments(): string;
  /**
   * Set the shipping comments.
   * @param {string} shippingComments - The shipping comments.
   */
  SetShippingComments(ShippingComments: string): void;
  /**
   * Get the shipping method.
   * @returns {string} The shipping method.
   */
  GetShippingMethod(): string;
  /**
   * Set the shipping method.
   * @param {string} shippingMethod - The shipping method.
   */
  SetShippingMethod(ShippingMethod: string): void;
  /**
   * Get the shipping method id.
   * @returns {number} The shipping method id.
   */
  GetShippingMethodId(): number;
  /**
   * Set the shipping method id.
   * @param {number} shippingMethodId - The shipping method id.
   */
  SetShippingMethodId(ShippingMethodId: number): void;
  /**
   * Get the shipping method name.
   * @returns {string} The shipping method name.
   */
  GetShippingMethodName(): string;
  /**
   * Set the shipping method name.
   * @param {string} shippingMethodName - The shipping method name.
   */
  SetShippingMethodName(ShippingMethodName: string): void;
  /**
   * Get the shipping method description.
   * @returns {string} The shipping method description.
   */
  GetShippingMethodDescription(): string;
  /**
   * Set the shipping method description.
   * @param {string} shippingMethodDescription - The shipping method description.
   */
  SetShippingMethodDescription(shippingMethodDescription: string): void;
  /**
   * Get the shipping method price.
   * @returns {number} The shipping method price.
   */
  GetShippingMethodPrice(): number;
  /**
   * Set the shipping method price.
   * @param {number} shippingMethodPrice - The shipping method price.
   */
  SetShippingMethodPrice(ShippingMethodPrice: number): void;
  /**
   * Get the shipping method tax.
   * @returns {number} The shipping method tax.
   */
  GetShippingMethodTax(): number;
  /**
   * Set the shipping method tax.
   * @param {number} shippingMethodTax - The shipping method tax.
   */
  SetShippingMethodTax(shippinhMethodTax: number): void;
  /**
   * Get the shipping method total.
   * @returns {number} The shipping method total.
   */
  GetShippingMethodTotal(): number;
  /**
   * Set the shipping method total.
   * @param {number} shippingMethodTotal - The shipping method total.
   */
  SetShippingMethodTotal(ShippingMethodTotal: number): void;
  /**
   * Get the shipping method tax total.
   * @returns {number} The shipping method tax total.
   */
  GetShippingMethodTaxTotal(): number;
  /**
   * Set the shipping method tax total.
   * @param {number} shippingMethodTaxTotal - The shipping method tax total.
   */
  SetShippingMethodTaxTotal(shippingMethodTaxTotal: number): void;
  // #endregion
}
