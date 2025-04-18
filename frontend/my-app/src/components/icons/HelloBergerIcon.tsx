import Image from "next/image";
import { motion } from "framer-motion";
function HelloBergerIcon() {
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
    >
      <Image src="/helloberger.svg" alt="헬로버거" width={130} height={130} />
    </motion.div>
  );
}

export default HelloBergerIcon;
