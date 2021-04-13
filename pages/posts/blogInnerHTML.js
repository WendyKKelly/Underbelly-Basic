import styled from 'styled-components';

const Section = styled.section`
  img {
    margin-left: 10rem;
    width: 70%;
    @media only screen and (max-width: 999px) {
      background: transparent;
      display: none;
      min-height: auto;
      margin-left: none;
    }
  }
  h1 {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 3rem;
    color: #2b7b2f;
    @media only screen and (max-width: 999px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-family: 'Sometimes Times BETA';
    font-size: 1.5rem;
    color: #82733b;
  }
  h2 {
    font-family: 'Sometimes Times BETA';
    font-size: 1.5rem;
    color: #2b7b2f;
    @media only screen and (max-width: 999px) {
      font-size: 0.7rem;
    }
  }
  a {
    color: #2b7b2f;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    @media only screen and (max-width: 999px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
    @media only screen and (max-width: 480px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }

  .blogInnerHTML {
    margin-left: 3rem;
    @media only screen and (max-width: 999px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
    @media only screen and (max-width: 480px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
  blockquote {
    font-family: 'Sometimes Times BETA';
    font-weight: 400;
    line-height: 1.6em;
    font-size: 2rem;
    font-style: italic;
    margin: 3.2rem 0 1.5rem 0;
    border-left: 0.25rem solid #ee9b27;
    border-left-color: rgb(238, 155, 39);
    border-left-style: solid;
    border-left-width: 0.25rem;
    padding: 0 1.6 0 2em;
  }
`;

export default Section;
