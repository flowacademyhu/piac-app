import "./VendorlistUploadInProgress.css";
import styled from "styled-components";
import CardList from "../../styles/CardListStyled";

const TopInfoText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
`;

const BottomInfoText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 12px;
`;

const VendorlistUploadInProgress = ({ title, body }) => {
  return (
    <CardList>
      <TopInfoText>
        <div>{title}</div>
      </TopInfoText>
      <BottomInfoText>
        <div>{body}</div>
      </BottomInfoText>
    </CardList>
  );
};

export default VendorlistUploadInProgress;
