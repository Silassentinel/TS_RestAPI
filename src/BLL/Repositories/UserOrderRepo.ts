/* eslint-disable no-unused-vars */
import { IUserOrder } from '../Models/Interfaces/IUserOrder';
/**
 * UserOrder Repository
 */
export interface UserOrderRepo {
  /**
   * Get UserOrder by Id
   * @param {number} id
   * @return {Promise<IUserOrder>}
   */
  GetById(id: number): Promise<IUserOrder>;
  /**
   * Get UserOrder by UserId
   * @param {number} userId
   * @return {Promise<IUserOrder[]>}
   */
  GetByUserId(userId: number): Promise<IUserOrder[]>;
  /**
   *  Get UserOrder by UserId and OrderId
   * @param {number} userId
   * @param {number} orderId
   * @return {Promise<IUserOrder>}
   */
  GetByUserIdAndOrderId(userId: number, orderId: number): Promise<IUserOrder>;
  /**
   * Check if UserOrder exists
   * @param {number} userId
   * @param {number} orderId
   * @return {Promise<boolean>
   */
  Exists(userId: number, orderId: number): Promise<boolean>;
  /**
   * Check whether UserOrder exists
   * @param {IUserOrder} userOrder
   * @return {Promise<boolean>
   */
  Exists(userOrder: IUserOrder): Promise<boolean>;
}
