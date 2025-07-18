import styled from "styled-components";

export const PremiumCardContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Sans Serif";
  padding: 20px 20px 20px 20px;
  @media (max-width: 575px) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PremiumFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PremiumLogo = styled.img`
  height: 35px;
  width: 150px;
  margin: 15px 10px 10px 30px;
  @media (max-width: 575px) {
    height: 20px;
    width: 80px;
    margin: 20px;
  }
`;

export const RemoveButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  .cross-mark {
    height: 25px;
    width: 25px;
    border: none;
    outline: none;
  }
  @media (max-width: 575px) {
    .cross-mark {
      width: 18px;
      height: 18px;
      margin-right: 10px;
      color: black;
    }
  }
`;

export const PremiumHeading = styled.h1`
  font-weight: 400;
  font-size: large;
  margin: 20px 30px 30px 30px;
  @media (max-width: 575px) {
    font-size: 12px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

export const GetButton = styled.button`
  color: black;
  border: solid 1px black;
  border-radius: 3px;
  background-color: transparent;
  height: 40px;
  width: 120px;
  font-weight: 500;
  font-size: 14px;
  margin: 20px 30px 10px 30px;
  @media (max-width: 575px) {
    font-size: 10px;
    height: 30px;
    width: 100px;
    margin: 10px 15px 10px 20px;
  }
`;