import styled from "styled-components";
import { Iprops } from "./type";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  width: 294px;
  justify-content: space-between;
`;

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 2px 2px ${(props) => props.theme.shadowColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Text = styled.p`
  font-weight: 600;
  text-align: center;
`;
export const CircleWrapper = styled.div`
  width: 100px;
  height: 100px;
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
export const Score = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const ResultVariants = ({ percentage = 0 }: Iprops) => ({
  initial: { "--angle": "0deg" },
  animate: {
    "--angle": `${percentage * 3.6}deg`,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});
