import styled from "styled-components";
import ListCard from "./ListCard";
import {
  CloseBtn,
  DetailCard,
  Overlay,
  ScrollBox,
  SummaryText,
} from "./styled";

interface IDetailProps {
  recommendation: string;
  score: number;
  summary: string;
  text: string;
  idx: number;
  onClose: () => void;
}

function DetailView({
  recommendation,
  score,
  summary,
  text,
  idx,
  onClose,
}: IDetailProps) {
  return (
    <Overlay onClick={onClose}>
      <DetailCard onClick={(e) => e.stopPropagation()}>
        <ListCard
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
