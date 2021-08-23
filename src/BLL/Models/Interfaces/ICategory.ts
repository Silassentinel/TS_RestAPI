/* eslint-disable no-unused-vars */
/**
 * Category interface.
 */
export interface ICategory {
  // #region Meths
  /**
   *
   */
  GetId(): number;
  /**
   *
   */
  SetId(val: number): void;
  /**
   *
   */
  GetName(): string;
  /**
   *
   */
  SetName(val: string): void;
  /**
   *
   */
  GetDescription(): string;
  /**
   *
   */
  SetDescription(val: string): void;
  /**
   *
   */
  GetParentId(): number;
  /**
   *
   */
  SetParentId(val: number): void;
  /**
   *
   */
  GetIsActive(): boolean;
  /**
   *
   */
  SetIsActive(val: boolean): void;
  /**
   *
   */
  GetCreatedBy(): number;
  /**
   *
   */
  SetCreatedBy(val: number): void;
  /**
   *
   */
  GetCreatedOn(): Date;
  /**
   *
   */
  SetCreatedOn(val: Date): void;
  /**
   *
   */
  GetModifiedBy(): number;
  /**
   *
   */
  SetModifiedBy(val: number): void;
  /**
   *
   */
  GetModifiedOn(): Date;
  // #endregion
}
