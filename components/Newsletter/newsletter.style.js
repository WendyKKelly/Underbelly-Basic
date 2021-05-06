import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { BreathePulse } from '../BreathePulse';
import { BreatheWatch } from '../BreathWatch';
import { BreatheCircle1 } from '../BreatheCircle1';
import { BreatheCircle2 } from '../BreatheCircle2';
import { BreatheCircle3 } from '../BreatheCircle3';
import { BreatheCircle4 } from '../BreatheCircle4';
import { BreatheCircle5 } from '../BreatheCircle5';
import { BreatheCircle6 } from '../BreatheCircle6';
const Section = styled.div`

    background: #fff;
    
   
    height: 100vh;
   
    
  
  .watch-face {
    height: 125px;
    width: 125px;
    background-position: top right; 
    
    ${BreathePulse};

  }
  
  .circle {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    position: absolute;
    mix-blend-mode: screen;

    ${BreatheWatch};
    
  }
  
  .circle:nth-child(odd) {
    background: #61bea2;
  }
  
  .circle:nth-child(even) {
    background: #529ca0;
  }
  
  .circle:nth-child(1) {
    ${BreatheCircle1};
  }
  
  .circle:nth-child(2) {
    ${BreatheCircle2};
  }
  
  .circle:nth-child(3) {
    ${BreatheCircle3};
  }
  
  .circle:nth-child(4) {
    ${BreatheCircle4};
  }
  
  .circle:nth-child(5) {
    ${BreatheCircle5};
  }
  
  .circle:nth-child(6) {
    ${BreatheCircle6};
  }


.intro {
   
    font-family: Helvetica Neue;
    font-size: 4rem;
    line-height: 70px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: -1px;
    margin-top: 5rem;;
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
        flex-
}    
    @media screen and (max-width: 1440px) {
        border-radius: 0%; 
}
@media screen and (max-width: 999px) {
    border-radius: 0%; 
    flex: 
}
@media screen and (max-width: 768px) {
    border-radius: 0%; 
    flex: 
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
;`;
export default Section;
