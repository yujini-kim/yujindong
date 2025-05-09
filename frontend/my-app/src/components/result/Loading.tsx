"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < 5 ? prev + 1 : 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen">
      <div className="flex gap-4">
        {[...Array(visibleCount)].map((_, idx) => (
          <motion.img
            key={idx}
            src="/logo.png"
            className="size-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        ))}
      </div>
      <p className="text-xl">Loading...</p>
    </div>
  );
}
