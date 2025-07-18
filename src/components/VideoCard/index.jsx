import {
  VideoCardContainer,
  VideoThumbnail,
  VideoCardFlexConatiner,
  VideoCardChannelProfile,
  TextContainerVideo,
  VideoTitle,
  VideoChannelName,
  VideoDescp,
} from "./StyledComponents";

const VideoCard = (props) => {
  const { videoDetails, handleClick } = props;
  const {
    channelName,
    channelProfile,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    views,
  } = videoDetails;

  return (
    <>
      <VideoCardContainer onClick={() => handleClick(id)}>
        <VideoThumbnail src={thumbnailUrl} />
        <VideoCardFlexConatiner>
          <VideoCardChannelProfile src={channelProfile} />
          <TextContainerVideo>
            <VideoTitle>{title}</VideoTitle>
            <VideoChannelName>{channelName}</VideoChannelName>
            <VideoDescp>
              {views} views • {publishedAt}
            </VideoDescp>
          </TextContainerVideo>
        </VideoCardFlexConatiner>
      </VideoCardContainer>
    </>
  );
};

export default VideoCard;
