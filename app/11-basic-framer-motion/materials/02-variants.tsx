"use client";

import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
    fontSize: "3rem",
  },
  animate: {
    opacity: 1,
    x: "0%",
    fontSize: "4rem",

    //Ochestration transition
    //If want the transition works for this animate put the trasition below
    // transition: {
    //   duration: 1,
    //   ease: "easeInOut",
    //   type: "spring",
    //   stiffness: 100,
    // },
  },
  hover: {
    scale: [1, 1.2, 1],
  },
};

export const Variants = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center">
      <motion.h2
        variants={textVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{
          duration: 1,
          ease: "easeInOut",

          //   type: "spring",
          //   stiffness: 100,
          //   when: "beforeChildren",
          //   staggerChildren: 2,
        }}
        className="font-anton uppercase cursor-pointer text-center"
      >
        Variants
      </motion.h2>
    </div>
  );
};
