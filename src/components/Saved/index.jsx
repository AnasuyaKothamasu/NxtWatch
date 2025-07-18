import { useContext } from "react";
import Sidebar from "../Sidebar";
import { ThemeContext } from "../../context/ThemeContext";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import {
  SavedFlexContainer,
  SavedContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  SavedVideosContainer,
  SavedCard,
  SavedVideoThumbnail,
  TextDivSaved,
  SavedTitle,
  TrendingChannelName,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescp,
} from "./StyledComponents";

const Saved = () => {
  const [savedVideos] = useContext(ThemeContext);
  const navigate = useNavigate();

  function clickSavedVideo(id) {
    navigate(`/viewItemDetails/${id}`);
  }

  console.log(savedVideos);

  const showSaved = () => {
    return (
      <SavedContainer>
        <HeadingContainer>
          <HeadingIconContainer>
            <MdPlaylistAdd
              className="icon"
            />
          </HeadingIconContainer>
          <Heading>Saved</Heading>
        </HeadingContainer>
        <SavedVideosContainer>
          {savedVideos.map((each) => {
            return (
              <SavedCard key={each.id} onClick={() => clickSavedVideo(each.id)}>
                <SavedVideoThumbnail src={each.thumnail} />
                <TextDivSaved>
                  <SavedTitle>{each.title}</SavedTitle>
                  <TrendingChannelName>{each.channelName}</TrendingChannelName>
                  <TrendingChannelName>
                    {each.views} Views • {each.publishedAt}
                  </TrendingChannelName>
                </TextDivSaved>
              </SavedCard>
            );
          })}
        </SavedVideosContainer>
      </SavedContainer>
    );
  };

  function showNoSaved() {
    return (
      <>
        <NoSavedContainer>
          <NoSavedImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" />
          <NoSavedHeading>No saved videos found</NoSavedHeading>
          <NoSavedDescp>
            You can save your videos while watching them.
          </NoSavedDescp>
        </NoSavedContainer>
      </>
    );
  }

  return (
    <>
      <SavedFlexContainer>
        <Sidebar />
        {savedVideos.length !== 0 ? showSaved() : showNoSaved()}
      </SavedFlexContainer>
    </>
  );
};

export default Saved;
