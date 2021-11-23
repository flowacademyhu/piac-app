import VendorCardList from "./VendorCardList";
import Header from "../../header/Header";
import EmailContact from "../../components/EmailContact";

const VendorPage = () => {
  return (
    <>
      <Header />
      <VendorCardList />
      <EmailContact />
    </>
  );
};

export default VendorPage;
