import { css, keyframes } from 'styled-components';

const circle1 = keyframes`

    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-35px, -50px);
    }
  
    `;

const BreatheCircle1 = css`
  animation: ${circle1} 4s ease alternate infinite;
`;
export { BreatheCircle1 };
