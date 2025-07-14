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
import GamingCard from "../GamingCard";
import { SiYoutubegaming } from "react-icons/si";

const Gaming = () => {
  const [isLight] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showSuccessView, setShowSuccessView] = useState(true);
  const [gamingVideos, setGamingVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }

  function clickGameVideo(id) {
    navigate(`/viewItemDetails/${id}`);
  }

  useEffect(() => {
    async function fetchGaming() {
      setIsLoading(true);
      const url = "https://apis.ccbp.in/videos/gaming";
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
          id: each.id,
          thumbnail: each.thumbnail_url,
          title: each.title,
          views: each.view_count,
        }));
        setIsLoading(false);
        setGamingVideos(formattedData);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchGaming();
  }, []);

  function successView() {
    return (
      <div
        className={`gaming-container ${
          isLight ? "gaming-light" : "gaming-dark"
        }`}
      >
        <div
          className={`gaming-heading-div ${
            isLight ? "gheading-div-light" : "gheading-div-dark"
          }`}
        >
          <div
            className={`gicon-container ${
              isLight ? "glight-icon-container" : "gdark-icon-container"
            }`}
          >
            <SiYoutubegaming
              className={`gicon ${isLight ? "gicon-light" : "gicon-dark"}`}
            />
          </div>
          <h1
            className={`gheading ${
              isLight ? "gheading-light" : "gheading-dark"
            }`}
          >
            Gaming
          </h1>
        </div>
        <div
          className={`gvideos-container ${
            isLight ? "gcontainer-light" : "gcontainer-dark"
          }`}
        >
          {isLoading ? (
            <BeatLoader
              className={`gloader`}
              color={`${isLight ? "#000" : "#fff"}`}
            />
          ) : (
            ""
          )}
          <div className="gaming-grid-container">
            {gamingVideos.map((each) => (
              <GamingCard
                gameDetails={each}
                clickGameVideo={clickGameVideo}
                key={each.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex-gaming-container">
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </div>
    </>
  );
};

export default Gaming;
