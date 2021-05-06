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
  animation: ${pulse} 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;
`;

export { BreathePulse };
