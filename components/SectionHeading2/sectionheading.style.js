import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HGroup = styled.hgroup`
  margin-bottom: ${(props) => props.mb ?? '50px'};
  @media screen and (max-width: 480px) {
    margin-bottom: ${(props) => props.mb ?? '30px'};
  }
  text-align: ${(props) => props.textAlign ?? 'center'};
  h4 {
    color: ${themeGet('colors.slogan')};
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    margin: 0;
  }
  
  }
`;

export default HGroup;
