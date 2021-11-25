import EmailContact from "../../components/EmailContact";
import Header from "../../header/Header";
import MarketCardList from "./MarketCardList";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Félpénzzel - Piacok</title>
        <meta
          name="description"
          content="Kézműves és termelői piacok a közeljövőben"
        />
      </Helmet>
      <MarketCardList />
      <EmailContact isMarket />
    </>
  );
};

export default MainPage;
