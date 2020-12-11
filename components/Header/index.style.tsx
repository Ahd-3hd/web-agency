import styled from "styled-components";

export const Wrapper = styled.header`
  padding-top: 3.5rem;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
  }
`;
export const HeaderImg = styled.img`
  display: block;
  width: 100%;
  margin-left: auto;
  @media (min-width: 900px) {
    margin-left: 0;
    max-width: 650px;
  }
`;
export const IntroContainer = styled.div`
  padding: 0 ${({ theme: { spaces } }) => spaces.sm};
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(2),
  p:nth-child(4) {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
export const TitleParagraph = styled.p`
  margin: 0;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.black};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  letter-spacing: 0.7px;
  color: ${({ theme: { colors } }) => colors.primary};
  @media (min-width: 900px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    line-height: 120%;
  }
`;
export const IntroParagraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pr};
  color: ${({ theme: { colors } }) => colors.primary};
  letter-spacing: 1px;
  line-height: 180%;
  @media (min-width: 900px) {
    line-height: 200%;
    max-width: 50ch;
  }
`;

export const AnchorButton = styled.a`
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  padding: ${({ theme: { spaces } }) => `${spaces.sm} ${spaces.md}`};
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  > svg {
    margin-left: ${({ theme: { spaces } }) => spaces.md};
    height: 10px;
    fill: ${({ theme: { colors } }) => colors.white};
  }
  border-radius: 5px;
  letter-spacing: 0.8px;
`;
