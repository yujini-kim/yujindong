"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const Button = styled(motion.button)``;

export default function StartButton() {
  return (
    <div className="w-full flex justify-center items-center mt-2 lg:mt-12">
      <Button
        whileHover={{ scale: 1.1 }}
        className="w-40 bg-[#FAC656] p-2 border-1"
      >
        <Link href={"/analyze"}>시작하기</Link>
      </Button>
    </div>
  );
}
