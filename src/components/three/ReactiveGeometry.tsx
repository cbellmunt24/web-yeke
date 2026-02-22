"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/lib/shaders";

interface Props {
  mouseX: number;
  mouseY: number;
  scrollProgress: number;
}

export function ReactiveGeometry({ mouseX, mouseY, scrollProgress }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const smoothMouse = useRef({ x: 0, y: 0 });
  const smoothScroll = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouseX: { value: 0 },
      uMouseY: { value: 0 },
      uIntensity: { value: 0.6 },
      uBaseColor: { value: new THREE.Color("#06060f") },
      uAccentColor: { value: new THREE.Color("#2563eb") },
      uFresnelPower: { value: 1.5 },
      uOpacity: { value: 0.45 },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current || !meshRef.current) return;
    const t = state.clock.elapsedTime;

    smoothMouse.current.x += (mouseX - smoothMouse.current.x) * 0.02;
    smoothMouse.current.y += (mouseY - smoothMouse.current.y) * 0.02;
    smoothScroll.current += (scrollProgress - smoothScroll.current) * 0.03;

    materialRef.current.uniforms.uTime.value = t * 0.8;
    materialRef.current.uniforms.uMouseX.value = smoothMouse.current.x;
    materialRef.current.uniforms.uMouseY.value = smoothMouse.current.y;

    meshRef.current.rotation.y = t * 0.03 + smoothMouse.current.x * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.02) * 0.1;

    const s = 1.0 - smoothScroll.current * 0.3;
    meshRef.current.scale.setScalar(Math.max(s, 0.4));
    meshRef.current.position.y = -smoothScroll.current * 1.5;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.2, 4]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
