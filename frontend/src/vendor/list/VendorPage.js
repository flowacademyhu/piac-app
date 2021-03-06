import VendorCardList from "./VendorCardList";
import Header from "../../header/Header";
import EmailContact from "../../components/EmailContact";
import { Helmet } from "react-helmet";

const VendorPage = () => {
  return (
    <>
      <Helmet>
        <title>Félpénzzel - Árusok</title>
        <meta name="description" content="Kézműves árusok és termelők" />
      </Helmet>
      <Header />
      <VendorCardList />
      <EmailContact />
    </>
  );
};

export default VendorPage;
