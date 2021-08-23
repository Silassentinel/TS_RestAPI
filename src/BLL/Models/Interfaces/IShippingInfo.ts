/* eslint-disable no-unused-vars */
import { IAddress } from './IAddress';

/**
 * Shipping info interface
 */
export interface IShippingInfo extends IAddress {
  ShippingComments: string;
  /**
   *
   */
  ShippingMethod: string;
  /**
   *
   */
  ShippingMethodId: number;
  /**
   *
   */
  ShippingMethodName: string;
  /**
   *
   */
  ShippingMethodDescription: string;
  /**
   *
   */
  ShippingMethodPrice: number;
  /**
   *
   */
  ShippingMethodTax: number;
  /**
   *
   */
  ShippingMethodTotal: number;
  /**
   *
   */
  ShippingMethodTaxTotal: number;
  // #endregion

  // #region Meths
  GetShippingComments(): string;
  /**
   *
   */
  SetShippingComments(val: string): void;
  /**
   *
   */
  GetShippingMethod(): string;
  /**
   *
   */
  SetShippingMethod(val: string): void;
  /**
   *
   */
  GetShippingMethodId(): number;
  /**
   *
   */
  SetShippingMethodId(val: number): void;
  /**
   *
   */
  GetShippingMethodName(): string;
  /**
   *
   */
  SetShippingMethodName(val: string): void;
  /**
   *
   */
  GetShippingMethodDescription(): string;
  /**
   *
   */
  SetShippingMethodDescription(val: string): void;
  /**
   *
   */
  GetShippingMethodPrice(): number;
  /**
   *
   */
  SetShippingMethodPrice(val: number): void;
  /**
   *
   */
  GetShippingMethodTax(): number;
  /**
   *
   */
  SetShippingMethodTax(val: number): void;
  /**
   *
   */
  GetShippingMethodTotal(): number;
  /**
   *
   */
  SetShippingMethodTotal(val: number): void;
  /**
   *
   */
  GetShippingMethodTaxTotal(): number;
  /**
   *
   */
  SetShippingMethodTaxTotal(val: number): void;
  // #endregion
}
