import MarketCard from "../MarketCard";
import { fetchUpcomingMarkets } from "../../api/Service";
import { Link } from "react-router-dom";
import ErrorBody from "../../components/ErrorBody";
import { useQuery } from "react-query";
import CardList from "../../styles/CardListStyled.js";
import EmailContact from "../../components/EmailContact";

const MarketCardList = () => {
  const {
    data: upcomingMarkets,
    isLoading,
    isError,
    error,
  } = useQuery("markets", fetchUpcomingMarkets);

  return (
    <>
      <CardList>
        {isError ? (
          <ErrorBody error={error.message} />
        ) : (
          !isLoading &&
          upcomingMarkets.map((market) => {
            return (
              <div key={market.id}>
                <Link
                  to={`/piacok/${market.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <MarketCard
                    style={{ textDecoration: "none" }}
                    profilePic={market.profilePic}
                    marketName={market.name}
                    marketLocation={market.place}
                    marketOpeningDate={market.openingDate}
                    marketClosingDate={market.closingDate}
                    vendorsAmount={market.numberOfVendors}
                  />
                </Link>
              </div>
            );
          })
        )}
      </CardList>
      {!isLoading && !isError && <EmailContact isMarket />}
    </>
  );
};

export default MarketCardList;
