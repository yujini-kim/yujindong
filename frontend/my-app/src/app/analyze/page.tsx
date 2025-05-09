"use client";

import AnalyzeForm from "@/components/analyze/analyzeForm";
import Loading from "@/components/result/Loading";
import { useAnalyzeMutation } from "@/hooks/AnalyzeMutation";
import { useAnalyzeStore } from "@/store/AnalyzeStore";
import { useRouter } from "next/navigation";

export default function Analyze() {
  const analyzeMutation = useAnalyzeMutation();
  const router = useRouter();
  const { text, friend_name } = useAnalyzeStore();
  const onSubmit = () => {
    analyzeMutation.mutate(
      { text, friend_name },
      {
        onSuccess: (result) => {
          router.replace(`/result/${result.shareUuid}`);
        },
        onError: (err: any) => {
          alert("분석에 실패했습니다: " + err.message);
        },
      }
    );
  };

  return (
    <>
      <div className="mt-20 flex justify-center items-center">
        {analyzeMutation.isPending ? <Loading /> : null}
        {!analyzeMutation.isPending && <AnalyzeForm onSubmit={onSubmit} />}
      </div>
    </>
  );
}
