import styled from "styled-components";
import ListCard from "./ListCard";
import { Text } from "./styled";
import { IAnalysisItem } from "@/hooks/MypageData";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  max-width: 294px;
  width: 294px;
  gap: 10px;
  position: absolute;
  top: 150px;
  background-color: ${(props) => props.theme.bgColor};
`;

const SummaryText = styled.span`
  text-align: center;
  font-size: 14px;
`;
const ScrollBox = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 30%;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  padding: 3px;
  margin-top: 10px;
  font-size: 14px;
`;

interface IDetailProps {
  recommendation: string;
  score: number;
  summary: string;
  text: string;
  idx: number;
}

function DetailView({
  recommendation,
  score,
  summary,
  text,
  idx,
}: IDetailProps) {
  return (
    <Card>
      <ListCard
        key={idx}
        idx={idx}
        recommendation={recommendation}
        score={score}
      />
      <SummaryText>{summary}</SummaryText>
      <ScrollBox>{text}</ScrollBox>
      <Button> 닫기 </Button>
    </Card>
  );
}

export default DetailView;
