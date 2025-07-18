import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import './index.css'
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useLocation } from "react-router";
import { useTheme } from "styled-components";
import {
  CrossBtnPop,
  HamButton,
  SidePopContainer,
  SidePopInnerDiv,
  Icon,
  SidebarTxt,
} from "./StyledComponents";

const SidebarPopup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isActive = (path) => {
    return path === location.pathname;
  };

  return (
    <div>
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none", margin: 0, }}
        className={`menu ${theme.popClassName}`}
        trigger={
          <HamButton type="button">
            <GiHamburgerMenu
              className={`ham-btn-sm-dev ${theme.hamClassName}`}
            />
          </HamButton>
        }
      >
        {(close) => (
          <>
            <CrossBtnPop type="button" onClick={() => close()}>
              <RxCross2 className={`cross-btn ${theme.crossBtnClassName}`} />
            </CrossBtnPop>
            <SidePopContainer>
              <div style={{ marginTop: "30px" }}>
                <SidePopInnerDiv
                  onClick={() => {
                    close();
                    navigate("/");
                  }}
                  active={isActive("/")}
                >
                  <Icon active={isActive("/")}>
                    <TiHome />
                  </Icon>
                  <SidebarTxt active={isActive("/")}>Home</SidebarTxt>
                </SidePopInnerDiv>
                <SidePopInnerDiv
                  onClick={() => {
                    close();
                    navigate("/trending");
                  }}
                  active={isActive("/trending")}
                >
                  <Icon active={isActive("/trending")}>
                    <ImFire />
                  </Icon>
                  <SidebarTxt active={isActive("/trending")}>
                    Trending
                  </SidebarTxt>
                </SidePopInnerDiv>
                <SidePopInnerDiv
                  onClick={() => {
                    close();
                    navigate("/gaming");
                  }}
                  active={isActive("/gaming")}
                >
                  <Icon active={isActive("/gaming")}>
                    <SiYoutubegaming />
                  </Icon>
                  <SidebarTxt active={isActive("/gaming")}>Gaming</SidebarTxt>
                </SidePopInnerDiv>
                <SidePopInnerDiv
                  onClick={() => {
                    close();
                    navigate("/savedVideos");
                  }}
                  active={isActive("/savedVideos")}
                >
                  <Icon active={isActive("/savedVideos")}>
                    <MdOutlinePlaylistAdd />
                  </Icon>
                  <SidebarTxt active={isActive("/savedVideos")}>
                    Saved Videos
                  </SidebarTxt>
                </SidePopInnerDiv>
              </div>
            </SidePopContainer>
          </>
        )}
      </Popup>
    </div>
  );
};
export default SidebarPopup;
