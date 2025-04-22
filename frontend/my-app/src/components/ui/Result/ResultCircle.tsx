import styled from "styled-components";
import { ResultCircleProps } from "../auth/type";
import { ResultVariants } from "./Styled";
import { motion } from "framer-motion";

export const CircleWrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;
export const AnimatedBorder = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    ${(props) => props.theme.circleColor} var(--angle),
    #e5e7eb 0deg
  );
`;

export const InnerCircle = styled.div`
  width: 68px;
  height: 68px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

function ResultCircle({ score }: ResultCircleProps) {
  return (
    <CircleWrapper>
      <AnimatedBorder
        variants={ResultVariants({ percentage: score })}
        initial="initial"
        animate="animate"
      />
      <InnerCircle>{score}점</InnerCircle>
    </CircleWrapper>
  );
}

export default ResultCircle;
