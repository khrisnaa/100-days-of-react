"use client";

import useDimension from "@/hooks/useDimension";
import { cn } from "@/libs/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

export const VerticalText = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const { width } = useDimension();
  const y = useTransform(scrollYProgress, [0, 1], [0, width * 2.4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -(width * 2.2)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, width * 1.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -(width * 2.8)]);
  return (
    <div>
      <div ref={container} className="flex  h-[150vh] overflow-hidden relative">
        <div className="absolute w-full h-[20rem] top-0 bg-orange-600" />
        <Text y={y} top="-120rem" />
        <Text y={y2} top="-20rem" />
        <Text y={y3} top="-160rem" />
        <Text y={y4} top="-60rem" />
        <Text y={y3} top="-200rem" />
        <Text y={y2} top="-100rem" />
      </div>
      <div className="h-screen bg-black" />
    </div>
  );
};

const Text = ({ y, top }: { y: MotionValue<number>; top: string }) => {
  const text = "eivern";
  return (
    <motion.div
      style={{ y, top }}
      className={cn("w-1/4 flex flex-col   relative")}
    >
      {text.split("").map((l, i) => (
        <p className="text-[20rem] leading-none text-center font-anton uppercase">
          {l}
        </p>
      ))}
      {text.split("").map((l, i) => (
        <p className="text-[20rem] leading-none text-center font-anton uppercase">
          {l}
        </p>
      ))}
      {text.split("").map((l, i) => (
        <p className="text-[20rem] leading-none text-center font-anton uppercase">
          {l}
        </p>
      ))}
    </motion.div>
  );
};
