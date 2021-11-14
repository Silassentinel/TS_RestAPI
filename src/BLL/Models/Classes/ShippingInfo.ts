import { IShippingInfo } from "../Interfaces/IShippingInfo";
/**
 * ShippingInfo class
 */
export default class ShippingInfo implements IShippingInfo {
  // #region Props
  // #endregion
  // #region Ctor
  constructor(
    shippingComments: string,
    shippingMethod: string,
    shippingMethodId: number,
    shippingMethodName: string,
    shippingMethodDescription: string,
    shippingMethodPrice: number,
    shippingMethodTax: number,
    shippingMethodTotal: number,
    shippingMethodTaxTotal: number,
    Address1: string,
    Address2: string,
    City: string,
    Country: string,
    PostalCode: string,
    State: string,
  ) {
    this.SetShippingComments(shippingComments);
    this.SetShippingMethod(shippingMethod);
    this.SetShippingMethodId(shippingMethodId);
    this.SetShippingMethodName(shippingMethodName);
    this.SetShippingMethodDescription(shippingMethodDescription);
    this.SetShippingMethodPrice(shippingMethodPrice);
    this.SetShippingMethodTax(shippingMethodTax);
    this.SetShippingMethodTotal(shippingMethodTotal);
    this.SetShippingMethodTaxTotal(shippingMethodTaxTotal);
    this.SetAddress1(Address1);
    this.SetAddress2(Address2);
    this.SetCity(City);
    this.SetCountry(Country);
    this.SetZip(PostalCode);
    this.SetState(State);
  }
  // #endregion
  // #region Meths
  GetShippingComments(): string {
    throw new Error("Method not implemented.");
  }
  SetShippingComments(ShippingComments: string): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethod(): string {
    throw new Error("Method not implemented.");
  }
  SetShippingMethod(ShippingMethod: string): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodId(): number {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodId(ShippingMethodId: number): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodName(): string {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodName(ShippingMethodName: string): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodDescription(): string {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodDescription(shippingMethodDescription: string): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodPrice(): number {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodPrice(ShippingMethodPrice: number): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodTax(): number {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodTax(shippinhMethodTax: number): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodTotal(): number {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodTotal(ShippingMethodTotal: number): void {
    throw new Error("Method not implemented.");
  }
  GetShippingMethodTaxTotal(): number {
    throw new Error("Method not implemented.");
  }
  SetShippingMethodTaxTotal(shippingMethodTaxTotal: number): void {
    throw new Error("Method not implemented.");
  }
  SetId(id: number): void {
    throw new Error("Method not implemented.");
  }
  GetId(): number {
    throw new Error("Method not implemented.");
  }
  SetAddress1(address: string): void {
    throw new Error("Method not implemented.");
  }
  GetAddress1(): string {
    throw new Error("Method not implemented.");
  }
  SetAddress2(address: string): void {
    throw new Error("Method not implemented.");
  }
  GetAddress2(): string {
    throw new Error("Method not implemented.");
  }
  SetCity(city: string): void {
    throw new Error("Method not implemented.");
  }
  GetCity(): string {
    throw new Error("Method not implemented.");
  }
  SetCountry(country: string): void {
    throw new Error("Method not implemented.");
  }
  GetCountry(): string {
    throw new Error("Method not implemented.");
  }
  SetCreatedBy(createdBy: number): void {
    throw new Error("Method not implemented.");
  }
  GetCreatedBy(): number {
    throw new Error("Method not implemented.");
  }
  SetCreatedOn(date: string): void {
    throw new Error("Method not implemented.");
  }
  GetCreatedOn(): string {
    throw new Error("Method not implemented.");
  }
  SetModifiedBy(modifiedBy: number): void {
    throw new Error("Method not implemented.");
  }
  GetModifiedBy(): number {
    throw new Error("Method not implemented.");
  }
  SetModifiedOn(modifiedOn: string): void {
    throw new Error("Method not implemented.");
  }
  GetModifiedOn(): string {
    throw new Error("Method not implemented.");
  }
  SetState(state: string): void {
    throw new Error("Method not implemented.");
  }
  GetState(): string {
    throw new Error("Method not implemented.");
  }
  SetZip(zip: string): void {
    throw new Error("Method not implemented.");
  }
  GetZip(): string {
    throw new Error("Method not implemented.");
  }
  // #endregion
}
