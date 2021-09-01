/* eslint-disable no-unused-vars */
import { IAddress } from './IAddress';
import { IUserOrder } from './IUserOrder';
/**
 * User interface.
 */
export interface IUser {
  // #region Props
  // /**
  //  *
  //  */
  // Id: number;
  // /**
  //  *
  //  */
  // UserName: string;
  // /**
  //  *
  //  */
  // Password: string;
  // /**
  //  *
  //  */
  // Email: string;
  // /**
  //  *
  //  */
  // FirstName: string;
  // /**
  //  *
  //  */
  // LastName: string;
  // /**
  //  *
  //  */
  // Address: IAddress;
  // /**
  //  *
  //  */
  // Phone: string;
  // /**
  //  *
  //  */
  // IsActive: boolean;
  // /**
  //  *
  //  */
  // IsDeleted: boolean;
  // /**
  //  *
  //  */
  // CreatedOn: Date;
  // /**
  //  *
  //  */
  // ModifiedOn: Date;
  // /**
  //  *
  //  */
  // ModifiedBy: number;
  // // Navigation properties
  // UserOrders: Array<IUserOrder>;

  // // Foreign keys
  // CreatedBy: number;
  // // #endregion

  // #region Meths
  /**
   * Get the id.
   * @returns {number} The id.
   */
  GetId(): number;
  /**
   * Set the id.
   * @param {number} id - The id.
   */
  SetId(id: number): void;
  /**
   * Get the user name.
   * @returns {string} The user name.
   */
  GetUserName(): string;
  /**
   * Set the user name.
   * @param {string} userName - The user name.
   */
  SetUserName(userName: string): void;
  /**
   * Get the password.
   * @returns {string} The password.
   */
  GetPassword(): string;
  /**
   * Set the password.
   * @param {string} password - The password.
   */
  SetPassword(passWord: string): void;
  /**
   * Get the email.
   * @returns {string} The email.
   */
  GetEmail(): string;
  /**
   * Set the email.
   * @param {string} email - The email.
   */
  SetEmail(email: string): void;
  /**
   * Get the first name.
   * @returns {string} The first name.
   */
  GetFirstName(): string;
  /**
   * Set the first name.
   * @param {string} firstName - The first name.
   */
  SetFirstName(firstName: string): void;
  /**
   * Get the last name.
   * @returns {string} The last name.
   */
  GetLastName(): string;
  /**
   * Set the last name.
   * @param {string} lastName - The last name.
   */
  SetLastName(lastName: string): void;
  /**
   * Get the address.
   * @returns {IAddress} The address.
   */
  GetAddress(): IAddress;
  /**
   * Set the address.
   * @param {IAddress} address - The address.
   */
  SetAddress(address: IAddress): void;
  /**
   * Get the phone.
   * @returns {string} The phone.
   */
  GetPhone(): string;
  /**
   * Set the phone.
   * @param {string} phone - The phone.
   */
  SetPhone(phone: string): void;
  /**
   * Get the status.
   * @returns {boolean} The status.
   */
  GetIsActive(): boolean;
  /**
   * Set the status.
   * @param {boolean} isActive - The status.
   */
  SetIsActive(status: boolean): void;
  /**
   * Get the deletionInfo.
   * @returns {boolean} The deletionInfo.
   */
  GetIsDeleted(): boolean;
  /**
   * Set the deletionInfo.
   * @param {boolean} isDeleted - The deletionInfo.
   */
  SetIsDeleted(isDeleted: boolean): void;
  /**
   * Get the created on.
   * @returns {string} The date the user was created on.
   */
  GetCreatedOn(): string;
  /**
   * Set the created on.
   * @param {string} createdOn - The date the user was created on.
   */
  SetCreatedOn(createdOn: string): void;
  /**
   * Get the modified on.
   * @returns {string} The date the user was modified on.
   */
  GetModifiedOn(): string;
  /**
   * Set the modified on.
   * @param {string} modifiedOn - The date the user was modified on.
   */
  SetModifiedOn(modifiedOn: string): void;
  /**
   * Get the modified by.
   * @returns {number} The user id of the user whom modified the user.
   */
  GetModifiedBy(): number;
  /**
   * Set the modified by.
   * @param {number} modifiedBy - The user id of the user whom modified the user.
   */
  SetModifiedBy(uId: number): void;
  /**
   * Get the user orders.
   * @returns {Array<IUserOrder>} The user orders.
   */
  GetUserOrders(): Array<IUserOrder>;
  /**
   * Set the user orders.
   * @param {Array<IUserOrder>} userOrders - The user orders.
   */
  SetUserOrders(userOrders: Array<IUserOrder>): void;
  /**
   * Get the created by.
   * @returns {number} The user id of the user whom created the user.
   */
  GetCreatedBy(): number;
  /**
   * Set the created by.
   * @param {number} createdBy - The user id of the user whom created the user.
   */
  SetCreatedBy(uId: number): void;
  // #endregion
}
