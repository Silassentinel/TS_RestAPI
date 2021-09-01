/* eslint-disable no-unused-vars */
/**
 * Category interface.
 */
export interface ICategory {
  // #region Meths
  /**
   * Get category id.
   * @returns {number} Category id.
   */
  GetId(): number;
  /**
   * Set category id.
   * @param {number} id - Category id.
   */
  SetId(id: number): void;
  /**
   * Get category name.
   * @returns {string} Category name.
   */
  GetName(): string;
  /**
   * Set category name.
   * @param {string} name - Category name.
   */
  SetName(name: string): void;
  /**
   * Get category description.
   * @returns {string} Category description.
   */
  GetDescription(): string;
  /**
   * Set category description.
   * @param {string} description - Category description.
   */
  SetDescription(description: string): void;
  /**
   * Get parent id.
   * @returns {string} Parent id.
   */
  GetParentId(): number;
  /**
   * Set parent id.
   * @param {number} parentId - Parent id.
   */
  SetParentId(pId: number): void;
  /**
   * Get the category status
   * @returns {boolean} Category status.
   */
  GetIsActive(): boolean;
  /**
   * Set the category status
   * @param {boolean} isActive - Category status.
   */
  SetIsActive(status: boolean): void;
  /**
   * Get the job/uid of the user who created the category.
   * @returns {number} The job/uid whom created the category.
   */
  GetCreatedBy(): number;
  /**
   * Set the job/uid of the user who created the category.
   * @param {string} createdBy - The job/uid whom created the category.
   */
  SetCreatedBy(uId: number): void;
  /**
   * Get the category created date.
   * @returns {string} Category created date.
   */
  GetCreatedOn(): string;
  /**
   * Set the category created date.
   * @param {string} createdOn - Category created date.
   */
  SetCreatedOn(date: string): void;
  /**
   * Get the job/uid of the user who updated the category.
   * @returns {number} The job/uid whom updated the category.
   */
  GetModifiedBy(): number;
  /**
   * Set the job/uid of the user who modified the category.
   * @param {number} modifiedBy - Job/uid of the user who modified the category.
   */
  SetModifiedBy(uId: number): void;
  /**
   * Set ModifiedOn.
   * @param {string} date - Date string.
   */
  SetModifiedOn(date:string): void;
  /**
   * Get ModifiedOn.
   * @returns {string} Date string.
   */
  GetModifiedOn(): string;
  // #endregion
}
