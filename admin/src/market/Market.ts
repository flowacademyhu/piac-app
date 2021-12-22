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

export interface MarketWithId<T = string> extends MarketBase {
  id: T;
}

export interface Market<T = string> extends MarketWithId<T> {
  numberOfVendors: number;
  vendors: VendorWithId[];
}
