import styled from 'styled-components';

const Section = styled.section`
  img {
    margin-left: 1rem;
    width: 70%;
    @media only screen and (max-width: 999px) {
      background: transparent;
      width: 100%;
      min-height: auto;
      margin-left: none;
    }
  }
  div.mar {
    margin-left: 8rem;
    margin-right: 3rem;

    @media only screen and (max-width: 999px) {
      margin-left: 8rem;
      margin-right: 3rem;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 8rem;
      margin-right: 3rem;
    }
    @media only screen and (max-width: 480px) {
      margin-left: 8rem;
      margin-right: 3rem;
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
    font-family: 'Helvetica Neue';
    font-size: 1.7rem;
    color: #82733b;
  }
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 2rem;
    color: #2b7b2f;
    @media only screen and (max-width: 999px) {
      font-size: 0.7rem;
    }
  }
  a {
    color: #2b7b2f;
  }
  p {
    font-family: 'Sometimes Times BETA';
    font-size: 1.3rem;
    color: #2c2e35;
    line-height: 2rem;
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
