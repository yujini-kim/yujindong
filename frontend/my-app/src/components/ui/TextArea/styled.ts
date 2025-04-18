import styled from "styled-components";

export const Form = styled.form`
  max-width: 294px;
  width: 294px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;
export const Text = styled.textarea.attrs({
  placeholder: "텍스트를 입력해 주세요",
  rows: 5,
})`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;

export const File = styled.label.attrs({
  htmlFor: "file",
})`
  width: 141px;
  border-radius: 15px;
  background-color: #56beff;
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
  border-radius: 15px;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
`;
