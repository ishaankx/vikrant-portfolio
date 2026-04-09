"use client";

import ScrollReveal from "./ScrollReveal";

const metrics = [
  { label: "Monthly Ad Spend", value: "₹50,000+", color: "#8C7051" },
  { label: "CTR Boost", value: "Significant % Increase", color: "#C9A96E" },
  { label: "Rankings Jump", value: "50+ to Top 3", color: "#8C7051" },
];

export default function Experience() {
  return (
    <section className="section-padding" id="work">
      <div className="section-container" style={{ maxWidth: "960px" }}>
        <ScrollReveal direction="up">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, marginBottom: "64px", fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
            Where I&apos;ve Made <span style={{ color: "#8C7051", fontStyle: "italic" }}>Impact</span>
          </h2>
        </ScrollReveal>

        <div style={{ position: "relative", borderLeft: "2px solid #D5CCBF", marginLeft: "16px", paddingLeft: "48px" }}>
          <ScrollReveal direction="left" distance={40}>
            <div style={{ position: "relative" }}>
              <div className="kinetic-gradient" style={{ position: "absolute", left: "-62px", top: 0, width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", outline: "8px solid #FAF7F2" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" style={{ width: "14px", height: "14px" }}><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 400, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>Digital Marketing Executive</h3>
                  <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", color: "#8C7051", fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: "4px", fontWeight: 500 }}>KR Network Cloud Technologies Pvt. Ltd.</p>
                </div>
                <span style={{ padding: "6px 16px", background: "#EDE8E0", borderRadius: "6px", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(140,112,81,0.1)", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5E54", whiteSpace: "nowrap" }}>Jan 2024 — Present</span>
              </div>

              <p style={{ color: "#6B5E54", lineHeight: 1.8, fontStyle: "italic", marginTop: "16px", fontSize: "15px", fontFamily: "'Noto Serif', serif", fontWeight: 300 }}>
                Spearheaded end-to-end digital growth strategies focusing on organic discovery and paid acquisition for enterprise tech services.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginTop: "24px" }}>
                {metrics.map((metric, i) => (
                  <ScrollReveal key={metric.label} direction="up" delay={i * 100 + 200}>
                    <div
                      style={{ background: "#F4F0EA", padding: "20px", borderRadius: "10px", borderLeft: `4px solid ${metric.color}`, transition: "transform 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#6B5E54", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>{metric.label}</span>
                      <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 400, marginTop: "6px", fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>{metric.value}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
