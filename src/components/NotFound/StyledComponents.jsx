import styled from "styled-components";

export const NotFoundFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
`;

export const NotFoundContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBgColor};
  min-width: calc(100% - 20vw);
  margin-left: 20vw;
  margin-top: 80px;
  height: calc(100vh - 80px);
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 575px) {
    height: calc(100vh - 65px);
    margin-top: 65px;
    margin-left: 0;
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: calc(100vh - 65px);
    margin-top: 65px;
    margin-left: 0;
    width: 100%;
  }
`;

export const NotFoundImage = styled.img`
  height: 500px;
  @media (max-width: 575px) {
    height: 200px;
    width: 225px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 300px;
    width: 325px;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    height: 300px;
    width: 350px;
  }
`;

export const NotFoundHeading = styled.h1`
  color: ${(props) => props.theme.descpColor};
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    font-size: 20px;
  }
`;

export const NotFoundDescp = styled.p`
  font-size: large;
  font-weight: 500;
  color: ${(props) => props.theme.descpColor};
  @media (max-width: 575px) {
    margin-top: 0;
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 0;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    margin-top: 0;
    font-size: 16px;
  }
`;