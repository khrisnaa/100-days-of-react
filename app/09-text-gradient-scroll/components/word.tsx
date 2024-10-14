"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Word = ({ value }: { value: string }) => {
  const words = value.split(" ");

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start start"],
  });

  return (
    <div
      ref={container}
      className="bg-black h-screen flex flex-col justify-center items-center"
    >
      <motion.p className="text-white px-64 text-3xl">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Text word={word} progress={scrollYProgress} range={[start, end]} />
          );
        })}
      </motion.p>
    </div>
  );
};

const Text = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <motion.span className="mr-2 absolute opacity-20 left-0 top-0">
        {word}
      </motion.span>
      <motion.span style={{ opacity }} className="mr-2">
        {word}
      </motion.span>
    </span>
  );
};
