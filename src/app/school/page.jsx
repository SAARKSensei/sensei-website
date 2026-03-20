"use client";

import React, { useState, useEffect } from "react";

import schoolGirlSrc    from "@/assets/in-Use/schoolgirlimg.svg?url";
import studentsSrc      from "@/assets/in-Use/studentsimg.svg?url";
import vectorBgSrc      from "@/assets/in-Use/Vector.svg?url";
import blueCartoon      from "@/assets/in-Use/bluecartoon.svg?url";
import lightBlueCartoon from "@/assets/in-Use/lightbluecartoon.svg?url";
import redCartoon       from "@/assets/in-Use/redcartoon.svg?url";
import greenCartoon     from "@/assets/in-Use/greencartoon.svg?url";
// Full SVG card bodies (the character shapes from Figma)
import blueCard         from "@/assets/in-Use/bluecartoon2.svg?url";
import lightBlueCard    from "@/assets/in-Use/lightbluecartoon2.svg?url";
import greenCard        from "@/assets/in-Use/greencartoon2.svg?url";
import redCard          from "@/assets/in-Use/redcartoon2.svg?url";
import AnimatedBlueCard   from "@/components/AnimatedBlueCard";
import AnimatedLightBlueCard from "@/components/AnimatedLightBlueCard";
import AnimatedRedCard from "@/components/AnimatedRedCard";
import AnimatedGreenCard from "@/components/AnimatedGreenCard";
import SchoolChallengeSection from "@/components/SchoolChallengeSection";
import SchoolBuildingSection from "@/components/SchoolBuildingSection";

const r      = (s)       => typeof s === "string" ? s : (s?.src ?? s);
const clamp  = (v,lo,hi) => Math.min(Math.max(v, lo), hi);
const lerp   = (a,b,t)   => a + (b - a) * t;
const easeIO = (t)       => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;

/* ─────────────────────────────────────────────────
   Layout constants  (all in px, matching CSS / Figma)
───────────────────────────────────────────────── */
const NAV_H          = 80;          // main pt-[80px]
const HERO_H         = 600;
const LOWER_H        = 600;         // 240 + 240 + 120
const ACADEMICS_TOP  = NAV_H + HERO_H + LOWER_H; // 1280
const CARDS_AREA_TOP = ACADEMICS_TOP + 174;       // 1454
const CONTAINER_H    = 463;

// Hero cartoon cluster anchors (within the 1280 centered grid)
const CLUSTER_L = 260;
const CLUSTER_T = 307;

/* ─────────────────────────────────────────────────
   Card + hero-cartoon data
   hX/hY = position of small cartoon inside cluster
   hW/hH = small cartoon dimensions
───────────────────────────────────────────────── */
const CARDS = [
  {
    key: "blue",  cartoonSrc: blueCartoon,      cardSrc: blueCard,
    left: 66,  width: 298, height: 434, textColor: "#FFFFFF",
    
    hX: 78,  hY: 167, hW: 70,  hH: 71,  growFrom: 0.78,
  },
  {
    key: "lb",    cartoonSrc: lightBlueCartoon, cardSrc: lightBlueCard,
    left: 330, width: 334, height: 451, textColor: "#333333",
   
    hX: 98,  hY: 208, hW: 102, hH: 102, growFrom: 0.82,
  },
  {
    key: "green", cartoonSrc: greenCartoon,     cardSrc: greenCard,
    left: 630, width: 258, height: 410, textColor: "#FFFFFF",
    
    hX: 85,  hY: 148, hW: 108, hH: 107, growFrom: 0.86,
  },
  {
    key: "red",   cartoonSrc: redCartoon,       cardSrc: redCard,
    left: 854, width: 360, height: 463, textColor: "#FFFFFF",
    
    hX: 35,  hY: 200, hW: 114, hH: 115, growFrom: 0.90,
  },
];

