import styled from "styled-components";

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-height: 360px;
  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 220px;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverBgColor};
    transition: 0.2s ease-in-out;
  }
`;

export const VideoThumbnail = styled.img`
  margin-top: 20px;
  align-self: center;
  width: 90%;
  height: 180px;
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 130px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 130px;
  }
`;

export const VideoCardFlexConatiner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media (max-width: 575px) {
    padding: 15px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
  }
`;

export const VideoCardChannelProfile = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 10px;
`;

export const TextContainerVideo = styled.div`
  margin-left: 10px;
`;

export const VideoTitle = styled.h4`
  margin-top: 0;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.descpColor};
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const VideoChannelName = styled.p`
  font-size: 14px;
  margin: 0 10px 0 0;
  color: ${(props) => props.theme.descpColor};
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const VideoDescp = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.descpColor};
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;