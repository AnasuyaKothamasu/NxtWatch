import { useContext } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router";

const Saved = () => {
  const [isLight, toggleTheme, savedVideos] = useContext(ThemeContext);
  const navigate = useNavigate();

  function clickSavedVideo(id) {
    navigate(`/viewItemDetails/${id}`);
  }

  console.log(savedVideos);

  const showSaved = () => {
    return (
      <div
        className={`saved-container ${
          isLight ? "saved-container-light" : "saved-container-dark"
        }`}
      >
        <div
          className={`saved-heading-div ${
            isLight ? "sheading-div-light" : "sheading-div-dark"
          }`}
        >
          <div
            className={`sicon-container ${
              isLight ? "slight-icon-container" : "sdark-icon-container"
            }`}
          >
            <MdPlaylistAdd
              className={`sicon ${isLight ? "sicon-light" : "sicon-dark"}`}
            />
          </div>
          <h1
            className={`sheading ${
              isLight ? "sheading-light" : "sheading-dark"
            }`}
          >
            Saved
          </h1>
        </div>
        <div
          className={`svideos-container ${
            isLight ? "scontainer-light" : "scontainer-dark"
          }`}
        >
          {savedVideos.map((each) => {
            return (
              <div
                key={each.id}
                onClick={() => clickSavedVideo(each.id)}
                className={`saved-card ${isLight ? "card-light" : "card-dark"}`}
              >
                <img src={each.thumnail} className="thumbnail-saved" />
                <div
                  className={`txt-div-saved ${
                    isLight ? "scdiv-light" : "scdiv-dark"
                  }`}
                >
                  <h2
                    className={`sc-title ${
                      isLight ? "sc-title-light" : "sc-title-dark"
                    }`}
                  >
                    {each.title}
                  </h2>
                  <p
                    className={`schannelName ${
                      isLight ? "schannel-light" : "schannel-dark"
                    }`}
                  >
                    {each.channelName}
                  </p>
                  <p
                    className={`sdescp ${
                      isLight ? "sdescp-light" : "sdescp-dark"
                    }`}
                  >
                    {each.views} Views • {each.publishedAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  function showNoSaved() {
    return (
      <>
        <div
          className={`nosaved-view ${
            isLight ? "nosaved-light" : "nosaved-dark"
          }`}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            className="nosaved-img"
          />
          <h2
            className={`nosaved-heading ${
              isLight ? "heading-light" : "heading-dark"
            }`}
          >
            No saved videos found
          </h2>
          <p
            className={`nosaved-descp ${
              isLight ? "descp-light" : "descp-dark"
            }`}
          >
            You can save your videos while watching them.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={`flex-saved-container`}>
        <Sidebar />
        {savedVideos.length !== 0 ? showSaved() : showNoSaved()}
      </div>
    </>
  );
};

export default Saved;
