import { css, keyframes } from 'styled-components';

const circle3 = keyframes` 
0% {
  transform: translate(0, 0);
}
100% {
  transform: translate(-60px, 0);
}
`;

const BreatheCircle3 = css`
  animation: ${circle3} 4s ease alternate infinite;
`;
export { BreatheCircle3 };
