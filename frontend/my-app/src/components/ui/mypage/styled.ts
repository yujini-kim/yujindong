import styled from "styled-components";

export const Number = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;
export const Text = styled.h2`
  font-size: 13px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  max-width: 294px;
  width: 294px;
`;
export const ListCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const DetailCard = styled.div`
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

export const SummaryText = styled.span`
  text-align: center;
  font-size: 14px;
`;
export const ScrollBox = styled.div`
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
export const CloseBtn = styled.button`
  width: 30%;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 15px;
  padding: 3px;
  margin-top: 10px;
  font-size: 14px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
`;
