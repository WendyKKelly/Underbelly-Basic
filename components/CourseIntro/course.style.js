import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import illustration from '../../public/image/course.jpg';
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
  .me {
    background-image: url(${illustration});
    background-color: transparent;
    background-size: 60%;
    background-position: right center;
    background-repeat: no-repeat;

    min-height: 70vh;
    display: flex;

    @media only screen and (max-width: 1440px) {
      min-height: auto;
      padding-top: 1.1rem;
      padding-bottom: 1rem;
      background-size: 59%;
    }
    @media only screen and (max-width: 1024px) {
      background-size: 100%;
      padding-left: 0rem;
      padding-right: 0rem;
      flex-direction: column;
      background-position: top center;
      min-height: auto;
    }
    @media only screen and (max-width: 999px) {
      background-size: 100%;

      padding-left: 0rem;
      padding-right: 0rem;
      flex-direction: column;
      background-position: top center;
      padding-bottom: 0rem;
      min-height: auto;
    }
  }
`;

export const Illustration = styled.div``;

export const BannerContent = styled.div`
  max-width: 38%;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 1600px) {
    max-width: 38%;
  }
  @media only screen and (max-width: 1400px) {
    padding-top: 60px;
    padding-bottom: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    padding-top: 40rem;
    padding-bottom: 2rem;
    max-width: 60%;
    background: cover;
  }
  @media only screen and (max-width: 999px) {
    max-width: 100%;
    padding-top: 23rem;
    padding-bottom: 30px;
    margin-top: 15rem;
    flex-direction: column;
    background-position: bottom center;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-top: 23rem;
    padding-bottom: 30px;
    margin-top: 8rem;
    flex-direction: column;
    background-position: bottom center;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 2.5rem;
    padding-top: 15rem;
    padding-bottom: 5px;
  }
  .head {
      display: flex;
      
  }
  h1 {
    font-family: Helvetica Neue;
    font-size: 4rem;
    line-height: 70px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: -1px;
    margin-top: 0;
    text-align: left;
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
      margin-top: 2rem;
    }

    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 10px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 3.5rem;
      margin-bottom: 20px;
      margin-left: 1rem;
      line-height: 3rem;
    }
}
    h2 {
        font-family: Helvetica Neue;
        font-size: 4rem;
        line-height: 70px;
        font-weight: 700;
        color: ${themeGet('colors.menu', '#02073e')};
        margin-bottom: 24px;
        letter-spacing: -1px;
        margin-top: 0;
        text-align: left;
        @media only screen and (max-width: 1440px) {
          font-size: 40px;
          margin-bottom: 15px;
          line-height: 55px;
        }
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          font-size: 24px;
          line-height: 44px;
        }
        @media only screen and (max-width: 1024px) {
          font-size: 28px;
          margin-bottom: 20px;
        }
    
        @media only screen and (max-width: 768px) {
          font-size: 34px;
          margin-bottom: 10px;
          text-align: center;
        }
        @media only screen and (max-width: 480px) {
          font-size: 23px;
          margin-bottom: 20px;
          line-height: 40px;
        }
  }
  .banner-caption {
      
    font-family: Helvetica Neue;
    color: ${themeGet('colors.paragraph', '#2c2e35')};
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    margin-bottom: 0;
    margin-left: 1rem;
    margin-right: 1rem;
    
    @media only screen and (max-width: 1440px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 1024px) {
      margin-bottom: 2rem; 
      line-height: 2rem;
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 30px;
      line-height: 2rem;
      text-align: left;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
  .wp {
      width: 40rem;
      height: auto;
      margin-top: 2rem;
      background-color: #ffa0a3;
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
         padding-bottom: 12rem; 
        width: 20rem;
      }
      .w {
        font-family: Fira Sans;
                    font-weight: 900; font-size: 4rem;
        @media only screen and (max-width: 1440px) {
            font-weight: 900; font-size: 4rem; 
          
        }
        @media only screen and (max-width: 1024px) {
            font-weight: 900; font-size: 4rem; 
          line-height: 2rem;
        }
        @media only screen and (max-width: 768px) {
            font-weight: 900; font-size: 4rem;
          margin-bottom: 30px;
          line-height: 2rem;
          text-align: left;
          font-size: 4rem;
        }
        @media only screen and (max-width: 480px) {
            font-weight: 900; font-size: 4rem;
        }
    
        .p {
            font-family: Helvetica Neue; 
            font-weight: 900;
             font-size: 4rem;
            @media only screen and (max-width: 1440px) {
              font-size: 1.7rem;
            }
            @media only screen and (max-width: 1024px) {
               padding: 2rem;
              line-height: 2rem;
            }
            @media only screen and (max-width: 768px) {
              margin-bottom: 30px;
              line-height: 2rem;
              text-align: left;
              font-size: 4rem;
            }
            @media only screen and (max-width: 480px) {
                padding-top: 3rem;
               margin-bottom: 1rem; 
              font-size: 4rem;
            }
           
  }
`;

export default Section;
