import React from "react";
import styled from "styled-components";

const SearchAreaField = styled.div`
  background-color: #53b896;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const SearchBar = styled.input`
  border: 0;
  outline: none;
  background-color: #fffdfc;
  border-radius: 5px;
  min-height: 30px;
  width: 100%;
  margin: 0;
  height: 100%;
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  color: #705a4f;
  ::placeholder {
    color: #ccb8ad;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
  }
`;

interface SearchAreaProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder: string;
}

const SearchArea = ({ onChange, placeHolder }: SearchAreaProps) => {
  return (
    <SearchAreaField>
      <SearchBar placeholder={placeHolder} onChange={onChange} />
    </SearchAreaField>
  );
};

export default SearchArea;
