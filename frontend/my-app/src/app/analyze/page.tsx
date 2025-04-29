"use client";

import { AnalyzeResponse, useAnalyzeMutation } from "@/hooks/analyzeText";
import { useState } from "react";
import styled from "styled-components";
import { useSummaryStore } from "@/store/splitStore";
import { useQuery } from "@tanstack/react-query";
import { ShareURL } from "@/hooks/ShareURL";
import { ChevronDown, Minus, XIcon } from "@/components/icons/TopIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/analyze/Loading";

const Wrapper = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 28px;
`;

const Background = styled.div`
  position: relative;
  max-width: 360px;
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  border: 3px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  box-shadow: 5px 5px ${(props) => props.theme.shadowColor};
  overflow: hidden;
`;

const Top = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;
  height: 8%;
  background-color: ${(props) => props.theme.accentColor};
  font-weight: 700;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  padding: 0px 20px;
`;
const Text = styled.textarea`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const File = styled.label.attrs({
  htmlFor: "file",
})`
  width: 141px;
  background-color: ${(props) => props.theme.circleColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px;
  text-align: center;
  input {
    display: none;
  }
`;
const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const Button = styled.button.attrs({
  type: "submit",
})`
  width: 141px;
  background-color: ${(props) => props.theme.accentColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  padding: 8px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;
const Input = styled.input`
  height: 30px;
  padding: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
`;

export default function Analyze() {
  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState<boolean>(true); //false일때message 쓰기기
  const [message, setMessage] = useState<string | null>("");
  const [recommendation, setRecommendation] = useState<string>("");
  const [shareUrl, setShareUrl] = useState<string>("");
  const { setSummary, realsummary } = useSummaryStore();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      setText(content);
    };
    reader.readAsText(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const mutation = useAnalyzeMutation((data) => {
    setScore(data.score);
    setRecommendation(data.recommendation);
    setSuccess(data.success);
    setMessage(data.message);
    setSummary(data.summary);
    setShareUrl(data.shareUuid);
    router.push(`/result/${data.shareUuid}`);
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    mutation.mutate({ text, friend_name: name });
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Background>
          <Top>
            <ChevronDown />
            <Minus />
            <XIcon />
          </Top>
          <Form onSubmit={onSubmit}>
            <Input
              placeholder="친구이름 입력해주세요"
              value={name}
              onChange={handleName}
            />
            <Text
              rows={5}
              placeholder="텍스트를 입력해주세요"
              value={text}
              onChange={onChange}
            />
            <BtnBox>
              <File>
                파일 업로드하기
                <input
                  type="file"
                  id="file"
                  accept=".txt"
                  onChange={handleFileChange}
                />
              </File>
              <Button disabled={mutation.isPending}>
                {mutation.isPending ? "분석 중..." : "분석하기"}
              </Button>
            </BtnBox>
          </Form>
        </Background>
      )}
    </Wrapper>
  );
}
