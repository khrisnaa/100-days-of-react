"use client";
import image from "@/public/images/image (14).jpeg";
import Image from "next/image";
import { useRef } from "react";
const images = [
  "/images/image (4).jpeg",
  "/images/image (5).jpeg",
  "/images/image (6).jpeg",
  "/images/image (12).jpeg",
];

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { style } from "framer-motion/client";

export const ScrollProgress = () => {
  return (
    <div className="bg-black space-y-5">
      <Content />
      <Content />
      <Content />
    </div>
  );
};

const Content = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const imageTransalation = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );
  const textTransalation = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  return (
    <div
      ref={container}
      className="text-white flex h-screen p-4 sm:px-16 gap-4 sm:gap-8 justify-between items-center overflow-hidden"
    >
      <motion.div style={{ x: textTransalation }} className="w-1/2">
        <Word progress={scrollYProgress} />
      </motion.div>
      <motion.div
        style={{ x: imageTransalation }}
        className="aspect-square w-1/2 relative"
      >
        <Image src={image} alt="image" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

const Word = ({ progress }: { progress: MotionValue<number> }) => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis a perspiciatis corporis at magnam, aliquam distinctio`;

  const words = text.split(" ");
  return (
    <p className="text-xl flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          // <motion.span style={{ opacity }} className="mr-2">
          //   {word}
          // </motion.span>
          <Text range={[start, end]} word={word} progress={progress} />
        );
      })}
    </p>
  );
};

const Text = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const letters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span className="inline-block">
      <span className="mr-2">
        {letters.map((letter, i) => {
          const start = range[0] + step * i;
          const end = range[0] + step * (i + 1);

          const opacity = useTransform(progress, [start, end], [0, 1]);

          return (
            <span className="relative">
              <motion.span className="absolute opacity-20">
                {letter}
              </motion.span>
              <motion.span style={{ opacity }}>{letter}</motion.span>
            </span>
          );
        })}
      </span>
    </span>
  );
};
