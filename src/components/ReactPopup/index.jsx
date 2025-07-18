import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router";
import "./index.css";
import Cookies from "js-cookie";
import { MdLogout } from "react-icons/md";
import {
  ThemeIconContainer,
  LogoutButton,
  LogoutPopContainer,
  BtnFlexContainer,
  CancelBtn,
  ModalLogoutBtn,
  Question,
} from "./StyledComponents";
import { useTheme } from "styled-components";

const ReactPopup = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  function handleLogout() {
    close();
    navigate("/login", { replace: true });
    Cookies.remove("jwt_token");
  }

  return (
    <div>
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none" }}
        className={`logout ${theme.popClassName}`}
        trigger={
          <div>
            <LogoutButton type="button">Logout</LogoutButton>
            <ThemeIconContainer>
              <MdLogout
                className={`logout-btn-sm-dev ${theme.smallDeviceLogout}`}
              />
            </ThemeIconContainer>
          </div>
        }
      >
        {(close) => (
          <>
            <LogoutPopContainer>
              <Question>Are you sure you want to logout?</Question>
              <BtnFlexContainer>
                <CancelBtn type="button" onClick={() => close()}>
                  Cancel
                </CancelBtn>
                <ModalLogoutBtn
                  type="button"
                  onClick={() => handleLogout(close)}
                >
                  Logout
                </ModalLogoutBtn>
              </BtnFlexContainer>
            </LogoutPopContainer>
          </>
        )}
      </Popup>
    </div>
  );
};
export default ReactPopup;
