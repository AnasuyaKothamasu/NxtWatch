// import { useEffect, useState } from "react";
// import Sidebar from "../Sidebar";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router";
// import { BeatLoader } from "react-spinners";
// import FailureView from "../FailureView";
// import GamingCard from "../GamingCard";
// import { SiYoutubegaming } from "react-icons/si";
// import {
//   HeadingContainer,
//   Loader,
//   HeadingIconContainer,
//   Heading,
//   GamingSuccessContainer,
//   GamingFlexContainer,
//   GamingVideosContainer,
//   GamingGridContainer,
// } from "./StyledComponents";

// const Gaming = () => {
//   const navigate = useNavigate();
//   const [showSuccessView, setShowSuccessView] = useState(true);
//   const [gamingVideos, setGamingVideos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const jwtToken = Cookies.get("jwt_token");
//   if (jwtToken === undefined) {
//     navigate("/login", { replace: true });
//   }

//   function clickGameVideo(id) {
//     navigate(`/viewItemDetails/${id}`);
//   }

//   useEffect(() => {
//     async function fetchGaming() {
//       setIsLoading(true);
//       const url = "https://apis.ccbp.in/videos/gaming";
//       const options = {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${jwtToken}`,
//         },
//       };
//       const response = await fetch(url, options);
//       if (response.ok === true) {
//         const data = await response.json();
//         let formattedData = data.videos.map((each) => ({
//           id: each.id,
//           thumbnail: each.thumbnail_url,
//           title: each.title,
//           views: each.view_count,
//         }));
//         setIsLoading(false);
//         setGamingVideos(formattedData);
//         setShowSuccessView(true);
//       } else {
//         setShowSuccessView(false);
//       }
//     }
//     fetchGaming();
//   }, []);

//   function successView() {
//     return (
//       <GamingSuccessContainer>
//         <HeadingContainer>
//           <HeadingIconContainer>
//             <SiYoutubegaming className="icon" />
//           </HeadingIconContainer>
//           <Heading>Gaming</Heading>
//         </HeadingContainer>
//         <GamingVideosContainer>
//           {isLoading && (
//             <Loader>
//               <BeatLoader />
//             </Loader>
//           )}
//           <GamingGridContainer>
//             {gamingVideos.map((each) => (
//               <GamingCard
//                 gameDetails={each}
//                 clickGameVideo={clickGameVideo}
//                 key={each.id}
//               />
//             ))}
//           </GamingGridContainer>
//         </GamingVideosContainer>
//       </GamingSuccessContainer>
//     );
//   }

//   return (
//     <>
//       <GamingFlexContainer>
//         <Sidebar />
//         {showSuccessView ? successView() : <FailureView />}
//       </GamingFlexContainer>
//     </>
//   );
// };

// export default Gaming;
