import { useRouter } from "next/navigation";
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
import { BASE_URL } from "@/hooks/analyzeText";

interface IResultProps {
  score: number;
  recommendation: string;
  shareUrl: string;
}

function Result({ score, recommendation, shareUrl }: IResultProps) {
  const router = useRouter();
  return (
    <>
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
      <button onClick={() => router.push(`${BASE_URL}/result/${shareUrl}`)}>
        공유하기
      </button>
    </>
  );
}

export default Result;
