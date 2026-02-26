import React from "react";
import { useState, useEffect } from "react";

const glitchKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400;600&display=swap');

@keyframes flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.4; }
  94% { opacity: 1; }
  96% { opacity: 0.6; }
  97% { opacity: 1; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(1deg); }
}

@keyframes pulse-ring {
  0% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 0.3; }
  100% { transform: scale(0.9); opacity: 0.8; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  20% { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
  40% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(10% 0 80% 0); transform: translate(3px, 0); }
  80% { clip-path: inset(50% 0 30% 0); transform: translate(-3px, 0); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); }
  20% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 0); }
  40% { clip-path: inset(80% 0 5% 0); transform: translate(2px, 0); }
  60% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 0); }
  80% { clip-path: inset(20% 0 60% 0); transform: translate(4px, 0); }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { border-color: #00ffcc; }
  50% { border-color: transparent; }
}

@keyframes spin-slow {
  0% {transform: rotate(0deg) translateZ(0); }
  100% { transform: rotate(360deg) translateZ(0); }
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2%, -3%); }
  20% { transform: translate(3%, 2%); }
  30% { transform: translate(-1%, 4%); }
  40% { transform: translate(2%, -1%); }
  50% { transform: translate(-3%, 1%); }
  60% { transform: translate(1%, -2%); }
  70% { transform: translate(-2%, 3%); }
  80% { transform: translate(3%, -3%); }
  90% { transform: translate(-1%, 1%); }
}

