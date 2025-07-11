import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ReactPopUp from "../PopUp";
import { useNavigate } from "react-router";

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
        <button className="theme-icon-container">
          <GiHamburgerMenu className={`ham-btn-sm-dev ${isLight ? "sm-dev-ham-light" : "sm-dev-ham-dark"}`} />
        </button>
        <button
          id="logout-btn"
          className={isLight ? "logout-light" : "logout-dark"}
        >
          Logout
        </button>
        <button className="theme-icon-container">
          <MdLogout className={`logout-btn-sm-dev ${isLight ? "sm-dev-logout-light" : "sm-dev-logout-dark"}`} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
