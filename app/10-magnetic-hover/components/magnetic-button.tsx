"use client";

import { Fish, PawPrint, Rabbit, Bird } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export const MagneticButton = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <div className="flex gap-16">
        <IconButton>
          <Fish size={64} />
        </IconButton>
        <IconButton>
          <PawPrint size={64} />
        </IconButton>
        <IconButton>
          <Rabbit size={64} />
        </IconButton>
        <IconButton>
          <Bird size={64} />
        </IconButton>
      </div>
    </div>
  );
};

const IconButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();

      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="flex justify-center items-center   text-orange-100 cursor-pointer rounded-full p-4"
    >
      {children}
    </motion.div>
  );
};
