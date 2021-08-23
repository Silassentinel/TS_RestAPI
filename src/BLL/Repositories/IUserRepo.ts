/* eslint-disable no-unused-vars */
import { IUser } from '../Models/Interfaces/IUser';
/**
 * User repository interface.
 */
export interface IUserRepo {
  /**
   * Add a User to the database
   * @param {IUser} user
   * @returns {Promise<IUser>} the void
   */
  Add(User: IUser): Promise<void>;
  /**
   * Get a User by id
   * @param {number} id
   * @returns {Promise<IUser>} a promise that resolves to the user
   */
  Get(id: number): Promise<IUser>;
  /**
   * Get all Users
   * @returns {Promise<IUser[]>} a promise that resolves to an array of users
   */
  GetAll(): Promise<IUser[]>;
  /**
   * Update a User
   * @param {IUser} user
   * @returns {Promise<vIuser>} A promise that resolves to the updated user
   */
  Update(User: IUser): Promise<IUser>;
  /**
   * Delete a User
   * @param {number} id The id of the User to delete.
   * @returns {Promise<void>} The void.
   */
  Delete(id: number): Promise<IUser>;
  /**
   * Get a User by email
   * @param {string} email
   * @returns {Promise<IUser>} A promise that resolves to the user.
   */
  GetByEmail(email: string): Promise<IUser>;
  /**
   * Get a User by Username
   * @param {string} username -
   * @returns {Promise<IUser>}A promise that resolves to the user.
   */
  GetByIUsername(Username: string): Promise<IUser>;
  /**
   * Get a User by email and password.
   * @param {string} email
   * @param {string} password
   * @returns {Promise<IUser>} A promise that resolves to a user.
   */
  GetByEmailAndPassword(email: string, password: string): Promise<IUser>;
  /**
   * Get user by Username and password
   * @param {string} Username
   * @param {string} password
   * @returns {Promise<IUser>} A promise that resolves to a user.
   */
  GetByUsernameAndPassword(username: string, password: string): Promise<IUser>;
  /**
   * Get a User by street and city
   * @param {string} street
   * @param {string} city
   * @returns {Promise<IUser> a promise that resolves to a user
   */
  GetByStreetAndCity(street: string, city: string): Promise<IUser>;
  /**
   * Get a User by street and city and state
   * @param {string} street
   * @param {string} city
   * @param {string} state
   * @returns {Promise<IUser> a promise that resolves to a user
   */
  GetByStreetAndCityAndState(
    street: string,
    city: string,
    state: string
  ): Promise<IUser>;
  /**
   * Get a User by street and city and state and zip
   * @param {string} street
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   * @returns {Promise<IUser> a promise that resolves to a user
   */
  GetByStreetAndCityAndStateAndZip(
    street: string,
    city: string,
    state: string,
    zip: string
  ): Promise<IUser>;
  /**
   * Get a User by order id
   * @param {number} orderId
   * @returns {Promise<IUser> a promise that resolves to a user
   */
  GetByOrderId(orderId: number): Promise<IUser>;
  /**
   * Get a User by token
   * @param {string} token
   * @returns {Promise<IUser> a promise that resolves to a user
   */
  GetByToken(token: string): Promise<IUser>;
  /**
   * Check whether a user exists
   * @param user
   * @returns {Promise<boolean> a promise that resolves to a boolean
   */
  Exists(User: IUser): Promise<boolean>;
}
