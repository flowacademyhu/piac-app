import { VendorWithId } from "vendor/Vendor";

export interface MarketInput {
  name: string;
  profilePic: string;
  place: string;
  openingDate: number;
  closingDate: number;
}

export interface MarketWithId extends MarketInput {
  id: string;
}

export interface Market extends MarketWithId {
  numberOfVendors: number;
  vendors: VendorWithId[];
}
