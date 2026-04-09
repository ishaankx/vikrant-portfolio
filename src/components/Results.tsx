"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedBar({ width, glowColor }: { width: string; glowColor: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) setVisible(true); }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={barRef} style={{ height: "10px", width: "100%", background: "#EDE8E0", borderRadius: "9999px", overflow: "hidden" }}>
      <div className="kinetic-gradient" style={{ height: "100%", borderRadius: "9999px", transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)", width: visible ? width : "0%", boxShadow: `0 0 16px ${glowColor}` }} />
    </div>
  );
}

export default function Results() {
  return (
    <section className="section-padding" style={{ background: "#F4F0EA", overflow: "hidden" }} id="results">
      <div className="section-container">
        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "end" }}>
          <div>
            <ScrollReveal direction="left" distance={60}>
              <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 0.95, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
                The Numbers<br />Don&apos;t <span style={{ color: "#8C7051", fontStyle: "italic" }}>Lie.</span>
              </h2>
            </ScrollReveal>

            <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "40px" }}>
              {[
                { label: "Organic Traffic Growth", value: "+120%", valueColor: "#8C7051", width: "85%" },
                { label: "Keyword Penetration", value: "TOP 3", valueColor: "#C9A96E", width: "95%" },
                { label: "Lead Conversion Rate", value: "+85%", valueColor: "#8C7051", width: "78%" },
              ].map((kpi, i) => (
                <ScrollReveal key={kpi.label} direction="up" delay={200 + i * 150}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "12px" }}>
                      <span style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2C2520" }}>{kpi.label}</span>
                      <span style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 700, color: kpi.valueColor, fontFamily: "'Noto Serif', serif" }}>{kpi.value}</span>
                    </div>
                    <AnimatedBar width={kpi.width} glowColor={kpi.valueColor} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="right" distance={60}>
            <div style={{ padding: "32px", borderRadius: "16px", background: "rgba(250,247,242,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(140,112,81,0.1)", position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { text: "1.5M+ Impressions", opacity: 0.9 },
                  { text: "400K+ Clicks", opacity: 0.75, mx: "16px" },
                  { text: "500+ Qualified Leads", opacity: 0.6, mx: "32px" },
                ].map((item) => (
                  <div key={item.text} className="kinetic-gradient" style={{ height: item.text.includes("1.5M") ? "72px" : item.text.includes("400K") ? "60px" : "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "clamp(0.75rem, 1.4vw, 1rem)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: item.opacity, margin: `0 ${item.mx || "0"}` }}>
                    {item.text}
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", top: "-20px", right: "-12px", background: "#FAF7F2", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(140,112,81,0.15)", boxShadow: "0 20px 40px rgba(140,112,81,0.08)" }}>
                <span style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#8C7051", marginBottom: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>Conversion Edge</span>
                <span style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)", fontWeight: 700, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>ROI Maximized</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .results-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}
