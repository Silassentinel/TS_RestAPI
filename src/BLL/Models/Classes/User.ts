import { IAddress } from '../Interfaces/IAddress';
import { IUser } from '../Interfaces/IUser';
import { IUserOrder } from '../Interfaces/IUserOrder';
/**
 * User class
 */
export default class User implements IUser {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    address: IAddress,
    orders: IUserOrder[],
    createdOn: string,
  ) {
    this.SetId(id);
    this.SetFirstName(firstName);
    this.SetLastName(lastName);
    this.SetEmail(email);
    this.SetPassword(password);
    this.SetPhone(phone);
    this.SetAddress(address);
    this.SetUserOrders(orders);
    this.SetCreatedOn(createdOn);
  }
  // #endregion
  // #region Meths
  GetId(): number
  {
    throw new Error('Method not implemented.');
  }
  SetId(id: number): void
  {
    throw new Error('Method not implemented.');
  }
  GetUserName(): string
  {
    throw new Error('Method not implemented.');
  }
  SetUserName(userName: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetPassword(): string
  {
    throw new Error('Method not implemented.');
  }
  SetPassword(passWord: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetEmail(): string
  {
    throw new Error('Method not implemented.');
  }
  SetEmail(email: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetFirstName(): string
  {
    throw new Error('Method not implemented.');
  }
  SetFirstName(firstName: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetLastName(): string
  {
    throw new Error('Method not implemented.');
  }
  SetLastName(lastName: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetAddress(): IAddress
  {
    throw new Error('Method not implemented.');
  }
  SetAddress(address: IAddress): void
  {
    throw new Error('Method not implemented.');
  }
  GetPhone(): string
  {
    throw new Error('Method not implemented.');
  }
  SetPhone(phone: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetIsActive(): boolean
  {
    throw new Error('Method not implemented.');
  }
  SetIsActive(status: boolean): void
  {
    throw new Error('Method not implemented.');
  }
  GetIsDeleted(): boolean
  {
    throw new Error('Method not implemented.');
  }
  SetIsDeleted(isDeleted: boolean): void
  {
    throw new Error('Method not implemented.');
  }
  GetCreatedOn(): string
  {
    throw new Error('Method not implemented.');
  }
  SetCreatedOn(createdOn: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetModifiedOn(): string
  {
    throw new Error('Method not implemented.');
  }
  SetModifiedOn(modifiedOn: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetModifiedBy(): number
  {
    throw new Error('Method not implemented.');
  }
  SetModifiedBy(uId: number): void
  {
    throw new Error('Method not implemented.');
  }
  GetUserOrders(): IUserOrder[]
  {
    throw new Error('Method not implemented.');
  }
  SetUserOrders(userOrders: IUserOrder[]): void
  {
    throw new Error('Method not implemented.');
  }
  GetCreatedBy(): number
  {
    throw new Error('Method not implemented.');
  }
  SetCreatedBy(uId: number): void
  {
    throw new Error('Method not implemented.');
  }
  // #endregion
}
