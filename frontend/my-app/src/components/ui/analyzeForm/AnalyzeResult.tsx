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
  shareUrl: string;
}

export default function AnalyzeResult({
  score,
  recommendation,
  isPending,
  shareUrl,
}: AnalyzeResultProps) {
  if (isPending) return <Loading />;
  if (score !== null)
    return (
      <Result
        shareUrl={shareUrl}
        recommendation={recommendation}
        score={score}
      />
    );
  return <PreResult />;
}
