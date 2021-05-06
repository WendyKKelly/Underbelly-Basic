import { css, keyframes } from 'styled-components';

const circle4 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 0);
  }
  `;
const BreatheCircle4 = css`
  animation: ${circle4} 4s ease alternate infinite;
`;
export { BreatheCircle4 };
