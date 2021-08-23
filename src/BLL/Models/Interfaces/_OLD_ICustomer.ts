import { IOrder } from './IOrder';

/**
 * Customer entity interface.
 * Which holds Id Name Email Phone Address.
 *
 * */

export interface ICustomer {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Created: Date;
  Modified: Date;
  Deleted: Date;

  // Navigation properties
  Orders: Array<IOrder>;
  // OrderDetails: Array<IOrderDetail>;

  // Foreign keys
  CustomerTypeId: number;

  // Static methods
  GetAll(): Array<ICustomer>;
  GetAllOrdered(): Array<ICustomer>;
  GetAllOrderedByName(): Array<ICustomer>;
  GetAllOrderedByNameDescending(): Array<ICustomer>;
  GetAllOrderedByCreated(): Array<ICustomer>;
  GetAllOrderedByCreatedDescending(): Array<ICustomer>;
  GetAllOrderedByCreatedThenName(): Array<ICustomer>;
  GetAllOrderedByCreatedThenNameDescending(): Array<ICustomer>;
  GetAllOrderedByCreatedThenNameThenId(): Array<ICustomer>;
  GetAllOrderedByCreatedThenNameThenIdDescending(): Array<ICustomer>;
}
