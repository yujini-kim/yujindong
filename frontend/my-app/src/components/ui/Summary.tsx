import styled from "styled-components";

const Container = styled.div`
  max-width: 294px;
  width: 294px;
  height: 142px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 5px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

interface IProps {
  summary: React.ReactNode;
}

function Summary({ summary }: IProps) {
  return <Container>{summary}</Container>;
}

export default Summary;
