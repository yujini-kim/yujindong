import styled from "styled-components";

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

export const CircleWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const Score = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

interface IAnalyzeProps {
  score: number;
  recommendation: string;
}

function Result({ score, recommendation }: IAnalyzeProps) {
  return (
    <Wrapper>
      <Box>
        <Text>친밀도 점수</Text>
        <Score>{score}점</Score>
      </Box>
      <Box>
        <Text>축의금 추천</Text>
        <Score>{recommendation}</Score>
      </Box>
    </Wrapper>
  );
}

export default Result;
