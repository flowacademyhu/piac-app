export interface Market {
  name: string;
  place: string;
  profilePic: string;
  openingDate: number;
  closingDate: number;
}

export interface MarketWithId extends Market {
  id: string;
}
