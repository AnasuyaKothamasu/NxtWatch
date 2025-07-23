import styled from "styled-components";

export const GamingCardd = styled.div`
  background-color: transparent;
  width: 25vw;
  @media (max-width: 575px) {
    width: 40vw;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 30vw;
  }
`;

export const GamingCardThumbnail = styled.img`
  height: 350px;
  width: 90%;
  @media (max-width: 400px) {
    width: 100%;
    height: 180px;
  }
  @media (min-width: 400px) and (max-width: 575px) {
    align-self: center;
    width: 100%;
    height: 200px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 90%;
    height: 220px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 250px;
  }
`;

export const GamingCardTitle = styled.h2`
  color: ${(props) => props.theme.txtColor};
  margin: 10px 5px 0 5px;
  font-weight: 700;
  @media (max-width: 400px) {
    font-size: 14px;
  }
  @media (min-width: 400px) and (max-width: 575px) {
    font-size: 18px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
`;

export const GamingCardViews = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 5px 0 5px;
  color: ${(props) => props.theme.gamingViews};
  @media (max-width: 400px) {
    font-size: 10px;
  }
  @media (min-width: 400px) and (max-width: 575px) {
    font-size: 14px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;
