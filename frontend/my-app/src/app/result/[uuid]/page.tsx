"use client";

import { AnalyzeResponse } from "@/hooks/analyzeText";
import { ShareURL } from "@/hooks/ShareURL";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

interface IShareResult {
  score: number;
  recommendation: string;
  summary: string;
  friendName: string;
  createdAt: string;
}

export default function ShareResultPage() {
  const params = useParams();
  const uuid = params?.uuid as string;
  const { data } = useQuery<AnalyzeResponse>({
    queryKey: ["shareData", uuid],
    queryFn: () => ShareURL(uuid as string),
    enabled: !!uuid,
  });

  console.log(data);

  return <div>공유된 uuid는: {uuid}</div>;
}
