"use client";

import Image from "next/image";
import Image01 from "@/public/stadiums/stadium-07.jpg";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
export const SectionTransition = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh] bg-black">
      <Section01 scrollYProgress={scrollYProgress} />
      <Section02 scrollYProgress={scrollYProgress} />
    </div>
  );
};

export const Section01 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-5deg"]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="h-screen text-[3.5vw] sticky top-0 font-bold bg-red-600 flex flex-col justify-center items-center"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[10vw]">
          <Image src={Image01} alt="image" fill placeholder="blur" />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

export const Section02 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "0deg"]);
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image src={Image01} alt="image" fill placeholder="blur" />
    </motion.div>
  );
};
