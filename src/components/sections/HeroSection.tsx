"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useMousePosition } from "@/hooks/useMousePosition";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { normalizedX, normalizedY } = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => setScrollValue(v));
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[130vh] overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0" style={{ filter: "blur(18px)" }}>
        {!isMobile ? (
          <HeroScene
            mouseX={normalizedX}
            mouseY={normalizedY}
            scrollProgress={scrollValue}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, #050505 65%)",
            }}
          />
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content overlay */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[10px] md:text-xs tracking-[0.5em] text-[#999] mb-8 md:mb-10 font-body"
        >
          PREMIUM VST PLUGINS
        </motion.p>

        {/* YEKE */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-heading text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.85] tracking-[-0.03em]"
          >
            YEKE
          </motion.h1>
        </div>

        {/* PLUG */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-heading text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.85] tracking-[-0.03em]"
          >
            PLUG
          </motion.h1>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent my-8 md:my-10"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="text-[9px] md:text-[11px] tracking-[0.6em] text-[#999] mb-12 md:mb-14 font-body"
        >
          THE FUTURE OF SOUND
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#plugins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          whileHover={{
            scale: 1.03,
            borderColor: "rgba(139, 92, 246, 0.35)",
          }}
          whileTap={{ scale: 0.98 }}
          className="text-[10px] md:text-[11px] tracking-[0.3em] px-8 md:px-10 py-3.5 md:py-4 border border-white/[0.08] text-[#777] hover:text-white transition-all duration-500 cursor-pointer font-body"
        >
          EXPLORE PLUGINS
        </motion.a>

      </motion.div>
    </section>
  );
}
