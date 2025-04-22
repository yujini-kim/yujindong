import ListCard from "./ListCard";
import { Card } from "./styled";

interface IMyListProps {
  data: {
    items: {
      createAt: string;
      friend_name: string;
      recommendation: string;
      score: number;
      summary: string;
      text: string;
    }[];
    pageSize?: number;
    totalPages?: number;
  };
  onClick: (idx: number) => void;
}

function MyList({ data, onClick }: IMyListProps) {
  return (
    <>
      {data?.items.map((item, idx) => {
        return (
          <Card onClick={() => onClick(idx)} key={idx}>
            <ListCard
              friend_name={item.friend_name ?? "일단빼"}
              idx={idx}
              recommendation={item.recommendation}
              score={item.score}
            />
          </Card>
        );
      })}
    </>
  );
}

export default MyList;
