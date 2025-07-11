import "./index.css";
import { RxCross2 } from "react-icons/rx";

const PremiumCard = (props) => {
  const { removeCard } = props;

  return (
    <div className="premium-card-container">
      <div className="flex-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          className="logo"
        />
        <button className="btn" onClick={() => removeCard()}>
          <RxCross2 className="cross-mark" />
        </button>
      </div>
      <h1 className="heading">
        Buy Nxt Watch Premium prepaid plans with UPI
      </h1>
      <button className="get-btn">GET IT NOW</button>
    </div>
  );
};

export default PremiumCard;
