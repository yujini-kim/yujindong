import ResultCircle from "./ResultCircle";

interface IResultHeaderProps {
  friend_name: string;
  recommendation: string;
  score: number;
}

export default function ResultHeader({
  friend_name,
  recommendation,
  score,
}: IResultHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-20">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="w-24 bg-[#242020] text-white text-center p-2">
            상대방
          </div>
          <div className="w-24 text-center p-2 border-b-2">{friend_name}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 bg-[#242020] text-white text-center p-2">
            추천축의금
          </div>
          <div className="w-24 text-center p-2 border-b-2">
            {recommendation}
          </div>
        </div>
      </div>
      <ResultCircle score={score} />
    </div>
  );
}
