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
  ) {
    this.SetId(id);
    this.SetName(name);
    this.SetDescription(description);
    this.SetParentId(parentId);
    this.SetIsActive(isActive);
    this.SetCreatedBy(createdBy);
    this.SetCreatedOn(createdOn);
  }
  // #endregion

  // #region Meths
  /**
   * Gets Id
   * @returns {number} Id
   */
  GetId(): number {
    if (this.Id !== undefined || this.Id !== null) {
      return this.Id;
    }
    return 0;
  }
  /**
   * Sets Id
   * @param id {number} id
   */
  SetId(id: number): void {
    if (id !== undefined && id !== null) {
      this.Id = id;
    }
  }
  /**
   * Gets the category name
   * @returns {string} name
   */
  GetName(): string {
    if (this.Name.length > 0 && this.Name !== ' ') {
      return this.Name;
    }
    return '';
  }
  /**
   * Sets the category name
   * @param name {string} name
   */
  SetName(name: string): void {
    if (name.length > 0 && name !== ' ') {
      this.Name = name;
    }
  }
  /**
   * Gets the category description
   * @returns {string} description
   */
  GetDescription(): string {
    if (this.Description.length > 0 && this.Description !== ' ') {
      return this.Description;
    }
    return '';
  }
  /**
   * Sets the category description
   * @param description {string} description
   */
  SetDescription(description: string): void {
    if (description.length > 0 && description !== ' ') {
      this.Description = description;
    }
  }
  /**
   * Gets the category parent id
   * @returns {number} parent id
   */
  GetParentId(): number {
    if (this.ParentId > 0) {
      return this.ParentId;
    }
    return 0;
  }
  /**
   * Sets the category parent id
   * @param pId {number} parent id
   */
  SetParentId(pId: number): void {
    if (pId > 0) {
      this.ParentId = pId;
    }
  }
  /**
   * Gets the category status
   * @returns {boolean} status
   */
  GetIsActive(): boolean {
    return this.IsActive;
  }
  /**
   * Sets the category status
   * @param status {boolean} status
   */
  SetIsActive(status: boolean): void {
    this.IsActive = status;
  }
  /**
   * Gets the category creator Uid
   * @returns {number} Uid of creation
   */
  GetCreatedBy(): number {
    if (this.CreatedBy > 0) {
      return this.CreatedBy;
    }
    return 0;
  }
  /**
   * Sets creator Uid
   * @param uId {number} Uid of creation
   */
  SetCreatedBy(uId: number): void {
    if (uId > 0) {
      this.CreatedBy = uId;
    }
  }
  /**
   * Gets the category created date
   * @returns {string} date of creation
   */
  GetCreatedOn(): string {
    if (this.CreatedOn.length > 0 && this.CreatedOn !== ' ') {
      return this.CreatedOn;
    }
    return '';
  }
  /**
   * Sets the category created date
   * @param date {string} date
   */
  SetCreatedOn(date: string): void {
    if (date.length > 0 && date !== ' ') {
      this.CreatedOn = date;
    }
  }
  /**
   *  Gets the Uid of editor
   * @returns {number} Uid of editor
   */
  GetModifiedBy(): number {
    if (this.ModifiedBy > 0) {
      return this.ModifiedBy;
    }
    return 0;
  }
  /**
   * Sets the UID of editor
   * @param uid {number} UID of editor
   */
  SetModifiedBy(uid: number): void {
    if (uid > 0) {
      this.ModifiedBy = uid;
    }
  }
  /**
   * Sets the date of edit
   * @param date {string} date of edit
   */
  SetModifiedOn(date: string): void {
    if (date.length > 0 && date !== ' ') {
      this.ModifiedOn = date;
    }
  }
  /**
   * Gets the date of edit
   * @returns {string} date of edit
   */
  GetModifiedOn(): string {
    if (this.ModifiedOn.length > 0 && this.ModifiedOn !== ' ') {
      return this.ModifiedOn;
    }
    return '';
  }
  // #endregion
}
