import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${({ theme: { spaces } }) => spaces.lg} 0;
`;
export const Title = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  color: ${({ theme: { colors } }) => colors.primary};
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
export const FeaturesContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  @media (min-width: 1000px) {
    > div:nth-child(2) {
      transform: translateY(30%);
    }
    > div:nth-child(3) {
      transform: translateY(80%);
    }
  }
`;
export const Feature = styled.div<{ fill: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme: { colors }, fill }) => colors[fill]};
  margin: ${({ theme: { spaces } }) => spaces.lg} 0;
  > svg {
    height: 40px;
    fill: ${({ theme: { colors }, fill }) => colors[fill]};
  }
  @media (min-width: 1000px) {
    flex: 1;
  }
`;
export const FeatureTitle = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  margin: ${({ theme: { spaces } }) => spaces.sm} 0;
`;
export const FeatureParagraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pr};
  padding: ${({ theme: { spaces } }) => spaces.sm};
  margin: ${({ theme: { spaces } }) => spaces.sm} 0;
  color: ${({ theme: { colors } }) => colors.primary};
`;
