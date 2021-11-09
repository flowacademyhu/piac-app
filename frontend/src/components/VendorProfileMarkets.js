import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";

const VendorProfileMarkets = ({ upcomingMarkets }) => {
  return (
    <div>
      <h2 className="vendor-profile-markets-title">
        Melyik piacon találod legközelebb?
      </h2>
      <div className="card-list">
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
          <p className="empty-page-message">Nincs megjeleníthető piac</p>
        )}
      </div>
    </div>
  );
};

export default VendorProfileMarkets;