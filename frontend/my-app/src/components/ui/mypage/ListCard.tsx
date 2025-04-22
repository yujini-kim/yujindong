import ResultCircle from "../Result/ResultCircle";
import { TextBox, Text, ListCardBox, Number } from "./styled";
interface IListProps {
  idx: number;
  recommendation: string;
  score: number;
  friend_name: string;
}

function ListCard({ idx, recommendation, score, friend_name }: IListProps) {
  return (
    <ListCardBox>
      <TextBox>
        <Number>0{idx}</Number>
        <Text>
          상대방 : {friend_name}
          <br />
          추천축의금: {recommendation}
        </Text>
      </TextBox>
      <ResultCircle score={score} />
    </ListCardBox>
  );
}

export default ListCard;
