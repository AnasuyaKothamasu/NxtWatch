import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./index.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const NotFound = () => {
  const [isLight] = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="flex-container-notfound">
        <Sidebar />
        <div
          className={`notfound-container ${isLight ? "nfc-light" : "nfc-dark"}`}
        >
          <img
            className="notfound-img"
            src={
              isLight
                ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
            }
          />
          <h1
            className={`nf-heading ${
              isLight ? "nf-heading-light" : "nf-heading-dark"
            }`}
          >
            Page Not Found
          </h1>
          <p
            className={`nf-descp ${
              isLight ? "nf-descp-light" : "nf-descp-dark"
            }`}
          >
            We're sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
