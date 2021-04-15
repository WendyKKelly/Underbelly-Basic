import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import Image from '../Image';
import illustration from '../../public/image/banner.jpg';

const Section = styled.section``;

export const ContentWrapper = styled.div`
  background-image: url(${illustration});
  background-color: linear-gradient(217deg, rgba(43,123,47,.2), rgba(43,123,47,.7) 70.71%);
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 70vh;
  border-radius: 0% 70% 0% 30% / 0% 50% 0% 70%;
  overflow: hidden;
  max-width: none;
}
  @media only screen and (max-width: 1440px) {
    min-height: auto;
    background-repeat: no-repeat;
    background-size: 100%;
    overflow: hidden;
    max-width: none;
  }
  @media only screen and (max-width: 1024px) {
    min-height: auto;
    background-repeat: no-repeat;
    background-size: 100%;
    overflow: hidden;
    max-width: none;
  }
  @media only screen and (max-width: 999px) {
    background: transparent;
    background-image: none;
    border-radius: 5%;
    min-height: auto;
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    background: transparent;
    background-image: none;
    border-radius: 5%;
    min-height: auto;
  }
  @media only screen and (max-width: 480px) {
    background: transparent;
    background-image: none;
    border-radius: 5%;
    min-height: auto;
  }
`;

export const Illustration = styled.div``;

export const BannerContent = styled.div`
  max-width: 100%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 150px;
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
    padding-top: 30px;
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  h1 {
    font-family: 'Helvetica Neue';
    font-size: 4rem;
    line-height: 70px;
    font-weight: 700;
    margin-left: 17rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: 1px;

    @media only screen and (max-width: 1440px) {
      font-size: 2.5rem;
      margin-bottom: 15px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 2.4rem;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 10px;
      text-align: center;
      margin-left: 0.5rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 3rem;
      margin-bottom: 20px;
      line-height: 40px;
      text-align: center;
      margin-left: 0.5rem;
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
  margin-top: 15rem;
  margin-left: 50rem;
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
    margin-left: 30rem;
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 20rem;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    align-items: center;
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
.substack {
  background-color: transparent;
  border-radius: 8px;
  font-family: 'Helvetica Neue';
  font-color: #2c2e35;
}
  button {
    background-color: #ff825c;
    min-width: 150px;
    border-radius: 8px;

    @media only screen and (max-width: 480px) {
      min-width: 100%;
      margin-top: 15px;
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
