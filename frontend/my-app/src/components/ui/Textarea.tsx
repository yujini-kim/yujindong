import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 294px;
  width: 294px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;
const Text = styled.textarea.attrs({
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

const File = styled.label.attrs({
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

const BtnBox = styled.div`
  display: flex;
  gap: 12px;
`;
const Button = styled.button.attrs({
  type: "submit",
})`
  width: 141px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
`;

interface ITextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  text: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextArea({
  value,
  onChange,
  onSubmit,
  text,
  handleFileChange,
}: ITextProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Text value={value} onChange={onChange}></Text>
      <BtnBox>
        <File>
          파일 업로드하기
          <input
            type="file"
            id="file"
            accept=".txt"
            onChange={handleFileChange}
          />
        </File>
        <Button>{text}</Button>
      </BtnBox>
    </Form>
  );
}

export default TextArea;
