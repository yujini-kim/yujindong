import ResultCircle from "../Result/ResultCircle";
import { TextBox, Text, ListCardBox } from "./styled";

interface IListProps {
  number: string;
  recommendation: number;
  score: number;
}

function ListCard({ number, recommendation, score }: IListProps) {
  return (
    <ListCardBox>
      <TextBox>
        <Number>{number}</Number>
        <Text>
          상대방 : 일단빼빼
          <br />
          추천축의금: {recommendation}원
        </Text>
      </TextBox>
      <ResultCircle score={score} />
    </ListCardBox>
  );
}

export default ListCard;
