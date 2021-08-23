/* eslint-disable no-unused-vars */
/**
 * Address interface.
 */
export interface IAddress {
  // #region Props
  /**
   *
   */
  Id: number;
  /**
   *
   */
  Address1: string;
  /**
   *
   */
  Address2: string;
  /**
   *
   */
  City: string;
  /**
   *
   */
  Country: string;
  /**
   *
   */
  CreatedBy: number;
  /**
   *
   */
  CreatedOn: Date;
  /**
   *
   */
  ModifiedBy: number;
  /**
   *
   */
  ModifiedOn: Date;
  /**
   *
   */
  State: string;
  /**
   *
   */
  Zip: string;
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
  SetAddress1(val: string): void;
  /**
   *
   */
  GetAddress1(): string;
  /**
   *
   */
  SetAddress2(val: string): void;
  /**
   *
   */
  GetAddress2(): string;
  /**
   *
   */
  SetCity(val: string): void;
  /**
   *
   */
  GetCity(): string;
  /**
   *
   */
  SetCountry(val: string): void;
  /**
   *
   */
  GetCountry(): string;
  /**
   *
   */
  SetCreatedBy(val: number): void;
  /**
   *
   */
  GetCreatedBy(): number;
  /**
   *
   */
  SetCreatedOn(val: Date): void;
  /**
   *
   */
  GetCreatedOn(): Date;
  /**
   *
   */
  SetModifiedBy(val: number): void;
  /**
   *
   */
  GetModifiedBy(): number;
  /**
   *
   */
  SetModifiedOn(val: Date): void;
  /**
   *
   */
  GetModifiedOn(): Date;
  /**
   *
   */
  SetState(val: string): void;
  /**
   *
   */
  GetState(): string;
  /**
   *
   */
  SetZip(val: string): void;
  /**
   *
   */
  GetZip(): string;
  // #endregion
}
