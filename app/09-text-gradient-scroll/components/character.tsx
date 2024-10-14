"use client";

import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Character = ({ value }: { value: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start start"],
  });

  const words = value.split(" ");

  return (
    <div
      ref={container}
      className="h-screen bg-black flex flex-col justify-center items-center"
    >
      <p className="text-white px-64 text-3xl">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative inline-block">
      <span className="mr-2">
        {characters.map((letter, i) => {
          const start = range[0] + step * i;
          const end = range[0] + step * (i + 1);
          return (
            <Letter progress={progress} key={i} range={[start, end]}>
              {letter}
            </Letter>
          );
        })}
      </span>
    </span>
  );
};

const Letter = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-20 left-0 top-0 ">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
