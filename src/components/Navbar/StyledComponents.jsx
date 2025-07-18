import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  @media (max-width: 575px) {
    padding: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 10px 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 22px 20px;
  }
`;

export const ThemeIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  .themeIcon-light {
    height: 32px;
    width: 32px;
    color: black;
  }
  .themeIcon-dark {
    height: 35px;
    width: 35px;
    color: rgb(248, 247, 245);
  }
  .logout-btn-sm-dev {
    display: none;
  }
  @media (max-width: 575px) {
    .themeIcon-light {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    .themeIcon-dark {
      color: rgb(249, 251, 253);
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    .logout-btn-sm-dev {
      display: block;
      margin-top: 5px;
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    .sm-dev-logout-dark {
      color: rgb(248, 247, 245);
    }
    .sm-dev-logout-light {
      color: black;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .themeIcon-light {
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
    .themeIcon-dark {
      color: rgb(249, 251, 253);
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
    .logout-btn-sm-dev {
      display: block;
      margin-top: 5px;
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
    .sm-dev-logout-dark {
      color: rgb(248, 247, 245);
    }
    .sm-dev-logout-light {
      color: black;
    }
  }
`;

export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;

  @media (min-width: 768px) {
    display: block;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProfileImgContainer = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavbarLogo = styled.img`
  height: 30px;
  width: 120px;
  @media (max-width: 575px) {
    height: 25px;
    width: 100px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 30px;
    width: 110px;
  }
`;