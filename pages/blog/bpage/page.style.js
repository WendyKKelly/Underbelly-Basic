import styled from 'styled-components';

const Section = styled.section`
  
  }
  div.mar {
    margin-left: 7rem;
    margin-right: 7rem;

    @media only screen and (max-width: 999px) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    @media only screen and (max-width: 480px) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  h1 {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    color: #2c2e35;
    margin-bottom: 2rem;
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
    }
  }
  h3 {
    font-family: 'Helvetica Neue';
    font-size: 2.7rem;
    color: #82733b;
    @media only screen and (max-width: 999px) {
      font-size: 1.9rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
    }
  }
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 3rem;
    color: #2b7b2f;
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
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
    margin-bottom: 2rem;
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
