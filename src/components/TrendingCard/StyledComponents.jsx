import styled from "styled-components";

export const TrendingCardd = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-bottom: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export const TrendCardThumbnail = styled.img`
  height: 208px;
  min-width: 50%;
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: auto;
    width: 55%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: auto;
    width: 55%;
  }
`;

export const TrendingTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrendingChannelProfile = styled.img`
  display: none;
  @media (max-width: 575px) {
    display: block;
    height: 40px;
    width: 40px;
    align-self: center;
    margin-left: 15px;
  }
`;

export const TxtDivTrend = styled.div`
  padding: 0 20px 20px 20px;
  @media (max-width: 575px) {
    padding: 5px 20px 5px 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 5px 20px 5px 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 5px 20px 5px 20px;
  }
`;

export const TrendingCardTitle = styled.h2`
  font-size: 22px;
  margin: 10px 0px;
  color: #7a7878;
  color: ${(props) => props.theme.trendingCardTitle};
  @media (max-width: 575px) {
    font-size: 18px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const TrendingChannelName = styled.p`
  color: ${(props) => props.theme.descpColor};
  font-weight: 600;
`;
