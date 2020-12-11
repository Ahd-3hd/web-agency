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

export const Background = () => (
  <BackgroundWrapper>
    <BackgroundVerticalLine num={1} />
    <BackgroundVerticalLine num={2} />
    <BackgroundVerticalLine num={3} />
    <BackgroundVerticalLine num={4} />
    <BackgroundVerticalLine num={4} />
  </BackgroundWrapper>
);
