import styled from "styled-components";

const ErrorContainer = styled.div`
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
`;

const ErrorMessage = styled.div`
  font-family: "Open Sans", sans-serif;
  position: absolute;
  padding: auto;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  top: 50%;
  transform: translateY(-50%);
`;

const ErrorBody = ({ error }) => {
  return (
    <ErrorContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ErrorContainer>
  );
};

export default ErrorBody;
