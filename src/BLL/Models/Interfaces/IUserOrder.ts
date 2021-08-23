/* eslint-disable no-unused-vars */
export interface IUserOrder {
  // #region Props
  Id: number;
  UserId: number;
  OrderId: number;
  CreatedOn: Date;
  UpdatedOn: Date;
  // #endregion

  // #region Meths
  GetId(): number;
  SetId(val: number): void;
  GetUserId(): number;
  SetUserId(val: number): void;
  GetOrderId(): number;
  SetOrderId(val: number): void;
  GetCreatedOn(): Date;
  SetCreatedOn(val: Date): void;
  GetUpdatedOn(): Date;
  SetUpdatedOn(val: Date): void;
  // #endregion
}
