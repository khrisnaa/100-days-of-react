"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Section = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <p className=" text-white font-bold text-6xl absolute z-50 uppercase">
        Lorem, ipsum dolor sit amet
      </p>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y, scale }} className="relative w-full h-full">
          <Image
            src="/stadiums/stadium-07.jpg"
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
