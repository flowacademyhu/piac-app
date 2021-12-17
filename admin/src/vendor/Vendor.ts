export interface VendorInput {
  id: string;
  name: string;
  profilePic: string;
  intro: string;
  introductionLong: string;
  cardPayment: boolean;
  products: Array<string>;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  webSite: string;
}

export interface VendorWithId extends VendorInput {
  id: string;
}
