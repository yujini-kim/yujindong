import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 294px;
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

function TextArea() {
  return (
    <Wrapper>
      <Text placeholder="텍스트를 입력해주세요"></Text>
      <Button>분석하기</Button>
    </Wrapper>
  );
}

export default TextArea;
