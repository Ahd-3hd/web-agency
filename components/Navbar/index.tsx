import {
  Wrapper,
  Logo,
  MenuButton,
  DesktopNavLinks,
  NavLink,
} from "./index.style";
import MenuIcon from "../../svg/Menu.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <Logo>BruhWTF</Logo>
      <MenuButton>
        <MenuIcon />
      </MenuButton>
      <DesktopNavLinks>
        <NavLink text="HOME" href="#" />
        <NavLink text="BLOG" href="#" />
        <NavLink text="ABOUT" href="#" />
        <NavLink text="F.A.Q" href="#" />
      </DesktopNavLinks>
    </Wrapper>
  );
};

export default Navbar;
