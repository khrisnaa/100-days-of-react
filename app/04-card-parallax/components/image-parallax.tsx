"use client";

import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/image (4).jpeg",
  "/images/image (5).jpeg",
  "/images/image (6).jpeg",
  "/images/image (12).jpeg",
];

export const ImageParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} className="mt-[50vh]">
      {images.map((image, i) => {
        const targetScale = 1 - (images.length - i) * 0.05;
        return (
          <Card
            src={image}
            key={image}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export const Card = ({
  src,
  i,
  progress,
  range,
  targetScale,
}: {
  src: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className=" h-screen justify-center items-center flex sticky top-0"
    >
      <motion.div
        style={{ top: `calc(-5% + ${i * 25}px )`, scale }}
        className="h-[80%] w-[25%]  min-w-[250px] relative  overflow-hidden rounded-3xl bg-orange-500"
      >
        <motion.div className="w-full h-full ">
          <Image src={src} alt="image" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};
