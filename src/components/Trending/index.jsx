import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { ImFire } from "react-icons/im";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import FailureView from "../FailureView";
import TrendingCard from "../TrendingCard";

import {
  TrendingFlexContainer,
  TrendingSuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  Loader,
  TrendingVideosContainer,
} from "./StyledComponents";

const Trending = () => {
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
      <TrendingSuccessContainer>
        <HeadingContainer>
          <HeadingIconContainer>
            <ImFire className="icon" />
          </HeadingIconContainer>
          <Heading>Trending</Heading>
        </HeadingContainer>
        <TrendingVideosContainer>
          {isLoading && (
            <Loader>
              {" "}
              <BeatLoader />{" "}
            </Loader>
          )}
          {trendingVideos.map((each) => (
            <TrendingCard
              trendDetails={each}
              clickTrendVideo={clickTrendVideo}
              key={each.id}
            />
          ))}
        </TrendingVideosContainer>
      </TrendingSuccessContainer>
    );
  }

  return (
    <>
      <TrendingFlexContainer className="flex-container-trending">
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </TrendingFlexContainer>
    </>
  );
};

export default Trending;
