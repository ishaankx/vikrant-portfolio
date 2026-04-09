"use client";

import { useEffect, useRef } from "react";
import ParticleField from "./ParticleField";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heading = headingRef.current;
      if (!heading) return;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / window.innerHeight, 1);
      heading.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 - progress * 0.1})`;
      heading.style.opacity = `${1 - progress * 1.2}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "120px", paddingBottom: "80px", overflow: "hidden", background: "#FAF7F2" }}>
      <ParticleField />

      {/* Soft background glows */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "20%", left: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(140, 112, 81, 0.04)", filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(201, 169, 110, 0.03)", filter: "blur(120px)" }} />
      </div>

      <div ref={headingRef} style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 24px" }}>
        <ScrollReveal delay={200} direction="down" distance={20}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "9999px", background: "#EDE8E0", border: "1px solid rgba(140,112,81,0.15)", marginBottom: "48px" }}>
            <span style={{ position: "relative", width: "10px", height: "10px", display: "inline-flex" }}>
              <span style={{ position: "absolute", inset: "-2px", borderRadius: "50%", background: "#4CAF50", opacity: 0.4, animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
              <span style={{ position: "relative", display: "inline-flex", width: "10px", height: "10px", borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 6px rgba(76,175,80,0.4)" }} />
            </span>
            <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "#6B5E54", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Available for Opportunities
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" distance={40}>
          <h1 className="text-glow" style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.03em", color: "#2C2520", fontFamily: "'Noto Serif', serif" }}>
            Vikrant
            <br />
            <span style={{ color: "#8C7051", fontStyle: "italic", fontWeight: 300 }}>Sharma</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={600} direction="up" distance={30}>
          <p style={{ marginTop: "32px", fontSize: "clamp(1rem, 2.5vw, 1.35rem)", fontWeight: 300, color: "#6B5E54", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6 }}>
            Digital Marketing Executive <span style={{ margin: "0 8px", color: "#C9A96E" }}>·</span> Paid & Organic Growth
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800} direction="up" distance={20}>
          <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <a href="#work" className="kinetic-gradient" style={{
              color: "#fff", padding: "16px 40px", borderRadius: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "13px", fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 16px 40px rgba(140,112,81,0.2)", transition: "transform 0.3s, box-shadow 0.3s", display: "inline-block",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(140,112,81,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(140,112,81,0.2)"; }}>
              View My Work
            </a>
            <a href="#contact" style={{ border: "1px solid #C4B8AC", padding: "16px 40px", borderRadius: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "13px", color: "#2C2520", fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "border-color 0.3s", display: "inline-block" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#8C7051")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C4B8AC")}>
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div style={{ position: "absolute", bottom: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", zIndex: 10 }}>
        <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#C4B8AC", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Scroll to explore</span>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #8C7051, transparent)" }} />
      </div>
    </section>
  );
}
