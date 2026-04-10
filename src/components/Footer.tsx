"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#EDE8E0", padding: "48px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%", borderTop: "1px solid rgba(140,112,81,0.1)" }}>
      <div style={{ fontSize: "16px", fontWeight: 400, color: "#8C7051", fontFamily: "'Noto Serif', serif", fontStyle: "italic" }}>
        Vikrant Sharma
      </div>
      <div style={{ display: "flex", gap: "32px" }}>
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/connectvikrant" },
          { label: "Instagram", href: "https://www.instagram.com/vikrantsharma.grow" },
        ].map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{ color: "#C4B8AC", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8C7051")} onMouseLeave={(e) => (e.currentTarget.style.color = "#C4B8AC")}>
            {social.label}
          </a>
        ))}
      </div>
      <div style={{ color: "rgba(107,94,84,0.5)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        &copy; 2024 VIKRANT SHARMA
      </div>
    </footer>
  );
}
