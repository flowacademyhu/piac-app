import EmailContact from "../../components/EmailContact";
import Header from "../../header/Header";
import MarketCardList from "./MarketCardList";

const MainPage = () => {
  return (
    <>
      <Header />
      <MarketCardList />
      <EmailContact isMarket />
    </>
  );
};

export default MainPage;
