import { ICategory } from '../Interfaces/ICategory';
/**
 * Category class
 */
export default class Category implements ICategory {
  // #region Props
  Id!: number;

  Name!: string;

  Description!: string;

  ParentId!: number;

  IsActive!: boolean;

  CreatedBy!: number;

  CreatedOn!: string;

  ModifiedOn!: string;

  ModifiedBy!: number;

  // #endregion

  // #region Ctor
  /**
   * Ctor
   * @Param {number} id - Category id.
   * @Param {string} name - Category name.
   * @Param {string} description - Category description.
   * @Param {number} parentId - Parent id.
   * @Param {boolean} isActive - Category status.
   * @Param {number} createdBy - Job/uid of the user who created the category.
   * @Param {string} createdOn - Category created date.
   * @Param {number} modifiedBy - Job/uid of the user who modified the category.
   * @Param {string} modifiedOn - Category modified date.
   */
  constructor(
    id: number,
    name: string,
    description: string,
    parentId: number,
    isActive: boolean,
    createdBy: number,
    createdOn: string,
    modifiedBy: number,
    modifiedOn: string,
  ) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.ParentId = parentId;
    this.IsActive = isActive;
    this.CreatedBy = createdBy;
    this.CreatedOn = createdOn;
    this.ModifiedBy = modifiedBy;
    this.ModifiedOn = modifiedOn;
  }
  // #endregion

  // #region Meths
  GetId(): number {
    if (this.Id !== undefined || this.Id !== null) {
      return this.Id;
    }
    return 0;
  }

  SetId(id: number): void {
    if (id !== undefined && id !== null) {
      this.Id = id;
    }
  }

  GetName(): string {
    if (this.Name.length > 0 && this.Name !== ' ') {
      return this.Name;
    }
    return '';
  }

  SetName(name: string): void {
    if (name.length > 0 && name !== ' ') {
      this.Name = name;
    }
  }

  GetDescription(): string {
    if (this.Description.length > 0 && this.Description !== ' ') {
      return this.Description;
    }
    return '';
  }

  SetDescription(description: string): void {
    if (description.length > 0 && description !== ' ') {
      this.Description = description;
    }
  }

  GetParentId(): number {
    if (this.ParentId > 0) {
      return this.ParentId;
    }
    return 0;
  }

  SetParentId(pId: number): void {
    if (pId > 0) {
      this.ParentId = pId;
    }
  }

  GetIsActive(): boolean {
    return this.IsActive;
  }

  SetIsActive(status: boolean): void {
    this.IsActive = status;
  }

  GetCreatedBy(): number {
    if (this.CreatedBy > 0) {
      return this.CreatedBy;
    }
    return 0;
  }

  SetCreatedBy(uId: number): void {
    if (uId > 0) {
      this.CreatedBy = uId;
    }
  }

  GetCreatedOn(): string {
    if (this.CreatedOn.length > 0 && this.CreatedOn !== ' ') {
      return this.CreatedOn;
    }
    return '';
  }

  SetCreatedOn(date: string): void {
    if (date.length > 0 && date !== ' ') {
      this.CreatedOn = date;
    }
  }

  GetModifiedBy(): number {
    if (this.ModifiedBy > 0) {
      return this.ModifiedBy;
    }
    return 0;
  }

  SetModifiedBy(uid: number): void {
    if (uid > 0) {
      this.ModifiedBy = uid;
    }
  }

  SetModifiedOn(date: string): void {
    if (date.length > 0 && date !== ' ') {
      this.ModifiedOn = date;
    }
  }

  GetModifiedOn(): string {
    if (this.ModifiedOn.length > 0 && this.ModifiedOn !== ' ') {
      return this.ModifiedOn;
    }
    return '';
  }
  // #endregion
}
