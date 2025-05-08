import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/ColorPalette" className="link-to">Color Palette</Link>
    </div>
  );
};

export default Header;
