export interface MarketInput {
  name: string;
  profilePic: string;
  place: string;
  openingDate: number;
  closingDate: number;
}

export interface MarketWithId extends MarketInput {
  id: number;
}

export interface Market extends MarketWithId {
  numberOfVendors: number;
}