export default function SchoolPage() {
  const [activeTab, setActiveTab] = useState("school");

  /* ── scroll state: prog (0→1), raw scrollY, viewport width ── */
  const [ss, setSS] = useState({ prog: 0, sy: 0, vw: 1440 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSS(p => ({ ...p, vw: window.innerWidth }));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      const sy  = window.scrollY;
      const vh  = window.innerHeight;
      const vw  = window.innerWidth;

      // prog=0 at scroll=150, prog=1 when cards center is ~55% down viewport
      const endScroll = CARDS_AREA_TOP + CONTAINER_H * 0.5 - vh * 0.55;
      const p = clamp((sy - 150) / Math.max(endScroll - 150, 1), 0, 1);

      setSS({ prog: p, sy, vw });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize",  update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize",  update);
    };
  }, [mounted]);

  const { prog, sy: scrollY, vw } = ss;

  /* ── Compute fixed-overlay position for each traveling cartoon ──
     All coordinates: page-absolute → convert Y to viewport by subtracting scrollY  */
  const overlayPos = (card) => {
    const gridL  = Math.max(0, (vw - 1280) / 2);   // left edge of 1280 centered grid
    const cardsL = Math.max(0, (vw - 1148) / 2);   // left edge of 1148 cards container

    const t = easeIO(prog);

    // ── START: center of hero cartoon (page coords) ──
    const sCX = gridL  + CLUSTER_L + card.hX + card.hW / 2;
    const sCY = NAV_H  + CLUSTER_T + card.hY + card.hH / 2;

    // ── END: center of the cartoon area on the SVG card (top 58%) ──
    const ctH  = card.height * 0.58;
    const eCX  = cardsL + card.left + card.width / 2;
    const eCY  = CARDS_AREA_TOP + (CONTAINER_H - card.height) + ctH / 2;

    const cx = lerp(sCX, eCX, t);
    const cy = lerp(sCY, eCY, t);
    const w  = lerp(card.hW, card.width * 0.82, t);   // cartoon grows to ~82% of card width
    const h  = lerp(card.hH, ctH  * 0.88,  t);

    return {
      left:   cx - w / 2,
      top:    cy - h / 2 - scrollY,   // page Y → viewport Y
      width:  w,
      height: h,
    };
  };

  /* ── Derived opacities ── */
  const heroAlpha    = 1 - clamp(prog / 0.07,  0, 1);  // hero cluster fades out fast
  const overlayAlpha = clamp(1 - (prog - 0.68) / 0.22, 0, 1); // overlay fades near landing
  const showOverlay  = mounted && prog > 0 && prog < 0.92;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@700&display=swap');
        @keyframes drawPath { from { stroke-dashoffset:300; } to { stroke-dashoffset:0; } }
        .draw-line { stroke-dasharray:300; stroke-dashoffset:300; animation:drawPath 1.4s ease forwards 0.3s; }
        .tab-btn  { transition:background 0.2s,color 0.2s; cursor:pointer; border:none; }
        .demo-btn { transition:background 0.2s ease; cursor:pointer; }
        .demo-btn:hover { background:#1a2a52 !important; }
        .stripe-bg {
          background-color:#FFF1EB;
          background-image:repeating-linear-gradient(90deg,
            transparent 0px,transparent 56px,
            rgba(255,139,19,0.13) 56px,rgba(255,139,19,0.13) 60px);
        }
      `}</style>

      <main className="w-full overflow-x-hidden pt-[72px] md:pt-[80px]"
            style={{ fontFamily:"'Plus Jakarta Sans', sans-serif" }}>

        {/* ════════════════════════════════
            HERO SECTION
        ════════════════════════════════ */}
        <section className="relative w-full bg-white">

          <div className="pointer-events-none absolute top-0 right-0"
               style={{ width:641, height:837, zIndex:0 }}>
            <img src={r(vectorBgSrc)} alt="" aria-hidden="true"
                 style={{ width:"100%", height:"100%" }} />
          </div>

          <div className="relative mx-auto"
               style={{ maxWidth:1280, display:"grid",
                        gridTemplateColumns:"440px 285px 1fr",
                        height:600, zIndex:1 }}>

            {/* LEFT */}
            <div style={{ display:"flex", flexDirection:"column",
                          justifyContent:"center", padding:"40px" }}>
              <p style={{ fontWeight:500, fontSize:20, lineHeight:"32px",
                          letterSpacing:"-0.02em", color:"#333333",
                          maxWidth:387, marginBottom:32 }}>
                Sensei partners with schools to nurture emotional intelligence and life skills
                through structured, school-ready programs without disrupting academics or
                overloading teachers.
              </p>
              <button className="demo-btn"
                      style={{ background:"#2C3D68", padding:"16px", width:219,
                               height:56, borderRadius:8, border:"none",
                               display:"flex", alignItems:"center", gap:8,
                               fontFamily:"'Nunito', sans-serif", fontWeight:700,
                               fontSize:16, color:"white" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Book a School Demo
              </button>
            </div>

            {/* CENTRE */}
            <div style={{ display:"flex", alignItems:"flex-end",
                          justifyContent:"center", overflow:"hidden" }}>
              <img src={r(schoolGirlSrc)} alt="School girl"
                   style={{ width:285, height:604, display:"block", objectFit:"cover" }} />
            </div>

            {/* RIGHT */}
            <div style={{ display:"flex", flexDirection:"column" }}>
              <div style={{ flex:"0 0 360px" }} />
              <div style={{ padding:"32px 40px", minHeight:240 }}>
                <h2 style={{ fontWeight:700, fontSize:30, lineHeight:"38px",
                             color:"#333333", marginBottom:20 }}>Why this works</h2>
                {["Frames EQ as inevitable",
                  "Position principal as a future-ready leader"].map((text,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start",
                                        gap:12, marginBottom:i===0?16:0 }}>
                    <span style={{ marginTop:10, width:8, height:8, borderRadius:"50%",
                                   background:"#FF8B13", flexShrink:0 }} />
                    <p style={{ fontWeight:500, fontSize:20, lineHeight:"30px",
                                color:"#333333" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow ellipse */}
            <div style={{ position:"absolute", left:181, top:209, width:359, height:535,
                          background:"linear-gradient(175.97deg,#F4BC37 35.44%,#EC5F3D 101.05%)",
                          opacity:0.5, filter:"blur(100px)", borderRadius:"50%",
                          zIndex:2, pointerEvents:"none" }} />

            {/* ── Hero cartoon cluster (fades out as overlay takes over) ── */}
            <div style={{ position:"absolute", left:CLUSTER_L, top:CLUSTER_T,
                          width:360, height:240, zIndex:10,
                          filter:"drop-shadow(5px -3px 5px rgba(0,0,0,0.25))",
                          pointerEvents:"none",
                          opacity: heroAlpha,
                        }}>
              <div style={{ position:"absolute", left:78, bottom:2, width:70, height:71 }}>
                <img src={r(blueCartoon)} alt=""
                     style={{ width:"70%", height:"100%", objectFit:"contain" }} />
              </div>
              <div style={{ position:"absolute", left:98, bottom:-70, width:102, height:102 }}>
                <img src={r(lightBlueCartoon)} alt=""
                     style={{ width:"100%", height:"100%", objectFit:"contain" }} />
              </div>
              <div style={{ position:"absolute", left:85, bottom:-15, width:108, height:107 }}>
                <img src={r(greenCartoon)} alt=""
                     style={{ width:"100%", height:"100%", objectFit:"contain" }} />
              </div>
              <div style={{ position:"absolute", left:35, bottom:-75, width:114, height:115 }}>
                <img src={r(redCartoon)} alt=""
                     style={{ width:"100%", height:"100%", objectFit:"contain" }} />
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════
            LOWER SECTION
        ════════════════════════════════ */}
        <section className="stripe-bg relative w-full overflow-hidden">

          {/* ROW A */}
          <div className="mx-auto relative" style={{ maxWidth:1280, height:240 }}>
            <div style={{ position:"absolute", left:0, top:0, width:"62.5%",
                          height:"100%", background:"#FF8B13", opacity:0.2 }} />
            <div style={{ position:"absolute", left:40, top:0, width:610,
                          height:"100%", display:"flex", alignItems:"center" }}>
              <h1 style={{ fontWeight:700, fontSize:72, lineHeight:"90px",
                           letterSpacing:"-0.02em", color:"#2C3D68" }}>
                Education for life,<br/>not exams.
              </h1>
            </div>
            <div style={{ position:"absolute", left:838, top:0, width:164,
                          height:"100%", display:"flex", flexDirection:"column",
                          alignItems:"flex-end", justifyContent:"center" }}>
              <span style={{ fontWeight:700, fontSize:72, lineHeight:"90px",
                             letterSpacing:"-0.02em", color:"#2C3D68",
                             textAlign:"right" }}>K–12</span>
              <span style={{ fontWeight:700, fontSize:20, lineHeight:"32px",
                             letterSpacing:"-0.02em", color:"#333333",
                             textAlign:"right" }}>schools</span>
            </div>
            <div style={{ position:"absolute", right:0, top:0,
                          width:240, height:240, overflow:"hidden" }}>
              <img src={r(studentsSrc)} alt="Students in class"
                   style={{ width:240, height:240, objectFit:"cover" }} />
            </div>
          </div>

          {/* ROW B */}
          <div className="mx-auto relative" style={{ maxWidth:1280, height:240 }}>
            <div style={{ position:"absolute", right:0, top:0, width:346,
                          height:"100%", display:"flex", alignItems:"center" }}>
              <p style={{ fontWeight:500, fontSize:20, lineHeight:"32px",
                          letterSpacing:"-0.02em", color:"#333333",
                          textAlign:"right", width:"100%" }}>
                Trusted by forward-thinking K–12 schools focused on student wellbeing and growth.
              </p>
            </div>
          </div>

          {/* ROW C */}
          <div className="mx-auto relative" style={{ maxWidth:1280, height:120 }}>
            <div style={{ position:"absolute", left:114, top:0, width:282,
                          height:"100%", display:"flex", alignItems:"center" }}>
              <p style={{ fontWeight:500, fontSize:20, lineHeight:"32px",
                          letterSpacing:"-0.02em", color:"#333333" }}>
                See how schools implement EQ-focused learning
              </p>
            </div>
            <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)",
                          top:0, height:"100%", display:"flex", flexDirection:"column",
                          alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"'Caveat', cursive", fontWeight:700,
                             fontSize:48, lineHeight:"60px", color:"#FF8B13" }}>See how</span>
              <svg width="241" height="20" viewBox="0 0 241 20" fill="none"
                   style={{ marginTop:-4 }}>
                <path d="M6 14 C50 4, 100 2, 148 6 C178 9, 210 14, 235 14"
                      stroke="#FF8B13" strokeWidth="6" strokeLinecap="round"
                      fill="none" className="draw-line"/>
              </svg>
            </div>
            <div style={{ position:"absolute", right:0, top:0, height:"100%",
                          display:"flex", alignItems:"center" }}>
              {["#FFD6B8","#B8D6FF","#B8FFD6","#FFB8D6"].map((bg,i) => (
                <div key={i} style={{ width:30, height:30, borderRadius:"50%",
                                      background:bg, border:"2px solid white",
                                      marginLeft:i>0?-10:0, zIndex:4-i,
                                      position:"relative" }} />
              ))}
              <span style={{ fontWeight:700, fontSize:16, color:"#333333",
                             marginLeft:8, whiteSpace:"nowrap" }}>+654 Enrolled</span>
            </div>
          </div>

        </section>

        {/* ════════════════════════════════
            FIXED TAB PILL
        ════════════════════════════════ */}
        <div style={{ position:"fixed", bottom:24, left:"50%",
                      transform:"translateX(-50%)", zIndex:1000, width:271,
                      height:72, background:"#FF8B13", borderRadius:16,
                      boxShadow:"0px 16px 32px -4px rgba(12,12,13,0.10),0px 4px 4px -4px rgba(12,12,13,0.05)",
                      display:"flex", alignItems:"center", padding:"16px", gap:32 }}>
          <div style={{ display:"flex", alignItems:"center", gap:16, width:101, height:40 }}>
            <button onClick={()=>setActiveTab("school")} className="tab-btn"
                    style={{ width:40, height:40, borderRadius:8, flexShrink:0,
                             background:activeTab==="school"?"#2C3D68":"rgba(255,255,255,0.3)",
                             border:activeTab==="school"?"none":"1px solid #2C3D68",
                             display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                      stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M9 21V12h6v9" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </button>
            <span style={{ fontFamily:"'Nunito', sans-serif", fontWeight:700,
                           fontSize:14, lineHeight:"24px", color:"#333333" }}>School</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:16, width:106, height:40 }}>
            <button onClick={()=>setActiveTab("parents")} className="tab-btn"
                    style={{ width:40, height:40, borderRadius:8, flexShrink:0,
                             background:activeTab==="parents"?"#2C3D68":"#FFFFFF",
                             border:"1px solid #2C3D68",
                             display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="7" r="4"
                        stroke={activeTab==="parents"?"white":"#2C3D68"} strokeWidth="2"/>
                <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"
                      stroke={activeTab==="parents"?"white":"#2C3D68"}
                      strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 8v6M16 11h6"
                      stroke={activeTab==="parents"?"white":"#2C3D68"}
                      strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <span style={{ fontFamily:"'Nunito', sans-serif", fontWeight:700,
                           fontSize:14, lineHeight:"24px", color:"#333333" }}>Parents</span>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            FIXED OVERLAY — cartoons travel with scroll
            position:fixed so they float above everything.
            Left = page X (no horizontal scroll).
            Top  = pageY - scrollY  (page→viewport coord).
        ════════════════════════════════════════════════ */}
        {showOverlay && (
          <div style={{ position:"fixed", inset:0, zIndex:998, pointerEvents:"none" }}>
            {CARDS.map(card => {
              const p = overlayPos(card);
              return (
                <div key={card.key}
                     style={{
                       position: "absolute",
                       left:     p.left,
                       top:      p.top,
                       width:    p.width,
                       height:   p.height,
                       opacity:  overlayAlpha,
                       filter:   "drop-shadow(5px -3px 6px rgba(0,0,0,0.22))",
                       willChange: "left,top,width,height",
                     }}>
                  <img src={r(card.cartoonSrc)} alt=""
                       style={{ width:"100%", height:"100%",
                                objectFit:"contain", display:"block" }} />
                </div>
              );
            })}
          </div>
        )}

        {/* ════════════════════════════════════════════════
            ACADEMICS SECTION
            SVG cards grow from bottom → top via clip-path,
            driven by the same scroll progress.
        ════════════════════════════════════════════════ */}
        <section className="stripe-bg relative w-full overflow-hidden"
                 style={{ minHeight:1080 }}>
          <div style={{ position:"relative", maxWidth:1284,
                        margin:"0 auto", height:1080 }}>

            {/* Headline */}
            <div style={{ position:"absolute", left:40, top:124,
                          width:958, zIndex:2 }}>
              <h2 style={{ fontWeight:700, fontSize:48, lineHeight:"60px",
                           letterSpacing:"-0.02em", margin:0, color:"#333333" }}>
                Strong academics{" "}
                <span style={{ color:"#FF8B13" }}>aren&apos;t enough</span> anymore.
              </h2>
            </div>

            {/* ── SVG card container ── */}
            <div style={{ position:"absolute", top:174, left:"50%",
                          transform:"translateX(-50%)", width:1148,
                          height:CONTAINER_H, overflow:"visible", zIndex:3 }}>

              {CARDS.map((card) => {
                // growP: 0 (card hidden) → 1 (card fully revealed)
                const growP    = clamp((prog - card.growFrom) / (1 - card.growFrom), 0, 1);
                const cardTopY = CONTAINER_H - card.height; // bottom-align within container
                 const isBlueCard = card.key === "blue";
                 const isLightBlueCard = card.key === "lb";
                 const isRedCard = card.key === "red";
                 const isGreenCard = card.key === "green";
                

                return (
                  <React.Fragment key={card.key}>

                    {/* SVG card body
                        clip-path: inset(X% 0 0 0) clips from the TOP.
                        As X goes 100→0, the visible area grows BOTTOM → TOP.  */}
                    <div style={{
                      position:  "absolute",
                      left:      card.left,
                      top:       cardTopY,
                      width:     card.width,
                      height:    card.height,
                      clipPath:  `inset(${(1 - growP) * 100}% 0 0 0)`,
                      zIndex:    4,
                    }}>
                      
                        {isRedCard ? (
  <AnimatedRedCard />
) : isLightBlueCard ? (
  <AnimatedLightBlueCard />
) : isBlueCard ? (
  <AnimatedBlueCard />
) : isGreenCard ? (
  <AnimatedGreenCard />
) : (
  <img src={r(card.cardSrc)} alt=""
       style={{ width:"100%", height:"100%", objectFit:"fill", display:"block" }} />
)}
      </div>

                    {/* Text label — fades in once card is ~85% grown */}
                    <div style={{
                      position:   "absolute",
                      left:       card.left + 20,
                      top:        cardTopY + card.height - 28 - 128,
                      width:      card.width - 40,
                      zIndex:     5,
                      opacity:    growP > 0.85 ? 1 : 0,
                      transition: "opacity 0.25s ease",
                      pointerEvents: "none",
                    }}>
                      <p style={{ fontWeight:600, fontSize:20,
                                  lineHeight:"32px", color:card.textColor,
                                  margin:0 }}>
                        {card.text}
                      </p>
                    </div>

                  </React.Fragment>
                );
              })}
            </div>{/* end SVG cards */}

            {/* EQ quote box */}
            <div style={{ position:"absolute", left:107, top:667,
                          width:694, height:120,
                          border:"1px solid rgba(51,51,51,0.25)",
                          borderRadius:8, display:"flex", alignItems:"center",
                          padding:"0 24px",
                          background:"rgba(255,241,235,0.7)",
                          boxSizing:"border-box", zIndex:2 }}>
              <p style={{ fontWeight:700, fontSize:26, lineHeight:"34px",
                          letterSpacing:"-0.02em", color:"#333333", margin:0 }}>
                EQ is no longer an &quot;extra&quot; ; it&apos;s foundational to learning,
                behaviour, and wellbeing.
              </p>
            </div>

            {/* Vector 678 swoosh */}
            <div style={{ position:"absolute", left:672, top:692,
                          pointerEvents:"none", zIndex:2 }}>
              <svg width="221" height="127" viewBox="0 0 221 127"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.22921 1.18181C5.2401 2.30771 6.41318 3.88474 7.25996 5.10422C7.52567 5.48626 7.25396 5.40476 7.43174 5.67276C7.77951 6.19657 8.20775 6.59715 8.54022 7.11943C8.64979 7.29298 8.29426 7.25642 8.41362 7.43474C9.07518 8.418 9.79719 9.19583 10.5403 10.1817C14.1764 15.007 17.7163 19.3808 21.579 24.0773C22.8372 25.6073 24.1833 27.5211 25.6024 29.0029C25.77 29.1778 25.8424 28.9239 25.8863 28.9467C26.57 29.3083 26.0757 29.42 26.3396 29.8136C27.3875 31.3744 28.7257 32.9311 29.9533 34.1914C30.476 34.7268 30.3089 33.875 30.6221 34.601C30.6442 34.6511 30.343 34.665 30.4598 34.8348C30.7253 35.2197 31.3388 35.8475 31.5622 36.1264C31.9929 36.666 32.066 36.7444 32.5017 37.2364C33.1122 37.9284 33.7544 38.8191 34.4493 39.5106C34.5981 39.6577 34.5918 39.2912 34.8451 39.511C35.0987 39.7314 35.6727 40.3966 35.8288 40.6532C35.9851 40.9102 35.7605 40.944 35.7635 41.0119C35.7815 41.577 36.8357 41.9826 36.9319 42.0693C38.6836 43.674 39.801 45.3136 41.3602 46.9878C42.5263 48.2386 43.8342 49.491 44.9209 50.6558C46.2104 52.0394 47.2269 53.2895 48.5629 54.6381C48.7024 54.7792 48.744 54.4154 48.9147 54.5872C50.7304 56.4141 52.4592 58.2154 54.0953 60.1218C54.265 60.3188 53.8529 60.2583 54.012 60.4657C54.9898 61.7339 56.4139 63.8248 57.8284 63.6919C58.5509 64.4569 59.43 65.3687 59.9475 66.1683C60.2815 66.6836 59.6754 66.4773 60.2849 66.9015C60.4224 66.9975 60.4299 66.6766 60.6249 66.8345C61.4689 67.522 62.2698 68.3877 63.1243 69.0229C63.2985 69.1516 63.4011 68.9566 63.4717 68.9704C64.0564 69.0949 64.3257 70.0468 64.4355 70.1997C65.2744 71.3595 66.0974 71.9689 67.0444 72.8424C67.264 73.0449 67.1953 72.5963 67.4134 72.7833C68.5758 73.787 69.747 74.872 70.7738 75.9506C71.0021 76.1913 70.6135 76.1718 70.7144 76.2961C71.1616 76.8418 71.5804 76.5989 72.0136 77.1109C72.1053 77.2183 71.909 77.3229 71.9131 77.3569C71.9774 77.89 72.5725 77.7345 72.6568 77.7931C73.7286 78.5227 74.0116 79.4668 75.0415 80.2462C75.1643 80.3381 75.0722 79.9142 75.4066 80.1846C77.6535 81.9996 79.8132 83.8759 81.9328 85.8368C82.2566 86.1365 81.8878 86.0953 81.8942 86.1316C82.0102 86.7112 82.5562 86.4923 82.6799 86.5658C83.6489 87.1565 84.2104 88.1363 85.1802 88.1173C88.803 91.1825 92.7809 93.6571 96.4179 96.7735C96.464 96.8122 96.2343 96.9604 96.3269 97.0368C97.4405 97.9564 97.4299 97.4773 98.4787 97.5994C98.7421 97.63 99.0272 98.5066 99.0578 98.5767C99.1669 98.8339 98.7611 99.0156 98.8097 99.0834C99.2171 99.6312 99.8126 98.5444 100.556 99.0218C100.578 99.0386 100.357 99.1672 100.407 99.2264C100.564 99.4113 100.806 99.4586 100.954 99.646C101.292 100.076 101.128 100.684 101.982 100.806C102.09 100.82 102.334 100.147 102.981 100.588C103.239 100.766 104.418 101.474 104.722 101.71C105.027 101.947 104.685 102.005 104.703 102.027C105.435 102.816 105.035 102.72 105.253 103.366C105.481 104.013 105.894 103.036 106.138 103.044C106.384 103.053 106.926 103.657 107.047 103.826C107.168 103.995 106.891 104.001 107.013 104.128C107.823 104.962 107.699 103.921 108.1 103.959C109.044 104.045 109.242 105.052 109.893 105.502C110.069 105.623 110.004 105.384 110.177 105.461C110.862 105.767 111.14 106.197 111.991 106.402C112.134 106.438 112.97 106.354 113.207 106.868C113.241 106.942 112.989 107.029 113.255 107.218C113.652 107.501 114.403 107.939 114.891 108.116C115.252 108.246 115.01 107.763 115.391 108.068C115.56 108.204 115.124 108.193 115.449 108.434C115.773 108.675 116.684 109.121 117.032 109.284C117.379 109.447 117.298 109.137 117.333 109.136C117.542 109.135 118.253 109.349 118.311 109.377C121.328 110.799 123.889 112.384 126.954 113.484C127.192 113.57 127.132 113.269 127.17 113.28C128.01 113.503 127.124 113.881 127.601 114.317C127.713 113.802 128.009 114.022 128.595 114.191C128.878 114.271 128.803 114.026 128.835 114.016C129.349 113.889 129.487 114.364 129.531 114.468C129.693 114.848 130.109 114.631 130.221 114.885C130.334 115.138 129.81 115.254 130.357 115.455C130.575 115.338 130.342 114.732 130.782 114.812C132.453 115.127 135.268 116.504 136.533 116.947C137.791 117.395 138.224 117.49 138.951 117.783C140.27 118.307 139.877 117.812 140.763 117.899C141.65 117.983 140.997 118.718 141.066 118.937C141.133 119.154 141.317 119.003 141.438 119.145C141.558 119.288 141.201 119.322 141.54 119.459C141.88 119.596 142.929 119.531 143.104 119.371C143.476 119.033 143.159 118.49 144.043 118.886C144.094 118.909 143.862 119.089 144.06 119.166C145.636 119.766 147.326 120.188 148.927 120.709C149.147 120.781 148.89 120.99 149.017 121.034C150.35 121.498 149.955 120.962 150.802 120.645C150.501 121.242 150.833 121.721 151.877 121.935C152.504 122.063 152.451 121.763 152.894 121.647C153.027 121.612 153.434 121.887 153.539 121.772C153.885 121.394 153.557 120.84 154.593 121.228C154.639 121.245 154.446 121.452 154.607 121.496C155.643 121.778 155.851 121.353 156.994 121.488C157.888 121.594 159.432 122.111 160.449 122.297C160.325 123.015 161.32 122.984 161.778 122.537C162.44 122.645 163.166 122.706 163.795 122.849C164.012 122.899 163.843 123.091 163.868 123.117C164.254 123.521 164.599 123.068 164.744 123.065C166.316 123.051 167.554 123.541 169.082 123.306C169.137 123.297 169.263 122.801 169.634 123.201C169.658 123.228 169.145 123.418 169.848 123.492C170.541 123.565 171.842 123.928 172.832 123.751C173.072 123.709 173.69 123.333 174.153 123.678C174.215 123.725 174.137 123.866 174.226 123.951C174.512 124.223 174.7 123.721 175.032 124.171C175.361 124.62 176.099 124.979 177.09 124.713C177.122 124.706 177.367 124.309 177.675 124.325C178.167 124.351 178.866 124.453 179.383 124.462C179.631 124.465 179.477 124.211 179.52 124.207C181.182 124.098 182.385 124.333 184.166 124.424C184.491 124.441 185.42 124.091 186.055 124.352C186.755 124.638 186.057 125.887 187.661 125.56C188.311 125.428 189.084 123.842 190.281 124.612C192.513 124.332 194.595 124.642 196.853 124.207C196.954 124.188 197.248 123.73 197.489 123.72C197.847 123.705 198.055 123.895 198.304 123.891C199.353 123.877 200.299 123.628 201.317 123.569C201.704 123.547 201.586 123.769 202.049 123.74C202.511 123.712 202.794 123.407 203.433 123.483C203.917 123.541 204.446 124.062 205.087 124.065C205.056 123.505 205.493 123.474 206.228 123.249C206.37 123.205 206.194 123.027 206.261 122.997C206.529 122.868 206.804 123.002 207.058 122.864C207.12 122.831 207.103 122.641 207.152 122.603C207.57 122.275 208.358 122.621 208.494 122.681C209.015 122.909 209.217 122.635 209.606 122.703C209.995 122.771 209.448 122.975 209.896 122.992C210.825 123.025 212 122.851 212.937 122.74C213.308 122.695 213.023 122.474 213.075 122.461C213.817 122.301 214.615 122.47 214.966 121.909C215.666 123.143 215.403 121.722 216.522 121.833C216.61 121.842 216.805 122.444 216.489 122.58C216.173 122.716 215.649 122.591 215.215 122.794C215.112 122.842 214.573 123.502 214.494 123.548C213.872 123.908 213.66 122.997 213.619 122.951C213.163 122.454 212.471 123.175 212.275 123.244C211.375 123.556 210.577 123.52 209.826 123.751C209.335 123.9 209.355 124.511 208.959 124.537C207.643 124.622 207.101 123.825 205.955 124.684C205.706 124.867 206.051 125.503 205.032 125.078C204.967 125.051 204.208 124.643 203.826 124.983C203.778 125.026 203.798 125.219 203.731 125.242C203.284 125.389 202.966 125.263 202.477 125.381C201.988 125.498 201.403 125.659 200.834 125.639C200.491 125.628 200.028 125.302 199.86 125.226C199.384 125.007 198.927 125.46 198.623 125.173C198.317 124.883 198.836 124.374 198.081 124.226C198.089 124.731 198.063 125.252 198.053 125.761C196.376 125.861 194.732 125.795 193.08 125.897C192.875 125.91 193.097 126.171 192.878 126.192C191.947 126.278 191.151 126.118 190.171 126.229C189.417 126.316 188.598 126.627 187.812 126.717C187.318 126.152 186.16 126.369 185.318 126.325C185.024 126.309 185.042 126.155 184.833 126.106C184.044 125.926 184.416 126.433 184.2 126.515C183.278 126.86 183.182 125.707 182.08 125.73C182.022 125.731 181.301 126.34 181.201 126.377C180.572 126.619 181.1 126.162 180.709 126.111C179.996 126.018 179.505 125.862 178.667 126.022C178.423 126.069 177.828 126.437 177.366 126.125C177.306 126.084 177.347 125.882 177.297 125.868C176.406 125.639 176.354 126.276 175.822 126.471C175.288 126.666 174.501 126.187 174.345 126.052C173.933 125.702 174.679 125.928 174.704 125.896C174.995 125.525 174.406 125.564 173.961 125.508C173.929 124.88 173.306 124.883 173.5 125.453C173.523 125.515 173.873 125.475 173.961 125.508C173.538 126.102 172.841 126.143 172.122 125.522C171.786 125.23 172.139 124.94 171.064 124.982C170.576 125 170.732 125.443 170.295 125.529C169.301 125.726 168.035 125.215 167.02 125.182C166.65 125.17 166.986 125.439 166.732 125.439C166.057 125.438 165.487 125.202 164.809 125.219C164.747 125.221 164.869 125.483 164.66 125.464C163.084 125.319 161.721 124.991 160.076 124.756C159.281 124.644 157.843 124.565 157.028 124.404C155.616 124.132 153.927 123.464 152.707 123.316C151.909 123.218 152.034 123.494 151.663 123.592C150.945 123.783 149.912 122.968 149.778 122.845C149.774 122.842 150.461 122.928 150.127 122.727C149.973 122.424 149.786 122.846 149.778 122.845C149.689 122.768 148.354 122.417 148.077 122.401C147.926 122.393 147.955 122.64 147.877 122.631C146.03 122.424 144.21 122.033 142.427 121.438C142.397 121.425 142.513 121.185 142.441 121.157C141.427 120.761 140.675 120.881 139.76 120.813C138.846 120.745 138.18 120.476 137.805 119.89C137.142 119.746 136.275 119.262 135.788 118.977C135.299 118.691 135.066 119.15 135.016 119.144C133.464 118.969 132.719 118.403 131.237 117.822C130.529 117.544 129.105 117.091 128.327 116.849C127.71 116.658 127.392 116.405 126.811 116.256C126.732 116.236 126.723 116.477 126.697 116.476C125.978 116.481 126.482 116.084 126.392 115.941C126.065 115.42 125.855 115.129 125.004 114.959C124.809 114.92 123.97 115.436 123.618 115.337C123.162 115.207 123.44 115.014 122.967 114.886C122.927 114.875 122.864 115.041 122.593 114.915C121.332 114.332 119.988 113.614 118.66 113.012C118.479 112.929 118.591 113.291 118.327 113.175C117.078 112.626 115.772 111.979 114.664 111.275C114.391 111.101 114.66 111.016 114.624 110.933C114.401 110.426 113.628 110.606 113.533 110.569C111.276 109.686 109.882 108.408 107.66 107.413C107.539 107.36 106.374 107.331 106.211 106.692C106.2 106.649 106.049 106.006 105.536 106.089C105.504 106.094 105.624 106.451 105.209 106.18C104.797 105.91 104.013 105.64 103.589 105.068C103.452 104.885 103.274 104.218 102.536 104.217C102.488 104.22 101.199 104.447 101.214 103.753C101.218 103.639 101.602 103.133 100.787 103.007C100.63 102.984 100.779 103.243 100.408 103.115C99.8374 102.918 99.2689 102.358 98.5037 102.201C98.3707 102.175 97.6792 102.241 97.4939 101.732C97.4662 101.653 97.6868 101.544 97.5127 101.403C96.6859 100.729 95.6759 100.23 94.853 99.4984C94.5615 99.2396 94.9164 99.0672 94.6346 98.7657C94.3526 98.4642 93.7314 97.9326 93.2936 97.8198C92.8554 97.7067 92.9282 98.4193 92.3783 98.0912C89.9775 96.6542 88.0243 94.8479 85.8207 93.1385C85.4956 92.8857 85.6518 93.2471 85.1637 92.8842C83.393 91.5758 80.3019 89.3912 79.0405 87.8376C78.0366 86.6022 79.7196 87.636 78.8793 86.784C78.4779 86.3766 77.6204 86.4938 77.5014 86.4222C76.3548 85.7461 75.8238 84.9419 74.8487 84.2383C74.6472 84.0926 74.6689 84.4456 74.499 84.3193C73.9171 83.8893 73.4086 83.3095 72.8649 82.8741C72.6205 82.679 72.5372 82.8655 72.3279 82.6668C71.825 82.1925 71.4131 81.7293 71.046 81.1688C71.0121 81.1173 71.4743 81.195 71.1065 80.8646C70.5105 80.3299 69.8781 79.5372 69.0556 79.0613C68.811 78.9206 68.5063 79.2493 68.2646 78.6221C68.2137 78.4904 68.6905 78.1953 67.8615 78.0798C67.7233 78.0607 66.4288 77.7451 66.2674 77.0555C66.2248 76.8741 66.2296 76.2861 65.9323 76.1103C65.8909 76.0877 65.866 76.3896 65.6421 76.2185C64.8397 75.5978 64.142 74.9257 63.3568 74.3049C63.1483 74.1408 63.2695 74.591 62.9639 74.3402C62.1232 73.6507 61.1665 72.6729 60.4347 71.8775C60.1653 71.584 60.5067 71.622 60.501 71.5859C60.4128 71.0017 59.8744 71.1706 59.742 71.085C58.926 70.55 58.5397 69.8625 57.8656 69.3017C57.6825 69.1488 57.6418 69.4352 57.5931 69.4175C57.0963 69.2246 57.6529 69.174 57.4604 68.9247C56.922 68.2251 56.2058 67.5588 55.5451 66.9573C55.3021 66.7365 55.3763 67.189 55.1603 66.9884C53.878 65.8043 52.5904 64.4966 51.4653 63.1605C51.2538 62.9086 51.5479 62.906 51.5334 62.8238C51.4289 62.2457 50.6515 62.113 50.5089 62.0312C49.8764 61.6771 49.8167 61.3533 49.357 60.9376C47.13 58.9327 44.4764 56.0125 42.6162 53.9428C40.1463 51.2018 38.2102 48.8321 35.799 46.2836C35.645 46.1203 35.5925 46.4757 35.4571 46.3373C33.7172 44.54 32.1214 42.6175 30.3414 40.7527C30.1957 40.5993 30.2023 41.003 29.9617 40.7624C29.4613 40.2643 28.8988 39.6125 28.5109 39.0497C28.3202 38.7742 28.7863 38.9566 28.5909 38.6823C28.1363 38.0433 27.5937 37.4029 27.027 36.8255C26.7854 36.5801 26.9263 37.1482 26.6278 36.815C24.6079 34.5682 22.4954 32.2166 20.7941 29.7075C20.6756 29.5333 20.9722 29.0354 20.6014 28.7664C20.4639 28.8404 20.3291 28.9589 20.1959 29.0541C17.267 25.7865 14.4495 22.1657 11.6784 18.8045C11.5592 18.6601 11.5434 19.0953 11.3114 18.8165C9.96802 17.202 8.58932 15.6684 7.41667 13.793C7.29994 13.6071 7.76644 13.3675 7.29815 12.9214C7.21423 12.842 6.54811 12.1405 6.3148 12.0318C6.28102 12.0171 6.20444 12.3006 6.00803 12.0727C4.86972 10.7454 3.74165 9.28042 2.73392 7.81161C2.57163 7.57425 2.96183 7.65003 2.84796 7.47956C2.03885 6.27178 0.889214 5.16175 0.187153 3.92517C-0.282177 3.09655 0.278901 3.09032 0.302199 2.42918C0.305416 2.33586 -0.0533413 1.87554 0.123986 1.69368C0.569063 1.23547 1.28695 1.01971 1.74038 0.505276C1.83844 0.395036 1.22604 -0.11517 1.79028 0.0244446C1.82894 0.0349517 2.275 0.402281 2.45518 0.435523C2.58023 0.459111 2.67025 0.162263 2.87651 0.249728C3.08265 0.337169 3.05164 0.641034 3.3535 0.817278C3.65636 0.992219 3.79328 0.697632 4.22921 1.18181Z"
                      fill="#FF8B13"/>
              </svg>
            </div>

            {/* Script text */}
            <div style={{ position:"absolute", left:898, top:800,
                          width:332, textAlign:"center", zIndex:2 }}>
              <p style={{ fontFamily:"'Caveat', cursive", fontWeight:700,
                          fontSize:30, lineHeight:"38px", color:"#FF8B13", margin:0 }}>
                This is a leadership responsibility, not a nice-to-have
              </p>
            </div>

          </div>
        </section>
        <SchoolChallengeSection />
       {/* <SchoolBuildingSection />*/}

      </main>
    </>
  );
}