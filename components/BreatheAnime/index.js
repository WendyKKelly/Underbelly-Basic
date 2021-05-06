import { css, keyframes } from 'styled-components';

const spinner = keyframes`
0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-35px, -50px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const BreatheSpinner = css`
  animation: ${spinner} 10s linear infinite;
`;

export { BreatheSpinner };
