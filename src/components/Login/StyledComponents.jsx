import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.primaryBgColor};
`;

export const LoginInnerContainer = styled.div`
  height: auto;
  width: 30%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-shadow: 0 4px 20px 0 rgba(17, 17, 17, 0.1);
  color: ${(props) => props.theme.secondaryBgColor};

  @media (max-width: 575px) {
    width: 90%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 70%;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    width: 50%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.labelColor};
  margin: 15px 10px 5px 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  border: ${(props) => props.theme.inputBorder};
  height: 45px;
  margin: 0 10px 10px 10px;
  padding: 5px;
  width: 95%;
  font-size: 14px;
  border-radius: 4px;
  color: ${(props) => props.theme.txtColor};
  background-color: transparent;
`;

export const LoginButton = styled.button`
  background-color: rgb(20, 135, 236);
  border: none;
  color: white;
  height: 40px;
  margin: 10px 10px 20px 10px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 600;
`;

export const CheckBoxContainer = styled.div`
  padding: 5px 10px 30px 10px;
`;

export const CheckBoxLabel = styled.label`
  color: ${(props) => props.theme.txtColor};
  margin: 15px 10px 0 0;
  font-size: 17px;
`;

export const CheckBox = styled.input`
  margin-right: 8px;
  border: black;
`;

export const ErrorMsg = styled.p`
  color: rgb(216, 34, 34);
  margin-top: 0;
  padding-left: 20px;
`;

export const FormLogo = styled.img`
  margin: 30px 30px 30px 30px;
  align-self: center;
  height: 45px;
  width: 200px;
`;