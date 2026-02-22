export interface Plugin {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  gradient: string;
  features: string[];
  version: string;
}

export const plugins: Plugin[] = [
  {
    id: "yeke-synth",
    name: "YEKE SYNTH",
    tagline: "Next-Gen Synthesis",
    description:
      "A flagship wavetable synthesizer designed for producers who push sonic boundaries. Infinite textures, zero compromise.",
    price: 149,
    category: "SYNTHESIZER",
    gradient: "from-violet-600/20 via-purple-900/10 to-transparent",
    features: ["Wavetable Engine", "Analog Modeling", "MPE Support", "500+ Presets"],
    version: "2.0",
  },
  {
    id: "yeke-drums",
    name: "YEKE DRUMS",
    tagline: "Engineered Impact",
    description:
      "Precision-crafted drum machine with acoustic modeling and pattern sequencing. Every hit tells a story.",
    price: 99,
    category: "DRUMS",
    gradient: "from-rose-600/20 via-red-900/10 to-transparent",
    features: ["Acoustic Modeling", "Pattern Sequencer", "800+ Samples", "Round Robin"],
    version: "1.5",
  },
  {
    id: "yeke-vox",
    name: "YEKE VOX",
    tagline: "Voice Redefined",
    description:
      "Advanced vocal processor with AI-powered harmonization, formant shifting, and real-time manipulation.",
    price: 79,
    category: "VOCAL",
    gradient: "from-amber-600/20 via-orange-900/10 to-transparent",
    features: ["AI Harmonizer", "Formant Control", "Pitch Correction", "Real-time FX"],
    version: "1.2",
  },
  {
    id: "yeke-fx",
    name: "YEKE FX",
    tagline: "Sound Alchemy",
    description:
      "A modular effects suite that transforms any signal into something extraordinary. Chain. Morph. Create.",
    price: 129,
    category: "EFFECTS",
    gradient: "from-cyan-600/20 via-teal-900/10 to-transparent",
    features: ["Modular Chain", "Granular FX", "Spectral Processing", "30+ Effects"],
    version: "3.0",
  },
  {
    id: "yeke-bass",
    name: "YEKE BASS",
    tagline: "Subterranean Power",
    description:
      "Dedicated bass synthesizer with sub-harmonic generation, distortion modeling, and surgical low-end control.",
    price: 89,
    category: "BASS",
    gradient: "from-emerald-600/20 via-green-900/10 to-transparent",
    features: ["Sub-Harmonic Gen", "Distortion Models", "Sidechain Built-in", "Low-End EQ"],
    version: "1.8",
  },
  {
    id: "yeke-space",
    name: "YEKE SPACE",
    tagline: "Infinite Dimension",
    description:
      "Reverb and delay engine that creates spatial environments from intimate rooms to cosmic voids.",
    price: 69,
    category: "SPATIAL",
    gradient: "from-blue-600/20 via-indigo-900/10 to-transparent",
    features: ["Convolution Reverb", "Algorithmic Modes", "Tempo-Sync Delay", "Shimmer Engine"],
    version: "2.1",
  },
];
