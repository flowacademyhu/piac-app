import MarketCard from "../MarketCard";
import "../../styles/CardList.css";
import { fetchUpcomingMarkets } from "../../api/Service";
import { Link } from "react-router-dom";
import ErrorBody from "../../components/ErrorBody";
import { useQuery } from "react-query";

const MarketCardList = () => {
  const {
    data: upcomingMarkets,
    isLoading,
    isError,
  } = useQuery("markets", fetchUpcomingMarkets);

  if (isLoading) return <p></p>;

  return (
    <div className="card-list">
      {isError ? (
        <ErrorBody />
      ) : (
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
    </div>
  );
};

export default MarketCardList;
