import "./VendorlistUploadInProgress.css";
import styled from "styled-components";

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
    <div className="card-list">
      <TopInfoText>
        <div>{title}</div>
      </TopInfoText>
      <BottomInfoText>
        <div>{body}</div>
      </BottomInfoText>
    </div>
  );
};

export default VendorlistUploadInProgress;
