import styled from "styled-components";
import { motion } from "framer-motion";

const CircleWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;
const AnimatedBorder = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#fac656 var(--angle), #e5e7eb 0deg);
`;

const InnerCircle = styled.div`
  width: 104px;
  height: 104px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

const ResultVariants = ({ percentage = 0 }: Iprops) => ({
  initial: { "--angle": "0deg" },
  animate: {
    "--angle": `${percentage * 3.6}deg`,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

interface Iprops {
  percentage: number;
}
interface ResultCircleProps {
  score: number;
}
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
