import React from "react";
import {
  AnimatedBorder,
  CircleWrapper,
  InnerCircle,
  ProgressVariants,
} from "./Styled";
import { Iprops } from "./type";

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
