"use client";

import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); setHiding(true); setTimeout(onComplete, 600); return 100; }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-overlay" style={{ opacity: hiding ? 0 : 1, transform: hiding ? "scale(1.02)" : "scale(1)", transition: "all 0.6s ease" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#8C7051", marginBottom: "32px", fontFamily: "'Noto Serif', serif" }}>
          <span style={{ fontStyle: "italic" }}>V</span>S
        </div>
        <div style={{ width: "180px", height: "2px", background: "#E6E0D6", borderRadius: "9999px", overflow: "hidden", margin: "0 auto" }}>
          <div className="kinetic-gradient" style={{ height: "100%", borderRadius: "9999px", transition: "width 0.2s ease", width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div style={{ marginTop: "16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#8A7F74", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
          {Math.min(Math.round(progress), 100)}%
        </div>
      </div>
    </div>
  );
}
