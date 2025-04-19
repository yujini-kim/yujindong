import styled from "styled-components";
import { motion } from "framer-motion";
import { Box, Text, Wrapper } from "./Styled";
import dynamic from "next/dynamic";

const ProgressCircle = dynamic(() => import("./ProgressCircle"), {
  ssr: false,
});

const Emoji = styled(motion.div)`
  font-size: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <Emoji variants={emojiVariants} animate="animate">
          🤔
        </Emoji>
      </Box>
    </Wrapper>
  );
}

export default Loading;
