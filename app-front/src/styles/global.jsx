import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
    background-color: #EFEFEF;
  }

`;

export default GlobalStyle;