@keyframes border-run {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

* { margin: 0; padding: 0; box-sizing: border-box; }
`;

export default function HilaryProfile() {
  const [glitching, setGlitching] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tags = ["React", "Python", "AI/ML", "Node.js", "TypeScript", "LLMs"];

  const handleConnect = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{glitchKeyframes}</style>
      <div style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#080b0f",
        fontFamily: "'JetBrains Mono', monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        left: 0,
        top: 0,
      }}>

        {/* Grain texture overlay */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(1) infinite",
          opacity: 0.5,
        }} />

        {/* Grid lines */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(0,255,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,204,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        {/* Scanline */}
        <div style={{
          position: "fixed", left: 0, right: 0, height: "2px", zIndex: 1, pointerEvents: "none",
          background: "linear-gradient(transparent, rgba(0,255,204,0.08), transparent)",
          animation: "scanline 6s linear infinite",
        }} />

        {/* Ambient blobs */}
        <div style={{
          position: "fixed", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,204,0.06) 0%, transparent 70%)",
          top: "-100px", right: "-100px", pointerEvents: "none", zIndex: 0,
        }} />
        <div style={{
          position: "fixed", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,80,255,0.07) 0%, transparent 70%)",
          bottom: "-80px", left: "-80px", pointerEvents: "none", zIndex: 0,
        }} />

        {/* Main Card */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "min(520px, 92vw)",
          animation: "fadeUp 0.8s ease forwards",
        }}>

          {/* Card border glow */}
          <div style={{
            position: "absolute", inset: "-1px", borderRadius: 24, zIndex: -1,
            background: "linear-gradient(135deg, rgba(0,255,204,0.3), rgba(120,80,255,0.2), rgba(0,255,204,0.1))",
            filter: "blur(1px)",
          }} />

          <div style={{
            background: "rgba(12,16,22,0.95)",
            borderRadius: 24,
            padding: "48px 44px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,255,204,0.12)",
            animation: "flicker 8s infinite",
          }}>

            {/* Header row */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 32 }}>

              {/* Avatar */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                {/* Pulse rings */}
                {[1,2].map(i => (
                  <div key={i} style={{
                    position: "absolute", inset: -(i * 8), borderRadius: "50%",
                    border: `1px solid rgba(0,255,204,${0.2 / i})`,
                    animation: `pulse-ring ${1.5 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }} />
                ))}
                {/* Spinning ring */}
                <div style={{
                  position: "absolute", inset: -4, borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #00ffcc, transparent, #7850ff, transparent, #00ffcc)",
                  animation: "spin-slow 4s linear infinite",
                  zIndex: 0,
                  willChange:"transform",
                  transformOrigin:"center center",
                }} />
                {/* Avatar circle */}
                <div style={{
                  width: 88, height: 88, borderRadius: "50%",
                  background: "linear-gradient(135deg, #0a1a14, #0d1520)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 32, position: "relative", zIndex: 1,
                  border: "3px solid #080b0f",
                  fontFamily: "'Syne', sans-serif",
                  color: "#00ffcc",
                  fontWeight: 800,
                  letterSpacing: -1,
                  textShadow: "0 0 20px rgba(0,255,204,0.5)",
                }}>
                  HN
                </div>
              </div>

              {/* Name + title */}
              <div style={{ flex: 1, paddingTop: 4 }}>
                {/* Status dot */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#00ffcc",
                    boxShadow: "0 0 8px #00ffcc",
                    animation: "pulse-ring 2s ease-in-out infinite",
                  }} />
                  <span style={{ fontSize: 11, color: "#00ffcc", letterSpacing: 2, textTransform: "uppercase", opacity: 0.7 }}>
                    Available for hire
                  </span>
                </div>

                {/* Glitch name */}
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h1 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(22px, 5vw, 28px)",
                    fontWeight: 800,
                    color: "#f0f4f8",
                    letterSpacing: -0.5,
                    lineHeight: 1.1,
                  }}>
                    Hilary Nyuyki
                  </h1>
                  {glitching && <>
                    <div style={{
                      position: "absolute", inset: 0,
                      fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 5vw, 28px)",
                      fontWeight: 800, color: "#00ffcc", letterSpacing: -0.5, lineHeight: 1.1,
                      animation: "glitch-1 0.4s steps(1) forwards",
                    }}>Hilary Nyuyki</div>
                    <div style={{
                      position: "absolute", inset: 0,
                      fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 5vw, 28px)",
                      fontWeight: 800, color: "#ff3366", letterSpacing: -0.5, lineHeight: 1.1,
                      animation: "glitch-2 0.4s steps(1) forwards",
                    }}>Hilary Nyuyki</div>
                  </>}
                </div>

                <p style={{
                  marginTop: 6, fontSize: 13, color: "#00ffcc",
                  fontFamily: "'JetBrains Mono', monospace", fontWeight: 400,
                  letterSpacing: 0.5,
                }}>
                  <span style={{ color: "#7850ff" }}>const</span>{" "}role ={" "}
                  <span style={{ color: "#ffaa44" }}>"Software Engineer"</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              height: 1, marginBottom: 28,
              background: "linear-gradient(90deg, transparent, rgba(0,255,204,0.2), rgba(120,80,255,0.2), transparent)",
            }} />

            {/* Bio */}
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontSize: 11, color: "#7850ff", letterSpacing: 3,
                textTransform: "uppercase", marginBottom: 12, fontWeight: 600,
              }}>
                // about.me
              </p>
              <p style={{
                fontSize: 14.5, color: "#8a9bb0", lineHeight: 1.8, fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 300,
              }}>
                Building at the intersection of{" "}
                <span style={{ color: "#f0f4f8", fontWeight: 600 }}>intelligent systems</span>{" "}
                and elegant software. I craft scalable applications, explore the boundaries of{" "}
                <span style={{ color: "#00ffcc", fontWeight: 600 }}>AI & machine learning</span>,
                and obsess over turning complex problems into clean, purposeful code.
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {tags.map((tag, i) => (
                <span key={tag} style={{
                  padding: "5px 14px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 400,
                  color: i % 2 === 0 ? "#00ffcc" : "#7850ff",
                  background: i % 2 === 0 ? "rgba(0,255,204,0.07)" : "rgba(120,80,255,0.08)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(0,255,204,0.2)" : "rgba(120,80,255,0.2)"}`,
                  letterSpacing: 0.3,
                  animation: `fadeUp 0.5s ease ${i * 0.07 + 0.3}s both`,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleConnect}
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              style={{
                width: "100%",
                padding: "16px 32px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1,
                textTransform: "uppercase",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                background: hoverBtn
                  ? "linear-gradient(135deg, #00ffcc, #00d4a8)"
                  : "linear-gradient(135deg, rgba(0,255,204,0.15), rgba(120,80,255,0.15))",
                color: hoverBtn ? "#080b0f" : "#00ffcc",
                boxShadow: hoverBtn
                  ? "0 0 40px rgba(0,255,204,0.4), 0 8px 32px rgba(0,255,204,0.2)"
                  : "0 0 0px rgba(0,255,204,0), inset 0 0 0 1px rgba(0,255,204,0.3)",
                transform: hoverBtn ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {/* Shimmer */}
              {hoverBtn && <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                animation: "border-run 1s linear infinite",
                backgroundSize: "200% 100%",
              }} />}
              <span style={{ position: "relative", zIndex: 1 }}>
                {copied ? "✓ Copied — Let's build something!" : "→ Connect with me"}
              </span>
            </button>

            {/* Footer */}
            <div style={{
              marginTop: 24, textAlign: "center",
              fontSize: 11, color: "rgba(138,155,176,0.4)",
              letterSpacing: 1.5, fontFamily: "'JetBrains Mono', monospace",
            }}>
              HILARY_NYUYKI · SWE · AI · 2026
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


