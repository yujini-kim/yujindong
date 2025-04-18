import styled from "styled-components";
import { motion } from "framer-motion";
import { Box, Text, Wrapper } from "./Styled";
import ProgressCircle from "./ProgressCircle";

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
