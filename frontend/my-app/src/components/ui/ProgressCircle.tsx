import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const CircleWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

export const AnimatedBorder = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#facc15 var(--angle), #e5e7eb 0deg);
`;

export const InnerCircle = styled.div`
  width: 82px;
  height: 82px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 9px;
  left: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

export interface Iprops {
  percentage: number;
}

export const ProgressVariants = ({ percentage }: Iprops) => ({
  initial: { "--angle": "0deg" },
  animate: {
    "--angle": ` ${percentage * 3.6}deg`,
    transition: {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

const ProgressCircle = ({ percentage }: Iprops) => {
  return (
    <CircleWrapper>
      <AnimatedBorder
        variants={ProgressVariants({ percentage }) as any}
        initial="initial"
        animate="animate"
      />
      <InnerCircle>??</InnerCircle>
    </CircleWrapper>
  );
};

export default ProgressCircle;
