"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    // Pre-render glow sprite once — expensive gradient created ONE TIME
    const spriteSize = 32;
    const sprite = document.createElement("canvas");
    sprite.width = spriteSize;
    sprite.height = spriteSize;
    const sctx = sprite.getContext("2d")!;
    const gradient = sctx.createRadialGradient(spriteSize / 2, spriteSize / 2, 0, spriteSize / 2, spriteSize / 2, spriteSize / 2);
    gradient.addColorStop(0, "rgba(180, 150, 100, 0.55)");
    gradient.addColorStop(0.3, "rgba(180, 150, 100, 0.25)");
    gradient.addColorStop(0.7, "rgba(180, 150, 100, 0.05)");
    gradient.addColorStop(1, "rgba(180, 150, 100, 0)");
    sctx.fillStyle = gradient;
    sctx.fillRect(0, 0, spriteSize, spriteSize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number; pulseSpeed: number; }[] = [];
    const isMobile = width < 768;
    const particleCount = isMobile ? 45 : Math.min(90, Math.floor(width / 18));
    const maxDist = isMobile ? 120 : 150;
    const maxDistSq = maxDist * maxDist;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.35,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.015,
      });
    }

    let animationId: number;
    let lastTime = 0;
    const targetFPS = 45;
    const frameInterval = 1000 / targetFPS;

    function draw(currentTime: number) {
      animationId = requestAnimationFrame(draw);
      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      ctx!.clearRect(0, 0, width, height);

      // Draw connection lines first (behind dots)
      ctx!.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const lineOpacity = 0.18 * (1 - Math.sqrt(distSq) / maxDist);
            ctx!.strokeStyle = `rgba(160, 130, 90, ${lineOpacity})`;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }
      }

      // Draw particles (glow sprite + core dot)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        const pulseScale = 0.8 + 0.2 * Math.sin(p.pulse);
        const glowSize = p.size * 10 * pulseScale;

        ctx!.globalAlpha = p.opacity * pulseScale;
        ctx!.drawImage(sprite, p.x - glowSize / 2, p.y - glowSize / 2, glowSize, glowSize);

        ctx!.globalAlpha = 1;
        ctx!.fillStyle = `rgba(140, 110, 75, ${p.opacity * pulseScale})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * pulseScale, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    animationId = requestAnimationFrame(draw);

    const handleResize = () => setSize();
    window.addEventListener("resize", handleResize);

    // Pause animation when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationId);
      else animationId = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    />
  );
}