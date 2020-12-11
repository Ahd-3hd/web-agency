import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { spaces } }) => `${spaces.sm} ${spaces.md}`};
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Logo = styled.h1`
  color: ${({ theme: { colors } }) => colors.secondary};
  margin: ${({ theme: { spaces } }) => `${spaces.sm} 0`};
`;
export const MenuButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  > svg {
    height: 16px;
    fill: ${({ theme: { colors } }) => colors.primary};
  }
  :hover > svg {
    transition: fill 0.3s ease-in;
    fill: ${({ theme: { colors } }) => colors.secondary};
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export const DesktopNavLinks = styled.ul`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
export const DesktopNavLinkItem = styled.li``;
export const DesktopNavLink = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  transition: color 0.3s ease-in;
  :hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
export const NavLink = ({ href, text }: { href: string; text: string }) => (
  <DesktopNavLinkItem>
    <DesktopNavLink href={href}>{text}</DesktopNavLink>
  </DesktopNavLinkItem>
);
