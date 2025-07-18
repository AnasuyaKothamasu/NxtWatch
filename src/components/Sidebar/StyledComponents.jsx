import styled from "styled-components";

export const SideBarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20vw;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 80px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const SideBarInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${(props) =>
    props.active
      ? props.theme.activeDivBgColor
      : props.theme.inactiveDivBgColor};
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 10px;
  }
  @media (min-width: 1024px) {
    padding-left: 20px;
  }
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  background-color: transparent;
  color: ${(props) =>
    props.active ? props.theme.activeIconColor : props.theme.inactiveIconColor};
`;

export const SidebarTxt = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.txtColor};
  font-weight: ${(props) => (props.active ? 600 : "normal")};
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.txtColor};
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 10px;
  }
`;

export const Contact = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const SidebarDescp = styled.p`
  font-weight: 500;
  margin-left: 15px;
  font-size: 16px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const SocialIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

export const SocialContainer = styled.div`
  margin-left: 15px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
  }
`;