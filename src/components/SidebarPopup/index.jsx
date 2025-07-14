import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useLocation } from "react-router";

const SidebarPopup = () => {
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
    <div className="popup-container">
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none" }}
        className={`menu ${isLight ? "light-mode" : "dark-mode"}`}
        trigger={
          <button
            type="button"
            className={`ham-btn ${isLight ? "ham-light" : "ham-dark"}`}
          >
            <GiHamburgerMenu
              className={`ham-btn-sm-dev ${
                isLight ? "sm-dev-ham-light" : "sm-dev-ham-dark"
              }`}
            />
          </button>
        }
      >
        {(close) => (
          <>
            <button
              type="button"
              className="cross-btn-pop"
              onClick={() => close()}
            >
              <RxCross2
                className={`cross-btn ${
                  isLight ? "cross-pop-light" : "cross-pop-dark"
                }`}
              />
            </button>
            <div
              className={`side-pop-cont ${
                isLight ? "spop-cont-light" : "spop-cont-dark"
              }`}
            >
              <div className="flex1">
                <div
                  onClick={() => navigate("/")}
                  className={`div ${getClassName(path === "/")}`}
                >
                  <TiHome className={`spicon ${getIconName(path === "/")}`} />
                  <p className={`txt ${getTxtName(path === "/")}`}>Home</p>
                </div>
                <div
                  onClick={() => navigate("/trending")}
                  className={`div ${getClassName(path === "/trending")}`}
                >
                  <ImFire
                    className={`spicon ${getIconName(path === "/trending")}`}
                  />
                  <p className={`txt ${getTxtName(path === "/trending")}`}>
                    Trending
                  </p>
                </div>
                <div
                  onClick={() => navigate("/gaming")}
                  className={`div ${getClassName(path === "/gaming")}`}
                >
                  <SiYoutubegaming
                    className={`spicon ${getIconName(path === "/gaming")}`}
                  />
                  <p className={`txt ${getTxtName(path === "/gaming")}`}>
                    Gaming
                  </p>
                </div>
                <div
                  onClick={() => navigate("/savedVideos")}
                  className={`div ${getClassName(path === "/savedVideos")}`}
                >
                  <MdOutlinePlaylistAdd
                    className={`spicon ${getIconName(path === "/savedVideos")}`}
                  />
                  <p className={`txt ${getTxtName(path === "/savedVideos")}`}>
                    Saved Videos
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};
export default SidebarPopup;
