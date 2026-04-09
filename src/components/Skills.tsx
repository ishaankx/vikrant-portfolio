"use client";

import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { icon: "M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z", title: "Paid Marketing", description: "Full-funnel Google Ads & Meta campaigns optimized for CPA and high-intent conversion.", color: "#8C7051" },
  { icon: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l4.59-4.59L16 11l-6 6z", title: "Technical SEO", description: "Advanced on-page, off-page, and technical audits to dominate SERP positions.", color: "#C9A96E" },
  { icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z", title: "Analytics", description: "Data-driven insights using GA4, Search Console, and proprietary tracking tools.", color: "#8C7051" },
  { icon: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z", title: "Growth Tools", description: "SEM Rush, Ahrefs, Canva, and automation scripts for maximum efficiency.", color: "#C9A96E" },
];

export default function Skills() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -8;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (i: number) => {
    const card = cardRefs.current[i];
    if (card) card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="section-padding" style={{ background: "#F4F0EA" }} id="skills">
      <div className="section-container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", color: "#8C7051", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Stack</span>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, marginTop: "16px", fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
              Weapons of <span style={{ color: "#8C7051", fontStyle: "italic" }}>Choice</span>
            </h2>
          </div>
        </ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} direction="up" delay={i * 150}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                style={{ padding: "32px", borderRadius: "12px", background: "rgba(250,247,242,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(140,112,81,0.08)", display: "flex", flexDirection: "column", gap: "20px", cursor: "default", transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s", willChange: "transform" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(140,112,81,0.2)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(140,112,81,0.06)"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={skill.color} style={{ width: "36px", height: "36px" }}><path d={skill.icon} /></svg>
                <h3 style={{ fontSize: "18px", fontWeight: 400, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>{skill.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B5E54", fontWeight: 400, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{skill.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
