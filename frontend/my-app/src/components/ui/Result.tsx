import styled from "styled-components";
import {
  AnimatedBorder,
  CircleWrapper,
  InnerCircle,
  Iprops,
} from "./ProgressCircle";
import { Box, Text, Wrapper } from "./Loading";

const Score = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const ResultVariants = ({ percentage }: Iprops) => ({
  initial: { "--angle": "0deg" },
  animate: {
    "--angle": ` ${percentage * 3.6}deg`,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

interface IAnalyzeProps {
  score: number;
  recommendation: string;
}

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
