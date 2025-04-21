import { BtnBox, Button, File, Form, Input, Text } from "./styled";

interface ITextProps {
  textValue: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  text: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameValue: string;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextArea({
  textValue,
  nameValue,
  onChange,
  handleName,
  onSubmit,
  text,
  handleFileChange,
}: ITextProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Text
        rows={5}
        placeholder="텍스트를 입력해주세요"
        value={textValue}
        onChange={onChange}
      ></Text>
      <Input
        placeholder="친구이름 입력해주세요"
        value={nameValue}
        onChange={handleName}
      ></Input>
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
