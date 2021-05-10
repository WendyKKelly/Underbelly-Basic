import { css, keyframes } from 'styled-components';

const pulse = keyframes`

0% {box-shadow: 0 0 0 15px rgba(188, 237, 243, 0.3), 0 0 0 30px rgba(188, 237, 243, 0.3), 0 0 0 45px rgba(188, 237, 243, 0.3), 0 0 0 60px rgba(188, 237, 243, 0.3), 0 0 0 75px rgba(188, 237, 243, 0.3); } 
50% {box-shadow: 0 0 0 25px rgba(188, 237, 243, 0.3), 0 0 0 50px rgba(188, 237, 243, 0.3), 0 0 0 75px rgba(188, 237, 243, 0.3), 0 0 0 100px rgba(188, 237, 243, 0.3), 0 0 0 125px rgba(188, 237, 243, 0.3); } 
100% {box-shadow: 0 0 0 15px rgba(188, 237, 243, 0.3), 0 0 0 30px rgba(188, 237, 243, 0.3), 0 0 0 45px rgba(188, 237, 243, 0.3), 0 0 0 60px rgba(188, 237, 243, 0.3), 0 0 0 75px rgba(188, 237, 243, 0.3); }}
  
  `;

const BreathePulse = css`
  animation: ${pulse} 7s linear infinite;
  transform: translate(-50%, -50%);
`;

export { BreathePulse };
