"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 50,
      width: "92%", maxWidth: "900px", marginTop: scrolled ? "12px" : "20px", borderRadius: "9999px",
      background: scrolled ? "rgba(250,247,242,0.8)" : "rgba(250,247,242,0.5)",
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      boxShadow: scrolled ? "0 8px 30px rgba(44,37,32,0.06)" : "none",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px" }}>
        <a href="#" style={{ fontSize: "20px", fontWeight: 700, color: "#8C7051", textDecoration: "none", fontFamily: "'Noto Serif', serif", fontStyle: "italic" }}>
          Vikrant.
        </a>
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: "#6B5E54", fontSize: "14px", fontWeight: 300, letterSpacing: "0.02em", textDecoration: "none", transition: "color 0.3s", fontFamily: "'Noto Serif', serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8C7051")} onMouseLeave={(e) => (e.currentTarget.style.color = "#6B5E54")}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-desktop" style={{ background: "#8C7051", color: "#fff", padding: "8px 24px", borderRadius: "9999px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px", fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "opacity 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
          Hire Me
        </a>
        <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: "#2C2520", padding: "8px", cursor: "pointer", display: "none" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: "rgba(250,247,242,0.97)", backdropFilter: "blur(20px)", borderRadius: "16px", margin: "0 16px 16px", padding: "24px", boxShadow: "0 8px 30px rgba(44,37,32,0.08)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", color: "#6B5E54", textDecoration: "none", fontFamily: "'Noto Serif', serif", fontSize: "15px" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
