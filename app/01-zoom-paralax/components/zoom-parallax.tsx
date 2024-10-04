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

export const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

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
    <main className="bg-gray-950">
      <div className=" h-[50vh]" />
      <div ref={container} className="h-[300vh] relative ">
        <div className="sticky top-0 h-screen   overflow-hidden">
          {pictures.map(({ src, scale }, i) => {
            return (
              <motion.div
                className="w-full h-full absolute top-0 flex items-center justify-center"
                style={{ scale }}
              >
                <div
                  className={cn(
                    "h-[25vh] w-[25vw]   relative",
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
                    className="object-cover "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="  h-[100vh]" />
    </main>
  );
};
