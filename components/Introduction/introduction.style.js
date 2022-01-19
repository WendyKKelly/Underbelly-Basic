import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { BreathePulse } from '../BreathePulse';
//import introduction from '../../public/image/water.jpg';
const Section = styled.div``;
export const ContentWrapper = styled.div`
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
export const Watch = styled.div`
  .watch {
    display: flex;
    align-items: center;
    height: 10vh;
    justify-content: center;
  }
  .watch-face {
    color: transparent;
    position: absolute;
    top: 28%;
    left: 15%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(188, 237, 243, 0.889);
    ${BreathePulse};
    @media only screen and (max-width: 1440px) {
      top: 15%;
      left: 15%;
    }
    @media only screen and (max-width: 768px) {
      top: 15%;
      left: 50%;
    }
    @media only screen and (max-width: 480px) {
      top: 15%;
      left: 50%;
    }
  }
`;
export const BannerContent = styled.div`

  h1 {
    font-family: 'Helvetica Neue';
    font-size: 5rem;
    font-weight: 700;
    color: #ec6f48;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 3rem;  
        margin-left: 1rem;
  }
}
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 4rem;
    font-weight: 300;
    color: rgba(44, 46, 53, 1);
    text-align: left;
    margin-top: 0rem;
    padding-top: 0rem;
    
    
  
  @media screen and (max-width: 1440px) {
    padding: 50px 0 70px;
    
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  line-height: 3rem;
  font-family: 'Helvetica Neue';
  font-weight: 300;
  color: rgba(44, 46, 53, 1);
  text-align: left;
  margin-top: 0rem;
  padding-top: 0rem;
  margin-left: 1rem;
}

  @media screen and (max-width: 480px) {
    padding: 30px 0 50px;
  }
}
  .un {
    width: 40rem;
    height: auto;
    margin-top: 2rem;
    background-color: #82733b;
    text-align: center;
    @media only screen and (max-width: 1440px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 1024px) {
       
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 3px;
      text-align: center;
      width: 30rem;
      height: 8rem;
    }
    @media only screen and (max-width: 480px) {
        
      width: 20rem;
      padding-bottom: 10rem;
    }
    .u {
      font-family: Sometimes Times BETA;
      font-size: 3rem;
      font-weight: 900;
      
    }
`;

export default Section;
