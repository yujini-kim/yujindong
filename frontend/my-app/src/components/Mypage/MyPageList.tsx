import ResultHeader from "@/components/result/ResultHeader";

interface Props {
  data: any;
  onItemClick: (item: any, idx: number) => void;
}

export default function MyPageList({ data, onItemClick }: Props) {
  return (
    <>
      {data?.items?.map((item: any, idx: number) => (
        <div
          key={idx}
          onClick={() => onItemClick(item, idx)}
          className="w-[340px] lg:w-[500px] bg-[#E3DBCE] border-2 border-[#242020] p-4 cursor-pointer"
        >
          <ResultHeader
            friend_name={item.friend_name}
            recommendation={item.recommendation}
            score={item.score}
          />
        </div>
      ))}
    </>
  );
}
