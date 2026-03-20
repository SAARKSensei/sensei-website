"use client";

import React, { useState, useEffect } from "react";
import Activities from "@/components/Modules/Activities";
import { getSubColour } from "@/utils/logic";
import { ArrowLeft, Cake, Users2, Heart, X } from "lucide-react";
import Image from "next/image";
import Person1 from "@/assets/people/person1.svg?url";
import Person2 from "@/assets/people/person2.svg?url";
import Person3 from "@/assets/people/person3.svg?url";
import Person4 from "@/assets/people/person4.svg?url";

// ✅ Subject image mapping
import EmotionalImg from "@/assets/in-Use/emotionalimg.svg?url";
import SocialImg    from "@/assets/in-Use/socialimg.svg?url";
import EthicsImg    from "@/assets/in-Use/ethicsimg.svg?url";

const BASE_URL = "https://api.sensei.org.in";

const SUBJECT_IMAGE_MAP = {
  "emotional wellbeing":       EmotionalImg,
  "self & social awareness":   SocialImg,
  "self & social awarness":    SocialImg,
  "moral guidance & ethics":   EthicsImg,
};

const SUBJECT_BG_MAP = {
  "emotional wellbeing":       "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)",
  "self & social awareness":   "#F0ABA4",
  "self & social awarness":    "#F0ABA4",
  "moral guidance & ethics":   "#4B926F",
};

function getSubjectImage(name = "") {
  return SUBJECT_IMAGE_MAP[name.toLowerCase().trim()] || null;
}
function getSubjectBg(name = "") {
  return SUBJECT_BG_MAP[name.toLowerCase().trim()] || "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)";
}

// ─── Sparkles ────────────────────────────────────────────────────────────────
const Sparkles = () => (
  <>
    {[
      { top: "18%", left: "72%", size: 18 },
      { top: "8%",  left: "55%", size: 10 },
      { top: "30%", left: "85%", size: 14 },
      { top: "55%", left: "78%", size: 8  },
      { top: "12%", left: "18%", size: 12 },
      { top: "40%", left: "8%",  size: 9  },
    ].map((s, i) => (
      <svg key={i}
        style={{ position: "absolute", top: s.top, left: s.left, opacity: 0.85, pointerEvents: "none" }}
        width={s.size} height={s.size} viewBox="0 0 20 20" fill="white">
        <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
      </svg>
    ))}
  </>
);

