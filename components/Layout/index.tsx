import Navbar from "../Navbar";
import { Background } from "./index.style";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Background />
  </div>
);

export default Layout;
