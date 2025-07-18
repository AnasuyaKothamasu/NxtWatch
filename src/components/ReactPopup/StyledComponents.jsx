import styled from "styled-components";

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

export const LogoutButton = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.logoutColor};
  border: ${(props) => props.theme.logoutBorder};
  border-radius: 2px;
  height: 30px;
  width: 100px;
  @media (max-width: 575px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }
`;

export const LogoutPopContainer = styled.div`
  padding: 5px 40px 30px 40px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Question = styled.p`
  font-size: 18px;
  margin-top: 30px;
`;

export const BtnFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CancelBtn = styled.button`
  background-color: transparent;
  color: gray;
  border: solid 1px gray;
  border-radius: 3px;
  font-weight: 600;
  height: 30px;
  width: 100px;
`;

export const ModalLogoutBtn = styled.button`
  background-color: rgb(18, 106, 221);
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  height: 30px;
  width: 100px;
`;


