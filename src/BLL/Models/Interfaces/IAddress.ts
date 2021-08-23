/* eslint-disable no-unused-vars */
/**
 * Address interface.
 */
export interface IAddress {
  // #region Props
  // /**
  //  *
  //  */
  // Id: number;
  // /**
  //  *
  //  */
  // Address1: string;
  // /**
  //  *
  //  */
  // Address2: string;
  // /**
  //  *
  //  */
  // City: string;
  // /**
  //  *
  //  */
  // Country: string;
  // /**
  //  *
  //  */
  // CreatedBy: number;
  // /**
  //  *
  //  */
  // CreatedOn: Date;
  // /**
  //  *
  //  */
  // ModifiedBy: number;
  // /**
  //  *
  //  */
  // ModifiedOn: Date;
  // /**
  //  *
  //  */
  // State: string;
  // /**
  //  *
  //  */
  // Zip: string;
  // #endregion

  // #region Meths
  /**
   * Set the id.
   * @param {number} id - The id.
   */
  SetId(id: number): void;
  /**
   * Get the id.
   * @returns {number} The id.
   */
  GetId(): number;
  /**
   * Set the address1.
   * @param {string} address - The address.
   */
  SetAddress1(address: string): void;
  /**
   * Get the address 1.
   * @returns {string} The address.
   */
  GetAddress1(): string;
  /**
   * Set the address 2.
   * @param {string} address - The address.
   */
  SetAddress2(address: string): void;
  /**
   * Get the address 2.
   * @returns {string} The address.
   */
  GetAddress2(): string;
  /**
   * Set the city.
   * @param {string} city - The city.
   */
  SetCity(city: string): void;
  /**
   * Get the city.
   * @returns {string} The city.
   */
  GetCity(): string;
  /**
   * Set the country.
   * @param {string} country - The country.
   */
  SetCountry(country: string): void;
  /**
   * Get the country.
   * @returns {string} The country.
   */
  GetCountry(): string;
  /**
   * Set the created by JOBID/UID.
   * @param {number} createdBy - The created by.
   */
  SetCreatedBy(createdBy: number): void;
  /**
   * Get the created by JOBID/UID.
   * @returns {number} The created by.
   */
  GetCreatedBy(): number;
  /**
   * Set the created on.
   * @param {string} createdOn - The created on.
   */
  SetCreatedOn(date: string): void;
  /**
   * Get the created on.
   * @returns {string} The created on.
   */
  GetCreatedOn(): string;
  /**
   * Set the modified by JOBID/UID.
   * @param {number} modifiedBy - The modified by.
   */
  SetModifiedBy(modifiedBy: number): void;
  /**
   * Get the modified by JOBID/UID.
   * @returns {number} The modified by.
   */
  GetModifiedBy(): number;
  /**
   * Set the modified on.
   * @param {string} modifiedOn - The modified on.
   */
  SetModifiedOn(modifiedOn: string): void;
  /**
   * Get the modified on.
   * @returns {string} The modified on.
   */
  GetModifiedOn(): string;
  /**
   * Set the state.
   * @param {string} state - The state.
   */
  SetState(state: string): void;
  /**
   * Get the state.
   * @returns {string} The state.
   */
  GetState(): string;
  /**
   * Set the zip.
   * @param {string} zip - The zip.
   */
  SetZip(zip: string): void;
  /**
   * Get the zip.
   * @returns {string} The zip.
   */
  GetZip(): string;
  // #endregion
}
