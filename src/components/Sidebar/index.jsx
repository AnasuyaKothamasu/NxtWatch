import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLight] = useContext(ThemeContext);
  const location = useLocation();
  const path = location.pathname;

  const getClassName = (path) => {
    if (isLight) {
      return path ? "light-active" : "light";
    } else {
      return path ? "dark-active" : "dark";
    }
  };

  const getIconName = (path) => {
    if (isLight) {
      return path ? "light-active-icon" : "light-icon";
    } else {
      return path ? "dark-active-icon" : "dark-icon";
    }
  };

  const getTxtName = (path) => {
    if (isLight) {
      return path ? "light-active-txt" : "light-txt";
    } else {
      return path ? "dark-active-txt" : "dark-txt";
    }
  };

  return (
    <div className={`sidebar ${isLight ? "sidebar-light" : "sidebar-dark"}`}>
      <div className="flex1">
        <div
          onClick={() => navigate("/")}
          className={`div ${getClassName(path === "/")}`}
        >
          <TiHome className={`icon ${getIconName(path === "/")}`} />
          <p className={`txt ${getTxtName(path === "/")}`}>Home</p>
        </div>
        <div
          onClick={() => navigate("/trending")}
          className={`div ${getClassName(path === "/trending")}`}
        >
          <ImFire className={`icon ${getIconName(path === "/trending")}`} />
          <p className={`txt ${getTxtName(path === "/trending")}`}>Trending</p>
        </div>
        <div
          onClick={() => navigate("/gaming")}
          className={`div ${getClassName(path === "/gaming")}`}
        >
          <SiYoutubegaming
            className={`icon ${getIconName(path === "/gaming")}`}
          />
          <p className={`txt ${getTxtName(path === "/gaming")}`}>Gaming</p>
        </div>
        <div
          onClick={() => navigate("/savedVideos")}
          className={`div ${getClassName(path === "/savedVideos")}`}
        >
          <MdOutlinePlaylistAdd
            className={`icon ${getIconName(path === "/savedVideos")}`}
          />
          <p className={`txt ${getTxtName(path === "/savedVideos")}`}>
            Saved Videos
          </p>
        </div>
      </div>
      <div className={`flex2 ${isLight ? "light-flex" : "dark-flex"}`}>
        <p className="contact">CONTACT US</p>
        <div className="social-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            className="social-icon"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            className="social-icon"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            className="social-icon"
          />
        </div>
        <p className="descp2">
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
