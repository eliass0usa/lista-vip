import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/bg-site.png';

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
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: auto;

  }

`;

export default GlobalStyle;
