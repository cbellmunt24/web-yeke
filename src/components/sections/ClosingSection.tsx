"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowScale = useTransform(scrollYProgress, [0.2, 0.7], [0.5, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-40 md:py-56 lg:py-64 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#8b5cf6]/[0.05] rounded-full blur-[100px] pointer-events-none"
      />

      <div ref={textRef} className="max-w-3xl mx-auto text-center relative">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] tracking-[0.5em] text-[#444] mb-8 md:mb-10 font-body"
        >
          JOIN THE MOVEMENT
        </motion.p>

        {/* THE FUTURE */}
        <div className="overflow-hidden mb-2 md:mb-4">
          <motion.h2
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-[-0.03em] leading-[0.92]"
          >
            THE FUTURE
          </motion.h2>
        </div>

        {/* IS YOURS */}
        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h2
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 1.1,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-heading text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-[-0.03em] leading-[0.92]"
          >
            IS YOURS
          </motion.h2>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-12 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent mx-auto mb-10 md:mb-12"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-[#444] max-w-md mx-auto mb-12 md:mb-14 leading-[1.8] font-body"
        >
          Be the first to access new releases, exclusive presets, and production
          insights from YEKE PLUG.
        </motion.p>

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="flex-1 bg-transparent border border-white/[0.06] px-5 py-3.5 text-[11px] tracking-[0.15em] text-white placeholder:text-[#333] focus:outline-none focus:border-[#8b5cf6]/30 transition-colors duration-500 font-body"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-white text-[#050505] text-[10px] tracking-[0.25em] font-medium hover:bg-[#8b5cf6] hover:text-white transition-all duration-500 font-body cursor-pointer"
          >
            SUBSCRIBE
          </button>
        </motion.form>
      </div>
    </section>
  );
}
