"use client";

import AnalyzeForm from "@/components/analyze/analyzeForm";
import Loading from "@/components/result/Loading";
import { useAnalyzeMutation } from "@/hooks/useAnalyzeMutation";
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
      <div className="mt-4 flex justify-center items-center relative min-h-[500px] lg:mt-10">
        {analyzeMutation.isPending && (
          <div className="absolute">
            <Loading />
          </div>
        )}

        <div
          className={`${analyzeMutation.isPending ? "invisible" : "visible"}`}
        >
          <AnalyzeForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
}
