import styled from "styled-components";

export const HomeSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20vw);
  min-height: calc(100vh - 80px);
  overflow-y: auto;
  margin-top: 80px;
  margin-left: 20vw;
  font-family: sans-serif;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 767px) {
    width: 100%;
    min-height: calc(100vh - 65px);
    margin-left: 0;
    margin-top: 65px;
  }
`;

export const HomeContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 767px) {
    padding: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
  }
`;

export const SearchInputContainer = styled.form`
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: fit-content;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin: 20px 20px 0 20px;
    width: 90%;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border-radius: 3px;
  font-size: 16px;
  height: 35px;
  width: 450px;
  padding: 5px;
  border: solid 1px rgb(165, 162, 162);
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 767px) {
    width: 100%;
    height: 33px;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  color: rgb(90, 88, 88);
  width: 80px;
  border: solid 1px rgb(165, 162, 162);
  .search-icon {
    height: 20px;
    width: 20px;
  }
  @media (max-width: 767px) {
    .search-icon {
      width: 15px;
      height: 15px;
    }
  }
`;

export const HomeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (min-width: 576px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    padding-left: 20px;
  }
`;

export const NoVideosCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  margin-top: 80px;
  font-family: sans-serif;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryBgColor};
`;

export const NoSearchHeading = styled.h2`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const NoSearchDescp = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.descpColor};
`;

export const RetryButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #4a47e0;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const NoSearchImage = styled.img`
  height: 350px;
  width: 400px;
`;

export const Loader = styled.div`
  margin-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.txtColor};
`;