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
    border-radius: 0% 60% 0% 70% / 0% 40% 0% 60%;
    min-height: auto;

@media screen and (max-width: 1440px) {
  border-radius: 0%;
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
