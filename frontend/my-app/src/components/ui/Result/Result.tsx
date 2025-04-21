import {
  AnimatedBorder,
  Box,
  CircleWrapper,
  InnerCircle,
  ResultVariants,
  Score,
  Text,
  Wrapper,
} from "./Styled";
import { IAnalyzeProps } from "./type";

function Result({ score, recommendation }: IAnalyzeProps) {
  return (
    <Wrapper>
      <Box>
        <Text>친밀도 점수</Text>
        <CircleWrapper>
          <AnimatedBorder
            variants={ResultVariants({ percentage: score })}
            initial="initial"
            animate="animate"
          />
          <InnerCircle>{score}점</InnerCircle>
        </CircleWrapper>
      </Box>
      <Box>
        <Text>축의금 추천</Text>
        <Score>{recommendation}</Score>
      </Box>
    </Wrapper>
  );
}

export default Result;
