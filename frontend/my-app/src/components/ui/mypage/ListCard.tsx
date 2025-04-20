import { IAnalysisItem } from "@/hooks/MypageData";
import ResultCircle from "../Result/ResultCircle";
import { TextBox, Text, ListCardBox, Number } from "./styled";
interface IListProps {
  idx: number;
  recommendation: string;
  score: number;
}

function ListCard({ idx, recommendation, score }: IListProps) {
  return (
    <ListCardBox>
      <TextBox>
        <Number>0{idx}</Number>
        <Text>
          상대방 : 일단빼빼
          <br />
          추천축의금: {recommendation}
        </Text>
      </TextBox>
      <ResultCircle score={score} />
    </ListCardBox>
  );
}

export default ListCard;
