"use client";

import React, { useState } from "react";
import blueCartImg  from "@/assets/in-Use/bluecartimg.svg?url";
import greenCartImg from "@/assets/in-Use/greencartimg.svg?url";
import redCartImg   from "@/assets/in-Use/redcartimg.svg?url";
import girl1Src     from "@/assets/in-Use/girl1.svg?url";
import girl2Src     from "@/assets/in-Use/girl2.svg?url";
import leftBgSrc   from "@/assets/in-Use/leftbg.svg?url";
import bottomBgSrc from "@/assets/in-Use/bottombg.svg?url";

const r = (s) => typeof s === "string" ? s : (s?.src ?? s);

/* ── Testimonials data ── */
const TESTIMONIALS = [
  {
    quote: "Sensei brought a structured approach to social-emotional learning that we couldn't find anywhere else. Our teachers felt supported, not burdened.",
    name:  "Full Name",
    city:  "City name, State name",
  },
  {
    quote: "We saw noticeable improvements in student confidence and classroom behaviour within months.",
    name:  "Principal name",
    city:  "school name",
  },
  {
    quote: "The program fits seamlessly into our timetable. Students look forward to the sessions and teachers report calmer classrooms.",
    name:  "Full Name",
    city:  "City name, State name",
  },
];

/* ── User icon ── */
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── X circle icon ── */
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#EF5F3D" strokeWidth="2"/>
    <path d="M15 9l-6 6M9 9l6 6" stroke="#EF5F3D" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── Chevron icons ── */
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 12L6 8l4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Star icon ── */
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SchoolBuildingSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActiveIdx(i => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[activeIdx];

  return (
    <section style={{
      position:   "relative",
      width:      "100%",
      background: "#FFFFFF",
      overflow:   "hidden",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>

      {/* ── Left BG decoration ── */}
      <div style={{
        position: "absolute", left: 0, top: "38%",
        width: 600, pointerEvents: "none", zIndex: 0, opacity: 0.08,
        mixBlendMode: "multiply",
      }}>
        <img src={r(leftBgSrc)} alt="" aria-hidden="true" style={{ width: "100%" }} />
      </div>

      {/* ── Bottom BG decoration ── */}
      <div style={{
        position: "absolute", left: 0, bottom: 0,
        width: "100%", pointerEvents: "none", zIndex: 0,
      }}>
        <img src={r(bottomBgSrc)} alt="" aria-hidden="true" style={{ width: "100%" }} />
      </div>

      {/* ── Centered 1280 container ── */}
      <div style={{
        position: "relative", maxWidth: 1280, margin: "0 auto",
        minHeight: 3695, overflow: "visible",
      }}>

        {/* Glow ellipses */}
        <div style={{ position:"absolute", left:59,  top:820,  width:359, height:535, borderRadius:"50%", background:"linear-gradient(175.97deg,#F4BC37 35.44%,#EC5F3D 101.05%)", opacity:0.5, filter:"blur(100px)", transform:"matrix(1,0,0,-1,0,0)", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"absolute", left:891, top:1087, width:359, height:535, borderRadius:"50%", background:"linear-gradient(175.97deg,#F4BC37 35.44%,#EC5F3D 101.05%)", opacity:0.5, filter:"blur(100px)", transform:"matrix(1,0,0,-1,0,0)", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"absolute", left:997, top:92,   width:359, height:535, borderRadius:"50%", background:"linear-gradient(175.97deg,#F4BC37 35.44%,#EC5F3D 101.05%)", opacity:0.5, filter:"blur(100px)", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"absolute", left:791, top:1908, width:359, height:535, borderRadius:"50%", background:"linear-gradient(175.97deg,#F4BC37 35.44%,#EC5F3D 101.05%)", opacity:0.5, filter:"blur(100px)", transform:"matrix(-0.63,0.78,0.78,0.63,0,0)", pointerEvents:"none", zIndex:0 }} />

        {/* ═══════════════════════════════════════════════════════
            SECTION 1 — "Schools like yours are already building..."
        ═══════════════════════════════════════════════════════ */}

        {/* Headline */}
        <h2 style={{
          position:"absolute", left:40, top:124,
          width:1101, height:120, margin:0,
          fontWeight:700, fontSize:48, lineHeight:"60px",
          letterSpacing:"-0.02em", color:"#333333",
          display:"flex", alignItems:"center",
          zIndex:2,
        }}>
          Schools like yours are already{" "}
          <span style={{ color:"#FF8B13", marginLeft:12 }}>building emotionally strong learners</span>
        </h2>

        {/* ── Testimonial frame: left:40, top:263, width:864, height:388 ── */}
        <div style={{
          position:"absolute", left:40, top:263,
          width:864, height:388, zIndex:2,
        }}>
          {/* Orange bg rectangle */}
          <div style={{
            position:"absolute", left:27, top:43,
            width:806, height:300,
            background:"#FFE9D5",
            boxShadow:"inset 4px 4px 9px rgba(0,0,0,0.2)",
            borderRadius:32,
          }} />

          {/* Quote marks */}
          <div style={{ position:"absolute", left:19, top:22, color:"#2C3D68", fontSize:72, lineHeight:1, fontFamily:"Georgia,serif", zIndex:3 }}>&ldquo;</div>
          <div style={{ position:"absolute", left:812, top:303, color:"#2C3D68", fontSize:72, lineHeight:1, fontFamily:"Georgia,serif", zIndex:3, transform:"rotate(180deg)" }}>&ldquo;</div>

          {/* Active testimonial card */}
          <div style={{
            position:"absolute", left:64, top:78,
            width:598, padding:24,
            background:"#FFFFFF",
            boxShadow:"0px 4px 8px rgba(0,0,0,0.25)",
            borderRadius:32,
            display:"flex", flexDirection:"column",
            gap:16, zIndex:4,
            boxSizing:"border-box",
          }}>
            <p style={{
              margin:0, fontWeight:400, fontSize:18, lineHeight:"23px", color:"#000000",
              width:550,
            }}>
              {t.quote}
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{
                width:40, height:40, borderRadius:24,
                background:"#FF8B13", flexShrink:0,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <UserIcon />
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:16, lineHeight:"20px", color:"#333333" }}>{t.name}</p>
                <p style={{ margin:0, fontWeight:400, fontSize:14, lineHeight:"18px", color:"#999999" }}>{t.city}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows: left: calc(50% - 85/2 + 5.5) = ~386, top:293 */}
          <div style={{
            position:"absolute", left:386, top:293,
            display:"flex", flexDirection:"row", gap:21,
            alignItems:"center", zIndex:5,
          }}>
            <button onClick={prev} style={{
              width:32, height:32, borderRadius:24,
              background:"rgba(255,139,19,0.5)",
              border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <ChevronLeft />
            </button>
            <button onClick={next} style={{
              width:32, height:32, borderRadius:24,
              background:"rgba(255,139,19,0.5)",
              border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ── Animated character placeholder: left:935, top:291 ── */}
        <div style={{
          position:"absolute", left:935, top:291,
          width:249, height:326,
          background:"#D9D9D9", borderRadius:16,
          display:"flex", alignItems:"center", justifyContent:"center",
          zIndex:2,
        }}>
          <p style={{
            margin:0, fontWeight:700, fontSize:48, lineHeight:"60px",
            letterSpacing:"-0.02em", color:"#000000", textAlign:"center",
          }}>animated<br/>character</p>
        </div>

        {/* ── Rectangle 2557 border box: left:806, top:671, w:474, h:84 ── */}
        <div style={{
          position:"absolute", left:806, top:671,
          width:474, height:84, boxSizing:"border-box",
          border:"1px solid #6B6868", opacity:0.25,
          zIndex:2, pointerEvents:"none",
        }} />

        {/* ── "We wouldn't be the first." text: left:824, top:694 ── */}
        <p style={{
          position:"absolute", left:824, top:694,
          width:332, margin:0,
          fontFamily:"'Caveat', cursive",
          fontWeight:700, fontSize:30, lineHeight:"38px",
          textAlign:"center", color:"#FF8B13",
          whiteSpace:"nowrap", zIndex:3,
        }}>
          We wouldn&apos;t be the first.
        </p>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — "Sensei is a good fit for your school"
        ═══════════════════════════════════════════════════════ */}

        {/* Headline: left:38, top:848 */}
        <h2 style={{
          position:"absolute", left:38, top:848,
          width:1101, height:60, margin:0,
          fontWeight:700, fontSize:48, lineHeight:"60px",
          letterSpacing:"-0.02em", color:"#333333",
          display:"flex", alignItems:"center",
          zIndex:2,
        }}>
          Sensei is a <span style={{ color:"#FF8B13", margin:"0 12px" }}>good fit</span> for your school
        </h2>

        {/* ── GREEN panel (Group 40381): left:-16, top:940, w:768, h:337 ── */}
        <div style={{
          position:"absolute", left:-16, top:940,
          width:768, height:337,
          zIndex:2, overflow:"visible",
        }}>
          {/* girl1 image: left:34, top:-91 relative to group */}
          <img src={r(girl1Src)} alt="Student girl" style={{
            position:"absolute", left:34, top:-91,
            width:440, height:336,
            objectFit:"cover", zIndex:3,
          }} />

          {/* White shadow box (inset) */}
          <div style={{
            position:"absolute", left:-16, top:91,
            width:768, height:246,
            background:"#FFFFFF",
            boxShadow:"inset 0px 0px 4px 4px rgba(0,0,0,0.25)",
            borderRadius:"0px 16px 16px 0px",
            zIndex:1,
          }} />

          {/* Green dashed content panel */}
          <div style={{
            position:"absolute", left:15, top:89,
            width:753, height:248,
            background:"#EBFFF5",
            border:"2px dashed #4B926F",
            borderRadius:"0px 16px 16px 0px",
            display:"flex", flexDirection:"column",
            justifyContent:"center", alignItems:"flex-end",
            padding:"24px 40px",
            gap:24, boxSizing:"border-box",
            zIndex:2,
          }}>
            {[
              "Cares about student well-being",
              "Wants structured EQ, not ad-hoc workshops",
              "Values calm, confident learners",
            ].map((text, i) => (
              <p key={i} style={{
                margin:0, fontWeight:700, fontSize:18, lineHeight:"38px",
                letterSpacing:"-0.02em", color:"#000000",
                textAlign:"right",
              }}>{text}</p>
            ))}
          </div>
        </div>

        {/* girl1 image also appears at top:1031 area (second copy) */}
        <img src={r(girl1Src)} alt="" style={{
          position:"absolute", left:18, top:940,
          width:440, height:293,
          objectFit:"cover", zIndex:1,
          pointerEvents:"none",
        }} />

        {/* ── RED panel (Group 40382): left:538, top:1121, w:764, h:347 ── */}
        <div style={{
          position:"absolute", left:538, top:1121,
          width:764, height:347,
          zIndex:2, overflow:"visible",
        }}>
          {/* girl2 image (mirrored): left:463, top:-196, w:197, h:347 */}
          <img src={r(girl2Src)} alt="Student" style={{
            position:"absolute", left:463, top:-196,
            width:197, height:347,
            objectFit:"cover",
            transform:"matrix(-1,0,0,1,0,0)",
            zIndex:3,
          }} />
          {/* girl2 second copy at right: left:1001 - 538 = 463 */}
          <img src={r(girl2Src)} alt="" style={{
            position:"absolute", left:463, top:0,
            width:197, height:311,
            objectFit:"cover",
            transform:"matrix(-1,0,0,1,0,0)",
            zIndex:1, pointerEvents:"none",
          }} />

          {/* White shadow box */}
          <div style={{
            position:"absolute", left:0, top:196,
            width:764, height:151,
            background:"#FFFFFF",
            boxShadow:"inset 0px 0px 4px 4px rgba(0,0,0,0.25)",
            borderRadius:"16px 0px 0px 16px",
            zIndex:1,
          }} />

          {/* Red dashed content panel */}
          <div style={{
            position:"absolute", left:0, top:198,
            width:753, height:148,
            background:"#FFF3F1",
            border:"2px dashed #EF5F3D",
            borderRadius:"16px 0px 0px 16px",
            display:"flex", flexDirection:"column",
            justifyContent:"center", alignItems:"flex-start",
            padding:"24px 40px",
            gap:24, boxSizing:"border-box",
            zIndex:2,
          }}>
            {[
              "Looking for short-term events only",
              "Wants zero involvement or alignment",
            ].map((text, i) => (
              <p key={i} style={{
                margin:0, fontWeight:700, fontSize:18, lineHeight:"38px",
                letterSpacing:"-0.02em", color:"#000000",
              }}>{text}</p>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — "What schools implement with Sensei"
        ═══════════════════════════════════════════════════════ */}

        {/* Headline: left:38, top:1547 */}
        <h2 style={{
          position:"absolute", left:38, top:1547,
          width:1101, height:60, margin:0,
          fontWeight:700, fontSize:48, lineHeight:"60px",
          letterSpacing:"-0.02em", color:"#333333",
          display:"flex", alignItems:"center",
          zIndex:2,
        }}>
          What schools <span style={{ color:"#FF8B13", margin:"0 12px" }}>implement</span> with Sensei
        </h2>

        {/* ── Three cartoon cards: Frame 1116607575
            left: calc(50% - 816/2) = 232, top:1661, w:816, h:377 ── */}
        <div style={{
          position:"absolute", left:232, top:1661,
          width:816, height:377,
          display:"flex", flexDirection:"row",
          justifyContent:"center", alignItems:"flex-end",
          gap:55, zIndex:2,
        }}>

          {/* Blue cart — Group 40368: w:244, h:347 */}
          <div style={{ width:244, height:347, flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{
              width:244, height:244, borderRadius:16,
              border:"1px solid #A0C4E7",
              background:"#FFFFFF",
              overflow:"hidden",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <img src={r(blueCartImg)} alt="Blue cartoon" style={{ width:"80%", height:"80%", objectFit:"contain" }} />
            </div>
            <p style={{
              margin:"16px 0 0", fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", textAlign:"center", width:210,
            }}>
              Age-appropriate EQ &amp; life-skills programs
            </p>
          </div>

          {/* Green cart — Group 40369: w:222, h:358 */}
          <div style={{ width:222, height:358, flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{
              width:222, height:222, borderRadius:16,
              border:"1px solid #38A077",
              background:"#FFFFFF",
              overflow:"hidden",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <img src={r(greenCartImg)} alt="Green cartoon" style={{ width:"80%", height:"80%", objectFit:"contain" }} />
            </div>
            <p style={{
              margin:"16px 0 0", fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", textAlign:"center", width:179,
            }}>
              Delivered during school hours
            </p>
          </div>

          {/* Red cart — Group 40370: w:240, h:377 */}
          <div style={{ width:240, height:377, flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{
              width:240, height:240, borderRadius:16,
              background:"#FFE9D5",
              boxShadow:"2px 2px 8px rgba(0,0,0,0.12)",
              overflow:"hidden",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <img src={r(redCartImg)} alt="Red cartoon" style={{ width:"80%", height:"80%", objectFit:"contain" }} />
            </div>
            <p style={{
              margin:"16px 0 0", fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", textAlign:"center", width:175,
            }}>
              Designed for long-term impact
            </p>
          </div>

        </div>

        {/* ── Rectangle 2563 border box: left:149, top:2068, w:1173, h:120 ── */}
        <div style={{
          position:"absolute", left:149, top:2068,
          width:1173, height:120, boxSizing:"border-box",
          border:"1px solid #333333", opacity:0.25, borderRadius:8,
          zIndex:2, pointerEvents:"none",
        }} />

        {/* ── Frame 1116607556: left:168, top:2087, w:393, h:82 ── */}
        <div style={{
          position:"absolute", left:168, top:2087,
          width:393, height:82,
          display:"flex", flexDirection:"column",
          gap:6, zIndex:3,
        }}>
          {/* Row 1 — X circle + "No curriculum deep dive" */}
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <div style={{
              width:36, height:36, borderRadius:8,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            }}>
              <XIcon />
            </div>
            <p style={{
              margin:0, fontWeight:700, fontSize:30, lineHeight:"38px", color:"#EF5F3D",
            }}>
              No curriculum deep dive
            </p>
          </div>
          {/* Row 2 — X circle + "No feature lists" */}
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <div style={{
              width:36, height:36, borderRadius:8,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            }}>
              <XIcon />
            </div>
            <p style={{
              margin:0, fontWeight:700, fontSize:30, lineHeight:"38px", color:"#EF5F3D",
            }}>
              No feature lists
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4 — "See how Sensei can work in your school"
        ═══════════════════════════════════════════════════════ */}

        {/* Frame 1116607576: left:38, top:2302, w:879, h:136 */}
        <div style={{
          position:"absolute", left:38, top:2302,
          width:879, height:136,
          display:"flex", flexDirection:"column",
          gap:12, zIndex:2,
        }}>
          <h2 style={{
            margin:0, fontWeight:700, fontSize:48, lineHeight:"60px",
            letterSpacing:"-0.02em", color:"#333333",
          }}>
            See how Sensei can work in{" "}
            <span style={{ color:"#FF8B13" }}>your school</span>
          </h2>
          <p style={{
            margin:0, fontWeight:500, fontSize:20, lineHeight:"32px",
            letterSpacing:"-0.02em", color:"#333333", width:876,
          }}>
            Sensei partners with schools to nurture emotional intelligence and life skills through structured,
            school-ready programs without disrupting academics or overloading teachers.
          </p>
        </div>

        {/* ── Form box: left: calc(50% - 1115/2 - 0.5) ≈ 82, top:2492, w:1115, h:465 ── */}
        <div style={{
          position:"absolute",
          left:"50%", transform:"translateX(-50%)",
          top:2492, width:1115, height:465,
          background:"#FFE9D5",
          boxShadow:"inset 4px 4px 8px rgba(0,0,0,0.25)",
          borderRadius:16, zIndex:2,
          overflow:"hidden",
        }}>

          {/* Inner content: Frame 1116607589 */}
          <div style={{
            position:"absolute", left:0, top:0,
            width:1115, height:427,
            display:"flex", flexDirection:"column",
            alignItems:"center", padding:0, gap:16,
          }}>

            {/* Frame 1116607583: the form fields area, w:1115, h:347 */}
            <div style={{
              width:1115, padding:24,
              boxSizing:"border-box",
              display:"flex", flexDirection:"column", gap:32,
            }}>

              {/* Form lines — Frame 1116607582 */}
              <div style={{
                display:"flex", flexWrap:"wrap",
                alignItems:"flex-end", gap:16,
                width:1067,
              }}>

                {/* Line 1: "Hey, my name is ___" */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:16, height:41 }}>
                  <span style={{ fontWeight:700, fontSize:24, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                    Hey, my name is
                  </span>
                  <div style={{
                    width:324, height:41, borderBottom:"3px solid #333333",
                    display:"flex", alignItems:"center", padding:"8px 16px", boxSizing:"border-box",
                  }}>
                    <span style={{ fontWeight:500, fontSize:20, lineHeight:"25px", color:"#999999", letterSpacing:"-0.02em" }}>
                      Type here
                    </span>
                  </div>
                </div>

                {/* Line 2: "and I work as a ___" */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:16, height:41 }}>
                  <span style={{ fontWeight:700, fontSize:24, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                    and I work as a
                  </span>
                  <div style={{
                    width:229, height:41, borderBottom:"3px solid #333333",
                    display:"flex", alignItems:"center", padding:"8px 16px", boxSizing:"border-box",
                  }}>
                    <span style={{ fontWeight:500, fontSize:20, lineHeight:"25px", color:"#999999", letterSpacing:"-0.02em" }}>
                      Role
                    </span>
                  </div>
                </div>

                {/* Line 3: "at ___." */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:16, height:41 }}>
                  <span style={{ fontWeight:700, fontSize:24, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                    at
                  </span>
                  <div style={{
                    width:351, height:41, borderBottom:"3px solid #333333",
                    display:"flex", alignItems:"center", padding:"8px 16px", boxSizing:"border-box",
                  }}>
                    <span style={{ fontWeight:500, fontSize:20, lineHeight:"25px", color:"#999999", letterSpacing:"-0.02em" }}>
                      School name
                    </span>
                  </div>
                  <span style={{ fontWeight:700, fontSize:32, lineHeight:"40px", letterSpacing:"-0.02em", color:"#333333" }}>.</span>
                </div>

                {/* Line 4: "Our school has ___." */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:16, height:41 }}>
                  <span style={{ fontWeight:700, fontSize:24, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                    Our school has
                  </span>
                  <div style={{
                    width:207, height:41, borderBottom:"3px solid #333333",
                    display:"flex", alignItems:"center", padding:"8px 16px", boxSizing:"border-box",
                  }}>
                    <span style={{ fontWeight:500, fontSize:20, lineHeight:"25px", color:"#999999", letterSpacing:"-0.02em" }}>
                      School size
                    </span>
                  </div>
                  <span style={{ fontWeight:700, fontSize:32, lineHeight:"40px", letterSpacing:"-0.02em", color:"#333333" }}>.</span>
                </div>

                {/* Line 5: "You can reach me at ___." */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:16, height:41 }}>
                  <span style={{ fontWeight:700, fontSize:24, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                    You can reach me at
                  </span>
                  <div style={{
                    width:299, height:41, borderBottom:"3px solid #333333",
                    display:"flex", alignItems:"center", padding:"8px 16px", boxSizing:"border-box",
                  }}>
                    <span style={{ fontWeight:500, fontSize:20, lineHeight:"25px", color:"#999999", letterSpacing:"-0.02em" }}>
                      Phone / Email
                    </span>
                  </div>
                  <span style={{ fontWeight:700, fontSize:32, lineHeight:"40px", letterSpacing:"-0.02em", color:"#333333" }}>.</span>
                </div>

              </div>{/* end form lines */}

              {/* Frame 1116607584: button + helper text */}
              <div style={{
                display:"flex", flexDirection:"column", gap:24, width:1067,
              }}>
                {/* Book a School Demo button */}
                <button style={{
                  width:219, height:56,
                  background:"#2C3D68", borderRadius:8, border:"none",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  gap:8, cursor:"pointer",
                  fontFamily:"'Nunito', sans-serif", fontWeight:700,
                  fontSize:16, lineHeight:"24px", color:"#FFFFFF",
                }}>
                  <StarIcon />
                  Book a School Demo
                </button>

                <p style={{ margin:0, fontWeight:500, fontSize:20, lineHeight:"32px", letterSpacing:"-0.02em", color:"#333333" }}>
                  We&apos;ll walk you through the approach and answer your questions.
                </p>
              </div>

            </div>{/* end form fields area */}

            {/* Frame 1116607586: "What happens next" + 3 steps */}
            <div style={{
              width:1067, height:64,
              display:"flex", flexDirection:"row",
              alignItems:"center", gap:40,
              padding:"0 24px", boxSizing:"border-box",
            }}>
              <p style={{
                margin:0, fontWeight:700, fontSize:30, lineHeight:"38px",
                letterSpacing:"-0.02em", color:"#333333",
                whiteSpace:"nowrap",
              }}>
                What happens next
              </p>

              {/* 3 steps */}
              <div style={{
                flex:1, display:"flex", flexDirection:"row",
                justifyContent:"space-between", alignItems:"center", gap:48,
              }}>
                {[
                  { num:"1", text:"Our team connects within 24–48 hours" },
                  { num:"2", text:"We understand your school's needs" },
                  { num:"3", text:"We walk you through implementation" },
                ].map((step) => (
                  <div key={step.num} style={{
                    display:"flex", alignItems:"center", gap:8, height:64,
                  }}>
                    <div style={{
                      padding:8, background:"#FFFAF0", borderRadius:16,
                      height:64, minWidth:29, display:"flex",
                      alignItems:"flex-end", justifyContent:"center",
                      boxSizing:"border-box",
                    }}>
                      <span style={{
                        fontWeight:800, fontSize:30, lineHeight:"38px",
                        letterSpacing:"-0.02em", color:"#2C3D68",
                      }}>{step.num}</span>
                    </div>
                    <p style={{
                      margin:0, fontWeight:500, fontSize:20, lineHeight:"32px",
                      letterSpacing:"-0.02em", color:"#333333", width:200,
                    }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>{/* end Frame 1116607589 */}
        </div>{/* end form box */}

      </div>
    </section>
  );
}