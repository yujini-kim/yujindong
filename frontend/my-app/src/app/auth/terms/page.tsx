"use client";

import { ChevronDown, Minus, XIcon } from "@/components/icons/TopIcon";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
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
  height: 480px;
  max-height: 480px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  padding: 50px 20px;
`;

const Button = styled.button`
    width:50%;
    background-color:${props=>props.theme.circleColor};
    padding:10px;
    border-radius:10px;
    margin:10px 0px;
`
function Terms() {
  return (
    <Wrapper>
      <Background>
        <Top>
          <ChevronDown />
          <Minus />
          <XIcon />
        </Top>
        <Content>
          <h1 className="text-3xl font-bold mb-6">서비스 이용약관</h1>
          <p className="mb-4">
            본 약관은 사용자가 본 서비스를 이용함에 있어 회사와 사용자 간의
            권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <h2 className="text-xl font-semibold mt-6">1. 목적</h2>
          <p className="mb-4">
            이 약관은 회사(이하 "회사")가 제공하는 서비스의 이용과 관련하여
            회사와 이용자 간의 권리, 의무 및 책임사항을 규정합니다.
          </p>
          <h2 className="text-xl font-semibold mt-6">2. 회원의 의무</h2>
          <p className="mb-4">
            회원은 다음 행위를 하여서는 안 됩니다: 타인의 정보 도용, 서비스 방해
            행위 등
          </p>
          <h2 className="text-xl font-semibold mt-6">3. 서비스 이용</h2>
          <p className="mb-4">
            회사는 이용자에게 안정적인 서비스를 제공하기 위해 노력합니다. 단,
            부득이한 경우 서비스의 일부를 제한하거나 중단할 수 있습니다.
          </p>
          <label>
            <input type="checkbox" required />
            동의합니다
          </label>
          <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
          <p className="mb-4">
            회사는 사용자의 개인정보를 중요시하며, 『개인정보 보호법』을
            준수합니다.
          </p>
          <h2 className="text-xl font-semibold mt-6">
            1. 수집하는 개인정보 항목
          </h2>
          <p className="mb-4">이름, 이메일, 서비스 이용기록 등</p>
          <h2 className="text-xl font-semibold mt-6">
            2. 개인정보의 수집 및 이용 목적
          </h2>
          <p className="mb-4">회원 관리, 서비스 제공 및 개선, 고지사항 전달</p>
          <h2 className="text-xl font-semibold mt-6">3. 보유 및 이용기간</h2>
          <p className="mb-4">
            이용 목적 달성 시까지 또는 법령에 따른 보관 기간까지
          </p>
          <label>
            <input type="checkbox" required />
            동의합니다
          </label>
          <p className="text-sm text-gray-500 mt-10">
            시행일자: 2025년 5월 4일
          </p>
        </Content>
        <Button>
        <Link href="/auth/signup">다음</Link>
        </Button>
        
      </Background>
    </Wrapper>
  );
}

export default Terms;
