"use client";

import FileExport from "@/components/ui/main/FileExportImg";
import MainImg from "@/components/ui/main/mainImg";
import ResultImg from "@/components/ui/main/ResultImg";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span<{ $textSize: string }>`
  text-align: center;
  font-size: ${(props) => props.$textSize};
`;

export default function Home() {
  return (
    <Wrapper>
      <Text $textSize={"48px"}>
        축의금
        <br /> 측정기
      </Text>
      <MainImg />
      <Text $textSize={"14px"}>
        “이 친구랑 나… 얼마나 친하지?” <br />
        고민 그만! 대화 업로드 한 방이면
        <br /> AI가 축의금 계산해드려요
        <br />
        센스 있는 축의금, 여기서 딱!
      </Text>

      <Text $textSize={"24px"}>AI의 대화분석</Text>
      <Text $textSize={"12px"}>
        직접 텍스트를 입력하거나
        <br /> txt 파일을 업로드해보세요.
        <br /> AI가 당신의 대화를 분석합니다.
      </Text>
      <ResultImg />
      <Text $textSize={"24px"}>파일업로드</Text>
      <Text $textSize={"12px"}>
        분석하고싶은 대화내용이 있는 채팅방에서서
        <br /> 오른쪽 상단 버튼을 누르고
        <br /> 대화내용 내보내기를 누르면
        <br />
        txt을 받을 수 있습니다
      </Text>
      <FileExport />
    </Wrapper>
  );
}
