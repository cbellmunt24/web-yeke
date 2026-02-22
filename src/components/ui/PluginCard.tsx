"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Plugin } from "@/data/plugins";

interface PluginCardProps {
  plugin: Plugin;
  index: number;
}

export function PluginCard({ plugin, index }: PluginCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/[0.04] p-6 md:p-8 transition-all duration-700 hover:border-[#8b5cf6]/20">
        {/* Mouse spotlight */}
        {isHovered && (
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(139, 92, 246, 0.06), transparent 60%)`,
            }}
          />
        )}

        {/* Plugin visualization */}
        <div
          className={`relative h-40 md:h-48 mb-8 overflow-hidden bg-gradient-to-br ${plugin.gradient}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={
                isHovered
                  ? { scale: 1.1, rotate: 90 }
                  : { scale: 1, rotate: 0 }
              }
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-16 h-16 border border-white/[0.06] rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 border border-white/[0.08] rounded-full" />
            </motion.div>
          </div>
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[#050505]/20" />
        </div>

        {/* Category + Version */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] tracking-[0.25em] text-[#555] font-body">
            {plugin.category}
          </span>
          <span className="text-[9px] tracking-[0.15em] text-[#333] font-body">
            v{plugin.version}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-heading text-lg md:text-xl font-semibold tracking-[-0.01em] mb-2 text-[#ddd] group-hover:text-white transition-colors duration-500">
          {plugin.name}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-[#555] mb-3 font-body">{plugin.tagline}</p>

        {/* Description */}
        <p className="text-[11px] leading-relaxed text-[#444] mb-6 font-body">
          {plugin.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-8">
          {plugin.features.map((feature) => (
            <span
              key={feature}
              className="text-[9px] tracking-[0.1em] text-[#444] border border-white/[0.04] px-2.5 py-1 font-body"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price + Action */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.04]">
          <div>
            <span className="font-heading text-xl font-semibold">
              ${plugin.price}
            </span>
            <span className="text-[10px] text-[#444] ml-1 font-body">.00</span>
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            className="text-[10px] tracking-[0.2em] text-[#555] hover:text-white transition-colors duration-300 flex items-center gap-2 font-body cursor-pointer"
          >
            DETAILS
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-50"
            >
              <path
                d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="0.75"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
