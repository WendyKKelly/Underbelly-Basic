import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 0rem;
      padding-right: 0rem;
    `};
  @media (min-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 100%;
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: ${(props) => props.width || '1170px'};
    padding: 0;
  }
  @media (min-width: 1400px) {
    padding: 0;
    max-width: ${(props) => props.width || '1300px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 0px;
        padding-right: 0px;
      `};
  }
`;

export default ContainerWrapper;
