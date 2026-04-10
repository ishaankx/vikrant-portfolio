"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const caseStudies = [
  {
    metric: "Average Position",
    before: "40.1",
    after: "25.9",
    delta: "▲ 14 spots",
    description: "Moved up the SERP ladder across tracked keywords through consistent on-page optimization, content refreshes, and authority building.",
    image: "/images/case-study/position-daily.jpeg",
    period: "Dec 2024 → Apr 2026",
  },
  {
    metric: "Best Monthly Position",
    before: "40.1",
    after: "11",
    delta: "▲ 29 ranks",
    description: "Broke into page one for target keywords, turning invisible listings into consistent top-result winners — a 4x improvement in rank.",
    image: "/images/case-study/position-monthly.jpeg",
    period: "Dec 2024 → Apr 2026",
  },
  {
    metric: "Total Impressions",
    before: "24K",
    after: "90K",
    delta: "▲ 275%",
    description: "Nearly quadrupled visibility in search results — the brand now shows up almost 4x as often for relevant, high-intent queries.",
    image: "/images/case-study/impressions.jpeg",
    period: "Dec 2024 → Jan 2026",
  },
  {
    metric: "Total Clicks",
    before: "1.6K",
    after: "3K",
    delta: "▲ 87%",
    description: "Nearly doubled qualified organic traffic by combining higher rankings with sharper meta descriptions and compelling snippets.",
    image: "/images/case-study/clicks.jpeg",
    period: "Dec 2024 → Mar 2026",
  },
  {
    metric: "Cost Per Acquisition",
    before: "₹1,800",
    after: "₹342",
    delta: "▼ 81%",
    description: "Slashed PPC acquisition costs by over 5x through tighter audience targeting, ad-copy A/B testing, and ruthless keyword pruning — turning a leaky funnel into a profit engine.",
    image: "/images/case-study/ppc-campaign.jpeg",
    period: "Jul 2024 → Apr 2026",
  },
];

export default function CaseStudy() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIdx(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="case-studies">
      <div className="section-container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", color: "#8C7051", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Proof in Numbers</span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginTop: "16px", fontFamily: "'Noto Serif', serif", color: "#2C2520" }}>
              Real Growth, <span style={{ color: "#8C7051", fontStyle: "italic" }}>Real Data</span>
            </h2>
            <p style={{ marginTop: "16px", color: "#6B5E54", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Straight from Google Search Console — no cherry-picked vanity metrics.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div style={{ position: "relative" }}>
            <div
              ref={scrollerRef}
              className="cs-scroller"
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                overscrollBehaviorX: "contain",
                touchAction: "pan-x pan-y",
              }}
            >
              {caseStudies.map((cs) => (
                <div key={cs.metric} style={{ flex: "0 0 100%", scrollSnapAlign: "start", padding: "0 4px" }}>
                  <div
                    className="cs-card"
                    style={{
                      background: "rgba(250,247,242,0.7)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(140,112,81,0.12)",
                      borderRadius: "16px",
                      padding: "clamp(24px, 4vw, 48px)",
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "32px",
                      alignItems: "center",
                      boxShadow: "0 20px 50px rgba(140,112,81,0.05)",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "#8C7051", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{cs.period}</span>
                      <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, fontFamily: "'Noto Serif', serif", color: "#2C2520", marginTop: "12px", lineHeight: 1.2 }}>{cs.metric}</h3>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontFamily: "'Noto Serif', serif", color: "#C4B8AC", textDecoration: "line-through", fontWeight: 300 }}>{cs.before}</span>
                        <span style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#C9A96E" }}>→</span>
                        <span className="kinetic-gradient" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, fontFamily: "'Noto Serif', serif", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{cs.after}</span>
                      </div>
                      <div style={{ display: "inline-block", marginTop: "16px", padding: "6px 16px", background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.35)", borderRadius: "9999px", fontSize: "12px", fontWeight: 700, color: "#8C7051", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.05em" }}>
                        {cs.delta}
                      </div>
                      <p style={{ marginTop: "24px", color: "#6B5E54", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", lineHeight: 1.75 }}>{cs.description}</p>
                    </div>
                    <div className="cs-image-wrap" style={{ position: "relative", aspectRatio: "16/10", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(140,112,81,0.12)", background: "#FAF7F2", boxShadow: "0 12px 30px rgba(140,112,81,0.08)" }}>
                      <Image src={cs.image} alt={cs.metric} fill sizes="(max-width: 900px) 92vw, 50vw" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop arrows */}
            <button
              className="cs-arrow cs-arrow-left"
              onClick={() => scrollTo(Math.max(0, activeIdx - 1))}
              aria-label="Previous slide"
              style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", background: "#FAF7F2", border: "1px solid rgba(140,112,81,0.2)", color: "#8C7051", cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(140,112,81,0.1)", transition: "all 0.3s", opacity: activeIdx === 0 ? 0.4 : 1 }}
              disabled={activeIdx === 0}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              className="cs-arrow cs-arrow-right"
              onClick={() => scrollTo(Math.min(caseStudies.length - 1, activeIdx + 1))}
              aria-label="Next slide"
              style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", background: "#FAF7F2", border: "1px solid rgba(140,112,81,0.2)", color: "#8C7051", cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(140,112,81,0.1)", transition: "all 0.3s", opacity: activeIdx === caseStudies.length - 1 ? 0.4 : 1 }}
              disabled={activeIdx === caseStudies.length - 1}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </ScrollReveal>

        {/* Swipe hint — mobile only */}
        <div className="cs-swipe-hint" style={{ display: "none", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "20px", color: "#8C7051", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, opacity: 0.7 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          Swipe
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "20px" }}>
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: "44px",
                height: "44px",
                padding: 0,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: activeIdx === i ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: activeIdx === i ? "#8C7051" : "#C4B8AC",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cs-scroller::-webkit-scrollbar { display: none; }
        @media (max-width: 899px) {
          .cs-swipe-hint { display: flex !important; }
        }
        @media (min-width: 900px) {
          .cs-card { grid-template-columns: 1fr 1.3fr !important; gap: 48px !important; }
          .cs-arrow { display: flex !important; }
          .cs-arrow:hover:not(:disabled) { background: #8C7051 !important; color: #fff !important; border-color: #8C7051 !important; }
          .cs-image-wrap { aspect-ratio: 16 / 9 !important; }
        }
      `}</style>
    </section>
  );
}