import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 294px;
  gap: 8px;
  margin-bottom: 4px;
`;

export const Input = styled.input.attrs({
  required: true,
})`
  width: 100%;
  height: 40px;

  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  margin-top: 28px;
`;
