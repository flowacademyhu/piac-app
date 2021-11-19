import MarketCard from "../MarketCard";
import React, { useState, useLayoutEffect } from "react";
import { fetchUpcomingMarkets } from "../../api/Service";
import { Link } from "react-router-dom";
import ErrorBody from "../../components/ErrorBody";
import styled from "styled-components";

const CardList = styled.div`
  & {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px 20px 110px;
  }
  & a {
    color: #33221a;
  }
  &a:hover {
    color: inherit;
  }
`;

const MarketCardList = () => {
  const [upcomingMarkets, setUpcomingMarkets] = useState([]);
  const [error, setError] = useState(null);

  const getUpcomingMarkets = async () => {
    const result = await fetchUpcomingMarkets();
    setUpcomingMarkets(result);
  };

  useLayoutEffect(() => {
    getUpcomingMarkets().catch((err) => setError(err.message));
  }, []);

  return (
    <CardList>
      {error ? (
        <ErrorBody error={error} />
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
    </CardList>
  );
};

export default MarketCardList;
