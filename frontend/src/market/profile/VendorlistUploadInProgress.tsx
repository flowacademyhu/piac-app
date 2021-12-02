import styled from "styled-components";
import CardList from "../../styles/CardListStyled";

const TopInfoText = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
`;

const BottomInfoText = styled.div`
  font-style: normal;
  font-size: 12px;
`;

interface VendorListUploadInProgressProps {
  title?: string;
  body?: string;
}

const VendorListUploadInProgress = ({
  title,
  body,
}: VendorListUploadInProgressProps) => {
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

export default VendorListUploadInProgress;
