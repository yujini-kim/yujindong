"use client";

import Image from "next/image";
import { motion } from "framer-motion";
function MainIcon() {
  return (
    <motion.div
      animate={{
        rotate: [0, -10, 10, -10, 10, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="relative w-40 h-40 md:w-48 md:h-48"
    >
      <Image
        src="/helloberger.svg"
        alt="헬로버거"
        fill
        className="object-contain"
      />
    </motion.div>
  );
}

export default MainIcon;
