import { useAnalyzeStore } from "@/store/AnalyzeStore";

export default function Button() {
  const { isPending } = useAnalyzeStore();
  return (
    <button
      type="submit"
      className="w-[30%] p-2 border-2 border-black text-white bg-[#242020] cursor-pointer text-xs lg:text-base"
    >
      {isPending ? "분석중" : "분석하기"}
    </button>
  );
}
