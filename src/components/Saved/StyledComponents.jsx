import styled from "styled-components";

export const SavedFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
`;

export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 20vw);
  margin-left: 20vw;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  overflow-y: auto;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    width: 100%;
    margin-left: 0;
    margin-top: 65px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    margin-top: 65px;
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

export const SavedVideosContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    padding: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
  }
`;

export const SavedCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 575px) {
    margin-top: 20px;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
`;

export const SavedVideoThumbnail = styled.img`
  height: 208px;
  width: 375px;
  @media (max-width: 575px) {
    width: 85%;
    height: auto;
    align-self: center;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 50%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
  }
`;

export const TextDivSaved = styled.div`
  padding: 20px;
  @media (max-width: 575px) {
    padding: 15px 10px 10px 45px;
    margin-top: 0;
    @media (min-width: 576px) and (max-width: 767px) {
      padding-top: 0;
    }
  }
`;

export const SavedTitle = styled.h2`
  color: ${(props) => props.theme.trendingCardTitle};
  @media (max-width: 575px) {
    padding-top: 0;
    margin-top: 0;
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const TrendingChannelName = styled.p`
  color: ${(props) => props.theme.descpColor};
  font-weight: 600;
`;

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(100vw - 20vw);
  margin-left: 20vw;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  margin-top: 80px;
  font-family: sans-serif;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    min-width: 100%;
    margin-left: 0;
    height: calc(100vh - 65px);
    margin-top: 65px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 100%;
    margin-left: 0;
    height: calc(100vh - 65px);
    margin-top: 65px;
  }
`;

export const NoSavedImage = styled.img`
  height: 450px;
  width: 600px;
  @media (max-width: 575px) {
    height: 250px;
    width: 75%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 350px;
    width: 75%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 380px;
    width: 75%;
  }
`;

export const NoSavedHeading = styled.h2`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const NoSavedDescp = styled.p`
  margin-top: 0;
  font-size: 20px;
  color: ${(props) => props.theme.descpColor};
  @media (max-width: 575px) {
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
`;