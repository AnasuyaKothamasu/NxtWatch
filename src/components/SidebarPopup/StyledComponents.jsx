import styled from "styled-components";

export const CrossBtnPop = styled.button`
  background-color: transparent;
  border: none;
  position: fixed;
  right: 0;
  top: 20px;
  .cross-btn {
    height: 20px;
    width: 20px;
  }
  .cross-pop-dark {
    color: white;
  }
`;

export const HamButton = styled.button`
  display: none;
  .ham-btn-sm-dev {
    display: none;
  }
  @media (max-width: 575px) {
    display: block;
    background-color: transparent;
    border: none;
    .ham-btn-sm-dev {
      display: block;
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    .sm-dev-ham-light {
      color: black;
    }
    .sm-dev-ham-dark {
      color: rgb(249, 251, 253);
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: block;
    background-color: transparent;
    border: none;
    .ham-btn-sm-dev {
      display: block;
    }
    .ham-btn-sm-dev {
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
    .sm-dev-ham-light {
      color: black;
    }
    .sm-dev-ham-dark {
      color: rgb(249, 251, 253);
    }
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    display: none;
  }
`;

export const SidePopContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidePopInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-left: 40%;
  background-color: ${(props) =>
    props.active
      ? props.theme.activeDivBgColor
      : props.theme.inactiveDivBgColor};
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