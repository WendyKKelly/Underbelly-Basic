import { css, keyframes } from 'styled-components';

const circle2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(35px, 50px);
    }
    `;

const BreatheCircle2 = css`
  animation: ${circle2} 4s ease alternate infinite;
`;
export { BreatheCircle2 };
