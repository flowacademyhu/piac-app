import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
body,
html {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  background-color: #f7f5f2;
  font-size: 1rem;
  font-weight: 400;
  -webkit-text-size-adjust: 100%;
}

*, ::after, ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}
`;

export default AppStyled;
