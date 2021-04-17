import { css, keyframes } from 'styled-components';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.3;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimSpinner = css`
  animation: ${spinner} 10s linear infinite;
`;

export { AnimSpinner };
