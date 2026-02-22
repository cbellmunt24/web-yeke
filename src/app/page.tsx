import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NarrativeSection />
      <MarketplaceSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
