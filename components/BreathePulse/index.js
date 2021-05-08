import { css, keyframes } from 'styled-components';

const pulse = keyframes`

    0% {
      transform: scale(.15) rotate(180deg);
    }
    100% {
      transform: scale(1);
    }
  
  `;

const BreathePulse = css`
  animation: ${pulse} 4s ease-in alternate infinite;
`;

export { BreathePulse };
