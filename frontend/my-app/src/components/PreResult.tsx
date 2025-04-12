import styled from "styled-components";
import ProgressCircle from "./ProgressCircle";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Text = styled.p`
  font-weight: 600;
  text-align: center;
`;

const Emoji = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`;

function PreResult() {
  return (
    <Wrapper>
      <Box>
        <Text>친밀도 점수</Text>
        <ProgressCircle percentage={100} />
      </Box>
      <Box>
        <Text>축의금 추천</Text>
        <Emoji>🤔</Emoji>
      </Box>
    </Wrapper>
  );
}

export default PreResult;
