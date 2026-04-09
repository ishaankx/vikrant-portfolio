"use client";

const kpis = ["CPM ↓ 32%", "CTR ↑ 4.8%", "ROAS 5.2x", "CPA ↓ 45%", "IMPRESSIONS 1.5M+", "CLICKS 400K+", "LEADS 500+", "ORGANIC ↑ 120%", "TOP 3 RANKINGS", "ROI MAXIMIZED"];

export default function DataTicker() {
  return (
    <div style={{ width: "100%", overflow: "hidden", padding: "14px 0", background: "#EDE8E0", borderTop: "1px solid rgba(140,112,81,0.15)", borderBottom: "1px solid rgba(140,112,81,0.15)" }}>
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {[...kpis, ...kpis].map((kpi, i) => (
          <span key={i} style={{ margin: "0 32px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C7051", opacity: 0.75, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
            {kpi}<span style={{ margin: "0 32px", color: "#C4B8AC" }}>&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
