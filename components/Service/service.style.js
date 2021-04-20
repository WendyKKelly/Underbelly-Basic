import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import flower from '../../public/image/wp-sm.jpg';

const Section = styled.div`

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    font-weight: 400;
    color: #ffa0a3;
    @media screen and (max-width: 480px) {
      line-height: 5rem;
      font-size: 5rem;
      font-family: 'Playfair Display';
  }
  @media screen and (max-width: 768px) {
    line-height: 5rem;
    font-family: 'Playfair Display';
}
}
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 5rem;
    font-weight: 300;
    color: #2b7b2f;
    @media screen and (max-width: 480px) {
      line-height: 4rem;
      font-size: 4rem;
      font-family: 'Helvetica Neue';
  }
  @media screen and (max-width: 768px) {
    line-height: 4rem;
    font-family: 'Helvetica Neue';
}
  background-image: linear-gradient( rgba(239, 239, 239, .3),   rgba(239, 239, 239, .5) ), url(${flower});
  
  padding: 100px 0 120px;

  @media screen and (max-width: 1440px) {
    padding: 50px 0 70px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 0 50px;
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  @media screen and (max-width: 411px) and (max-height: 823px) and (orientation: landscape) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (width: 1366px) and (max-height: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .react-reveal {
    border: 1px solid ${themeGet('colors.border')};
    box-sizing: content-box;
    width: 100%;
    height: 100%;
  }
  .serviceItem {
    padding: 50px 50px 60px;
    @media screen and (max-width: 480px) {
      padding: 25px 25px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    transition: 0.3s ease 0s;
    position: relative;
    &::before {
      background-color: #fff;
      position: absolute;
      content: '';
      right: -1px;
      bottom: -1px;
      left: -1px;
      top: -1px;
      z-index: -1;
      opacity: 0;
      transition: 0.3s ease 0s;
    }
    &:hover {
      box-shadow: 0px 20px 50px rgba(59, 90, 136, 0.05);
      cursor: pointer;
      &::before {
        opacity: 1;
      }
    }
    .thumbnail {
      margin-bottom: 25px;
    }
    .title {
      font-family: 'Playfair Display';
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      color: #2c2e35;
      @media screen and (max-width: 480px) {
        text-align: center;
      }
    }
    .excerpt {
      font-family: 'Fira Sans';
      font-size: 1.2rem;
      line-height: 30px;
      color: #343d48;
      @media screen and (max-width: 480px) {
        text-align: center;
      }
    }
    .learn_more {
      @media screen and (max-width: 480px) {
        text-align: center;
      }
    }
    .learn_more a {
      font-weight: 500;
      font-size: 2rem;
      line-height: 42px;
      display: inline-flex;
      align-items: center;
      color: #ffa0a3;
      @media screen and (max-width: 480px) {
        text-align: center;
      }
      i {
        line-height: 1;
        margin-left: 2px;
        transition: 0.3s ease 0s;
      }
      &:hover i {
        margin-left: 7px;
      }
    }
  }
`;

export default Section;
