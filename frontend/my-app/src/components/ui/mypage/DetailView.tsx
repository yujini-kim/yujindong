import styled from "styled-components";
import ListCard from "./ListCard";
import {
  CloseBtn,
  DetailCard,
  Overlay,
  ScrollBox,
  SummaryText,
} from "./styled";
import { ReactNode } from "react";

interface IDetailProps {
  recommendation: string;
  score: number;
  summary: ReactNode;
  text: string;
  idx: number;
  friend_name: string;
  onClose: () => void;
}

function DetailView({
  recommendation,
  score,
  summary,
  text,
  idx,
  friend_name,
  onClose,
}: IDetailProps) {
  return (
    <Overlay onClick={onClose}>
      <DetailCard onClick={(e) => e.stopPropagation()}>
        <ListCard
          friend_name={friend_name}
          key={idx}
          idx={idx}
          recommendation={recommendation}
          score={score}
        />
        <SummaryText>{summary}</SummaryText>
        <ScrollBox>{text}</ScrollBox>
        <CloseBtn onClick={onClose}> 닫기 </CloseBtn>
      </DetailCard>
    </Overlay>
  );
}

export default DetailView;
