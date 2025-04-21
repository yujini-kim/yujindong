import Loading from "@/components/ui/Result/Loading";
import PreResult from "@/components/ui/Result/PreResult";
import dynamic from "next/dynamic";

const Result = dynamic(() => import("@/components/ui/Result/Result"), {
  ssr: false,
});

interface AnalyzeResultProps {
  score: number | null;
  recommendation: string;
  isPending: boolean;
}

export default function AnalyzeResult({
  score,
  recommendation,
  isPending,
}: AnalyzeResultProps) {
  if (isPending) return <Loading />;
  if (score !== null)
    return <Result recommendation={recommendation} score={score} />;
  return <PreResult />;
}
