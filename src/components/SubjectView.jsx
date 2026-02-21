"use client";

import React, { useState } from "react";
import Activities from "@/components/Modules/Activities";
import { getSubColour } from "@/utils/logic";
import { ArrowLeft, Clock, Cake, Users2, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Person1 from "@/assets/people/person1.svg?url";
import Person2 from "@/assets/people/person2.svg?url";
import Person3 from "@/assets/people/person3.svg?url";
import Person4 from "@/assets/people/person4.svg?url";

// ─── SubjectView ─────────────────────────────────────────────────────────────
// Figma-matched layout. Props:
//   subject  — full subject object (id, name, modules, locked, colors, etc.)
//   onBack   — callback to return to carousel
// ─────────────────────────────────────────────────────────────────────────────
export default function SubjectView({ subject, onBack }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const subjectId             = subject?.id   || "";
  const subjectName           = subject?.name || "Subject";
  const modules               = subject?.modules || [];
  const locked                = subject?.locked  ?? true;
  const customUserData        = subject?.customUserData || false;
  const colours               = getSubColour(subjectName);
  const interactiveActivities = subject?.interactiveActivities || "120";
  const gamifiedActivities    = subject?.gamifiedActivities    || "12";
  const totalModules          = modules.length || 6;

  // ── Book icon SVG (Figma book illustration — coloured pill) ────────────────
  const BookIcon = ({ spine = "#389F78", cover = "#79F3C5" }) => (
    <svg width="44" height="64" viewBox="0 0 44 64" fill="none" style={{ flexShrink: 0 }}>
      {/* Spine */}
      <rect x="0" y="0" width="12.79" height="59.44" rx="6" fill={spine} />
      {/* Cover */}
      <rect x="6.22" y="0" width="35.25" height="49.08" rx="0 4 0 0" fill={cover} />
      {/* Bottom band */}
      <rect x="0" y="49.08" width="41.47" height="10.37" rx="5 0 2 5"
        fill="#E6E6E6"
        style={{ stroke: spine, strokeWidth: 3, strokeDasharray: "none" }}
      />
      {/* Bookmark tab */}
      <rect x="25.92" y="52.25" width="9.68" height="11.75" rx="1" fill="#FFB200" />
    </svg>
  );

  // Book colour palettes cycling per module index
  const BOOK_COLORS = [
    { spine: "#389F78", cover: "#79F3C5" },
    { spine: "#B4AC09", cover: "#FFEA00" },
    { spine: "#11419A", cover: "#548EFB" },
    { spine: "#452E65", cover: "#B782FF" },
    { spine: "#194866", cover: "#3993CD" },
    { spine: "#603B5A", cover: "#FCA9EF" },
  ];

  return (
    <div
      style={{
        fontFamily: "Nunito, sans-serif",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "724px",
        background: "#FFFFFF",
      }}
    >
      {/* ── Back button ───────────────────────────────────────────────────── */}
      <div style={{ padding: "12px 16px 0" }}>
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#FF8B13",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <ArrowLeft size={22} strokeWidth={2.5} />
          <span>Back</span>
        </button>
      </div>

      {/* ── Main two-column layout ────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "205px",
          padding: "16px",
          width: "100%",
          flex: 1,
        }}
      >

        {/* ════════════════════════════════════════════════════════════════
            LEFT SECTION
        ════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: "587px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >

          {/* ── Hero oval ─────────────────────────────────────────────────
              Figma: 587×315, border-radius 16px 16px 220px 220px
              bg: linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)
          ─────────────────────────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              width: "587px",
              height: "315px",
              background: "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)",
              borderRadius: "16px 16px 220px 220px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Decorative white star sparkles (CSS-only, no images) */}
            {[
              { top: "18%", left: "72%", size: 18 },
              { top: "8%",  left: "55%", size: 10 },
              { top: "30%", left: "85%", size: 14 },
              { top: "55%", left: "78%", size: 8  },
              { top: "12%", left: "18%", size: 12 },
              { top: "40%", left: "8%",  size: 9  },
            ].map((s, i) => (
              <svg
                key={i}
                style={{
                  position: "absolute",
                  top: s.top,
                  left: s.left,
                  opacity: 0.85,
                  pointerEvents: "none",
                }}
                width={s.size}
                height={s.size}
                viewBox="0 0 20 20"
                fill="white"
              >
                <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
              </svg>
            ))}
          </div>

          {/* ── Progress bar ──────────────────────────────────────────────
              Figma: 442×63px, white, shadow, radius 12px
              Orange fill: 170.3px of 418px = ~40%
          ─────────────────────────────────────────────────────────────── */}
          <div
            style={{
              width: "442px",
              height: "63px",
              background: "#FFFFFF",
              boxShadow: "0px 1px 4px rgba(12,12,13,0.1), 0px 1px 4px rgba(12,12,13,0.05)",
              borderRadius: "12px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              flexShrink: 0,
              marginTop: "-12px",
              marginLeft: "70px",
            }}
          >
            {/* Labels row */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "25px",
                  letterSpacing: "-0.02em",
                  color: "#999999",
                }}
              >
                45% Completed
              </span>
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "25px",
                  letterSpacing: "-0.02em",
                  color: "#999999",
                }}
              >
                2/{totalModules} Modules
              </span>
            </div>
            {/* Track */}
            <div
              style={{
                width: "418px",
                height: "9px",
                background: "#E6E6E6",
                borderRadius: "5px",
                position: "relative",
              }}
            >
              {/* Fill */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "170.3px",
                  height: "9px",
                  background: "#F58720",
                  borderRadius: "9px",
                }}
              />
            </div>
          </div>

          {/* ── Subject info block ────────────────────────────────────────
              Figma: width 590px, positioned at top 496px from hero start
              — age+players row, name (32px 800 #333), desc, activity counts,
                players avatars + heart
          ─────────────────────────────────────────────────────────────── */}
          <div
            style={{
              width: "590px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Age + players row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Age group */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "#FFFFFF",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #FF8B13",
                  }}
                >
                  <Cake size={14} color="#FF8B13" strokeWidth={1.5} />
                </div>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "-0.02em",
                    color: "#333333",
                  }}
                >
                  5-7 Years
                </span>
              </div>

              {/* Players count */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "#FFFFFF",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #FF8B13",
                  }}
                >
                  <Users2 size={14} color="#FF8B13" strokeWidth={1.5} />
                </div>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "-0.02em",
                    color: "#333333",
                  }}
                >
                  509+
                </span>
              </div>
            </div>

            {/* Subject name */}
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "32px",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
                color: "#333333",
                margin: 0,
              }}
            >
              {subjectName}
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "25px",
                letterSpacing: "-0.02em",
                color: "#666666",
                margin: 0,
              }}
            >
              Hey there, feeling fanatics! Are you ready to embark on an epic adventure
              and become a Master of Feelings? This amazing journey will take you deep
              into the wonderful world of emotions, where you&apos;ll learn all about
              expressing yourself, recognizing emotions in others, and understanding
              those complex feelings we all experience.
            </p>

            {/* Activity counts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", gap: "4px", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#666666",
                  }}
                >
                  Interactive Activity :
                </span>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#FF8B13",
                  }}
                >
                  {interactiveActivities}+
                </span>
              </div>
              <div style={{ display: "flex", gap: "4px", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#666666",
                  }}
                >
                  Gamified Activity :
                </span>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#FF8B13",
                  }}
                >
                  {gamifiedActivities}+
                </span>
              </div>
            </div>

            {/* Players avatars + heart */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "590px",
              }}
            >
              {/* Avatars */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ display: "flex" }}>
                  {[Person1, Person2, Person3, Person4].map((p, i) => (
                    <Image
                      key={i}
                      src={p}
                      width={30}
                      height={30}
                      alt=""
                      style={{
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        marginLeft: i === 0 ? 0 : "-8px",
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "14px",
                    color: "#666666",
                    marginLeft: "4px",
                  }}
                >
                  654+
                </span>
              </div>

              {/* Heart button */}
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 3px",
                }}
              >
                <Heart size={22} color="#FF8B13" fill="none" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            RIGHT PANEL — module list
            Figma: 407×724px, rgba(144,189,234,0.15), shadow, radius 16px
            padding 16px, gap 32px
        ════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: "407px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            gap: "32px",
            background: "rgba(144, 189, 234, 0.15)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.12)",
            borderRadius: "16px",
            minHeight: "724px",
          }}
        >
          {/* Filter row — All / Complete / Pending
              Figma: gap 8px, height 40px, buttons flex-grow 1
          */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              height: "40px",
            }}
          >
            {["All", "Complete", "Pending"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  flex: 1,
                  height: "40px",
                  padding: "8px",
                  borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: activeFilter === f ? "#2C3D68" : "#FFFFFF",
                  color: activeFilter === f ? "#FFFFFF" : "#2C3D68",
                  border: activeFilter === f ? "none" : "1px solid #2C3D68",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Module list
              Figma: Module Cart 350×710, gap 24px
              Each card: 350×96px, padding 16px 24px 16px 40px, radius 58px, bg #FFFBF0
          */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "375px",
              overflowY: "auto",
              flex: 1,
              scrollbarWidth: "thin",
            }}
          >
            {modules && modules.length > 0 ? (
              <Activities
                modules={modules}
                colours={colours}
                locked={locked}
                hidden={""}
                subjectId={subjectId}
                customUserData={customUserData}
              />
            ) : (
              /* Empty state */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  gap: "12px",
                  paddingTop: "60px",
                }}
              >
                <span style={{ fontSize: "48px" }}>📚</span>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#999",
                    textAlign: "center",
                  }}
                >
                  No modules available yet.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}