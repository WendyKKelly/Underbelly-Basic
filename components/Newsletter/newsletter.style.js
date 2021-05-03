import styled from 'styled-components';

const Section = styled.div`
  .intro {
    font-family: 'Helvetica Neue';
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
    @media screen and (max-width: 1440px) {
      border-radius: 0%;
    }
    @media screen and (max-width: 999px) {
      border-radius: 0%;
      flex: ;
    }
    @media screen and (max-width: 768px) {
      border-radius: 0%;
      flex: ;
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
    border: solid;
    border-color: #2c2e35;
    width: 15rem;
    height: 2rem;
    text-align: center;
    border-radius: 5rem;
    @media screen and (max-width: 1440px) {
      border-radius: 0%;
      flex: wrap;
    }
    @media screen and (max-width: 999px) {
      border-radius: 0%;
    }
    @media screen and (max-width: 768px) {
      border-radius: 0%;
      flex: ;
    }
  }

  .revue-form-actions {
    border-color: #2c2e35;
    width: 5rem;
    height: 3rem;
    padding-left: 1rem;
    font-size: 3rem;
    font-weight: 900;
    padding-bottom: 1.3rem;
    flex: auto;
    flex: wrap;
    @media screen and (max-width: 1440px) {
      border-radius: 0%;
      flex: wrap;
    }
    @media screen and (max-width: 999px) {
      border-radius: 0%;
      flex: ;
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
