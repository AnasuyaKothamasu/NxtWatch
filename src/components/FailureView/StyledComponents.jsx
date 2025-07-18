import styled from "styled-components";

export const FailureViewContainer = styled.div`
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
export const FailureImage = styled.img`
  height: 350px;
  width: 400px;
  @media (max-width: 575px) {
    height: 200px;
    width: 225px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 300px;
    width: 325px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 300px;
    width: 350px;
  }
`;

export const FailureHeading = styled.h2`
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const FailureDescp = styled.p`
  color: ${(props) => props.theme.descpColor};
  font-size: 18px;
  @media (max-width: 575px) {
    margin-top: 0;
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 0;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 0;
    font-size: 16px;
  }
`;

export const FailureButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #4a47e0;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;