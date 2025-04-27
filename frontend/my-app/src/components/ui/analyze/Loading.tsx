import { TopIcon } from "@/components/icons/TopIcon";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  overflow: hidden;
`;
const Background = styled.div`
  max-width: 294px;
  width: 294px;
  height: 140px;
  margin-top: 30px;
  background-color: ${(props) => props.theme.boxColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingBar = styled.div`
  width: 250px;
  height: 20px;
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  overflow: hidden;
`;

const AnimationBar = styled(motion.div)`
  width: 250px;
  height: 20px;
  background-color: ${(props) => props.theme.circleColor};
`;

const Text = styled.span`
  width: 100%;
  text-align: left;
  padding-left: 26px;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Background>
        <TopIcon />
        <Text>Loading...</Text>
        <LoadingBar>
          <AnimationBar
            initial={{ width: 0 }}
            animate={{ width: "99%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
        </LoadingBar>
      </Background>
    </Wrapper>
  );
}