export default function SubjectView({ subject, onBack }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modules, setModules]           = useState([]);
  const [loadingModules, setLoadingModules] = useState(true);
  const [moduleError, setModuleError]   = useState(null);

  const subjectId             = subject?.id          || subject?.subjectId || "";
  const subjectName           = subject?.name        || subject?.subjectName || "Subject";
  const locked                = subject?.locked      ?? true;
  const customUserData        = subject?.customUserData || false;
  const colours               = getSubColour(subjectName);
  const interactiveActivities = subject?.interactiveActivities || "120";
  const gamifiedActivities    = subject?.gamifiedActivities    || "12";
  const heroImage             = getSubjectImage(subjectName);
  const heroBg                = getSubjectBg(subjectName);
  const totalModules          = modules.length || 6;

  useEffect(() => {
    if (!subjectId) return;
    const fetchModules = async () => {
      try {
        setLoadingModules(true);
        setModuleError(null);
        const res = await fetch(`${BASE_URL}/api/modules`);
        if (!res.ok) throw new Error("Failed to fetch modules");
        const allModules = await res.json();
        const filtered = allModules
          .filter((m) => m.subjectId === subjectId && m.isActive === true)
          .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
        setModules(filtered);
      } catch (err) {
        setModuleError(err.message);
      } finally {
        setLoadingModules(false);
      }
    };
    fetchModules();
  }, [subjectId]);

  // ── Module list content (shared between mobile & desktop) ─────────────────
  const ModuleListContent = () => (
    <>
      {loadingModules && (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", color: "#999" }}>
            Loading modules...
          </p>
        </div>
      )}
      {!loadingModules && moduleError && (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", color: "red", textAlign: "center" }}>
            Failed to load modules. Please try again.
          </p>
        </div>
      )}
      {!loadingModules && !moduleError && modules.length > 0 && (
        <Activities
          modules={modules}
          colours={colours}
          locked={locked}
          hidden={""}
          subjectId={subjectId}
          customUserData={customUserData}
        />
      )}
      {!loadingModules && !moduleError && modules.length === 0 && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: "40px" }}>
          <span style={{ fontSize: "40px" }}>📚</span>
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#999", textAlign: "center" }}>
            No modules available yet.
          </p>
        </div>
      )}
    </>
  );

  return (
    <div style={{ fontFamily: "Nunito, sans-serif", width: "100%", background: "#FFFFFF" }}>

      {/* ══════════════════════════════════════════════════════
          DESKTOP LAYOUT  (md and above)
      ══════════════════════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ flexDirection: "column", minHeight: "724px" }}>

        {/* Back button */}
        <div style={{ padding: "12px 16px 0" }}>
          <button onClick={onBack} style={{
            display: "flex", alignItems: "center", gap: "6px",
            color: "#FF8B13", fontFamily: "Nunito, sans-serif",
            fontWeight: 700, fontSize: "18px",
            background: "none", border: "none", cursor: "pointer", padding: 0,
          }}>
            <ArrowLeft size={22} strokeWidth={2.5} />
            <span>Back</span>
          </button>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", flexDirection: "row", gap: "205px", padding: "16px", width: "100%", flex: 1,justifyContent: "center" }}>

          {/* LEFT */}
          <div style={{ width: "587px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Hero oval */}
            <div style={{
              position: "relative", width: "587px", height: "315px",
              background: heroBg, borderRadius: "16px 16px 220px 220px",
              overflow: "hidden", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Sparkles />
              {heroImage ? (
                <Image src={heroImage} alt={subjectName} width={280} height={280}
                  style={{ objectFit: "contain", position: "absolute", bottom: "0px", zIndex: 1 }} />
              ) : (
                <span style={{ fontSize: "80px" }}>📚</span>
              )}
            </div>

            {/* Progress bar */}
            <div style={{
              width: "442px", height: "63px", background: "#FFFFFF",
              boxShadow: "0px 1px 4px rgba(12,12,13,0.1), 0px 1px 4px rgba(12,12,13,0.05)",
              borderRadius: "12px", padding: "12px",
              display: "flex", flexDirection: "column", gap: "7px",
              flexShrink: 0, marginTop: "-12px", marginLeft: "70px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "25px", letterSpacing: "-0.02em", color: "#999999" }}>45% Completed</span>
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "25px", letterSpacing: "-0.02em", color: "#999999" }}>2/{totalModules} Modules</span>
              </div>
              <div style={{ width: "418px", height: "9px", background: "#E6E6E6", borderRadius: "5px", position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, width: "170.3px", height: "9px", background: "#F58720", borderRadius: "9px" }} />
              </div>
            </div>

            {/* Subject info */}
            <div style={{ width: "590px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "24px", height: "24px", background: "#FFFFFF", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FF8B13" }}>
                    <Cake size={14} color="#FF8B13" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "19px", letterSpacing: "-0.02em", color: "#333333" }}>5-7 Years</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "24px", height: "24px", background: "#FFFFFF", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FF8B13" }}>
                    <Users2 size={14} color="#FF8B13" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "19px", letterSpacing: "-0.02em", color: "#333333" }}>509+</span>
                </div>
              </div>
              <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "32px", lineHeight: "44px", letterSpacing: "-0.02em", color: "#333333", margin: 0 }}>
                {subjectName}
              </h1>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "25px", letterSpacing: "-0.02em", color: "#666666", margin: 0 }}>
                Hey there, feeling fanatics! Are you ready to embark on an epic adventure and become a Master of Feelings? This amazing journey will take you deep into the wonderful world of emotions, where you&apos;ll learn all about expressing yourself, recognizing emotions in others, and understanding those complex feelings we all experience.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "25px", color: "#666666" }}>Interactive Activity :</span>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "25px", color: "#FF8B13" }}>{interactiveActivities}+</span>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "25px", color: "#666666" }}>Gamified Activity :</span>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "25px", color: "#FF8B13" }}>{gamifiedActivities}+</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "590px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ display: "flex" }}>
                    {[Person1, Person2, Person3, Person4].map((p, i) => (
                      <Image key={i} src={p} width={30} height={30} alt=""
                        style={{ borderRadius: "50%", border: "2px solid #fff", marginLeft: i === 0 ? 0 : "-8px" }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", color: "#666666", marginLeft: "4px" }}>654+</span>
                </div>
                <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
                  <Heart size={22} color="#FF8B13" fill="none" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — module panel */}
          <div style={{
            width: "407px", flexShrink: 0, display: "flex", flexDirection: "column",
            padding: "16px", gap: "32px",
            background: "rgba(144, 189, 234, 0.15)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.12)",
            borderRadius: "16px", minHeight: "724px",
          }}>
            {/* Filter tabs */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", height: "40px" }}>
              {["All", "Complete", "Pending"].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  flex: 1, height: "40px", padding: "8px", borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "24px",
                  textAlign: "center", cursor: "pointer",
                  background: activeFilter === f ? "#2C3D68" : "#FFFFFF",
                  color: activeFilter === f ? "#FFFFFF" : "#2C3D68",
                  border: activeFilter === f ? "none" : "1px solid #2C3D68",
                  transition: "all 0.2s",
                }}>
                  {f}
                </button>
              ))}
            </div>
            {/* Modules */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "375px", overflowY: "auto", flex: 1, scrollbarWidth: "thin" }}>
              <ModuleListContent />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE LAYOUT  (below md)
      ══════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col" style={{ minHeight: "100vh", background: "#FFFFFF" }}>

        {/* ── Hero section — scaled from Figma: ellipse 775×445 at top:-152px on 390px screen ── */}
        {/*    Visible height = 445 - 152 = 293px. Scale factor = 390/775 = 0.503               */}
        {/*    Scaled ellipse height = 445 * 0.503 ≈ 224px; offset = 152 * 0.503 ≈ 76px        */}
        {/*    Visible area = 224 - 76 = 148px + progress strip ≈ 220px total container         */}
        <div style={{
          position: "relative",
          width: "100%",
          /* Container shows the visible portion of the ellipse + progress strip */
          height: "220px",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {/* The large ellipse — 775×445 scaled to 390px wide = factor 0.503 */}
          {/* Width: 390px (100%), Height: 224px, pushed up by -76px */}
          <div style={{
            position: "absolute",
            width: "100%",          /* 390px = 775 * 0.503 */
            height: "224px",        /* 445 * 0.503 */
            top: "-76px",           /* -152 * 0.503 */
            left: "0",
            background: heroBg,
            borderRadius: "50%",    /* full ellipse shape */
            overflow: "hidden",
          }}>
            <Sparkles />

            {/* Character image — Figma: 346×284px at left:23.77, top:19.93 on the 775px ellipse */}
            {/* Scaled: 346*0.503=174px wide, left=23.77*0.503≈12px, but center it looks better */}
            {heroImage ? (
              <Image
                src={heroImage}
                alt={subjectName}
                width={174}
                height={143}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
            ) : (
              <div style={{
                position: "absolute", bottom: "10px", left: "50%",
                transform: "translateX(-50%)", fontSize: "56px",
              }}>📚</div>
            )}
          </div>

          {/* × close / back button — sits above the ellipse */}
          <button
            onClick={onBack}
            style={{
              position: "absolute", top: "12px", right: "12px",
              width: "30px", height: "30px",
              background: "rgba(255,255,255,0.88)",
              borderRadius: "50%", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 20,
              boxShadow: "0 1px 6px rgba(0,0,0,0.18)",
            }}
          >
            <X size={15} color="#333" strokeWidth={2.5} />
          </button>

          {/* Progress bar strip — anchored to bottom of container */}
          <div style={{
            position: "absolute", bottom: "0", left: "0", right: "0",
            background: "rgba(255,255,255,0.95)",
            padding: "7px 16px 9px",
            zIndex: 10,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "12px", color: "#999999" }}>
                45% Completed
              </span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "12px", color: "#999999" }}>
                2/{totalModules} Modules
              </span>
            </div>
            <div style={{ width: "100%", height: "6px", background: "#E6E6E6", borderRadius: "5px", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: "45%", height: "6px", background: "#F58720", borderRadius: "5px" }} />
            </div>
          </div>
        </div>

        {/* ── Scrollable content below hero ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 100px", scrollbarWidth: "none" }}>

          {/* Age + players badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <div style={{
                width: "22px", height: "22px", background: "#FFFFFF", borderRadius: "3px",
                display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FF8B13",
              }}>
                <Cake size={13} color="#FF8B13" strokeWidth={1.5} />
              </div>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "#333333" }}>5-7 Years</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <div style={{
                width: "22px", height: "22px", background: "#FFFFFF", borderRadius: "3px",
                display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FF8B13",
              }}>
                <Users2 size={13} color="#FF8B13" strokeWidth={1.5} />
              </div>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "#333333" }}>509+</span>
            </div>
          </div>

          {/* Subject name */}
          <h1 style={{
            fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "24px",
            lineHeight: "32px", letterSpacing: "-0.02em", color: "#333333",
            margin: "0 0 10px 0",
          }}>
            {subjectName}
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px",
            lineHeight: "21px", letterSpacing: "-0.01em", color: "#666666",
            margin: "0 0 12px 0",
          }}>
            Hey there, feeling fanatics! Are you ready to embark on an epic adventure and become a Master of Feelings? This amazing journey will take you deep into the wonderful world of emotions, where you&apos;ll learn all about expressing yourself, recognizing emotions in others, and understanding those complex feelings we all experience.
          </p>

          {/* Activity counts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "14px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#666666" }}>Interactive Activity :</span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "14px", color: "#FF8B13" }}>{interactiveActivities}+</span>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#666666" }}>Gamified Activity :</span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "14px", color: "#FF8B13" }}>{gamifiedActivities}+</span>
            </div>
          </div>

          {/* Avatars + heart */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <div style={{ display: "flex" }}>
                {[Person1, Person2, Person3, Person4].map((p, i) => (
                  <Image key={i} src={p} width={26} height={26} alt=""
                    style={{ borderRadius: "50%", border: "2px solid #fff", marginLeft: i === 0 ? 0 : "-7px" }} />
                ))}
              </div>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", color: "#666666", marginLeft: "4px" }}>654+</span>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
              <Heart size={20} color="#FF8B13" fill="none" strokeWidth={2} />
            </button>
          </div>

          {/* ── Module list ── */}
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
            {["All", "Complete", "Pending"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  flex: 1, height: "38px", borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px",
                  cursor: "pointer", transition: "all 0.2s",
                  background: activeFilter === f ? "#2C3D68" : "#FFFFFF",
                  color: activeFilter === f ? "#FFFFFF" : "#2C3D68",
                  border: activeFilter === f ? "none" : "1.5px solid #2C3D68",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Modules */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <ModuleListContent />
          </div>
        </div>
      </div>
    </div>
  );
}