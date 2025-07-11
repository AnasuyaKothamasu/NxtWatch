import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";

const GamingCard = (props) => {
  const { gameDetails, clickGameVideo } = props;
  const { title, id, thumbnail, views } = gameDetails;
  const [isLight] = useContext(ThemeContext);

  return (
    <div
      onClick={() => clickGameVideo(id)}
      className={`gaming-card ${isLight ? "gcard-light" : "gcard-dark"}`}
    >
      <img src={thumbnail} className="game-thumbnail" />
      <h2
        className={`gcard-title ${
          isLight ? "gcard-title-light" : "gcard-title-dark"
        }`}
      >
        {title}
      </h2>
      <p className={`gviews ${isLight ? "gviews-light" : "gviews-dark"}`}>
        {views} Watching Worldwide
      </p>
    </div>
  );
};

export default GamingCard;
