import { Link, useParams } from "react-router-dom";
import MarketCard from "../../market/MarketCard";
import { useQuery } from "react-query";
import { fetchUpcomingMarketsByVendorId } from "../../api/Service";
import EmailContact from "../../components/EmailContact";
import CardList from "../../styles/CardListStyled";
import styled from "styled-components";

const VendorProfileMarketsTitle = styled.h3`
  color: #33221a;
  font-family: "Amatic SC", sans-serif;
  font-size: 32px;
  font-weight: 700;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const EmptyPageMessage = styled.p`
  text-align: left;
  font-size: 12px;
`;

const VendorProfileMarkets = () => {
  const vendorId = useParams().id;

  const { data: upcomingMarkets, isLoading } = useQuery(
    ["market", vendorId],
    () => fetchUpcomingMarketsByVendorId(vendorId)
  );

  return (
    <div>
      <VendorProfileMarketsTitle>
        Melyik piacon találod legközelebb?
      </VendorProfileMarketsTitle>
      <CardList>
        {!isLoading && upcomingMarkets.length > 0 ? (
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
          <EmptyPageMessage>
            A közeljövőben egy piacon sem lesz jelen.
          </EmptyPageMessage>
        )}
      </CardList>
      {!isLoading && <EmailContact isMarket />}
    </div>
  );
};

export default VendorProfileMarkets;
