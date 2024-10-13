"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

const images = [
  "/images/image (1).jpeg",
  "/images/image (2).jpeg",
  "/images/image (3).jpeg",
  "/images/image (4).jpeg",
  "/images/image (5).jpeg",
  "/images/image (6).jpeg",
  "/images/image (7).jpeg",
  "/images/image (8).jpeg",
];

export const ImageMarqueeScroll = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPostion = -width / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPostion], {
        duration: duration * (1 - xTranslation.get() / finalPostion),
        ease: "linear",
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPostion], {
        ease: "linear",
        duration,
        repeat: Infinity,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div>
      <div className="h-screen" />
      <div className="bg-black h-screen relative overflow-hidden flex flex-col justify-center">
        <motion.div
          ref={ref}
          style={{ x: xTranslation }}
          className="flex absolute left-0 gap-4"
          onHoverStart={() => {
            setDuration(SLOW_DURATION);
            setMustFinish(true);
          }}
          onHoverEnd={() => {
            setDuration(FAST_DURATION);
            setMustFinish(true);
          }}
        >
          {[...images, ...images].map((image, i) => (
            <Card image={image} key={i} />
          ))}
        </motion.div>
      </div>
      <div className="h-screen" />
    </div>
  );
};

const Card = ({ image }: { image: string }) => {
  return (
    <div className="rounded-xl relative overflow-hidden h-[200px] min-w-[200px]">
      <Image src={image} alt="image" fill className="object-cover" />
    </div>
  );
};
