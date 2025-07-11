import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
import PremiumCard from "../PremiumCard";
import VideoCard from "../VideoCard";
import { BeatLoader } from "react-spinners";
import "./index.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import FailureView from "../FailureView";

const Home = () => {
  const [isLight] = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [videosList, setVideosList] = useState([]);
  const [showPremiumCard, setShowPremiumCard] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [showSuccessView, setShowSuccessView] = useState(true);

  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }
  const url = "https://apis.ccbp.in/videos/all?search=";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        const formattedData = data.videos.map((each) => ({
          channelName: each.channel.name,
          channelProfile: each.channel.profile_image_url,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          views: each.view_count,
        }));
        setIsLoading(false);
        setVideosList(formattedData);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchData();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const updated = videosList.filter((each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setVideosList(updated);
  }

  function novideosView() {
    return (
      <>
        <div
          className={`nosearch-view ${
            isLight ? "nosearch-light" : "nosearch-dark"
          }`}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            className="nosearch-img"
          />
          <h2
            className={`nosaved-heading ${
              isLight ? "heading-light" : "heading-dark"
            }`}
          >
            No Search results found
          </h2>
          <p
            className={`nosearch-descp ${
              isLight ? "descp-light" : "descp-dark"
            }`}
          >
            Try different keywords or remove search.
          </p>
          <button
            onClick={() => handleSearch()}
            className={`failure-btn ${isLight ? "btn-light" : "btn-dark"}`}
          >
            Retry
          </button>
        </div>
      </>
    );
  }

  function videosView() {
    return (
      <div className="grid-container">
        {videosList.map((each) => (
          <VideoCard
            key={each.id}
            videoDetails={each}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }

  function successView() {
    return (
      <div
        className={`home-container ${
          isLight ? "home-container-light" : "home-container-dark"
        }`}
      >
        {showPremiumCard && <PremiumCard removeCard={removeCard} />}
        <div
          className={`container ${
            isLight ? "container2-light" : "container2-dark"
          }`}
        >
          <form onSubmit={handleSearch} className="search-input-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </form>
          {isLoading ? (
            <BeatLoader className="loader" />
          ) : videosList.length === 0 ? (
            novideosView()
          ) : (
            videosView()
          )}
          {}
        </div>
      </div>
    );
  }

  function removeCard() {
    setShowPremiumCard(false);
  }

  function handleClick(id) {
    navigate(`viewItemDetails/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="flex-container">
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </div>
    </>
  );
};

export default Home;
