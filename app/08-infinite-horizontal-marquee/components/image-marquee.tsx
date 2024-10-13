"use client";

import { animate, useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
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

export const ImageMarquee = () => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPostion = -width / 2 - 8;

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
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="py-8 relative overflow-hidden bg-black flex flex-col justify-center h-screen">
      <motion.div
        style={{ x: xTranslation }}
        className="absolute flex left-0 gap-4"
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((image, i) => (
          <Card image={image} />
        ))}
      </motion.div>
    </div>
  );
};

const Card = ({ image }: { image: string }) => {
  return (
    <div className="rounded-xl relative overflow-hidden h-[400px] min-w-[400px]">
      <Image src={image} alt="image" fill className="object-cover" />
    </div>
  );
};
