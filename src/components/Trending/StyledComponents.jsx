import styled from "styled-components";

export const TrendingFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
`;

export const TrendingSuccessContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBgColor};
  min-width: calc(100% - 20vw);
  margin-left: 20vw;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  overflow-y: auto;
  @media (max-width: 575px) {
    margin-left: 0;
    margin-top: 65px;
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-left: 0;
    margin-top: 65px;
    width: 100%;
  }
`;

export const HeadingContainer = styled.div`
  background-color: ${(props) => props.theme.headingContainerBgColor};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 575px) {
    padding: 15px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }
`;

export const HeadingIconContainer = styled.div`
  margin-right: 20px;
  border-radius: 50%;
  padding: 25px 28px 25px 28px;
  background-color: ${(props) => props.theme.iconContainerBgColor};

  .icon {
    height: 35px;
    width: 35px;
    color: #ff031c;
  }
  @media (max-width: 575px) {
    margin-right: 20px;
    border-radius: 50%;
    padding: 15px 18px 15px 18px;
    margin-left: 15px;
    .icon {
      height: 25px;
      width: 25px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-right: 20px;
    border-radius: 50%;
    padding: 15px 18px 15px 18px;
    margin-left: 15px;
    margin-top: 15px;
    .icon {
      height: 25px;
      width: 25px;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 575px) {
    font-size: 25px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 25px;
    margin-top: 30px;
  }
`;

export const Loader = styled.div`
  margin-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.txtColor};
`;

export const TrendingVideosContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    padding: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 20px;
  }
`;