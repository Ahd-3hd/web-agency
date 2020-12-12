import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 4rem;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex: 1;
    justify-content: center;
  }
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  text-align: right;
  color: ${({ theme: { colors } }) => colors.primary};
  padding: 0 ${({ theme: { spaces } }) => spaces.sm};
  margin: ${({ theme: { spaces } }) => `${spaces.md}`};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
  border-right: 2px solid ${({ theme: { colors } }) => colors.secondary};
  @media (min-width: 900px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  }
`;

export const List = styled.ul`
  list-style-type: none;
  align-self: center;
`;
export const ListItem = styled.li`
  margin: ${({ theme: { spaces } }) => spaces.lg} 0;
  position: relative;
  color: ${({ theme: { colors } }) => colors.primary};
  padding-left: ${({ theme: { spaces } }) => spaces.md};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pr};
  ::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme: { colors } }) => colors.darkPurple};
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: 900px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  }
`;

export const GraphContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.ghost};
    clip-path: polygon(0 0, 100% 44%, 100% 100%, 0% 100%);
    z-index: 0;
    left: 0;
    top: 0;
  }
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 900px) {
    flex: 1;
    :after {
      clip-path: polygon(0 0, 100% 22%, 100% 81%, 0% 100%);
    }
  }
`;
export const GraphImg = styled.img`
  width: 60%;
  margin-left: auto;
  margin-right: 1rem;
  display: block;
  position: relative;
  z-index: 1;
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 60%;
  }
`;
export const GraphCardsImg = styled.img`
  width: 60%;
  position: absolute;
  top: 10%;
  z-index: 2;
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 60%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const RandomQuote = styled.p`
  display: none;
  @media (min-width: 900px) {
    display: block;
    max-width: 40ch;
    align-self: center;
    color: ${({ theme: { colors } }) => colors.darkPurple};
  }
`;
