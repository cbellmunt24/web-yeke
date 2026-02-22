"use client";

import { useScroll } from "framer-motion";
import { useRef, type RefObject } from "react";

export function useSectionScroll(offset?: ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"]): {
  ref: RefObject<HTMLDivElement | null>;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ?? ["start end", "end start"],
  });

  return { ref, scrollYProgress };
}
