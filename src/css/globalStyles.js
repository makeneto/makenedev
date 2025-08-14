import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --weak-blue:rgba(99, 161, 242, 0.25);
    --light-blue: #63A1F2;
    --dark-blue: #0E1821;
    --dark-blue-v2: #011C40; 
    --light-grey:rgb(130, 136, 133);
    --dark-grey: #454745;

    --hover-blue: #273038;
    
    --light-border: 1px solid rgba(188, 195, 192, 0.14);

    ${'' /* --legacy-peer-deps */}
  }
`

export default GlobalStyles