"use client";
import { motion } from "framer-motion";

export const InfiniteHorizontalMarquee = () => {
  return (
    <div className="bg-black">
      <div className="h-screen bg-slate-500 overflow-hidden flex flex-col justify-end">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-white flex uppercase  text-9xl font-bold"
          >
            <p className="mx-8">Supernova</p>
            <p className="mx-8">Supernova</p>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-white flex uppercase  text-9xl font-bold"
          >
            <p className="mx-8">Supernova</p>
            <p className="mx-8">Supernova</p>
          </motion.div>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};
