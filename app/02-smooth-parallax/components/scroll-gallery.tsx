"use client";

import useDimension from "@/hooks/useDimension";
import { cn } from "@/libs/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ScrollGallery = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { height } = useDimension();

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div>
      <div className="h-screen" />
      <div className="h-[175vh] w-full bg-gray-950 flex flex-row gap-[2vw] p-[2vw] box-border overflow-hidden">
        <Column
          y={y}
          images={[
            "/images/image (1).jpeg",
            "/images/image (2).jpeg",
            "/images/image (3).jpeg",
          ]}
          className="-top-[30%]"
        />
        <Column
          y={y2}
          images={[
            "/images/image (4).jpeg",
            "/images/image (5).jpeg",
            "/images/image (6).jpeg",
          ]}
          className="-top-[55%]"
        />
        <Column
          y={y3}
          images={[
            "/images/image (7).jpeg",
            "/images/image (8).jpeg",
            "/images/image (9).jpeg",
          ]}
          className="-top-[20%]"
        />
        <Column
          y={y4}
          images={[
            "/images/image (10).jpeg",
            "/images/image (11).jpeg",
            "/images/image (12).jpeg",
          ]}
          className="-top-[45%]"
        />
      </div>
      <div className="h-screen" />
    </div>
  );
};

const Column = ({
  images,
  y,
  className,
}: {
  images: string[];
  y?: MotionValue<number>;
  className?: string;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        "w-1/4 h-full gap-[2vw] flex flex-col min-w-[250px]   relative",
        className
      )}
    >
      {images.map((image) => (
        <div className="relative overflow-hidden rounded-[1vw] h-full w-full">
          <Image src={image} fill alt="image" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
