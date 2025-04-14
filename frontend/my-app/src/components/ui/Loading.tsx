import styled from "styled-components";
import ProgressCircle from "./ProgressCircle";
import { animate, motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  width: 294px;
  justify-content: space-between;
`;

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Text = styled.p`
  font-weight: 600;
  text-align: center;
`;

const emojiVariants = {
  animate: {
    rotate: [0, -20, 20, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

function Loading() {
  return (
    <Wrapper>
      <Box>
        <Text>친밀도 점수</Text>
        <ProgressCircle percentage={100} />
      </Box>
      <Box>
        <Text>축의금 추천</Text>
        <motion.div
          className="text-[50px] w-[100px] h-[100px] flex items-center justify-center"
          variants={emojiVariants}
          animate="animate"
        >
          🤔
        </motion.div>
      </Box>
    </Wrapper>
  );
}

export default Loading;
