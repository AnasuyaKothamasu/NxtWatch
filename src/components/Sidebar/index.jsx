// import { useLocation, useNavigate } from "react-router";
// import { TiHome } from "react-icons/ti";
// import { ImFire } from "react-icons/im";
// import { SiYoutubegaming } from "react-icons/si";
// import { MdOutlinePlaylistAdd } from "react-icons/md";
// import {
//   SideBarContainer,
//   SideBarInnerDiv,
//   Icon,
//   SidebarTxt,
//   SidebarFooter,
//   Contact,
//   SidebarDescp,
//   SocialIcon,
//   SocialContainer,
// } from "./StyledComponents";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path) => {
//     return path === location.pathname;
//   }

//   return (
//     <SideBarContainer>
//       <div style={{ marginTop: "30px" }}>
//         <SideBarInnerDiv onClick={() => navigate("/")} active={isActive("/")}>
//           <Icon active={isActive("/")}>
//             <TiHome />
//           </Icon>
//           <SidebarTxt active={isActive("/")}>Home</SidebarTxt>
//         </SideBarInnerDiv>
//         <SideBarInnerDiv
//           onClick={() => navigate("/trending")}
//           active={isActive("/trending")}
//         >
//           <Icon active={isActive("/trending")}>
//             <ImFire />
//           </Icon>
//           <SidebarTxt active={isActive("/trending")}>Trending</SidebarTxt>
//         </SideBarInnerDiv>
//         <SideBarInnerDiv
//           onClick={() => navigate("/gaming")}
//           active={isActive("/gaming")}
//         >
//           <Icon active={isActive("/gaming")}>
//             <SiYoutubegaming />
//           </Icon>
//           <SidebarTxt active={isActive("/gaming")}>Gaming</SidebarTxt>
//         </SideBarInnerDiv>
//         <SideBarInnerDiv
//           onClick={() => navigate("/savedVideos")}
//           active={isActive("/savedVideos")}
//         >
//           <Icon active={isActive("/savedVideos")}>
//             <MdOutlinePlaylistAdd />
//           </Icon>
//           <SidebarTxt active={isActive("/savedVideos")}>Saved Videos</SidebarTxt>
//         </SideBarInnerDiv>
//       </div>
//       <SidebarFooter>
//         <Contact>CONTACT US</Contact>
//         <SocialContainer>
//           <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
//           <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
//           <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
//         </SocialContainer>
//         <SidebarDescp>
//           Enjoy! Now to see your channels and recommendations!
//         </SidebarDescp>
//       </SidebarFooter>
//     </SideBarContainer>
//   );
// };

// export default Sidebar;
