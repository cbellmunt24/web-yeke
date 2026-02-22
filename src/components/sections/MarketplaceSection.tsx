"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { plugins } from "@/data/plugins";
import { PluginCard } from "@/components/ui/PluginCard";

export function MarketplaceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="plugins" className="relative py-32 md:py-40 px-6">
      {/* Background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080809] to-transparent pointer-events-none"
      />

      {/* Header */}
      <div ref={titleRef} className="max-w-7xl mx-auto mb-16 md:mb-24 relative">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] tracking-[0.5em] text-[#444] mb-6 font-body"
          >
            MARKETPLACE
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={titleInView ? { y: 0 } : {}}
              transition={{
                duration: 1.1,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.92]"
            >
              PLUGINS
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[11px] text-[#444] max-w-xs leading-relaxed font-body md:pb-3"
          >
            Six instruments. Infinite possibilities.
            <br />
            Each one designed to push boundaries.
          </motion.p>
        </div>

        {/* Header divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={titleInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-white/[0.04] mt-10 md:mt-14 origin-left"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative">
        {plugins.map((plugin, index) => (
          <PluginCard key={plugin.id} plugin={plugin} index={index} />
        ))}
      </div>
    </section>
  );
}
