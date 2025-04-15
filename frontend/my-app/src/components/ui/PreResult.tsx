import styled from "styled-components";
import { Box, Text, Wrapper } from "./Loading";
import { CircleWrapper } from "./ProgressCircle";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
`;
const Emoji = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

function PreResult() {
  return (
    <Wrapper>
      <Box>
        <Text>친밀도 점수</Text>
        <CircleWrapper>
          <Circle>??</Circle>
        </CircleWrapper>
      </Box>
      <Box>
        <Text>축의금 추천</Text>
        <Emoji>🤔</Emoji>
      </Box>
    </Wrapper>
  );
}

export default PreResult;
