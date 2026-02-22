"use client";

const footerLinks = {
  product: [
    { label: "Plugins", href: "#plugins" },
    { label: "Presets", href: "#" },
    { label: "Bundles", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] px-6">
      <div className="max-w-7xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16 md:mb-20">
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-sm tracking-[0.3em] font-medium mb-4">
              YEKE PLUG
            </p>
            <p className="text-[11px] text-[#444] leading-relaxed font-body max-w-[220px]">
              Premium VST plugins for the next generation of music producers.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[10px] tracking-[0.25em] text-[#555] mb-5 font-body uppercase">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] text-[#444] hover:text-white transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.04] gap-4">
          <p className="text-[10px] text-[#333] tracking-[0.1em] font-body">
            &copy; 2026 YEKE PLUG. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-[#222] tracking-[0.1em] font-body">
            DESIGNED FOR THE FUTURE
          </p>
        </div>
      </div>
    </footer>
  );
}
