import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const Details = styled.div``;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  text-align: right;
  color: ${({ theme: { colors } }) => colors.primary};
  padding: 0 ${({ theme: { spaces } }) => spaces.sm};
  margin: ${({ theme: { spaces } }) => `${spaces.md}`};
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
  border-right: 2px solid ${({ theme: { colors } }) => colors.secondary};
`;

export const List = styled.ul`
  list-style-type: none;
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
`;
