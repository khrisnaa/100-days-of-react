"use client";

import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

export const Card = ({
  title,
  description,
  src,
  link,
  index,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0  "
    >
      <motion.div
        style={{
          background: color,
          top: `calc(-10% + ${index * 25}px )`,
          scale,
        }}
        className="w-[1000px] h-[500px] relative rounded-xl"
      >
        <div className=" h-full w-full flex flex-col ">
          <h3 className="text-center font-bold p-8 text-4xl">{title}</h3>
          <div className="flex flex-1 p-4 gap-4">
            <div className="w-[40%] flex justify-center items-center ">
              <p className=""> {description}</p>
            </div>
            <div className="flex-1 relative w-full h-full  rounded-xl overflow-hidden">
              <motion.div
                style={{ scale: imageScale, opacity: scrollYProgress }}
                className="w-full h-full "
              >
                <Image src={src} alt="image" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
