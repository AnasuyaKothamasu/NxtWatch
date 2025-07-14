import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import ReactPopup from "../ReactPopup";
import { useNavigate } from "react-router";
import "reactjs-popup/dist/index.css"; 
import SidebarPopup from "../SidebarPopup";

const Navbar = () => {
  const [isLight, toggleTheme] = useContext(ThemeContext);
  const navigate = useNavigate()
  const logoUrl = isLight
    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";

  return (
    <div className={`navbar ${isLight ? "navbar-light" : "navbar-dark"}`}>
      <img onClick={() => navigate("/")} src={logoUrl} className="navbar-logo" />
      <div className="flex-container">
        <button className="theme-icon-container" onClick={toggleTheme}>
          {isLight ? (
            <FaMoon className="themeIcon-light" />
          ) : (
            <IoSunnyOutline className="themeIcon-dark" />
          )}
        </button>
        <button className="bb">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            className="profile-img"
          />
        </button>
        <SidebarPopup />
        <ReactPopup />
      </div>
    </div>
  );
};

export default Navbar;
