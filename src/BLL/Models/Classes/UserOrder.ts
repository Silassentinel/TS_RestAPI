import { IUserOrder } from '../Interfaces/IUserOrder';
/**
 * UserOrder class
 */
export default class UserOrder implements IUserOrder {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    id:number,
    userId:number,
    orderId:number,
    createdOn:string,
  ) {
    this.SetId(id);
    this.SetUserId(userId);
    this.SetOrderId(orderId);
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
  GetUserId(): number
  {
    throw new Error('Method not implemented.');
  }
  SetUserId(userId: number): void
  {
    throw new Error('Method not implemented.');
  }
  GetOrderId(): number
  {
    throw new Error('Method not implemented.');
  }
  SetOrderId(orderId: number): void
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
  GetUpdatedOn(): string
  {
    throw new Error('Method not implemented.');
  }
  SetUpdatedOn(updatedOn: string): void
  {
    throw new Error('Method not implemented.');
  }
  // #endregion
}
