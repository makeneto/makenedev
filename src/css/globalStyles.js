import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --weak-green:rgba(125, 232, 101, 0.16);
    --green-color: #7de865;
    --dark-green: #003720;
    --light-grey: #bcc3c0;
    --dark-grey: #454745;

    --light-border: 1px solid rgb(211 220 217);
  }

  ${'' /* @media (max-width: 1280px) -- Laptop */}
  ${'' /* --legacy-peer-deps  */}
`

export default GlobalStyles