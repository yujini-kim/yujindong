import { useAnalyzeMutation } from "@/hooks/analyzeText";
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
  maxLength: 1000,
})`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;
const Button = styled.button.attrs({
  type: "submit",
})`
  width: 100%;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  padding: 5px;
`;

interface ITextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function TextArea({ value, onChange, onSubmit }: ITextProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Text value={value} onChange={onChange}></Text>
      <Button>분석하기</Button>
    </Form>
  );
}

export default TextArea;
