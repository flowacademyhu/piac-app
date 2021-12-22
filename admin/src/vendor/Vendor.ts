export interface VendorInput {
  name: string;
  profilePic: string;
  intro: string;
  introductionLong: string;
  cardPayment: boolean;
  products: string[];
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  webSite: string;
}

export interface VendorWithId<T = string> extends VendorInput {
  id: T;
}
