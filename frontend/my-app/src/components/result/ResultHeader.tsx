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
    <div className="flex items-center justify-center gap-6 lg:gap-20">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center gap-4">
          <div className="w-22 text-sm bg-[#242020] text-white text-center p-2 lg:w-24 lg:text-base">
            상대방
          </div>
          <div className="w-16 text-sm text-center p-2 border-b-2 lg:w-24 lg:text-base">
            {friend_name}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-22 text-sm bg-[#242020] text-white text-center p-2 lg:w-24 lg:text-base">
            추천축의금
          </div>
          <div className="w-16 text-sm text-center p-2 border-b-2 lg:w-24 lg:text-base">
            {recommendation}
          </div>
        </div>
      </div>
      <ResultCircle score={score} />
    </div>
  );
}
