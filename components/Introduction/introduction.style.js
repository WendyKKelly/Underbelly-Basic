import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import introduction from '../../public/image/water.jpg';
const Section = styled.div`
.img {
    background-image: linear-gradient( rgba(239, 239, 239, .3),   rgba(239, 239, 239, .8) ),url(${introduction});
    background-size: cover;
    max-width: 100%;
    margin-top: 0rem;
    padding-bottom: 2rem;
    border-radius: 30% 0% 30% 0%;
    min-height: auto;
}
  h1 {
    font-family: 'Helvetica Neue';
    font-size: 5rem;
    font-weight: 700;
    color: #2b7b2f;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 3rem;  
  }
}
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 4rem;
    font-weight: 300;
    color: rgba(43, 123, 47, 1);
    text-align: left;
    margin-top: 0rem;
    padding-top: 0rem;
    
    
  @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    line-height: 3rem;
    font-family: 'Helvetica Neue';
    font-weight: 300;
    color: rgba(43, 123, 47, 1);
    text-align: left;
    margin-top: 0rem;
    padding-top: 0rem;
}
  
  

  @media screen and (max-width: 1440px) {
    padding: 50px 0 70px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 0 50px;
  }
`;

export default Section;
