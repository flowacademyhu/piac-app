export default interface Market {
  id: string;
  profilePic: string;
  name: string;
  place: string;
  openingDate: number;
  closingDate: number;
  numberOfVendors: number;
  vendors: [];
}
