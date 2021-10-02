import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section``;

export const ContentWrapper = styled.div`
a {
  color: ${themeGet('colors.menu', '#2c2e35')};
  font-family: 'Helvetica Neue';
  
  font-weight: 900;
  transition: all 0.3s ease;
  &:hover {
    color: ${themeGet('colors.menu', '#ec6f48')};
  }
  .wraps {
    background-size: 100%;
    

    min-height: 50vh;
    display: flex;

    @media only screen and (max-width: 1440px) {
      min-height: auto;

      padding-bottom: 1rem;
      background-size: 100%;
      padding-top: 1rem;
    }
    @media only screen and (max-width: 1024px) {
      background-size: 100%;
      padding-top: 5rem;
      padding-left: 0rem;
      padding-right: 0rem;
      flex-direction: column;
      background-position: top center;
      min-height: auto;
    }
    @media only screen and (max-width: 999px) {
      background-size: 100%;
      padding-top: 5rem;

      padding-left: 0rem;
      padding-right: 0rem;
      flex-direction: column;
      background-position: top center;
      padding-bottom: 0rem;
      min-height: auto;
    }
  }
`;

export const BannerContent = styled.div`
.intro {
   
    font-family: Helvetica Neue;
    font-size: 2rem;
    line-height: 70px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#2c2e35')};
    padding-bottom 1rem;
    letter-spacing: -1px;
    margin-top: 5rem;;
    text-align: center;
    
    @media only screen and (max-width: 1440px) {
      font-size: 4rem;
      margin-bottom: 15px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 3rem;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 3.3rem;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 10px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2.7rem;
      margin-bottom: 20px;
      line-height: 40px;
    }
}
.introsub {
    font-family: Helvetica Neue;
    font-size: 2rem;
    font-style: italic;
    line-height: 70px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#02073e')};
    margin-bottom: 0px;
    letter-spacing: -1px;
    margin-top: 0;
    text-align: left;
    @media only screen and (max-width: 1440px) {
      font-size: 40px;
      margin-bottom: 0px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 24px;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 0px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 34px;
      margin-bottom: 0px;
      text-align: left;
    }
    @media only screen and (max-width: 480px) {
      font-size: 23px;
      margin-bottom: 0px;
      line-height: 40px;
    }
}





}


`;

export default Section;
