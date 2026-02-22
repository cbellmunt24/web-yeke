"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const words = ["CRAFTED", "FOR", "PRODUCERS", "WHO", "SHAPE", "THE", "FUTURE"];

const stats = [
  { value: "10K+", label: "PRODUCERS" },
  { value: "50+", label: "PLUGINS" },
  { value: "192", label: "kHz QUALITY" },
];

function RevealWord({ word, index }: { word: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className="inline-block overflow-hidden mx-[0.12em]">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : { y: "110%" }}
        transition={{
          duration: 0.9,
          delay: index * 0.07,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function NarrativeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 md:py-56 lg:py-64 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#8b5cf6]/[0.025] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Statement */}
      <div className="max-w-5xl mx-auto text-center mb-28 md:mb-36">
        <h2 className="font-heading text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.08] tracking-[-0.02em]">
          {words.map((word, i) => (
            <RevealWord key={i} word={word} index={i} />
          ))}
        </h2>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto mb-24 md:mb-32">
        <motion.div
          style={{ scaleX: lineScale }}
          className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent origin-center"
        />
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              {stat.value}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[#444] font-body">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-2xl mx-auto text-center mt-32 md:mt-40"
      >
        <p className="text-sm md:text-base text-[#444] leading-[1.8] font-body">
          Every plugin in our ecosystem is engineered with obsessive precision.
          From the first oscillator cycle to the final master output &mdash;{" "}
          <span className="text-[#888]">
            we build tools that elevate your sound.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
