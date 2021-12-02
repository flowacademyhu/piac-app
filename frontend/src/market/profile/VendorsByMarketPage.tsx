import { useParams } from "react-router-dom";
import HeaderWithMarket from "./HeaderWithMarket";
import { fetchMarketById } from "../../api/Service";
import { Redirect } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import IdPrameter from "../../types/IdParameter";
import VendorList from "./VendorList";

const Intro = styled.h3`
  font-family: "Amatic SC", sans-serif;
  font-size: 40px;
  color: #705a4f;
  padding: 10px 0px 0px 20px;
  margin-bottom: 0;
`;

const VendorsByMarketPage = () => {
  const marketId = useParams<IdPrameter>().id;

  const { data: market, isLoading } = useQuery(["market", marketId], () =>
    fetchMarketById(marketId)
  );

  return (
    <>
      {!isLoading &&
        (market ? (
          <>
            <HeaderWithMarket
              profilePic={market.profilePic}
              marketName={market.name}
              marketLocation={market.place}
              marketOpeningDate={market.openingDate}
              marketClosingDate={market.closingDate}
            />
            <Intro>Kikkel találkozhatsz?</Intro>
            <VendorList vendors={market.vendors} />
          </>
        ) : (
          <Redirect to="/" />
        ))}
    </>
  );
};

export default VendorsByMarketPage;
