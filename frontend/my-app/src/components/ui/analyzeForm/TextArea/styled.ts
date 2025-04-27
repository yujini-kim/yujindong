import styled from "styled-components";

export const Form = styled.form`
  max-width: 294px;
  width: 294px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;
export const Text = styled.textarea`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 1px;
  border: 2px solid ${(props) => props.theme.borderColor};
  box-shadow: 4px 4px ${(props) => props.theme.shadowColor};
  padding: 10px;
`;

export const File = styled.label.attrs({
  htmlFor: "file",
})`
  width: 141px;
  border-radius: 1px;
  border: 2px solid ${(props) => props.theme.borderColor};
  box-shadow: 4px 4px ${(props) => props.theme.shadowColor};
  background-color: ${(props) => props.theme.circleColor};
  font-weight: 600;
  cursor: pointer;
  padding: 8px;
  text-align: center;
  input {
    display: none;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  gap: 12px;
`;
export const Button = styled.button.attrs({
  type: "submit",
})`
  width: 141px;
  background-color: ${(props) => props.theme.accentColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  box-shadow: 4px 4px ${(props) => props.theme.shadowColor};
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
`;
export const Input = styled.input`
  height: 30px;
  padding: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 1px;
  border: 2px solid ${(props) => props.theme.borderColor};
  box-shadow: 4px 4px ${(props) => props.theme.shadowColor};
  width: 100%;
  margin-top: 10px;
`;
