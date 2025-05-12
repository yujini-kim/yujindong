"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 400vh;
  position: relative;
`;

const Section = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  gap: 16px;
  z-index: 1;
`;

export default function MainInfo() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const opacity1 = useTransform(scrollY, [0, windowHeight * 1], [1, 0]);
  const opacity2 = useTransform(
    scrollY,
    [windowHeight * 1, windowHeight * 2],
    [1, 0]
  );
  const opacity3 = useTransform(
    scrollY,
    [windowHeight * 2, windowHeight * 3],
    [1, 0]
  );
  const opacity4 = useTransform(
    scrollY,
    [windowHeight * 3, windowHeight * 4],
    [1, 0]
  );

  return (
    <Wrapper ref={containerRef}>
      <Section style={{ opacity: opacity1 }}>
        <span className="flex text-center mb-10">
          "이 친구랑 나 ... 얼마나 친하지?" <br />
          고민 그만! 대화 업로드 한 방이면 <br />
          AI가 축의금 계산해드려요 <br />
          센스있는 축의금, 여기서 딱!
        </span>
        <img className="w-100" src="/mainImage.svg" alt="메인 이미지" />
      </Section>

      <Section style={{ opacity: opacity2 }}>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl">AI의 대화분석</h1>
          <span className="flex text-center">
            직접 텍스트를 입력하거나 <br />
            txt파일을 업로드 해보세요 <br />
            AI가 당신의 대화를 분석합니다.
          </span>
        </div>
        <img src="/main_1.png" alt="분석 이미지" />
      </Section>

      <Section style={{ opacity: opacity3 }}>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl">파일업로드</h1>
          <span className="flex text-center">
            분석하고 싶은 대화내용이 있는 채팅방에서 <br />
            오른쪽 상단 버튼을 누르고 <br />
            대화내용 내보내기를 누르면 <br />
            txt 파일을 받을 수 있습니다.
          </span>
        </div>
        <img src="/main_2.png" alt="업로드 이미지" />
      </Section>

      <Section>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-2xl">분석기록 저장</h1>
          <span className="flex text-center">
            로그인을 하면 마이페이지에서 <br />
            그동안의 분석기록을 볼 수 있어요
          </span>
        </div>
        <img src="/main_3.png" alt="마이페이지 이미지" />
      </Section>
    </Wrapper>
  );
}
