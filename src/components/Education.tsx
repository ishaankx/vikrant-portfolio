"use client";

import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          <div>
            <ScrollReveal direction="up">
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", color: "#8C7051", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Qualifications</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, marginTop: "16px", marginBottom: "48px", fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
                Built on Strong <span style={{ color: "#8C7051", fontStyle: "italic" }}>Foundations</span>
              </h2>
            </ScrollReveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { degree: "MBA (Marketing)", school: "Uttranchal University", iconColor: "#8C7051", bgColor: "rgba(140,112,81,0.1)", icon: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" },
                { degree: "B.Com", school: "University of Delhi (DU)", iconColor: "#C9A96E", bgColor: "rgba(201,169,110,0.12)", icon: "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" },
              ].map((item, i) => (
                <ScrollReveal key={item.degree} direction="left" delay={200 + i * 200}>
                  <div
                    style={{ padding: "28px 32px", borderRadius: "12px", background: "#F4F0EA", border: "1px solid rgba(140,112,81,0.08)", display: "flex", gap: "24px", alignItems: "center", transition: "background 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#EDE8E0")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#F4F0EA")}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: item.bgColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={item.iconColor} style={{ width: "24px", height: "24px" }}><path d={item.icon} /></svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "18px", fontWeight: 400, fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>{item.degree}</h4>
                      <p style={{ color: "#6B5E54", fontWeight: 500, fontSize: "13px", marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.school}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="right" distance={60}>
            <div style={{ padding: "40px", borderRadius: "16px", background: "rgba(250,247,242,0.7)", backdropFilter: "blur(12px)", border: "2px solid rgba(201,169,110,0.25)", position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)")}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "160px", height: "160px", background: "rgba(201,169,110,0.06)", borderRadius: "50%", filter: "blur(60px)", marginRight: "-40px", marginTop: "-40px" }} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C9A96E" style={{ width: "48px", height: "48px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
              </svg>
              <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 400, marginBottom: "12px", fontFamily: "'Noto Serif', serif", color: "#2C2520", position: "relative", zIndex: 1 }}>Certified Expert</h3>
              <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "#C9A96E", marginBottom: "28px", fontWeight: 300, fontFamily: "'Noto Serif', serif", fontStyle: "italic", position: "relative", zIndex: 1 }}>Advanced Digital Marketing Specialist</p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative", zIndex: 1 }}>
                <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.3)" }} />
                <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#C9A96E", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>DIGIPERFORM</span>
                <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.3)" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .edu-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}
