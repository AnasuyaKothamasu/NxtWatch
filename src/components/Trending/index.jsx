import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ImFire } from "react-icons/im";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import FailureView from "../FailureView";
import TrendingCard from "../TrendingCard";

const Trending = () => {
  const [isLight] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showSuccessView, setShowSuccessView] = useState(true);
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }

  function clickTrendVideo(id) {
    navigate(`/viewItemDetails/${id}`);
  }

  useEffect(() => {
    async function fetchTrending() {
      setIsLoading(true);
      const url = "https://apis.ccbp.in/videos/trending";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        let formattedData = data.videos.map((each) => ({
          channelName: each.channel.name,
          channelProfile: each.channel.profile_image_url,
          id: each.id,
          publishedAt: each.published_at,
          thumbnail: each.thumbnail_url,
          title: each.title,
          views: each.view_count,
        }));
        setIsLoading(false);
        setTrendingVideos(formattedData);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchTrending();
  }, []);

  function successView() {
    return (
      <div
        className={`trending-container ${
          isLight ? "trending-light" : "trending-dark"
        }`}
      >
        <div
          className={`trending-heading-div ${
            isLight ? "heading-div-light" : "heading-div-dark"
          }`}
        >
          <div
            className={`icon-container ${
              isLight ? "light-icon-container" : "dark-icon-container"
            }`}
          >
            <ImFire
              className={`ticon ${isLight ? "ticon-light" : "ticon-dark"}`}
            />
          </div>
          <h1
            className={`theading ${
              isLight ? "theading-light" : "theading-dark"
            }`}
          >
            Trending
          </h1>
        </div>
        <div
          className={`tvideos-container ${
            isLight ? "tcontainer-light" : "tcontainer-dark"
          }`}
        >
          {isLoading ? <BeatLoader className="tloader" color={`${isLight ? "#000" : "#fff"}`} /> : ""}
          {trendingVideos.map((each) => (
            <TrendingCard
              trendDetails={each}
              clickTrendVideo={clickTrendVideo}
              key={each.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex-container-trending">
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </div>
    </>
  );
};

export default Trending;
