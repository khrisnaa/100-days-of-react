"use client";

import { Card } from "@/app/04-card-parallax/components/card";
import { projects } from "../data/index";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export const CardParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <div ref={container} className="mt-[50vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              index={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div className="h-screen" />
    </>
  );
};
