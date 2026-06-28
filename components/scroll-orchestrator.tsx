"use client";

import { animate, inView, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function ScrollOrchestrator() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const sections = document.querySelectorAll<HTMLElement>("main > section");
    sections.forEach((section, index) => {
      if (index > 0) section.style.opacity = "0";
    });
    return inView("main > section", element => {
      animate(element, { opacity: 1, y: [18, 0] }, { duration: .7, ease: [0.22, 1, 0.36, 1] });
    }, { amount: .08, margin: "0px 0px -8% 0px" });
  }, [reduceMotion]);

  return null;
}
