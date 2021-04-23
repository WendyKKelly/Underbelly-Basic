import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import Image from '../Image';
import illustration from '../../public/image/banner.jpg';
import { AnimSpinner } from '../Animation';
const Section = styled.section``;

export const ContentWrapper = styled.div`
  .image {
    background-image: url(${illustration});
    background-size: cover;
    max-width: 100%;
    background-repeat: no-repeat;
    min-height: 70vh;
    border-radius: 0% 70% 0% 50% / 0% 50% 0% 70%;
    z-index: -9;

    @media only screen and (max-width: 1600px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 1400px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 999px) {
      min-height: 50vh;
      border-radius: 0%;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
      min-height: 80vh;
      height: 80vh;
      border-radius: 0%;
    }
    @media only screen and (max-width: 480px) {
      min-height: 60vh;
      height: 60vh;
      border-radius: 0%;
    }
  }
`;

export const Illustration = styled.div``;

export const BannerContent = styled.div`
  max-width: 100%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 150px;
  z-index: 5;
  @media only screen and (max-width: 1600px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1400px) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 999px) {
    max-width: 100%;
    padding-top: 3px;
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 3rem;
    padding-bottom: 80px;
  }
  h1 {
    font-family: 'Helvetica Neue';
    font-size: 4rem;
    line-height: 70px;
    font-weight: 700;
    margin-left: 17rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#2b7b2f')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;

    @media only screen and (max-width: 1440px) {
      font-size: 4rem;
      margin-bottom: 15px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 2.4rem;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 4rem;

      margin-bottom: 20px;
      margin-left: 0rem;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      font-size: 0rem;
      color: #fff;
      margin-left: 0rem;
      margin-bottom: 0.3rem;
      text-align: left;
    }
    @media only screen and (max-width: 480px) {
      font-size: 0rem;
      color: #fff;
      margin-left: 0rem;
      margin-bottom: 0.3rem;
      text-align: left;
    }
  }
  .banner-caption {
    color: ${themeGet('colors.paragraph', '#02073E')};
    font-size: 18px;
    line-height: 33px;
    font-weight: 400;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1024px) {
      line-height: 33px;
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 30px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-left: 50rem;
  @media only screen and (max-width: 1440px) {
    margin-top: 0rem;
    margin-left: 30rem;
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 2rem;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 0rem;
    flex-direction: column;
    margin-top: 0rem;
  }

  
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 2.5rem;
    line-height: 70px;
    font-weight: 900;
    margin-left: 0rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#fff')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;
    @media only screen and (max-width: 1440px) {
      font-size: 2.5rem;
      font-weight: 900;
      color: #fff;
      margin-top: 20rem;
      margin-bottom: 5px;
      text-align: center;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 20px;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-bottom: 20px;
      margin-top: 5rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      color: #fff;
      margin-top: 0rem;
      margin-bottom: 10rem;
      line-height: 0px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 3rem;
      color: #000;
      margin-top: 0rem;
      margin-bottom: 0rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0;
    }
  }
  h3 {
    font-family: 'Helvetica Neue';
    font-size: 2.5rem;
    line-height: 70px;
    font-weight: 900;
    margin-left: 0rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#fff')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;
    @media only screen and (max-width: 1440px) {
      font-size: 2.5rem;
      font-weight: 900;
      color: #fff;
      margin-top: 20rem;
      margin-bottom: 5px;
      text-align: center;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 20px;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-bottom: 20px;
      margin-top: 5rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      color: #fff;
      margin-top: 0rem;
      margin-bottom: 10rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0;
    }
    @media only screen and (max-width: 480px) {
      font-size: 3rem;
      color: #fff;
      margin-top: 0rem;
      margin-bottom: 10rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0;
    }
  }
    .reusecore__input {
      width: 100%;
    }
    .field-wrapper {
      margin-right: 15px;
      @media only screen and (max-width: 480px) {
        margin-right: 0px;
      }
    }
    input {
      font-family: 'Helvetica Neue';
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      border-radius: 8px;
      ::placeholder {
        color: ${rgba('#02073E', 0.4)};
        opacity: 1; /* Firefox */
      }
      &:focus {
        border-color: #ff825c;
      }

      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }

  button {
    background-color: #ee9b27;
    min-width: 150px;
    height: 150px;
    margin-top: 10rem;
    margin-right: 1rem;
    border-radius: 48%;
    ${AnimSpinner};
    @media only screen and (max-width: 1440px) {
      margin-top: 20rem;
      background-position: bottom center;
      flex-direction: column;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 30rem;
      background-position: bottom center;
      flex-direction: column;
    }
    @media only screen and (max-width: 768px) {
      
      margin: auto;
      flex-direction: column;
      background-position: bottom center;
    }
    @media only screen and (max-width: 480px) {
      margin: 0rem;
      flex-direction: column;
      background-position: bottom center;
    }
  }
`;

export const SponsoredBy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: block;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: block;
    margin-top: 25px;
  }
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    text-align: center;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .sponsoredBy {
    color: ${rgba('#566272', 0.6)};
    font-size: 16px;
    margin-right: 21px;
    margin-bottom: 0;
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin: 0 0 20px 0;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      margin: 0 0 15px 0;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 15px;
    }
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  img {
    &:not(:last-child) {
      margin-right: 23px;
    }

    @media only screen and (max-width: 480px) {
      max-width: 27%;
    }
  }
`;

export default Section;
