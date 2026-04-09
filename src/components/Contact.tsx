"use client";

import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { label: "Call Me", value: "+91 9773561037", href: "tel:+919773561037", color: "#8C7051" },
  { label: "Email Me", value: "connect.sharmavikrant@gmail.com", href: "mailto:connect.sharmavikrant@gmail.com", color: "#C9A96E", lowercase: true },
  { label: "Location", value: "Delhi, India", href: null, color: "#8C7051" },
  { label: "Web", value: "rankingassets.com", href: "https://www.rankingassets.com", color: "#C9A96E" },
];

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="section-container">
        <ScrollReveal direction="up" distance={40}>
          <div style={{ padding: "clamp(32px, 5vw, 80px)", borderRadius: "24px", background: "rgba(244,240,234,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(140,112,81,0.1)", boxShadow: "0 30px 60px rgba(140,112,81,0.04)", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "rgba(201,169,110,0.05)", borderRadius: "50%", filter: "blur(80px)", marginRight: "-80px", marginTop: "-80px", pointerEvents: "none" }} />

            <ScrollReveal direction="up" delay={200}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "48px", position: "relative", zIndex: 1, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
                Let&apos;s Build <span style={{ color: "#8C7051", fontStyle: "italic" }}>Something</span>
              </h2>
            </ScrollReveal>

            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px", position: "relative", zIndex: 1 }}>
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.label} direction="up" delay={300 + i * 100}>
                  <div>
                    <span style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, color: item.color, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: "8px" }}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ fontSize: "clamp(0.75rem, 1.3vw, 1rem)", fontWeight: 400, color: "#2C2520", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.3s", overflowWrap: "anywhere", textTransform: item.lowercase ? "lowercase" : undefined }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8C7051")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2C2520")}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "clamp(0.8rem, 1.3vw, 1rem)", fontWeight: 400, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>{item.value}</span>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={700}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", position: "relative", zIndex: 1 }}>
                <a href="mailto:connect.sharmavikrant@gmail.com" className="kinetic-gradient"
                  style={{ color: "#fff", padding: "18px 48px", borderRadius: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "13px", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: "0 20px 40px rgba(140,112,81,0.15)", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                  Send An Email
                </a>
                <a href="https://www.rankingassets.com" target="_blank" rel="noopener noreferrer"
                  style={{ background: "#FAF7F2", padding: "18px 48px", borderRadius: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "13px", color: "#2C2520", border: "1px solid #C4B8AC", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "border-color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#8C7051")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C4B8AC")}>
                  Visit Website
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1.5fr 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
