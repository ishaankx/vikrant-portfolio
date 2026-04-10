"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Counter from "./Counter";

const stats = [
  { value: 2, suffix: "+ Years", label: "Expertise", borderColor: "#8C7051" },
  { value: 500, suffix: "+", label: "Monthly Leads", borderColor: "#C9A96E" },
  { value: 100, suffix: "%+", label: "Organic Growth", borderColor: "#C9A96E" },
  { value: 3, prefix: "Top ", suffix: "", label: "Keyword Rankings", borderColor: "#8C7051" },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = imageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.04;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
          <ScrollReveal direction="left" distance={60}>
            <div ref={imageRef} className="perspective-container">
              <div style={{ aspectRatio: "1", borderRadius: "16px", position: "relative", overflow: "hidden", border: "1px solid rgba(140,112,81,0.1)", maxWidth: "500px", margin: "0 auto", background: "#EDE8E0" }}>
                <Image src="/images/vikrant-profile.png" alt="Vikrant Sharma" fill sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: "cover", objectPosition: "center 20%", filter: "grayscale(100%)", transition: "filter 0.7s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")} onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #FAF7F2, transparent, transparent)" }} />
                <div className="float-label label-seo" style={{ position: "absolute", top: "40px", right: "40px", padding: "8px 16px", background: "rgba(140,112,81,0.1)", backdropFilter: "blur(12px)", borderRadius: "9999px", border: "1px solid rgba(140,112,81,0.2)", color: "#8C7051", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Plus Jakarta Sans', sans-serif", animation: "float 4s ease-in-out infinite" }}>
                  SEO Strategy
                </div>
                <div className="float-label label-lead" style={{ position: "absolute", bottom: "80px", left: "40px", padding: "8px 16px", background: "rgba(140,112,81,0.1)", backdropFilter: "blur(12px)", borderRadius: "9999px", border: "1px solid rgba(140,112,81,0.2)", color: "#8C7051", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Plus Jakarta Sans', sans-serif", animation: "float-delayed 5s ease-in-out infinite" }}>
                  Lead Gen
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" distance={60}>
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
                Precision Meets <span style={{ color: "#8C7051", fontStyle: "italic" }}>Performance.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={40} delay={200}>
              <p style={{ marginTop: "24px", fontSize: "15px", lineHeight: 1.8, color: "#6B5E54", fontWeight: 400, maxWidth: "600px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                I am a results-driven Digital Marketing professional with over 2 years of experience specializing in scaling ROI through calculated Search Engine Optimization and strategic PPC campaigns. My focus is on transforming digital assets into high-performance revenue generators.
              </p>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "40px" }}>
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} direction="up" delay={300 + i * 100}>
                  <div style={{ padding: "20px 24px", borderRadius: "12px", background: "#F4F0EA", borderBottom: `3px solid ${stat.borderColor}`, transition: "transform 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                    <span style={{ display: "block", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#2C2520", fontFamily: "'Noto Serif', serif" }}>
                      <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </span>
                    <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#8C7051", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; } }
        @media (max-width: 767px) {
          .label-seo { top: auto !important; right: 24px !important; bottom: 140px !important; }
          .label-lead { bottom: 80px !important; left: 24px !important; }
        }
      `}</style>
    </section>
  );
}
