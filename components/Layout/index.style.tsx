import styled from "styled-components";
export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: ${({ theme: { colors } }) => colors.offwhite};
  z-index: -1;
  > svg {
    position: absolute;
    height: 10%;
    stroke-width: 6px;
    left: 80%;
    top: 95%;
    stroke: ${({ theme: { colors } }) => colors.lightPurple};
  }
`;
export const BackgroundVerticalLine = styled.div<{ num: number }>`
  height: 100%;
  width: 2px;
  position: fixed;
  left: ${({ num }) => `${num * 20}%`};
  top: ${({ num }) => (num % 2 === 0 ? "30%" : "-30%")};
  background: ${({ theme: { colors } }) => colors.lightPurple + "55"};
  animation: move_lines ${({ num }) => `${num * 25}s`} ease-in-out infinite;
  @keyframes move_lines {
    0% {
      transform: translateY(${({ num }) => (num % 2 === 0 ? "60%" : "-60%")});
    }
    50% {
      transform: translateY(${({ num }) => (num % 2 === 0 ? "-60%" : "60%")});
    }
    60% {
      transform: translateY(${({ num }) => (num % 2 === 0 ? "60%" : "-60%")});
    }
  }
`;

export const BackgroundSquare = styled.div<{
  top: number;
  left: number;
  purple?: boolean;
}>`
  width: 15px;
  height: 15px;
  background: ${({ theme: { colors }, purple }) =>
    purple ? colors.lightPurple : colors.secondary};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  position: absolute;
  opacity: 0.6;
`;

const HalfCircle = () => (
  <svg viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77 41.5C77 48.5212 74.918 55.3848 71.0172 61.2227C67.1164 67.0607 61.572 71.6108 55.0853 74.2977C48.5985 76.9846 41.4606 77.6877 34.5743 76.3179C27.688 74.9481 21.3625 71.5671 16.3977 66.6023C11.4329 61.6375 8.0519 55.312 6.68212 48.4257C5.31235 41.5394 6.01537 34.4015 8.70228 27.9147C11.3892 21.428 15.9393 15.8836 21.7773 11.9828C27.6152 8.08204 34.4788 6 41.5 6" />
  </svg>
);

export const Background = () => {
  return (
    <BackgroundWrapper>
      <BackgroundVerticalLine num={1} />
      <BackgroundVerticalLine num={2} />
      <BackgroundVerticalLine num={3} />
      <BackgroundVerticalLine num={4} />
      <BackgroundVerticalLine num={4} />
      <BackgroundSquare top={10} left={50} />
      <BackgroundSquare top={40} left={80} />
      <BackgroundSquare top={10} left={50} purple />
      <BackgroundSquare top={90} left={90} purple />
      <BackgroundSquare top={95} left={10} />
      <HalfCircle />
    </BackgroundWrapper>
  );
};
