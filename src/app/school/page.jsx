"use client";

import React, { useState } from "react";
import schoolGirlSrc    from "@/assets/in-Use/schoolgirlimg.svg?url";
import studentsSrc      from "@/assets/in-Use/studentsimg.svg?url";
import vectorBgSrc      from "@/assets/in-Use/Vector.svg?url";
import blueCartoon      from "@/assets/in-Use/bluecartoon.svg?url";
import lightBlueCartoon from "@/assets/in-Use/lightbluecartoon.svg?url";
import redCartoon       from "@/assets/in-Use/redcartoon.svg?url";
import greenCartoon     from "@/assets/in-Use/greencartoon.svg?url";

const r = (src) => (typeof src === "string" ? src : src?.src ?? src);

const CARTOONS = [
  { id: 1, src: blueCartoon,      delay: "0s",    size: 56 },
  { id: 2, src: greenCartoon,     delay: "0.25s", size: 48 },
  { id: 3, src: redCartoon,       delay: "0.5s",  size: 52 },
  { id: 4, src: lightBlueCartoon, delay: "0.75s", size: 50 },
];

export default function SchoolPage() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Caveat:wght@700&display=swap');

        @keyframes cartoonBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          30%       { transform: translateY(-10px) rotate(-4deg); }
          60%       { transform: translateY(-5px) rotate(3deg); }
        }
        .cartoon-char {
          /* animation removed — will re-add later */
          cursor: default;
        }

        @keyframes drawPath {
          from { stroke-dashoffset: 300; }
          to   { stroke-dashoffset: 0; }
        }
        .draw-line {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawPath 1.4s ease forwards 0.3s;
        }

        .tab-btn { transition: background 0.2s, color 0.2s; cursor: pointer; border: none; }
        .demo-btn { transition: background 0.2s ease; cursor: pointer; }
        .demo-btn:hover { background: #1a2a52 !important; }

        .stripe-bg {
          background-color: #FFF1EB;
          background-image: repeating-linear-gradient(
            90deg,
            transparent 0px, transparent 56px,
            rgba(255,139,19,0.13) 56px, rgba(255,139,19,0.13) 60px
          );
        }
      `}</style>

      <main
        className="w-full overflow-x-hidden pt-[72px] md:pt-[80px]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >

        {/* ════════════════════════════════════════════
            HERO SECTION  (white bg, 1280px, 600px tall)
            Columns: 440px | 285px | 555px
        ════════════════════════════════════════════ */}
        <section className="relative w-full bg-white overflow-hidden">

          {/* Vector bg — top-right decorative */}
          <div className="pointer-events-none absolute top-0 right-0" style={{ width: 641, height: 837, zIndex: 0 }}>
            <img src={r(vectorBgSrc)} alt="" aria-hidden="true" style={{ width: "100%", height: "100%" }} />
          </div>

          {/* ── CARTOONS — Group 40367: left:260, top:402.73, width:213, height:221.78 ── */}
          <div
            style={{
              position: "absolute",
              left: 260,
              top: 402,
              width: 213,
              height: 222,
              zIndex: 10,
              filter: "drop-shadow(5px -3px 5px rgba(0,0,0,0.25))",
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            {CARTOONS.map((c) => (
              <div
                key={c.id}
                className="cartoon-char"
                style={{ width: c.size, height: c.size, flexShrink: 0 }}
              >
                <img src={r(c.src)} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>

          <div
            className="relative mx-auto"
            style={{
              maxWidth: 1280,
              display: "grid",
              gridTemplateColumns: "440px 285px 1fr",
              minHeight: 600,
              zIndex: 1,
            }}
          >
            {/* LEFT col — 440px */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 40px 40px 40px" }}>
              <p style={{ fontWeight: 500, fontSize: 20, lineHeight: "32px", letterSpacing: "-0.02em", color: "#333333", maxWidth: 387, marginBottom: 32 }}>
                Sensei partners with schools to nurture emotional intelligence
                and life skills through structured, school-ready programs
                without disrupting academics or overloading teachers.
              </p>

              <button
                className="demo-btn"
                style={{ background: "#2C3D68", padding: "16px", width: 219, height: 56, borderRadius: 8, border: "none", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: "white", marginBottom: 40 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Book a School Demo
              </button>

            </div>

            {/* CENTRE col — 285px school girl */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
              <img src={r(schoolGirlSrc)} alt="School girl" style={{ width: 285, height: 604, display: "block", objectFit: "cover" }} />
            </div>

            {/* RIGHT col — Why this works pushed to y≈360 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flex: "0 0 360px" }} />
              <div style={{ padding: "32px 40px", minHeight: 240 }}>
                <h2 style={{ fontWeight: 700, fontSize: 30, lineHeight: "38px", color: "#333333", marginBottom: 20 }}>
                  Why this works
                </h2>
                {[
                  "Frames EQ as inevitable",
                  "Position principal as a future-ready leader",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i === 0 ? 16 : 0 }}>
                    <span style={{ marginTop: 10, width: 8, height: 8, borderRadius: "50%", background: "#FF8B13", flexShrink: 0 }} />
                    <p style={{ fontWeight: 500, fontSize: 20, lineHeight: "30px", color: "#333333" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            LOWER SECTION (stripe bg)
            Row A — y:0  h:240  Education + K-12 + students img
            Row B — y:240 h:240  Trusted by text
            Row C — y:480 h:120  See how text + script
            Footer pill — centred below
        ════════════════════════════════════════════ */}
        <section className="stripe-bg relative w-full overflow-hidden">

          {/* ── ROW A (h:240) ── */}
          <div className="mx-auto relative" style={{ maxWidth: 1280, height: 240 }}>

            {/* Orange band: left-edge → 800px (62.5%) */}
            <div style={{ position: "absolute", left: 0, top: 0, width: "62.5%", height: "100%", background: "#FF8B13", opacity: 0.2 }} />

            {/* "Education for life, not exams." — x:40, centred vertically */}
            <div style={{ position: "absolute", left: 40, top: 0, width: 610, height: "100%", display: "flex", alignItems: "center" }}>
              <h1 style={{ fontWeight: 700, fontSize: 72, lineHeight: "90px", letterSpacing: "-0.02em", color: "#2C3D68" }}>
                Education for life,<br />not exams.
              </h1>
            </div>

            {/* K–12 label — Figma x:838, width:164, right-aligned text */}
            <div style={{ position: "absolute", left: 838, top: 0, width: 164, height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 72, lineHeight: "90px", letterSpacing: "-0.02em", color: "#2C3D68", textAlign: "right" }}>K–12</span>
              <span style={{ fontWeight: 700, fontSize: 20, lineHeight: "32px", letterSpacing: "-0.02em", color: "#333333", textAlign: "right" }}>schools</span>
            </div>

            {/* Students image — x:1040, width:240, flush right */}
            <div style={{ position: "absolute", right: 0, top: 0, width: 240, height: 240, overflow: "hidden" }}>
              <img src={r(studentsSrc)} alt="Students in class" style={{ width: 240, height: 240, objectFit: "cover" }} />
            </div>
          </div>

          {/* ── ROW B (h:240) ── */}
          <div className="mx-auto relative" style={{ maxWidth: 1280, height: 240 }}>
            {/* "Trusted by…" — Figma: right-aligned, right edge */}
            <div style={{ position: "absolute", right: 0, top: 0, width: 346, height: "100%", display: "flex", alignItems: "center" }}>
              <p style={{ fontWeight: 500, fontSize: 20, lineHeight: "32px", letterSpacing: "-0.02em", color: "#333333", textAlign: "right", width: "100%" }}>
                Trusted by forward-thinking K–12 schools focused on student wellbeing and growth.
              </p>
            </div>
          </div>

          {/* ── ROW C (h:120) ── */}
          <div className="mx-auto relative" style={{ maxWidth: 1280, height: 120 }}>

            {/* Left text — Figma: left:114, width:282 */}
            <div style={{ position: "absolute", left: 114, top: 0, width: 282, height: "100%", display: "flex", alignItems: "center" }}>
              <p style={{ fontWeight: 500, fontSize: 20, lineHeight: "32px", letterSpacing: "-0.02em", color: "#333333" }}>
                See how schools implement EQ-focused learning
              </p>
            </div>

            {/* "See how" script — horizontally centred */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 48, lineHeight: "60px", color: "#FF8B13" }}>
                See how
              </span>
              <svg width="241" height="20" viewBox="0 0 241 20" fill="none" style={{ marginTop: -4 }}>
                <path d="M6 14 C50 4, 100 2, 148 6 C178 9, 210 14, 235 14" stroke="#FF8B13" strokeWidth="6" strokeLinecap="round" fill="none" className="draw-line" />
              </svg>
            </div>

            {/* Avatars + enrolled — right edge */}
            <div style={{ position: "absolute", right: 0, top: 0, height: "100%", display: "flex", alignItems: "center", gap: 0 }}>
              {["#FFD6B8","#B8D6FF","#B8FFD6","#FFB8D6"].map((bg, i) => (
                <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", background: bg, border: "2px solid white", marginLeft: i > 0 ? -10 : 0, zIndex: 4 - i, position: "relative" }} />
              ))}
              <span style={{ fontWeight: 700, fontSize: 16, color: "#333333", marginLeft: 8, whiteSpace: "nowrap" }}>
                +654 Enrolled
              </span>
            </div>
          </div>

          {/* ── FOOTER TAB PILL ──
              Figma: width:271, height:72, bg:#FF8B13, border-radius:16px
              Centred: left: calc(50% - 135.5px)
              Gap between School & Parents groups: 32px
              Each icon: 40×40, border-radius:8px
              School active: #2C3D68 icon bg | Parents inactive: white bg + #2C3D68 border
          ── */}
          <div style={{ display: "flex", justifyContent: "center", padding: "20px 0 40px" }}>
            <div
              style={{
                width: 271, height: 72,
                background: "#FF8B13",
                borderRadius: 16,
                boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.10), 0px 4px 4px -4px rgba(12,12,13,0.05)",
                display: "flex", flexDirection: "row", alignItems: "center",
                padding: "16px", gap: 32,
              }}
            >
              {/* School group */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16, width: 101, height: 40 }}>
                <button
                  onClick={() => setActiveTab("school")}
                  className="tab-btn"
                  style={{
                    width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                    background: activeTab === "school" ? "#2C3D68" : "rgba(255,255,255,0.3)",
                    border: activeTab === "school" ? "none" : "1px solid #2C3D68",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 21V12h6v9" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </button>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", color: "#333333" }}>School</span>
              </div>

              {/* Parents group */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16, width: 106, height: 40 }}>
                <button
                  onClick={() => setActiveTab("parents")}
                  className="tab-btn"
                  style={{
                    width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                    background: activeTab === "parents" ? "#2C3D68" : "#FFFFFF",
                    border: "1px solid #2C3D68",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="7" r="4" stroke={activeTab === "parents" ? "white" : "#2C3D68"} strokeWidth="2" />
                    <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke={activeTab === "parents" ? "white" : "#2C3D68"} strokeWidth="2" strokeLinecap="round" />
                    <path d="M19 8v6M16 11h6" stroke={activeTab === "parents" ? "white" : "#2C3D68"} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", color: "#333333" }}>Parents</span>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}