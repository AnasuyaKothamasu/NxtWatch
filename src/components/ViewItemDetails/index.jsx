import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";
import Sidebar from "../Sidebar";
import { ThemeContext } from "../../context/ThemeContext";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import FailureView from "../FailureView";
import {
  VideoItemFlexContainer,
  ItemDetailsContainer,
  VideoIframe,
  VideoItemTitle,
  ChannelDetailsContainer,
  ChannelProfileImage,
  ChannelTextContainer,
  ChannelName,
  SubscribersText,
  DescriptionText,
  DividerLine,
  TextContainer,
  ActionButtonsContainer,
  StatsContainer,
  LikeButtonDiv,
  ViewsAndPublished,
} from "./StyledComponents";

const ViewItemDetails = () => {
  const [savedVideos, save, unsave] = useContext(ThemeContext);
  const params = useParams();
  const navigate = useNavigate();
  const [showSuccessView, setShowSuccessView] = useState(true);
  const [det, setDet] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [isUnliked, setIsUnliked] = useState(false);

  const vid = savedVideos.some((videos) => videos.id === params.id);
  const [isSaved, setIsSaved] = useState(vid);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }

  function successView() {
    return (
      <ItemDetailsContainer>
        <VideoIframe
          src={det.video?.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></VideoIframe>
        <TextContainer>
          <VideoItemTitle>{det.title}</VideoItemTitle>
          <StatsContainer>
            <ViewsAndPublished>
              {det.views} views • {det.publishedAt}
            </ViewsAndPublished>
            <ActionButtonsContainer>
              <LikeButtonDiv isActive={isLiked} onClick={handleLike}>
                <BiLike style={{ marginRight: "5px" }} />
                <p>Like</p>
              </LikeButtonDiv>
              <LikeButtonDiv isActive={isUnliked} onClick={handleDislike}>
                <BiDislike style={{ marginRight: "5px" }} />
                <p>Dislike</p>
              </LikeButtonDiv>
              <LikeButtonDiv isActive={isSaved} onClick={handleSave}>
                <MdOutlinePlaylistAdd style={{ marginRight: "5px" }} />
                <p>{isSaved ? "Saved" : "Save"}</p>
              </LikeButtonDiv>
            </ActionButtonsContainer>
          </StatsContainer>
          <DividerLine />
          <ChannelDetailsContainer>
            <ChannelProfileImage src={det.channelProfile} />
            <ChannelTextContainer>
              <ChannelName>{det.channelName}</ChannelName>
              <SubscribersText>{det.subscribers} subscribers</SubscribersText>
              <DescriptionText>{det.descp}</DescriptionText>
            </ChannelTextContainer>
          </ChannelDetailsContainer>
        </TextContainer>
      </ItemDetailsContainer>
    );
  }

  const handleLike = () => {
    setIsLiked((prev) => {
      const newLikeState = !prev;
      if (newLikeState) setIsUnliked(false);
      return newLikeState;
    });
  };

  const handleDislike = () => {
    setIsUnliked((prev) => {
      const newDislikeState = !prev;
      if (newDislikeState) setIsLiked(false);
      return newDislikeState;
    });
  };

  function handleSave() {
    setIsSaved((prev) => {
      const newSavedState = !prev;
      if (newSavedState) {
        save(det);
        return newSavedState;
      } else {
        unsave(det);
        return newSavedState;
      }
    });
  }

  useEffect(() => {
    async function fetchItem() {
      const url = `https://apis.ccbp.in/videos/${params.id}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        const vd = data.video_details;
        const formattedData = {
          channelName: vd.channel.name,
          channelProfile: vd.channel.profile_image_url,
          subscribers: vd.channel.subscriber_count,
          descp: vd.description,
          id: vd.id,
          thumnail: vd.thumbnail_url,
          title: vd.title,
          publishedAt: vd.published_at,
          video: vd.video_url,
          views: vd.view_count,
        };
        setDet(formattedData);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchItem();
  }, []);

  return (
    <>
      <VideoItemFlexContainer>
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </VideoItemFlexContainer>
    </>
  );
};

export default ViewItemDetails;
