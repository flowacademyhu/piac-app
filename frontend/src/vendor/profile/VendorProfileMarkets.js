import { Link } from "react-router-dom";
import MarketCard from "../../market/MarketCard";
import CardList from "../../styles/CardListStyled";

const VendorProfileMarkets = ({ upcomingMarkets }) => {
  return (
    <div>
      <h2 className="vendor-profile-markets-title vendor-padding">
        Melyik piacon találod legközelebb?
      </h2>
      <CardList>
        {upcomingMarkets.length > 0 ? (
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
        ) : (
          <p className="empty-page-message">
            A közeljövőben egy piacon sem lesz jelen.
          </p>
        )}
      </CardList>
    </div>
  );
};

export default VendorProfileMarkets;
