import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Sometimes Times BETA', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Helvetica Neue', sans-serif;
    margin-top: 0;
  }
  p{
    font-family: 'Sometimes Times BETA', serif;
  }

  section {
    position: relative;
    
    
  }

`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .menuLeft {
    margin-left: 105px;
  }
  .menuRight {
    margin-left: auto;
  }

  .sticky-nav-active {
    .agencyDigital-navbar {
      background-color: rgba(238, 155, 39, 0.7);
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
    }
  }
`;
