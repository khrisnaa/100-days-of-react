"use client";

import useDimension from "@/hooks/useDimension";
import { cn } from "@/libs/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const HorizontalGallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { width } = useDimension();

  const x = useTransform(scrollYProgress, [0, 1], [0, width * 1]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -(width * 0.8)]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, width * 1.8]);
  return (
    <div>
      <div className="h-screen" />
      <div ref={container} className="h-[200vh] bg-gray-950 relative ">
        <div className="h-screen  sticky top-0 flex flex-col gap-[2vh] overflow-hidden">
          <Column
            x={x}
            className="right-[80%]"
            images={[
              "/images/image (1).jpeg",
              "/images/image (2).jpeg",
              "/images/image (3).jpeg",
              "/images/image (4).jpeg",
              "/images/image (9).jpeg",
              "/images/image (10).jpeg",
              "/images/image (11).jpeg",
              "/images/image (12).jpeg",
              "/images/image (5).jpeg",
              "/images/image (6).jpeg",
              "/images/image (7).jpeg",
            ]}
          />
          <Column
            x={x2}
            className=""
            images={[
              "/images/image (5).jpeg",
              "/images/image (6).jpeg",
              "/images/image (7).jpeg",
              "/images/image (8).jpeg",
              "/images/image (1).jpeg",
              "/images/image (2).jpeg",
              "/images/image (3).jpeg",
              "/images/image (4).jpeg",
            ]}
          />
          <Column
            x={x3}
            className="right-[180%]"
            images={[
              "/images/image (9).jpeg",
              "/images/image (10).jpeg",
              "/images/image (11).jpeg",
              "/images/image (12).jpeg",
              "/images/image (1).jpeg",
              "/images/image (2).jpeg",
              "/images/image (3).jpeg",
              "/images/image (4).jpeg",
              "/images/image (5).jpeg",
              "/images/image (6).jpeg",
              "/images/image (7).jpeg",
            ]}
          />
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};

const Column = ({
  x,
  images,
  className,
}: {
  x: MotionValue<number>;
  images: string[];
  className?: string;
}) => {
  return (
    <motion.div
      style={{ x }}
      className={cn(
        " h-1/3 w-full flex flex-row gap-[2vh] relative ",
        className
      )}
    >
      {images.map((image, i) => (
        <div className="w-full h-full relative min-w-[300px]" key={i}>
          <Image src={image} fill alt="image" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
