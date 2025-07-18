import {
  GamingCardd,
  GamingCardTitle,
  GamingCardThumbnail,
  GamingCardViews,
} from "./StyledComponents";

const GamingCard = (props) => {
  const { gameDetails, clickGameVideo } = props;
  const { title, id, thumbnail, views } = gameDetails;

  return (
    <GamingCardd onClick={() => clickGameVideo(id)}>
      <GamingCardThumbnail src={thumbnail} />
      <GamingCardTitle>{title}</GamingCardTitle>
      <GamingCardViews>{views} Watching Worldwide</GamingCardViews>
    </GamingCardd>
  );
};

export default GamingCard;
