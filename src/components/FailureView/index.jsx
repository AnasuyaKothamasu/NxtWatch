import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useLocation } from "react-router";

const FailureView = () => {
  const location = useLocation();
  const [isLight] = useContext(ThemeContext);
  return (
    <div
      className={`failure-view ${isLight ? "failure-light" : "failure-dark"}`}
    >
      <img
        src={
          isLight
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        }
        className="failure-img"
      />
      <h2
        className={`failure-heading ${
          isLight ? "heading-light" : "heading-dark"
        }`}
      >
        Oops! Something Went Wrong
      </h2>
      <p className={`failure-descp ${isLight ? "descp-light" : "descp-dark"}`}>
        We are having some trouble to complete your request. <br/>
        Please Try Again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className={`failure-btn ${isLight ? "btn-light" : "btn-dark"}`}
      >
        Retry
      </button>
    </div>
  );
};

export default FailureView;
