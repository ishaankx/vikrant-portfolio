"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number; pulseSpeed: number;
    }[] = [];

    const particleCount = Math.min(120, Math.floor(width / 12));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulseScale = 0.7 + 0.3 * Math.sin(p.pulse);
        const currentOpacity = p.opacity * pulseScale;
        const currentSize = p.size * (0.85 + 0.15 * Math.sin(p.pulse));

        // Outer glow
        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 4);
        gradient.addColorStop(0, `rgba(180, 150, 100, ${currentOpacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(180, 150, 100, ${currentOpacity * 0.08})`);
        gradient.addColorStop(1, `rgba(180, 150, 100, 0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, currentSize * 4, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(160, 130, 90, ${currentOpacity})`;
        ctx!.fill();

        // Connection lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const lineOpacity = 0.15 * (1 - dist / 160);
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(160, 130, 90, ${lineOpacity})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", handleResize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
