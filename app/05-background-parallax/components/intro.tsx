"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Intro = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden bg-red-600">
      <motion.div style={{ y }} className="relative h-full ">
        <Image
          src="/stadiums/stadium-05.jpg"
          alt="image"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};
