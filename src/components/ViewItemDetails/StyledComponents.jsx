import styled from "styled-components";

export const VideoItemFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemDetailsContainer = styled.div`
  min-width: calc(100% - 20vw);
  margin-left: 20vw;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  font-family: sans-serif;
  padding: 40px 100px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    width: 100%;
    margin-left: 0;
    margin-top: 65px;
    padding: 30px 10px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    margin-top: 65px;
    padding: 30px 10px;
  }
`;

export const VideoIframe = styled.iframe`
  width: 100%;
  height: 65%;
  aspect-ratio: 16/9;
  @media (max-width: 1030px) {
    height: 55%;
  }
  @media (max-width: 767px) {
    height: 250px;
  }
`;

export const VideoItemTitle = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.txtColor};
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px 20px;
  padding: 10px;
`;

export const ChannelProfileImage = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 15px;
  @media (max-width: 767px) {
    height: 45px;
    width: 45px;
  }
`;

export const ChannelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChannelName = styled.h2`
  margin-bottom: 0;
  color: ${(props) => props.theme.txtColor};
  font-size: 16px;
`;

export const SubscribersText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.descpColor};
`;

export const DescriptionText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.descpColor};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const DividerLine = styled.hr`
  width: 100%;
  background-color: #929394;
  margin: 0;
`;

export const TextContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBgColor};
  padding: 20px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.isLight ? "rgba(152, 173, 197, 1)" : "#767d88"};

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 14px;
  }
`;

export const ViewsAndPublished = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.descpColor};
  margin-left: 10px;
  margin-bottom: 0;
`;

export const LikeButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "rgba(81, 155, 246, 255)" : "inherit")};
  background-color: "transparent";
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;