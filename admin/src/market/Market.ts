import { VendorWithId } from "vendor/Vendor";

export interface MarketInput extends MarketBase {
  vendors: string[];
}

export interface MarketBase {
  name: string;
  profilePic: string;
  place: string;
  openingDate: number;
  closingDate: number;
}

export interface MarketWithId extends MarketBase {
  id: string;
}

export interface Market extends MarketWithId {
  numberOfVendors: number;
  vendors: VendorWithId[];
}
