"use client";

import { useState } from "react";
import { motion, AnimatePresence as AnimatePresencex } from "framer-motion";

export const AnimatePresence = () => {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-16">
      <div
        className="bg-black cursor-pointer text-white px-6 py-4 rounded-md"
        onClick={handleShowText}
      >
        {showText ? "Hide" : "Show"}
      </div>
      <AnimatePresencex>
        {showText && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            //exit can be used only inside animate presence
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-anton uppercase cursor-pointer text-center text-8xl"
          >
            Variants
          </motion.h2>
        )}
      </AnimatePresencex>
    </div>
  );
};
