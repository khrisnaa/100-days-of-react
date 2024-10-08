"use client";

import { Description } from "@/app/05-background-parallax/components/description";
import { Intro } from "@/app/05-background-parallax/components/intro";
import { Section } from "@/app/05-background-parallax/components/section";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BackgroundImageParallax = () => {
  return (
    <div>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen" />
    </div>
  );
};
