import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import ReactPopup from "../ReactPopup";
import { useNavigate } from "react-router";
import "reactjs-popup/dist/index.css";
import SidebarPopup from "../SidebarPopup";
import { useTheme } from "styled-components";
import {
  FlexContainer,
  NavbarContainer,
  ThemeIconContainer,
  ProfileImage,
  ProfileImgContainer,
  NavbarLogo,
} from "./StyledComponents";

const Navbar = (props) => {
  const { isLight, toggleTheme } = props;
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <NavbarContainer>
      <NavbarLogo
        onClick={() => navigate("/")}
        src={theme.logoUrl}
        alt="Website Logo"
      />

      <FlexContainer className="flex-container">
        <ThemeIconContainer as="button" onClick={toggleTheme}>
          {isLight ? (
            <FaMoon className={`themeIcon ${theme.themeIcon}`} />
          ) : (
            <IoSunnyOutline className={`themeIcon ${theme.themeIcon}`} />
          )}
        </ThemeIconContainer>

        <ProfileImgContainer>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="Profile"
          />
        </ProfileImgContainer>

        <SidebarPopup />
        <ReactPopup />
      </FlexContainer>
    </NavbarContainer>
  );
};

export default Navbar;
