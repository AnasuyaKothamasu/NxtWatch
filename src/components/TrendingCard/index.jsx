import {
  TrendingCardd,
  TrendCardThumbnail,
  TrendingTextContainer,
  TxtDivTrend,
  TrendingChannelProfile,
  TrendingCardTitle,
  TrendingChannelName,
} from "./StyledComponents";

const TrendingCard = (props) => {
  const { trendDetails, clickTrendVideo } = props;
  const {
    id,
    channelName,
    channelProfile,
    publishedAt,
    title,
    views,
    thumbnail,
  } = trendDetails;
  return (
    <TrendingCardd onClick={() => clickTrendVideo(id)}>
      <TrendCardThumbnail src={thumbnail} />
      <TrendingTextContainer>
        <TrendingChannelProfile src={channelProfile} />
        <TxtDivTrend>
          <TrendingCardTitle>{title}</TrendingCardTitle>
          <TrendingChannelName>{channelName}</TrendingChannelName>
          <TrendingChannelName>
            {views} Views • {publishedAt}
          </TrendingChannelName>
        </TxtDivTrend>
      </TrendingTextContainer>
    </TrendingCardd>
  );
};

export default TrendingCard;
