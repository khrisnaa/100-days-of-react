"use client";

import { motion } from "framer-motion";

export const AnimatingElements = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center">
      <motion.h2
        initial={{ fontSize: "2rem" }}
        animate={{ fontSize: "4rem" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.2 }}
        className="font-anton uppercase cursor-pointer text-center"
      >
        Hello World
      </motion.h2>
    </div>
  );
};
