"use client";

import { cn } from "@/libs/utils";
import Picture01 from "@/public/stadiums/stadium-01.jpg";
import Picture02 from "@/public/stadiums/stadium-02.jpg";
import Picture03 from "@/public/stadiums/stadium-03.jpg";
import Picture04 from "@/public/stadiums/stadium-04.jpg";
import Picture05 from "@/public/stadiums/stadium-05.jpg";
import Picture06 from "@/public/stadiums/stadium-06.jpg";
import Picture07 from "@/public/stadiums/stadium-07.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ZoomParallaxSticky = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end 200%"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const pictures = [
    {
      src: Picture01,
      scale: scale4,
    },
    {
      src: Picture02,
      scale: scale6,
    },
    {
      src: Picture03,
      scale: scale6,
    },
    {
      src: Picture04,
      scale: scale5,
    },
    {
      src: Picture05,
      scale: scale6,
    },
    {
      src: Picture06,
      scale: scale8,
    },
    {
      src: Picture07,
      scale: scale8,
    },
  ];

  return (
    <div className="bg-rose-900">
      <div className=" h-[50vh]" />
      <div ref={container} className="h-[300vh] relative ">
        <div className="sticky h-screen top-0 overflow-hidden">
          {pictures.map(({ src, scale }, i) => {
            return (
              <motion.div
                className="h-full w-full absolute flex items-center justify-center "
                style={{ scale }}
              >
                <div
                  className={cn(
                    "relative h-[25vh] w-[25vw] ",
                    i == 1 && "-top-[30vh] left-[5vw] w-[35vw] h-[30vh]",
                    i == 2 && "-top-[10vh] -left-[25vw] w-[20vw] h-[45vh]",
                    i == 3 && "left-[27.5vw] w-[25vw] h-[25vh]",
                    i == 4 && "top-[27.5vh] left-[8vw] w-[25vw] h-[25vh]",
                    i == 5 && "top-[27.5vh] -left-[22.5vw] w-[30vw] h-[25vh]",
                    i == 6 && "-top-[25vh] left-[35vw] w-[20vw] h-[20vh]"
                  )}
                >
                  <Image
                    src={src}
                    fill
                    alt="image"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ opacity }}
          >
            <h1 className="text-8xl text-white font-extrabold">WELCOME</h1>
          </motion.div>
        </div>
      </div>
      <div className="h-[100vh] " />
    </div>
  );
};
