// Imports
import { IUser } from "src/BLL/Models/Interfaces/IUser";
import { IUserRepo } from "../../BLL/Repositories/IUserRepo";
/**
 * OrderLine Repo class
 */
export default class UserRepo implements IUserRepo {
  // #region Props
  // #endregion
  // #region Constructor
  // #endregion
  // #region Meths
  Add(User: IUser): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Get(id: number): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetAll(): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }
  Update(User: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByEmail(email: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByIUsername(Username: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByEmailAndPassword(email: string, password: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByUsernameAndPassword(username: string, password: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByStreetAndCity(street: string, city: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByStreetAndCityAndState(
    street: string,
    city: string,
    state: string
  ): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByStreetAndCityAndStateAndZip(
    street: string,
    city: string,
    state: string,
    zip: string
  ): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByOrderId(orderId: number): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  GetByToken(token: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  Exists(User: IUser): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
