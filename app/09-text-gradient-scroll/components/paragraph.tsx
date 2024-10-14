"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const Paragraph = ({ value }: { value: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={container}
      className="h-screen bg-black flex flex-col justify-center items-center"
    >
      <motion.p style={{ opacity }} className="text-white px-64 text-3xl">
        {value}
      </motion.p>
    </div>
  );
};
