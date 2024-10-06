"use client";

import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const progress = scrollYProgress;

  return (
    <div>
      <div className="h-screen" />
      <div ref={container} className="flex flex-col gap-4 overflow-hidden">
        <Text left="-10%" progress={progress} direction="right" />
        <Text left="-20%" progress={progress} direction="left" />
        <Text left="-20%" progress={progress} direction="right" />
      </div>
      <div className="h-screen" />
    </div>
  );
};

const Text = ({
  left,
  progress,
  direction,
}: {
  left: string;
  progress: MotionValue<number>;
  direction: string;
}) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div
      className="flex gap-8 w-full whitespace-nowrap relative"
      style={{ left, x }}
    >
      <p className="text-9xl font-anton uppercase">super nova</p>
      <p className="text-9xl font-anton uppercase">super nova</p>
      <p className="text-9xl font-anton uppercase">super nova</p>
      <p className="text-9xl font-anton uppercase">super nova</p>
    </motion.div>
  );
};
