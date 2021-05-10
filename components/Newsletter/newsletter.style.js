import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { BreathePulse } from '../BreathePulse';

const Section = styled.section``;

export const ContentWrapper = styled.div`
  .wrap {
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
.intro {
   
    font-family: Helvetica Neue;
    font-size: 4rem;
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
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 23px;
      margin-bottom: 0px;
      line-height: 40px;
    }
}



#revue-embed: {
   
}

#revue-form {
    font-family: 'Helvetica Neue';
    flex-basis: auto;
    max-width: 1600px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: auto;
   
    @media screen and (max-width: 1600px) {
        border-radius: 0%; 
        
}    
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
}
@media screen and (max-width: 999px) {
    border-radius: 0%; 
    
}
@media screen and (max-width: 768px) {
    border-radius: 0%; 
    
}
}

.revue-form-group {
    padding: 1rem;
    
    
    flex: initial;
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
}
@media screen and (max-width: 999px) {
    border-radius: 0%; 
    padding-bottom: 1rem;
}
@media screen and (max-width: 768px) {
    border-radius: 0%; 
    padding-bottom: 1rem;
}
}

.revue-form-field {
    flex: auto;
    flex: wrap;
    border-bottom: solid;
    border-color: #2c2e35;
    
    height: 2rem;
    text-align: left;
    border-radius: 0;
    padding-left: 0rem;
    padding-bottom: 0rem;
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
        flex: wrap;
}
@media screen and (max-width: 999px) {
    border-radius: 0%; 
   
}
@media screen and (max-width: 768px) {
    border-radius: 0%; 
    
}
}
input#member-submit {
    color: #2c2e35;
}
input[type="submit" i]:hover {
    color #ee9b27;
    cursor: grab;
}
.revue-form-actions {
   
    text-align: left;
    font-size: 2rem;
    font-weight: 900;
    cursor: grab;
    padding-bottom: 0rem;
    padding-left: 1rem;
    flex: auto;
    flex: wrap;
    
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
        flex: wrap;
}
@media screen and (max-width: 999px) {
    border-radius: 0%; 
    flex: 
}
@media screen and (max-width: 768px) {
    border-radius: 0%; 
    padding-bottom: 1rem;
}
}

.revue-form-footer {
    
    flex: auto;
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
        padding-top: 2rem;
        padding-left: 1rem;
}


}

.link {
    font-family: 'Helvetica Neue';
}
`;

export default Section;
