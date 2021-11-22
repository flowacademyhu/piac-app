import { Link } from "react-router-dom";
import MarketCard from "../../market/MarketCard";
import CardList from "../../styles/CardListStyled";
import styled from "styled-components";

const VendorProfileMarketsTitle = styled.h2`
  color: #33221a;
  font-family: "Amatic SC", sans-serif;
  font-size: 32px;
  font-weight: 700;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const VendorProfileMarkets = ({ upcomingMarkets }) => {
  return (
    <div>
      <VendorProfileMarketsTitle>
        Melyik piacon találod legközelebb?
      </VendorProfileMarketsTitle>
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
