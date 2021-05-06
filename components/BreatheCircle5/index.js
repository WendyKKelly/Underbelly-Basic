import { css, keyframes } from 'styled-components';

const circle5 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-35px, 50px);
    }

`;
const BreatheCircle5 = css`
  animation: ${circle5} 4s ease alternate infinite;
`;
export { BreatheCircle5 };
