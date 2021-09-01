/* eslint-disable no-unused-vars */
export interface IUserOrder {
  // #region Props
  // Id: number;
  // UserId: number;
  // OrderId: number;
  // CreatedOn: Date;
  // UpdatedOn: Date;
  // #endregion

  // #region Meths
  /**
   * Get the userOrder Id
   * @returns {number} The userOrder Id
   */
  GetId(): number;
  /**
   * Get the userOrder UserId
   * @returns {number} The userOrder UserId
   */
  SetId(id: number): void;
  /**
   * Get the userOrder UserId
   * @returns {number} The userOrder UserId
   */
  GetUserId(): number;
  /**
   * Set the userOrder UserId
   * @param {number} userId The userOrder UserId
   */
  SetUserId(userId: number): void;
  /**
   * Get the userOrder OrderId
   * @returns {number} The userOrder OrderId
   */
  GetOrderId(): number;
  /**
   * Set the userOrder OrderId
   * @param {number} orderId The userOrder OrderId
   */
  SetOrderId(orderId: number): void;
  /**
   * Get the userOrder CreatedOn
   * @returns {string}  The date the userOrder was created.
   */
  GetCreatedOn(): string;
  /**
   * Set the userOrder CreatedOn
   * @param {string} createdOn The date the userOrder was created.
   */
  SetCreatedOn(createdOn: string): void;
  /**
   * Get the userOrder UpdatedOn
   * @returns {string}  The date the userOrder was updated.
   */
  GetUpdatedOn(): string;
  /**
   * Set the userOrder UpdatedOn
   * @param {string} updatedOn The date the userOrder was updated.
   */
  SetUpdatedOn(updatedOn: string): void;
  // #endregion
}
