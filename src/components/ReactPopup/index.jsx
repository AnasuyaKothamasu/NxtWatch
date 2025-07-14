import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Cookies from "js-cookie";
import { MdLogout } from "react-icons/md";
import "./index.css";

const ReactPopup = () => {
  const navigate = useNavigate();
  const [isLight] = useContext(ThemeContext);

  function handleLogout() {
    close();
    navigate("/login", { replace: true });
    Cookies.remove("jwt_token");
  }

  return (
    <div className="popup-container">
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none" }}
        className={` logout ${
          isLight ? "light-mode" : "dark-mode"
        }`}
        trigger={
          <div>
            <button
              type="button"
              className={`logout-btn ${
                isLight ? "logout-light" : "logout-dark"
              }`}
            >
              Logout
            </button>
            <button className="theme-icon-container">
              <MdLogout
                className={`logout-btn-sm-dev ${
                  isLight ? "sm-dev-logout-light" : "sm-dev-logout-dark"
                }`}
              />
            </button>
          </div>
        }
      >
        {(close) => (
          <>
            <div
              className={`logout-pop-cont ${
                isLight ? "pop-cont-light" : "pop-cont-dark"
              }`}
            >
              <p
                className={`question ${
                  isLight ? "question-light" : "question-dark"
                }`}
              >
                Are you sure you want to logout?
              </p>
              <div className="flex-btn-div">
                <button
                  type="button"
                  className={`cancel-btn ${
                    isLight ? "cancel-pop-light" : "cancel-pop-dark"
                  }`}
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleLogout(close())}
                  className={`modal-logout-btn ${
                    isLight ? "mlogout-light" : "mlogout-dark"
                  }`}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};
export default ReactPopup;
