import { ICategory } from '../Interfaces/ICategory';
import { IProduct } from '../Interfaces/IProduct';
/**
 * Product Class
 */
export default class Product implements IProduct {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    public Id: number,
    public Name: string,
    public Description: string,
    public Price: number,
    public ImageUrl: string,
    public CategoryId: number,
    public Category: ICategory
  ) {
    this.SetId(Id);
    this.SetName(Name);
    this.SetDescription(Description);
    this.SetPrice(Price);
    this.SetImageUrl(ImageUrl);
    this.SetCategoryId(CategoryId);
    this.SetCategory(Category);
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
  GetName(): string
  {
    throw new Error('Method not implemented.');
  }
  SetName(name: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetDescription(): string
  {
    throw new Error('Method not implemented.');
  }
  SetDescription(description: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetPrice(): number
  {
    throw new Error('Method not implemented.');
  }
  SetPrice(price: number): void
  {
    throw new Error('Method not implemented.');
  }
  GetImageUrl(): string
  {
    throw new Error('Method not implemented.');
  }
  SetImageUrl(imageUrl: string): void
  {
    throw new Error('Method not implemented.');
  }
  GetCategoryId(): number
  {
    throw new Error('Method not implemented.');
  }
  SetCategoryId(categoryId: number): void
  {
    throw new Error('Method not implemented.');
  }
  GetCategory(): ICategory
  {
    throw new Error('Method not implemented.');
  }
  SetCategory(category: ICategory): void
  {
    throw new Error('Method not implemented.');
  }
  // #endregion
}
