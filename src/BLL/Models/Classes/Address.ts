import { IAddress } from '../Interfaces/IAddress';
/**
 * Address class
 */
export default class Address implements IAddress {
  // #region Props
  Id!: number;

  Adress1!: string;

  Adress2!: string;

  City!: string;

  Zip!: string;

  State!: string;

  country!: string;

  CreatedBy!: number;

  CreatedOn!: string;

  ModifiedBy!: number;

  ModifiedOn!: string;
  // #endregion

  // #region Meths
  /**
   * Set the id.
   * @param {number} id - The id.
   */
  SetId(id: number): void {
    if (id > 0) {
      this.Id = id;
    }
  }

  /**
   * Get the id.
   * @returns {number} id - The id.
   */
  GetId(): number {
    return this.Id;
  }

  /**
   * Set the street address 1.
   * @param {string} address - Street address.
   */
  SetAddress1(address: string): void {
    if (address !== '') {
      this.Adress1 = address;
    }
  }

  /**
   * Get the street address 1.
   * @returns {string} The street address.
   */
  GetAddress1(): string {
    return this.Adress1;
  }

  /**
   * Set the street address 2.
   * @param {string} address - Street address.
   */
  SetAddress2(address: string| undefined): void {
    if (address !== '' && address !== undefined) {
      this.Adress2 = address;
    }
  }

  /**
   * Get the street address.
   * @returns {string} The street address.
   */
  GetAddress2(): string {
    if (this.Adress2 !== undefined) {
      return this.Adress2;
    }
    return '';
  }

  /**
   * Set the city.
   * @param {string} city - The city.
   */
  SetCity(city: string): void {
    if (city !== '') {
      this.City = city;
    }
  }

  /**
 * Get the city.
 * @returns {string} The city.
/ */
  GetCity(): string {
    return this.City;
  }

  /**
   * Set the country.
   * @param {string} country - The country.
   */
  SetCountry(country: string): void {
    if (country !== '') {
      this.country = country;
    }
  }

  /**
   * Get the country.
   * @returns {string} The country.
   */
  GetCountry(): string {
    return this.country;
  }

  /**
   * Set the state.
   * @param {string} state - The state.
   */
  SetState(state: string): void {
    if (state !== '') {
      this.State = state;
    }
  }

  /**
   * Get the State.
   * @returns {string} The State.
   */
  GetState(): string {
    return this.State;
  }

  /**
   * Set the zip.
   * @param {string} zip - The zip.
   */
  SetZip(zip: string): void {
    if (zip !== '') {
      this.Zip = zip;
    }
  }

  /**
   * Get the zip.
   * @returns {string} The zip.
   */
  GetZip(): string {
    return this.Zip;
  }

  /**
   * Set the created by JOBID/UID.
   * @param {number} createdBy - The created by.
   */
  SetCreatedBy(createdBy: number): void {
    if (createdBy > 0) {
      this.CreatedBy = createdBy;
    }
  }

  /**
   * Get the created by JOBID/UID.
   * @returns {number} createdBy - The created by.
   */
  GetCreatedBy(): number {
    return this.CreatedBy;
  }

  /**
   * Set the created on.
   * @param {string} createdOn - The date created on.
   */
  SetCreatedOn(date: string): void {
    if (date !== '') {
      this.CreatedOn = date;
    }
  }

  /**
   * Get the created on.
   * @returns {string} The created on.
   */
  GetCreatedOn(): string {
    return this.CreatedOn;
  }

  /**
   * Set the modified by JOBID/UID.
   * @param {number} modifiedBy - The modified by.
   * @returns {number} The modified by.
   */
  SetModifiedBy(modifiedBy: number | undefined): void {
    if (modifiedBy !== undefined && modifiedBy > 0) {
      this.ModifiedBy = modifiedBy;
    }
  }

  /**
   * Get the modified by JOBID/UID.
   * @returns {number} The modified by.
   */
  GetModifiedBy(): number {
    if (this.ModifiedBy !== undefined) {
      return this.ModifiedBy;
    }
    return 0;
  }

  /**
   * Set the modified on.
   * @param {string} modifiedOn - The date modified on.
   */
  SetModifiedOn(modifiedOn: string | undefined): void {
    if (modifiedOn !== '' && modifiedOn !== undefined) {
      this.ModifiedOn = modifiedOn;
    }
  }

  /**
   * Get the modified on.
   * @returns {string} The modified on.
   */
  GetModifiedOn(): string {
    if (this.ModifiedOn !== undefined) {
      return this.ModifiedOn;
    }
    return '';
  }

  // #endregion
  // #endregion

  // #region Ctor
  // private constructor() {} // eslint-disable-line
  /**
   * Ctor
   * @param {number} id - The id.
   * @param {string} address1 - The street address.
   * @param {string} city - The city.
   * @param {string} zip - The zip.
   * @param {string} state - The state.
   * @param {string} country - The country.
   * @param {string} createdBy - The created by.
   * @param {string} createdOn - The created on.
   * @param {string} address2 - The street address 2.
   * @param {number} modifiedBy  - The modified by.
   * @param {string} modifiedOn - The modified on.
   */
  constructor(
    id:number,
    address1: string,
    city: string,
    zip: string,
    state: string,
    country: string,
    createdBy: number,
    createdOn: string,
    address2?: string,
    modifiedBy?: number,
    modifiedOn?: string,
  ) {
    this.SetId(id);
    this.SetAddress1(address1);
    this.SetCity(city);
    this.SetZip(zip);
    this.SetState(state);
    this.SetCountry(country);
    this.SetCreatedBy(createdBy);
    this.SetCreatedOn(createdOn);
    this.SetAddress2(address2);
    this.SetModifiedBy(modifiedBy);
    this.SetModifiedOn(modifiedOn);
  }
  // #endregion
}
