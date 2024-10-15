"use client";

import Image from "next/image";
import Svg from "@/public/svgs/23.svg";

import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import useWindowSIze from "@/hooks/useWindowSIze";

export const Marquee = ({ direction }: { direction: "left" | "right" }) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const FAST_DURATION = 50;
  const SLOW_DURATION = 100;
  const [duration, setDuration] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const { width: w } = useWindowSIze();
  let arrayLength = 25;
  if (w > 1200) {
    arrayLength = 50;
  } else if (w > 800) {
    arrayLength = 35;
  }

  useEffect(() => {
    let controls;
    const finalPostion = (direction == "left" ? -width : width) / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPostion], {
        duration,
        ease: "linear",
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPostion], {
        duration,
        ease: "linear",
        repeat: Infinity,
      });
    }
  }, [width, xTranslation, duration, rerender]);
  return (
    <div className="relative flex overflow-hidden h-16">
      <motion.div
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(SLOW_DURATION);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST_DURATION);
          setMustFinish(true);
        }}
        className={` ${direction == "left" ? "left-0" : "right-0"} h-full items-center bg-black flex absolute gap-4`}
      >
        {Array.from({ length: arrayLength * 2 }).map((_, i) => (
          <Text />
        ))}
      </motion.div>
    </div>
  );
};

const Text = () => {
  return (
    <div className="flex gap-4 items-center ">
      <span className="font-anton text-white uppercase text-2xl whitespace-nowrap">
        Super Nova
      </span>
      <div className="h-6 w-6 relative">
        <Image src={Svg} alt="svg" fill className="object-cover " />
      </div>
    </div>
  );
};
