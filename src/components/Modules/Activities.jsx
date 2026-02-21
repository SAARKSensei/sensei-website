"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import Lock from "@/assets/in-Use/lock.svg?url";

const BASE_URL = "https://api.sensei.org.in";

// Book color palettes cycling per module index
const BOOK_COLORS = [
  { spine: "#389F78", cover: "#79F3C5" },
  { spine: "#B4AC09", cover: "#FFEA00" },
  { spine: "#11419A", cover: "#548EFB" },
  { spine: "#452E65", cover: "#B782FF" },
  { spine: "#194866", cover: "#3993CD" },
  { spine: "#603B5A", cover: "#FCA9EF" },
];

// Book SVG matching Figma exactly
const BookIcon = ({ spine, cover }) => (
  <svg width="44" height="75" viewBox="0 0 44 80" fill="none" style={{ flexShrink: 0 }}>
    <rect x="0" y="0" width="12.79" height="59.44" rx="6" fill={spine} />
    <rect x="6.22" y="0" width="35.25" height="49.08" rx="4" fill={cover} />
    <rect x="0" y="49.08" width="41.47" height="10.37" rx="5"
      fill="#E6E6E6" stroke={spine} strokeWidth="3" />
    <rect x="25.92" y="52.25" width="9.68" height="11.75" rx="1" fill="#FFB200" />
  </svg>
);

// Submodule item
const SubModuleItem = ({ sub }) => (
  <Link
    href={`/funactivity/${sub.id}`}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px 12px 24px",
      background: "#FFFFFF",
      border: "2.5px solid #FF8B13",
      borderRadius: "58px",
      width: "100%",
      textDecoration: "none",
      boxSizing: "border-box",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <div style={{
          width: "22px", height: "22px",
          border: "2px solid #FF8B13",
          borderRadius: "3px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Clock size={13} color="#FF8B13" strokeWidth={2} />
        </div>
        <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", color: "#FF8B13" }}>
          30 Mins.
        </span>
      </div>
      <span style={{
        fontFamily: "Nunito, sans-serif", fontWeight: 800,
        fontSize: "16px", lineHeight: "22px",
        letterSpacing: "-0.02em", textTransform: "capitalize", color: "#2C3D68",
      }}>
        {sub.name}
      </span>
    </div>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="#FF8B13" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
);

// Individual Module Row
function ModuleRow({ module, idx, locked, openIndex, setOpenIndex }) {
  const [subModules, setSubModules] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);
  const [subError, setSubError] = useState(null);

  // ✅ First module (idx 0) is always free — rest are locked
  const isFreeModule = idx === 0;
  const isDisabled = locked && !isFreeModule;
  const isOpen = openIndex === idx;
  const colors = BOOK_COLORS[idx % BOOK_COLORS.length];

  useEffect(() => {
    if (!isOpen || !module?.id) return;
    if (subModules.length > 0) return;

    const fetchSubModules = async () => {
      try {
        setLoadingSubs(true);
        setSubError(null);
        const res = await fetch(`${BASE_URL}/api/sub-modules`);
        if (!res.ok) throw new Error("Failed");
        const all = await res.json();
        const filtered = all
          .filter((s) => s.moduleId === module.id && s.isActive === true)
          .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
        setSubModules(filtered);
      } catch (err) {
        setSubError(err.message);
      } finally {
        setLoadingSubs(false);
      }
    };
    fetchSubModules();
  }, [isOpen, module?.id]);

  const toggle = () => {
    if (isDisabled) return;
    setOpenIndex(isOpen ? null : idx);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* ── MODULE CARD ── */}
      <button
        onClick={toggle}
        disabled={false} // ✅ never disable the button itself so card stays fully visible
        aria-expanded={isOpen}
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px 24px 16px 16px",
          gap: "12px",
          width: "350px",
          minHeight: "96px",
          // ✅ Always show warm cream background — no fading
          background: "linear-gradient(0deg, #FFFBF0, #FFFBF0), linear-gradient(94.75deg, rgba(255,255,255,0.2) 3.79%, rgba(255,255,255,0.44) 98.34%)",
          backdropFilter: "blur(1px)",
          borderRadius: "58px",
          // ✅ Strong orange border always visible
          border: "2.5px solid #FF8B13",
          cursor: isDisabled ? "default" : "pointer",
          textAlign: "left",
          transition: "box-shadow 0.2s",
          boxShadow: isOpen
            ? "0px 4px 14px rgba(255,139,19,0.3)"
            : "0px 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Book icon — always full color */}
        <BookIcon spine={colors.spine} cover={colors.cover} />

        {/* Activity details */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", gap: "4px", flex: 1,
        }}>
          {/* Duration */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{
              width: "24px", height: "24px",
              border: "2px solid #FF8B13",
              borderRadius: "3px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Clock size={14} color="#FF8B13" strokeWidth={2} />
            </div>
            <span style={{
              fontFamily: "Nunito, sans-serif", fontWeight: 700,
              fontSize: "14px", lineHeight: "18px",
              letterSpacing: "-0.02em", color: "#FF8B13",
            }}>
              30 Mins.
            </span>
          </div>

          {/* Module name — ✅ always dark blue, never grey */}
          <span style={{
            fontFamily: "Nunito, sans-serif", fontWeight: 800,
            fontSize: "18px", lineHeight: "25px",
            letterSpacing: "-0.02em", textTransform: "capitalize",
            color: "#2C3D68", // ✅ always dark, never faded
            overflow: "hidden", textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          }}>
            {module?.name || "Untitled Module"}
          </span>
        </div>

        {/* Right — lock icon OR arrow */}
        <div style={{ flexShrink: 0, marginLeft: "4px" }}>
          {isDisabled ? (
            // ✅ Show lock but card is still fully visible/colored
            <Image src={Lock} alt="Locked" width={22} height={22} style={{ opacity: 0.7 }} />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            >
              <path d="M9 6l6 6-6 6" stroke="#FF8B13" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </button>

      {/* ── SUBMODULES ── */}
      {isOpen && (
        <div style={{
          marginTop: "12px",
          marginLeft: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "334px",
        }}>
          {loadingSubs && (
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "14px", color: "#999", fontStyle: "italic", padding: "4px 16px" }}>
              Loading submodules...
            </p>
          )}
          {!loadingSubs && subError && (
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "14px", color: "red", fontStyle: "italic", padding: "4px 16px" }}>
              Failed to load. Please try again.
            </p>
          )}
          {!loadingSubs && !subError && subModules.length > 0 &&
            subModules.map((sub) => <SubModuleItem key={sub.id} sub={sub} />)
          }
          {!loadingSubs && !subError && subModules.length === 0 && (
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "14px", color: "#999", fontStyle: "italic", padding: "4px 16px" }}>
              No submodules available
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Activities Component ────────────────────────────────────────────────
export default function Activities({
  modules = [],
  hidden = "",
  colours = {},
  subjectId = "",
  locked = true,
  customUserData = false,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setOpenIndex(null);
  }, [modules]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        width: "350px",
      }}>
        {modules && modules.length > 0 ? (
          modules.map((module, idx) => (
            <ModuleRow
              key={module?.id || idx}
              module={module}
              idx={idx}
              locked={locked}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))
        ) : (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            height: "160px", gap: "12px",
          }}>
            <span style={{ fontSize: "40px" }}>📚</span>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", color: "#999", textAlign: "center" }}>
              No modules available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}