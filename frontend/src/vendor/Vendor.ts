export interface VendorSummary {
  id: number;
  intro: string;
  introductionLong: string;
  name: string;
  products: string[];
  profilePic: string;
}

export interface Vendor extends VendorSummary {
  cardPayment: boolean;
  email: string;
  facebook: string;
  instagram: string;
  phone: string;
  webSite: string;
}
