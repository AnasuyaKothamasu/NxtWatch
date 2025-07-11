import { useContext, useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { ThemeContext } from "../../context/ThemeContext";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import FailureView from "../FailureView";

const ViewItemDetails = () => {
  const [isLight, toggleTheme, savedVideos, save, unsave] = useContext(ThemeContext);
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessView, setShowSuccessView] = useState(true);
  const [det, setDet] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [isUnliked, setIsUnliked] = useState(false);
  
  const vid = savedVideos.some(videos => videos.id === params.id)
  const [isSaved, setIsSaved] = useState(vid)

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }

  function successView() {
    return (
      <div
        className={`item-details-container ${
          isLight ? "item-cont-light" : "item-cont-dark"
        }`}
      >
        <iframe
          className="video-item"
          width="100%"
          height="65%"
          src={det.video?.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          className={`text-cont ${
            isLight ? "txt-cont-light" : "text-cont-dark"
          }`}
        >
          <h2
            className={`item-head ${
              isLight ? "item-head-light" : "item-head-dark"
            }`}
          >
            {det.title}
          </h2>
          <div className={`ddd ${isLight ? "ddd-light" : "ddd-dark"}`}>
            <p
              className={`item-text ${
                isLight ? "item-txt-light" : "item-txt-dark"
              }`}
            >
              {det.views} views • {det.publishedAt}
            </p>
            <div className="xyz">
              <div
                onClick={handleLike}
                className={`like-div ${isLiked ? "active-like" : ""}`}
              >
                <BiLike className="like" />
                <p className="like">Like</p>
              </div>
              <div
                onClick={handleDislike}
                className={`like-div ${isUnliked ? "active-like" : ""}`}
              >
                <BiDislike className="like" />
                <p className="like">Dislike</p>
              </div>
              <div
                onClick={handleSave}
                className={`like-div ${isSaved ? "active-like" : ""}`}
              >
                <MdOutlinePlaylistAdd className="like" />
                <p className="like">{isSaved ? "Saved" : "Save"}</p>
              </div>
            </div>
          </div>
          <hr className="line" />
          <div
            className={`channel-details-cont ${
              isLight ? "channel-light" : "channel-dark"
            }`}
          >
            <img src={det.channelProfile} className={`channel-profile-item`} />
            <div
              className={`txt-div-item ${
                isLight ? "text-div-item-light" : "txt-div-item-dark"
              }`}
            >
              <h2
                className={`channel-name-item ${
                  isLight ? "channel-name-item-light" : "channel-name-item-dark"
                }`}
              >
                {det.channelName}
              </h2>
              <p
                className={`subscribers ${
                  isLight ? "subscribers-light" : "subscribers-dark"
                }`}
              >
                {det.subscribers} subscribers
              </p>
              <p
                className={`description-item ${
                  isLight ? "description-item-light" : "description-item-dark"
                }`}
              >
                {det.descp}
              </p>
            </div>
          </div>
        </div>
      </div>
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
        return newSavedState
      }else{
        unsave(det);
        return newSavedState
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
        setIsLoading(false);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchItem();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex-container-item">
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </div>
    </>
  );
};

export default ViewItemDetails;
