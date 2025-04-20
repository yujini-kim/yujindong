import styled from "styled-components";
import ListCard from "./ListCard";
import { Text } from "./styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  max-width: 294px;
  width: 294px;
  gap: 10px;
  position: absolute;
  top: 150px;
  background-color: ${(props) => props.theme.bgColor};
`;

const SummaryText = styled.span`
  text-align: center;
  font-size: 14px;
`;
const ScrollBox = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 30%;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  padding: 3px;
  margin-top: 10px;
  font-size: 14px;
`;

interface IDetailViewProps {
  onClick: () => void;
}

function DetailView({ onClick }: IDetailViewProps) {
  return (
    <Card>
      <ListCard key={"01"} number={"01"} recommendation={50000} score={24} />
      <SummaryText>
        3줄
        <br />
        요약
        <br />
        ㅋㅋ
      </SummaryText>
      <ScrollBox>
        [주머니도둑] [오후 8:54] 안녕 [주머니도둑] [오후 8:54] 나 다음달에
        결혼해 ~^^ [뿡뿡이🥰] [오후 8:55] 정말 ?! 축하해! [주머니도둑] [오후
        8:55] 그래서 말인데 [주머니도둑] [오후 8:55] 내 결혼식에 와줬으면 좋겠어
        [주머니도둑] [오후 8:55] 주머니 두둑하게 [뿡뿡이🥰] [오후 8:55] 허거걱 …
      </ScrollBox>
      <Button onClick={onClick}> 닫기 </Button>
    </Card>
  );
}

export default DetailView;
