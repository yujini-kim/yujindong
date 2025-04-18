import styled from "styled-components";
import { BtnBox, Button, File, Form, Text } from "./styled";

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
