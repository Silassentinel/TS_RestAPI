/* eslint-disable no-unused-vars */
import { IAddress } from './IAddress';
import { IUserOrder } from './IUserOrder';
/**
 * User interface.
 */
export interface IUser {
  // #region Props
  /**
   *
   */
  Id: number;
  /**
   *
   */
  UserName: string;
  /**
   *
   */
  Password: string;
  /**
   *
   */
  Email: string;
  /**
   *
   */
  FirstName: string;
  /**
   *
   */
  LastName: string;
  /**
   *
   */
  Address: IAddress;
  /**
   *
   */
  Phone: string;
  /**
   *
   */
  IsActive: boolean;
  /**
   *
   */
  IsDeleted: boolean;
  /**
   *
   */
  CreatedOn: Date;
  /**
   *
   */
  ModifiedOn: Date;
  /**
   *
   */
  ModifiedBy: number;
  // Navigation properties
  UserOrders: Array<IUserOrder>;

  // Foreign keys
  CreatedBy: number;
  // #endregion

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
  GetUserName(): string;
  /**
   *
   */
  SetUserName(val: string): void;
  /**
   *
   */
  GetPassword(): string;
  /**
   *
   */
  SetPassword(val: string): void;
  /**
   *
   */
  GetEmail(): string;
  /**
   *
   */
  SetEmail(val: string): void;
  /**
   *
   */
  GetFirstName(): string;
  /**
   *
   */
  SetFirstName(val: string): void;
  /**
   *
   */
  GetLastName(): string;
  /**
   *
   */
  SetLastName(val: string): void;
  /**
   *
   */
  GetAddress(): IAddress;
  /**
   *
   */
  SetAddress(val: IAddress): void;
  /**
   *
   */
  GetPhone(): string;
  /**
   *
   */
  SetPhone(val: string): void;
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
  GetIsDeleted(): boolean;
  /**
   *
   */
  SetIsDeleted(val: boolean): void;
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
  GetModifiedOn(): Date;
  /**
   *
   */
  SetModifiedOn(val: Date): void;
  /**
   *
   */
  GetModifiedBy(): number;
  /**
   *
   */
  SetModifiedBy(val: number): void;

  GetUserOrders(): Array<IUserOrder>;
  /**
   *
   */
  SetUserOrders(val: Array<IUserOrder>): void;
  /**
   *
   */
  GetCreatedBy(): number;
  /**
   *
   */
  SetCreatedBy(val: number): void;
  // #endregion
}
