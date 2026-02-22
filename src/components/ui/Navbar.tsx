"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "PLUGINS", href: "#plugins" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > 300 && latest > previous);
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-heading text-sm md:text-base tracking-[0.3em] font-medium text-white"
          >
            YEKE PLUG
          </a>

          <div className="hidden" />
          <div className="hidden" />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-3.5 h-px bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-white block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={
              mobileOpen
                ? { opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05 } }
                : { opacity: 0, y: 20 }
            }
            className="font-heading text-2xl tracking-[0.2em] text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
