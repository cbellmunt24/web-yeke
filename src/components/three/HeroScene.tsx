"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ReactiveGeometry } from "./ReactiveGeometry";
import { Particles } from "./Particles";

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
  scrollProgress: number;
}

export function HeroScene({ mouseX, mouseY, scrollProgress }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.2]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.03} />
        <pointLight position={[8, 6, 6]} intensity={0.25} color="#2563eb" />
        <pointLight position={[-6, -4, -4]} intensity={0.15} color="#1e3a8a" />
        <ReactiveGeometry
          mouseX={mouseX}
          mouseY={mouseY}
          scrollProgress={scrollProgress}
        />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
