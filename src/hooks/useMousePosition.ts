"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const rafRef = useRef<number | null>(null);
  const latest = useRef({ x: 0, y: 0 });

  const update = useCallback(() => {
    const { x, y } = latest.current;
    setMousePosition({
      x,
      y,
      normalizedX: (x / window.innerWidth) * 2 - 1,
      normalizedY: -(y / window.innerHeight) * 2 + 1,
    });
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      latest.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return mousePosition;
}
