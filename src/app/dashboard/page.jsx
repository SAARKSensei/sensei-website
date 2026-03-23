"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import nodataimage from "@/assets/in-Use/nodataimg.svg?url";
import {
  Home, BookOpen, FileText, User,
  ArrowRight, Heart, ChevronRight, ChevronLeft, Clock, BarChart2,
  ArrowLeft, Users, GraduationCap, Wallet,
} from "lucide-react";
import SubjectView from "@/components/SubjectView";

// ✅ Import subject images
import EmotionalImg from "@/assets/in-Use/emotionalimg.svg?url";
import SocialImg    from "@/assets/in-Use/socialimg.svg?url";
import EthicsImg    from "@/assets/in-Use/ethicsimg.svg?url";

const DASHBOARD_ENABLED = true;
const BASE_URL = "https://api.sensei.org.in";

// ✅ Subject name → image mapping (case-insensitive)
const SUBJECT_IMAGE_MAP = {
  "emotional wellbeing":     EmotionalImg,
  "self & social awareness": SocialImg,
  "self & social awarness":  SocialImg,
  "moral guidance & ethics": EthicsImg,
};

// ✅ Subject name → background color mapping
const SUBJECT_BG_MAP = {
  "emotional wellbeing":     "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)",
  "self & social awareness": "#F0ABA4",
  "self & social awarness":  "#F0ABA4",
  "moral guidance & ethics": "#4B926F",
};

function getSubjectImage(name = "") {
  return SUBJECT_IMAGE_MAP[name.toLowerCase().trim()] || null;
}
function getSubjectBg(name = "") {
  return SUBJECT_BG_MAP[name.toLowerCase().trim()] || "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)";
}

const CARD_NAME_COLORS = [
  "text-[#2C7BB5]",
  "text-[#E8734A]",
  "text-[#2C9E5A]",
  "text-[#B5880E]",
  "text-[#8B4FB5]",
];

const RELATION_OPTIONS = [
  "Father",
  "Mother",
  "Guardian",
  "Grand Father",
  "Grand Mother",
  "Other",
];

// ═══════════════════════════════════════════════════════════════════════════════
// ── JWT TOKEN HELPERS ─────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Store JWT in localStorage
 */
const storeJWT = (token) => {
  if (token) localStorage.setItem("sensei_jwt", token);
};

/**
 * Retrieve JWT from localStorage
 */
const getJWT = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("sensei_jwt");
  }
  return null;
};

/**
 * Remove JWT from localStorage (logout / token reset)
 */
const clearJWT = () => {
  localStorage.removeItem("sensei_jwt");
};

/**
 * Returns axios config with Authorization header attached.
 * Use this for every authenticated API call.
 * Example: axios.get(url, authHeaders())
 */
const authHeaders = () => {
  const token = getJWT();
  return token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};
};

/**
 * STEP 1 → STEP 2 → STEP 3
 * Exchanges a Google ID token for a backend JWT.
 * Called right after Google SSO succeeds.
 *
 * @param {string} googleIdToken  — the raw ID token from next-auth session
 * @returns {string|null}          — JWT string, or null on failure
 */
const exchangeGoogleTokenForJWT = async (googleIdToken) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/auth/google?idToken=${encodeURIComponent(googleIdToken)}`
    );

    // Backend returns the JWT directly as a string,
    // or nested inside a data/token field — handle both gracefully.
    const jwt =
      typeof res.data === "string"
        ? res.data
        : res.data?.token ||
          res.data?.jwt   ||
          res.data?.accessToken ||
          null;

    if (jwt) {
      storeJWT(jwt);
      console.log("✅ JWT stored successfully");
    } else {
      console.warn("⚠️ Auth response received but no token found:", res.data);
    }

    return jwt;
  } catch (err) {
    console.error(
      "❌ Failed to exchange Google token for JWT:",
      err?.response?.status,
      err?.response?.data || err?.message
    );
    return null;
  }
};

// ─── Maintenance Page ────────────────────────────────────────────────────────
const MaintenancePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">🔧</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Under Maintenance</h1>
      <p className="text-gray-600 mb-6">
        We&apos;re currently upgrading our system to serve you better. Please check back soon!
      </p>
      <div className="text-sm text-gray-500">Expected completion: Soon</div>
    </div>
  </div>
);

// ─── No Subjects Placeholder ─────────────────────────────────────────────────
const NoSubjectsFound = () => (
  <div className="flex flex-col items-center pt-10 pb-4 gap-7">
    <div className="flex flex-col items-center gap-3 w-[249px]">
      <h2 className="text-[#FF8B13] text-lg font-extrabold text-center uppercase leading-6 tracking-wide">
        No subjects found
      </h2>
      <p className="text-[#999999] text-sm font-bold text-center leading-5">
        Enroll to a subject to start, still facing issue mail to connect@sensei.org.in
      </p>
    </div>
    <Image src={nodataimage} alt="No subjects found" width={249} height={163} className="object-contain" />
  </div>
);

// ─── Subject Card (Desktop) ───────────────────────────────────────────────────
const SubjectCard = ({ subject, onClick, index = 0 }) => {
  const {
    name                  = "Subject Name",
    interactiveActivities = 0,
    gamifiedActivities    = 0,
    coins                 = 0,
  } = subject;

  const nameColorClass = CARD_NAME_COLORS[index % CARD_NAME_COLORS.length];
  const subjectImage   = getSubjectImage(name);
  const subjectBg      = getSubjectBg(name);

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-[270px] min-h-[385px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-100"
    >
      <div
        className="relative h-[220px] flex items-end justify-center overflow-hidden"
        style={{ background: subjectBg }}
      >
        {subjectImage ? (
          <Image src={subjectImage} alt={name} width={220} height={210}
            style={{ objectFit: "contain", position: "absolute", bottom: 0 }} />
        ) : (
          <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center mb-4">
            <span className="text-5xl">📚</span>
          </div>
        )}
        <button onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform z-10">
          <Heart className="w-4 h-4 text-pink-400" />
        </button>
      </div>
      <div className="px-4 pt-3 pb-4">
        <h3 className={`text-[15px] font-bold leading-tight mb-2 line-clamp-2 ${nameColorClass}`}>{name}</h3>
        <div className="text-[12px] text-gray-600 mb-0.5">
          <span className="font-medium">Interactive Activity : </span>
          <span className="font-bold text-[#FF8B13]">{interactiveActivities}+</span>
        </div>
        <div className="text-[12px] text-gray-600 mb-3">
          <span className="font-medium">Gamified Activity : </span>
          <span className="font-bold text-[#FF8B13]">{gamifiedActivities}+</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #F8BF3B, #FF8B13)" }}>✦</div>
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-500 ml-1">+{coins}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Mobile Subject Card ──────────────────────────────────────────────────────
const MobileSubjectCard = ({ subject, onClick, index = 0 }) => {
  const {
    name                  = "Subject Name",
    interactiveActivities = 0,
    gamifiedActivities    = 0,
    coins                 = 0,
  } = subject;

  const nameColorClass = CARD_NAME_COLORS[index % CARD_NAME_COLORS.length];
  const subjectImage   = getSubjectImage(name);
  const subjectBg      = getSubjectBg(name);

  return (
    <div onClick={onClick}
      className="flex-shrink-0 w-[200px] bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100"
      style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.10)" }}>
      <div className="relative h-[160px] flex items-end justify-center overflow-hidden"
        style={{ background: subjectBg }}>
        {subjectImage ? (
          <Image src={subjectImage} alt={name} width={160} height={150}
            style={{ objectFit: "contain", position: "absolute", bottom: 0 }} />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center mb-3">
            <span className="text-4xl">📚</span>
          </div>
        )}
        <button onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
          <Heart className="w-3.5 h-3.5 text-pink-400" />
        </button>
      </div>
      <div className="px-3 pt-2.5 pb-3">
        <h3 className={`text-[13px] font-bold leading-tight mb-1.5 line-clamp-2 ${nameColorClass}`}>{name}</h3>
        <div className="text-[11px] text-gray-600 mb-0.5">
          <span className="font-medium">Interactive Activity : </span>
          <span className="font-bold text-[#FF8B13]">{interactiveActivities}+</span>
        </div>
        <div className="text-[11px] text-gray-600 mb-2.5">
          <span className="font-medium">Gamified Activity : </span>
          <span className="font-bold text-[#FF8B13]">{gamifiedActivities}+</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #F8BF3B, #FF8B13)" }}>✦</div>
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-500 ml-0.5">+{coins}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Recent Activity Item (Desktop) ──────────────────────────────────────────
const RecentItem = ({ activity }) => {
  const { thumbnail = "", duration = "15 Mins.", title = "Activity Title", subtitle = "" } = activity;
  return (
    <div className="flex flex-row items-center rounded-lg bg-white cursor-pointer hover:shadow-md transition-shadow"
      style={{ padding: "16px", gap: "12px", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)", borderRadius: "8px", width: "318px", minHeight: "122px" }}>
      <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-pink-100 relative overflow-hidden"
        style={{ width: "112px", height: "69px", borderRadius: "8px" }}>
        {thumbnail ? <Image src={thumbnail} alt={title} fill className="object-cover" />
          : <div className="absolute inset-0 flex items-center justify-center text-2xl">🎭</div>}
      </div>
      <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: "4px" }}>
        <div className="flex flex-row items-center" style={{ gap: "4px" }}>
          <Clock style={{ width: "14px", height: "14px", color: "#FF8B13" }} strokeWidth={1.5} />
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "#333333" }}>{duration}</span>
        </div>
        <p className="line-clamp-2" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "22px", textTransform: "capitalize", color: "#333333", width: "162px" }}>{title}</p>
        {subtitle && <span className="line-clamp-1" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 400, fontSize: "12px", color: "#333333" }}>{subtitle}</span>}
      </div>
    </div>
  );
};

// ─── Mobile Recent Activity Item ─────────────────────────────────────────────
const MobileRecentItem = ({ activity }) => {
  const { thumbnail = "", duration = "15 Mins.", title = "Activity Title", subtitle = "" } = activity;
  return (
    <div className="flex flex-row items-center bg-white cursor-pointer active:opacity-80 transition-opacity w-full"
      style={{ padding: "12px 14px", gap: "12px", boxShadow: "0px 2px 6px rgba(0,0,0,0.09)", borderRadius: "12px", minHeight: "88px" }}>
      <div className="flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-blue-100 to-pink-100"
        style={{ width: "80px", height: "56px", borderRadius: "8px" }}>
        {thumbnail ? <Image src={thumbnail} alt={title} fill className="object-cover" />
          : <div className="absolute inset-0 flex items-center justify-center text-xl">🎭</div>}
      </div>
      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex items-center gap-1">
          <Clock style={{ width: "12px", height: "12px", color: "#FF8B13", flexShrink: 0 }} strokeWidth={2} />
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "12px", color: "#666666" }}>{duration}</span>
        </div>
        <p className="line-clamp-2" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "19px", textTransform: "capitalize", color: "#333333" }}>{title}</p>
        {subtitle && <span className="line-clamp-1" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 400, fontSize: "11px", color: "#999999" }}>{subtitle}</span>}
      </div>
    </div>
  );
};

// ─── Children Details Modal ───────────────────────────────────────────────────
const ChildrenModal = ({ childData, onClose }) => {
  const [firstName, setFirstName] = useState(childData?.childName?.split(" ")[0] || "");
  const [lastName,  setLastName]  = useState(childData?.childName?.split(" ").slice(1).join(" ") || "");
  const [dob,       setDob]       = useState(childData?.dateOfBirth || "");
  const [grade,     setGrade]     = useState(childData?.grade || "");
  const [medical,   setMedical]   = useState(childData?.medicalHistory || "");

  const InputRow = ({ label, value, onChange, placeholder }) => (
    <div className="flex flex-col gap-2 w-full">
      <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#454C52" }}>
        {label}
      </span>
      <div
        className="flex flex-row items-center px-[14px] gap-2 w-full"
        style={{ height: "46px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)" }}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent"
          style={{ fontFamily: "Nunito, sans-serif", fontWeight: value ? 400 : 400, fontSize: "16px", color: value ? "#333333" : "#9EA5AD" }}
        />
        <div className="w-[26px] h-[26px] rounded-[6.5px] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#FF8B13" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center"
        style={{ width: "340px", background: "#FFFFFF", borderRadius: "11px", padding: "57px 20px 20px", gap: "10px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute flex items-center justify-center"
          style={{ width: "80px", height: "80px", top: "-40px", left: "50%", transform: "translateX(-50%)", background: "#FFFFFF", borderRadius: "50%", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)" }}
        >
          <div
            className="w-[68px] h-[68px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #F8BF3B, #FF8B13)" }}
          >
            <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "26px", color: "#fff" }}>
              {firstName.charAt(0).toUpperCase() || "C"}
            </span>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: "19px", height: "19px", bottom: "4px", right: "4px", background: "#D1CACA", borderRadius: "4.75px" }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#605E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "24px", color: "#FF8B13", textTransform: "capitalize", marginBottom: "4px" }}>
          Children Details
        </h2>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 w-full">
            <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#454C52" }}>Name</span>
            <div
              className="flex flex-row items-center px-[14px] gap-2 w-full"
              style={{ height: "46px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)" }}
            >
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="flex-1 outline-none bg-transparent"
                style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: firstName ? "#333333" : "#9EA5AD" }}
              />
              <div className="w-[26px] h-[26px] rounded-[6.5px] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#FF8B13" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div
              className="flex flex-row items-center px-[14px] gap-2 w-full"
              style={{ height: "46px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)" }}
            >
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="flex-1 outline-none bg-transparent"
                style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: lastName ? "#333333" : "#9EA5AD" }}
              />
              <div className="w-[26px] h-[26px] rounded-[6.5px] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#FF8B13" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          <InputRow label="DOB"            value={dob}     onChange={setDob}     placeholder="DD-MM-YYYY" />
          <InputRow label="Grade"          value={grade}   onChange={setGrade}   placeholder="3th" />
          <InputRow label="Medical History" value={medical} onChange={setMedical} placeholder="None" />
        </div>
      </div>
    </div>
  );
};

// ─── Shared Modal Input Row ───────────────────────────────────────────────────
const ModalInputRow = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2 w-full">
    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#454C52" }}>{label}</span>
    <div className="flex flex-row items-center px-[14px] gap-2 w-full"
      style={{ height: "46px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)" }}>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type}
        className="flex-1 outline-none bg-transparent"
        style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: value ? "#333333" : "#9EA5AD" }} />
      <div className="w-[26px] h-[26px] rounded-[6.5px] flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#FF8B13" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

// ─── Shared Phone Input Row ───────────────────────────────────────────────────
const ModalPhoneRow = ({ value, onChange }) => (
  <div className="flex flex-col gap-2 w-full">
    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#454C52" }}>Phone number</span>
    <div className="flex flex-row items-center w-full"
      style={{ height: "44px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)", overflow: "hidden" }}>
      <div className="flex items-center gap-1 px-3 h-full flex-shrink-0"
        style={{ borderRight: "1px solid rgba(103,110,118,0.16)", minWidth: "61px" }}>
        <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: "#676E76" }}>IN</span>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d="M5 8l5 5 5-5" stroke="#676E76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="+91 00000-00000"
        className="flex-1 outline-none bg-transparent px-3"
        style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: value ? "#333333" : "#9EA5AD" }} />
    </div>
  </div>
);

// ─── Shared Modal Email Row ───────────────────────────────────────────────────
const ModalEmailRow = ({ value, onChange }) => (
  <div className="flex flex-col gap-2 w-full">
    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#454C52" }}>Email</span>
    <div className="flex flex-row items-center px-[14px] gap-2 w-full"
      style={{ height: "44px", background: "#FFFFFF", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(103,110,118,0.08), 0px 0px 0px 1px rgba(103,110,118,0.16), 0px 1px 1px rgba(0,0,0,0.12)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
        <rect x="2" y="4" width="16" height="13" rx="2" stroke="#9EA5AD" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5" stroke="#9EA5AD" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="hussain@finesse.com" type="email"
        className="flex-1 outline-none bg-transparent"
        style={{ fontFamily: "Nunito, sans-serif", fontSize: "16px", color: value ? "#333333" : "#9EA5AD" }} />
    </div>
  </div>
);

// ─── Shared Modal Wrapper ─────────────────────────────────────────────────────
const ModalWrapper = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center"
    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}
    onClick={onClose}>
    <div className="relative flex flex-col items-start overflow-y-auto"
      style={{ width: "340px", maxHeight: "90vh", background: "#FFFFFF", borderRadius: "11px", padding: "20px", gap: "0px" }}
      onClick={(e) => e.stopPropagation()}>
      <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "24px", color: "#FF8B13", textTransform: "capitalize", marginBottom: "20px" }}>
        {title}
      </h2>
      <div className="flex flex-col gap-5 w-full">{children}</div>
    </div>
  </div>
);

// ─── Parent Details Modal ─────────────────────────────────────────────────────
const ParentsModal = ({ parentData, onClose }) => {
  const [motherName, setMotherName] = useState(
    parentData?.relationWithChildren?.toLowerCase() === "mother" ? parentData?.name || "" : parentData?.spouseName || ""
  );
  const [fatherName, setFatherName] = useState(
    parentData?.relationWithChildren?.toLowerCase() === "father" ? parentData?.name || "" : parentData?.spouseName || ""
  );
  const [phone,   setPhone]   = useState(parentData?.phone   || "");
  const [email,   setEmail]   = useState(parentData?.email   || "");
  const [address, setAddress] = useState(parentData?.address || "");

  return (
    <ModalWrapper title="Parent Details" onClose={onClose}>
      <ModalInputRow label="Mother Name" value={motherName} onChange={setMotherName} placeholder="Mother name" />
      <ModalInputRow label="Father Name" value={fatherName} onChange={setFatherName} placeholder="Father name" />
      <ModalPhoneRow value={phone} onChange={setPhone} />
      <ModalEmailRow value={email} onChange={setEmail} />
      <ModalInputRow label="Address" value={address} onChange={setAddress} placeholder="Anywhere Street" />
    </ModalWrapper>
  );
};

// ─── School Details Modal ─────────────────────────────────────────────────────
const SchoolModal = ({ onClose }) => {
  const [schoolName, setSchoolName] = useState("");
  const [phone,      setPhone]      = useState("");
  const [email,      setEmail]      = useState("");
  const [address,    setAddress]    = useState("");

  return (
    <ModalWrapper title="School Details" onClose={onClose}>
      <ModalInputRow label="School Name" value={schoolName} onChange={setSchoolName} placeholder="ABC Public School" />
      <ModalPhoneRow value={phone} onChange={setPhone} />
      <ModalEmailRow value={email} onChange={setEmail} />
      <ModalInputRow label="Address" value={address} onChange={setAddress} placeholder="Anywhere Street" />
    </ModalWrapper>
  );
};

// ─── Profile Quick Action Button ─────────────────────────────────────────────
const ProfileActionBtn = ({ icon: Icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group">
    <div
      className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-[10px] flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-md"
      style={{ background: "#FF8B13" }}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.8} />
    </div>
    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#333333" }}>
      {label}
    </span>
  </button>
);

// ─── Profile Page ─────────────────────────────────────────────────────────────
const ProfilePage = ({ parentData, childData, plan, session }) => {
  const [showChildrenModal, setShowChildrenModal] = useState(false);
  const [showParentsModal,  setShowParentsModal]  = useState(false);
  const [showSchoolModal,   setShowSchoolModal]   = useState(false);

  const childCount   = parentData?.childUsers?.length || 0;
  const relation     = parentData?.relationWithChildren || "";
  const parentName   = parentData?.name || session?.user?.name || "User";
  const avatarLetter = parentName.charAt(0).toUpperCase();

  const genderLabel = relation.toLowerCase() === "mother" ? "Mother"
    : relation.toLowerCase() === "father" ? "Father"
    : "Parent";
  const kidsLabel   = childCount === 1 ? "1 Kid" : `${childCount} Kids`;
  const subtitle    = childCount > 0 ? `${genderLabel} of ${kidsLabel}` : genderLabel || "Parent";

  const planName  = plan && plan !== "Upgrade Now!" ? plan : "No Active Plan";
  const planDates = childData?.planStartDate
    ? `From ${new Date(childData.planStartDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
    : "";

  return (
    <div className="flex flex-col min-h-screen bg-white pb-28">
      <div
        className="fixed left-0 right-0 z-40 flex items-center gap-2 px-4"
        style={{ top: "72px", height: "53px", background: "#FFFFFF", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)" }}
      >
        <div
          className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
          style={{ border: "1.5px solid #FF8B13" }}
        >
          <ArrowLeft className="w-5 h-5 text-[#FF8B13]" strokeWidth={2} />
        </div>
        <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "20px", color: "#333333", textTransform: "capitalize" }}>
          My Profile
        </span>
      </div>

      <div className="flex flex-col items-center px-5 pt-6 gap-6" style={{ marginTop: "53px" }}>
        <div className="w-full max-w-[390px] md:max-w-[480px] mx-auto flex flex-col gap-6">
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ minHeight: "345px" }}>
            <div className="absolute inset-0" style={{ background: "linear-gradient(90.28deg, #F8BF3B 13.22%, #FF8B13 38.21%, #EF5F3D 95.18%)" }} />
            {[535, 497, 459, 420, 382, 343, 305, 267, 228, 190, 152].map((size, i) => (
              <div key={i} className="absolute pointer-events-none"
                style={{ width: `${size}px`, height: `${size * 0.977}px`, left: `${-160 + i * 23}px`, top: `${-56 + i * 23}px`, border: "1.08px solid rgba(255,255,255,0.5)", borderRadius: "50%", opacity: 0.3 + i * 0.07, transform: "rotate(165deg)" }} />
            ))}
            <div className="relative flex flex-col items-center pt-8 pb-6 gap-4 z-10">
              <div className="relative">
                {session?.user?.image ? (
                  <img src={session.user.image} alt={parentName}
                    className="w-[108px] h-[108px] rounded-full object-cover"
                    style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.18)" }} />
                ) : (
                  <div className="w-[108px] h-[108px] rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.3)", boxShadow: "0px 2px 5px rgba(0,0,0,0.18)", border: "3px solid rgba(255,255,255,0.6)" }}>
                    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "42px", color: "#fff" }}>{avatarLetter}</span>
                  </div>
                )}
                <div className="absolute -top-1 -right-1 w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{ background: "#000", border: "3px solid #fff", boxShadow: "0px 2px 4px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "11px", color: "#fff" }}>8</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "26px", lineHeight: "28px", color: "#fff", textTransform: "capitalize", textAlign: "center" }}>
                  {parentName}
                </h2>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "22px", lineHeight: "24px", color: "#fff", textAlign: "center", textTransform: "capitalize" }}>
                  {subtitle}
                </p>
              </div>
              <div className="w-[calc(100%-40px)] bg-white rounded-[11px] flex flex-row justify-around items-center py-5 px-4"
                style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.12)" }}>
                <ProfileActionBtn icon={Users}         label="Children" onClick={() => setShowChildrenModal(true)} />
                <ProfileActionBtn icon={User}          label="Parents"  onClick={() => setShowParentsModal(true)} />
                <ProfileActionBtn icon={GraduationCap} label="School"   onClick={() => setShowSchoolModal(true)} />
                <ProfileActionBtn icon={Wallet}        label="Wallet"   onClick={() => {}} />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -top-[14px] left-5 px-4 py-1 rounded-[4px] z-10"
              style={{ background: "linear-gradient(90.28deg, #F8BF3B 13.22%, #FF8B13 38.21%, #EF5F3D 95.18%)" }}>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#fff", textTransform: "capitalize" }}>
                Current Plan
              </span>
            </div>
            <div className="w-full bg-white rounded-[11px] flex flex-row items-center justify-between px-5 pt-7 pb-5"
              style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.12)" }}>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", color: "#333333", textTransform: "capitalize" }}>
                  {planName}
                </span>
                {planDates && (
                  <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "14px", color: "#333333" }}>
                    {planDates}
                  </span>
                )}
              </div>
              <button className="w-8 h-8 rounded-[8px] flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-[#FF8B13]" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showChildrenModal && (
        <ChildrenModal childData={childData} onClose={() => setShowChildrenModal(false)} />
      )}
      {showParentsModal && (
        <ParentsModal parentData={parentData} onClose={() => setShowParentsModal(false)} />
      )}
      {showSchoolModal && (
        <SchoolModal onClose={() => setShowSchoolModal(false)} />
      )}
    </div>
  );
};

// ─── Mobile Bottom Navigation ─────────────────────────────────────────────────
const MobileBottomNav = ({ activeNav, setActiveNav, setSelectedSubject }) => (
  <div
    className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 md:hidden"
    style={{ background: "#2C3D68", boxShadow: "0 -4px 20px rgba(0,0,0,0.18)" }}
  >
    {[
      { key: "home",  Icon: Home,      label: "Home" },
      { key: "book",  Icon: BookOpen,  label: "Subjects" },
      { key: "chart", Icon: BarChart2, label: "Reports" },
      { key: "user",  Icon: User,      label: "Profile" },
    ].map(({ key, Icon, label }) => (
      <button key={key} onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
        className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeNav === key ? "bg-white" : ""}`}>
          <Icon className={`w-5 h-5 ${activeNav === key ? "text-[#FF8B13]" : "text-white/70"}`} strokeWidth={activeNav === key ? 2.5 : 1.8} />
        </div>
        <span className={`text-[10px] font-bold tracking-wide ${activeNav === key ? "text-[#FF8B13]" : "text-white/60"}`}>{label}</span>
      </button>
    ))}
  </div>
);

// ─── Desktop Horizontal Bottom Navbar ────────────────────────────────────────
const DesktopBottomNav = ({ activeNav, setActiveNav, setSelectedSubject }) => (
  <div
    className="fixed bottom-6 left-1/2 z-50 hidden md:flex items-center justify-center"
    style={{ transform: "translateX(-50%)", width: "386px", height: "80px", background: "#2C3D68", borderRadius: "16px", padding: "16px", gap: "56px", boxShadow: "0px 8px 32px rgba(44,61,104,0.35)" }}
  >
    {[
      { key: "home",  Icon: Home,     iconSize: 24, strokeWidth: 2.5 },
      { key: "book",  Icon: BookOpen, iconSize: 32, strokeWidth: 3   },
      { key: "chart", Icon: FileText, iconSize: 32, strokeWidth: 3   },
      { key: "user",  Icon: User,     iconSize: 32, strokeWidth: 3.5 },
    ].map(({ key, Icon, iconSize, strokeWidth }) => {
      const isActive = activeNav === key;
      return (
        <button key={key} onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
          style={{ width: "48px", height: "48px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: isActive ? "#FFFAF0" : "transparent", flexShrink: 0, transition: "background 0.2s" }}>
          <Icon style={{ width: `${iconSize}px`, height: `${iconSize}px` }} color={isActive ? "#FF8B13" : "#FFFAF0"} strokeWidth={strokeWidth} />
        </button>
      );
    })}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ── SIGNUP MODAL: Field + RelationDropdown defined OUTSIDE the modal ──────────
// ── (defining them inside caused re-mount on every keystroke → focus loss) ────
// ═══════════════════════════════════════════════════════════════════════════════

// ── Reusable text input field ─────────────────────────────────────────────────
const SignupField = ({ label, value, onChange, placeholder, type = "text", readOnly = false, required = false }) => (
  <div className="flex flex-col gap-2 flex-1 min-w-0">
    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#666666" }}>
      {label}{required && <span style={{ color: "#EF5F3D" }}> *</span>}
    </label>
    <div style={{ display: "flex", alignItems: "center", padding: "12px 16px", height: "48px", background: readOnly ? "#F8F8F8" : "#FFFFFF", boxShadow: "0px 1px 4px rgba(12,12,13,0.10), 0px 1px 4px rgba(12,12,13,0.05)", borderRadius: "8px" }}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="flex-1 outline-none bg-transparent w-full"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: value ? "#333333" : "#999999", cursor: readOnly ? "not-allowed" : "text" }}
      />
    </div>
  </div>
);

// ── Relation dropdown — receives state as props instead of closing over it ────
const SignupRelationDropdown = ({ relation, setRelation, showRelDrop, setShowRelDrop }) => (
  <div className="flex flex-col gap-2 flex-1 min-w-0">
    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#666666" }}>
      Relation with Child<span style={{ color: "#EF5F3D" }}> *</span>
    </label>
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowRelDrop((p) => !p)}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", height: "48px", width: "100%", background: "#FFFFFF", boxShadow: "0px 1px 4px rgba(12,12,13,0.10), 0px 1px 4px rgba(12,12,13,0.05)", borderRadius: showRelDrop ? "8px 8px 0 0" : "8px", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", color: relation ? "#333333" : "#999999" }}>
          {relation || "Select Item"}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
          style={{ transform: showRelDrop ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>
          <path d="M5 8l5 5 5-5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {showRelDrop && (
        <div className="absolute left-0 right-0 z-50 overflow-hidden"
          style={{ top: "48px", background: "#FFFFFF", borderRadius: "0 0 8px 8px", boxShadow: "0px 4px 12px rgba(0,0,0,0.12)", border: "1px solid #F0F0F0", borderTop: "none" }}>
          {RELATION_OPTIONS.map((opt) => (
            <button key={opt} type="button"
              onClick={() => { setRelation(opt); setShowRelDrop(false); }}
              className="w-full text-left px-4 py-3 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: opt === relation ? "#FF8B13" : "#333333", fontWeight: opt === relation ? 700 : 400, border: "none", background: opt === relation ? "#FFF7F1" : "transparent", cursor: "pointer", borderBottom: "1px solid #F5F5F5" }}
              onMouseEnter={(e) => { if (opt !== relation) e.currentTarget.style.background = "#FFF7F1"; }}
              onMouseLeave={(e) => { if (opt !== relation) e.currentTarget.style.background = "transparent"; }}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ── PARENT SIGNUP MODAL ───────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const ParentSignupModal = ({ session, onComplete }) => {
  const [parentName,  setParentName]  = useState(session?.user?.name  || "");
  const [parentEmail, setParentEmail] = useState(session?.user?.email || "");
  const [parentPhone, setParentPhone] = useState("");
  const [relation,    setRelation]    = useState("");
  const [showRelDrop, setShowRelDrop] = useState(false);
  const [childName,   setChildName]   = useState("");
  const [ageGroup,    setAgeGroup]    = useState("");
  const [grade,       setGrade]       = useState("");
  const [schoolName,  setSchoolName]  = useState("");
  const [submitting,  setSubmitting]  = useState(false);
  const [error,       setError]       = useState("");

  const handleSubmit = async () => {
    if (!parentName.trim() || !parentEmail.trim() || !parentPhone.trim() || !relation) {
      setError("Please fill in all required parent fields.");
      return;
    }
    if (!childName.trim() || !ageGroup.trim() || !grade.trim()) {
      setError("Please fill in all required child fields.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const userName = parentEmail.split("@")[0];

      // ── Create Parent — now with JWT auth header ───────────────────────────
      await axios.post(
        `${BASE_URL}/api/parent-users`,
        {
          name:                 parentName.trim(),
          email:                parentEmail.trim(),
          userName,
          phone:                parentPhone.trim(),
          password:             "google_sso_user",
          maritalStatus:        "",
          occupation:           "",
          relationWithChildren: relation,
          spouseName:           "",
          spouseGender:         "",
          spousePhone:          "",
        },
        authHeaders()   // ✅ JWT attached
      );

      // ── Child creation (uncomment when API is ready) ───────────────────────
      // await axios.post(
      //   `${BASE_URL}/api/child-users`,
      //   { parentId: newParentId, childName: childName.trim(), ageGroup: ageGroup.trim(), grade: grade.trim(), schoolName: schoolName.trim() },
      //   authHeaders()
      // );

      onComplete();
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="w-full flex flex-col overflow-y-auto"
        style={{ maxWidth: "727px", maxHeight: "95vh", background: "#FFF7F1", borderRadius: "8px", padding: "24px", gap: "16px" }}
        onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col md:flex-row" style={{ gap: "0px" }}>
          <div className="flex flex-col flex-1" style={{ gap: "16px", paddingRight: "0px" }}>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "30px", color: "#000000", margin: 0 }}>
              Enter Parent Details
            </h2>
            <SignupField label="Parent Name"        required value={parentName}  onChange={setParentName}  placeholder="Type Here" />
            <SignupField label="Parent Email ID"     required value={parentEmail} onChange={setParentEmail} placeholder="Type Here" type="email" readOnly={!!session?.user?.email} />
            <SignupField label="Parent Phone Number" required value={parentPhone} onChange={setParentPhone} placeholder="Type Here" type="tel" />
            <SignupRelationDropdown relation={relation} setRelation={setRelation} showRelDrop={showRelDrop} setShowRelDrop={setShowRelDrop} />
          </div>
          <div className="hidden md:block flex-shrink-0 self-stretch mx-4" style={{ width: "1px", background: "#CCCCCC", margin: "30px 16px" }} />
          <div className="block md:hidden my-4" style={{ height: "1px", background: "#E0E0E0" }} />
          <div className="flex flex-col flex-1" style={{ gap: "16px" }}>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "30px", color: "#000000", margin: 0 }}>
              Enter Child Details
            </h2>
            <SignupField label="Child Name" required value={childName}  onChange={setChildName}  placeholder="Type Here" />
            <div className="flex gap-4">
              <SignupField label="Age Group(Yrs)" required value={ageGroup} onChange={setAgeGroup} placeholder="Type Here" />
              <SignupField label="Grade"          required value={grade}    onChange={setGrade}    placeholder="Type Here" />
            </div>
            <SignupField label="School Name" value={schoolName} onChange={setSchoolName} placeholder="Type Here" />
          </div>
        </div>

        {error && (
          <div style={{ background: "#FEE9E9", borderRadius: "6px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="10" cy="10" r="9" stroke="#EF5F3D" strokeWidth="1.5"/>
              <path d="M10 6v4M10 14h.01" stroke="#EF5F3D" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#EF5F3D", fontWeight: 600, margin: 0 }}>{error}</p>
          </div>
        )}

        <button onClick={handleSubmit} disabled={submitting}
          style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px", gap: "8px", width: "100%", height: "56px", background: submitting ? "#4A5A88" : "#2C3D68", borderRadius: "8px", border: "none", cursor: submitting ? "not-allowed" : "pointer", transition: "background 0.2s, opacity 0.2s", opacity: submitting ? 0.85 : 1 }}
          onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "#1F2D52"; }}
          onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = "#2C3D68"; }}>
          {submitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#FFFFFF" }}>Sign Up</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ── MAIN DASHBOARD ────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const UserDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const carouselRef = useRef(null);

  const [subjectData,          setSubjectData]          = useState([]);
  const [recentActivities,     setRecentActivities]     = useState([]);
  const [recentLoading,        setRecentLoading]        = useState(true);
  const [loading,              setLoading]              = useState(true);
  const [selectedSubject,      setSelectedSubject]      = useState(null);
  const [activeNav,            setActiveNav]            = useState("home");
  const [activeFilter,         setActiveFilter]         = useState("All");
  const [strongSkills,         setStrongSkills]         = useState([]);
  const [needAttentionSkills,  setNeedAttentionSkills]  = useState([]);
  const [plan,                 setPlan]                 = useState("");
  const [childName,            setChildName]            = useState("");
  const [customUserData,       setCustomUserData]       = useState(false);
  const [parentId,             setParentId]             = useState(null);
  const [parentData,           setParentData]           = useState(null);
  const [childData,            setChildData]            = useState(null);
  const [showSignupModal,      setShowSignupModal]      = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    // ══════════════════════════════════════════════════════════════════════════
    // STEP 1–3: Exchange Google ID Token → Backend JWT → Store in localStorage
    // Priority order:
    //   1. Already stored in localStorage  → reuse it
    //   2. session.backendJWT from route.js → store & reuse it
    //   3. session.id_token fallback        → exchange manually
    // ══════════════════════════════════════════════════════════════════════════
    const ensureJWT = async () => {
      // ── Priority 1: already stored from a previous call ───────────────────
      const existingJWT = getJWT();
      if (existingJWT) {
        console.log("ℹ️ JWT already present in localStorage, skipping exchange");
        return existingJWT;
      }

      // ── Priority 2: route.js already exchanged the token at login time ────
      // session.backendJWT is set by the updated signIn() + session() callbacks
      if (session?.backendJWT) {
        storeJWT(session.backendJWT);
        console.log("✅ JWT taken directly from session.backendJWT");
        return session.backendJWT;
      }

      // ── Priority 3: fallback — exchange Google id_token manually ──────────
      // session.id_token is forwarded by the jwt() + session() callbacks in route.js
      const googleIdToken = session?.id_token || session?.idToken;

      if (!googleIdToken) {
        console.warn(
          "⚠️ No JWT source found in session.\n" +
          "Make sure route.js has the updated callbacks that set session.backendJWT and session.id_token."
        );
        return null;
      }

      console.log("ℹ️ Falling back to manual Google id_token exchange");
      const jwt = await exchangeGoogleTokenForJWT(googleIdToken);
      return jwt;
    };

    // ══════════════════════════════════════════════════════════════════════════
    // STEP 4: Check / Create Parent — all requests use JWT via authHeaders()
    // ══════════════════════════════════════════════════════════════════════════
    const initParent = async () => {
      const email = session?.user?.email;
      const name  = session?.user?.name || "";
      if (!email) return null;

      try {
        // ✅ JWT header attached
        const checkRes = await axios.get(
          `${BASE_URL}/api/parent-users/email?email=${encodeURIComponent(email)}`,
          authHeaders()
        );

        console.log("initParent full response:", JSON.stringify(checkRes.data));

        const responseData = checkRes.data;
        const pid =
          responseData?.parentId  ||
          responseData?.parent_id ||
          responseData?.id        ||
          responseData?.data?.parentId ||
          responseData?.data?.id  ||
          null;

        console.log("Resolved parentId:", pid);

        if (pid) {
          setParentId(pid);
          try {
            // ✅ JWT header attached
            const fullRes = await axios.get(
              `${BASE_URL}/api/parent-users/${pid}`,
              authHeaders()
            );
            const pData = fullRes.data;
            setParentData(pData);
            if (pData?.childUsers?.length > 0) {
              const child = pData.childUsers[0];
              setChildData(child);
              setChildName(child.childName || name);
            } else {
              setChildName(pData?.name || name);
            }
          } catch (fullErr) {
            console.error("Failed to fetch full parent data:", fullErr);
            setChildName(name);
          }
          return pid;
        } else {
          console.log("No parentId found in response - showing signup modal");
          setShowSignupModal(true);
          setChildName(name);
          return null;
        }
      } catch (err) {
        console.log(
          "initParent error - showing signup modal.",
          "HTTP status:", err?.response?.status,
          "Response:", JSON.stringify(err?.response?.data),
          "Message:", err?.message
        );
        setShowSignupModal(true);
        setChildName(name);
        return null;
      }
    };

    // ══════════════════════════════════════════════════════════════════════════
    // STEP 6: Fetch subjects — JWT header attached
    // ══════════════════════════════════════════════════════════════════════════
    const fetchSubjects = async () => {
      try {
        const email = session?.user?.email;
        if (!email) { setLoading(false); return; }

        let hasUserData = false;
        try {
          // ✅ JWT header attached
          const res = await axios.get(
            `${BASE_URL}/parent-users/getPricingPlan?email=${email}`,
            authHeaders()
          );
          if (res.data?.pricingPlan) {
            setPlan(res.data.pricingPlan.name === "No active plan found for this user."
              ? "Upgrade Now!"
              : res.data.pricingPlan.name);
          }
          setChildName(prev => prev || res.data?.childName || session?.user?.name || "User");
          if (res?.data?.pricingPlan?.subjects?.length > 0) {
            setSubjectData(res.data.pricingPlan.subjects);
            setCustomUserData(true);
            hasUserData = true;
          }
        } catch {
          setChildName(prev => prev || session?.user?.name || "User");
        }

        if (!hasUserData) {
          try {
            // ✅ JWT header attached
            const response = await axios.get(
              `${BASE_URL}/api/subjects`,
              authHeaders()
            );
            setSubjectData(response.data || []);
            setCustomUserData(false);
          } catch {
            setSubjectData([]);
          }
        }
      } catch {
        setSubjectData([]);
      } finally {
        setLoading(false);
      }
    };

    const init = async () => {
      await ensureJWT();   // ← FIRST: get & store JWT
      await initParent();  // ← THEN:  all API calls use the JWT
      await fetchSubjects();
    };
    init();

    // Life skills from localStorage
    const storedStrong = localStorage.getItem("SenseiStrongSkills");
    const storedNeeds  = localStorage.getItem("SenseiNeedAttentionSkills");
    if (storedStrong) setStrongSkills(JSON.parse(storedStrong));
    if (storedNeeds)  setNeedAttentionSkills(JSON.parse(storedNeeds));

    // ══════════════════════════════════════════════════════════════════════════
    // Recent Activities — JWT header attached
    // ══════════════════════════════════════════════════════════════════════════
    const fetchRecentActivities = async () => {
      setRecentLoading(true);
      try {
        const email = session?.user?.email;
        if (email) {
          // ✅ JWT header attached
          const res = await axios.get(
            `${BASE_URL}/recent-activities?email=${email}`,
            authHeaders()
          );
          const activities = res.data?.activities || res.data || [];
          setRecentActivities(Array.isArray(activities) ? activities : []);
        }
      } catch {
        const storedRecent = localStorage.getItem("SenseiRecentActivities");
        if (storedRecent) { try { setRecentActivities(JSON.parse(storedRecent)); } catch {} }
      } finally {
        setRecentLoading(false);
      }
    };

    fetchRecentActivities();
  }, [status, session]);

  // ── Re-fetch parent data after successful signup ───────────────────────────
  const handleSignupComplete = async () => {
    setShowSignupModal(false);
    const email = session?.user?.email;
    if (!email) return;

    try {
      // ✅ JWT header attached
      const checkRes = await axios.get(
        `${BASE_URL}/api/parent-users/email?email=${encodeURIComponent(email)}`,
        authHeaders()
      );
      if (checkRes.data?.parentId) {
        const pid = checkRes.data.parentId;
        setParentId(pid);
        // ✅ JWT header attached
        const fullRes = await axios.get(
          `${BASE_URL}/api/parent-users/${pid}`,
          authHeaders()
        );
        const pData = fullRes.data;
        setParentData(pData);
        if (pData?.childUsers?.length > 0) {
          const child = pData.childUsers[0];
          setChildData(child);
          setChildName(child.childName || session?.user?.name || "");
        }
      }
    } catch (err) {
      console.error("Post-signup fetch error:", err);
    }
  };

  const handleSubjectClick = (subject) => {
    if (subject.modules) localStorage.setItem("modules", JSON.stringify(subject.modules));
    if (subject.colors)  localStorage.setItem("colors",  JSON.stringify(subject.colors));
    if (subject.locked)  localStorage.setItem("locked",  JSON.stringify(subject.locked));
    setSelectedSubject(subject);
  };

  const scrollCarousel     = () => { if (carouselRef.current) carouselRef.current.scrollBy({ left: 290,  behavior: "smooth" }); };
  const scrollCarouselLeft = () => { if (carouselRef.current) carouselRef.current.scrollBy({ left: -290, behavior: "smooth" }); };

  const filteredSubjects    = activeFilter === "All" ? subjectData : subjectData.filter(() => true);
  const hasSubjects         = subjectData.length > 0;
  const hasRecentActivities = recentActivities.length > 0;

  if (!DASHBOARD_ENABLED) return <MaintenancePage />;
  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-semibold">Loading…</p>
        </div>
        {showSignupModal && (
          <ParentSignupModal session={session} onComplete={handleSignupComplete} />
        )}
      </div>
    );
  }

  const SubjectCarousel = () => (
    hasSubjects ? (
      <div className="flex items-center">
        <button onClick={scrollCarouselLeft}
          className="flex-shrink-0 mr-[16px] mb-4 w-[62px] h-[62px] rounded-full bg-[#FF8B13] bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all z-10 border-4 border-[#FF8B13]">
          <ChevronLeft className="w-7 h-7 text-[#FF8B13]" strokeWidth={4} />
        </button>
        <div ref={carouselRef} className="flex gap-5 overflow-x-auto pb-4 scroll-smooth w-[570px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
          {filteredSubjects.map((subject, i) => (
            <SubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
          ))}
        </div>
        <button onClick={scrollCarousel}
          className="flex-shrink-0 ml-[16px] mb-4 w-[62px] h-[62px] rounded-full bg-[#FF8B13] bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all z-10 border-4 border-[#FF8B13]">
          <ChevronRight className="w-7 h-7 text-[#FF8B13]" strokeWidth={4} />
        </button>
      </div>
    ) : <NoSubjectsFound />
  );

  const SubjectGrid = () => (
    hasSubjects ? (
      <div className="flex flex-nowrap gap-5 pb-4">
        {filteredSubjects.map((subject, i) => (
          <SubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
        ))}
      </div>
    ) : <NoSubjectsFound />
  );

  const Greeting = ({ large = true }) => (
    <div className={large ? "mb-6" : "mb-5"}>
      <p className={`text-[#2C3D68] font-semibold tracking-tight leading-8 ${large ? "text-2xl" : "text-xl"}`}>Hello!</p>
      <h1 className={`font-semibold bg-gradient-to-r from-[#F8BF3B] via-[#FF8B13] to-[#EF5F3D] bg-clip-text text-transparent tracking-tight ${large ? "text-[36px] leading-[44px]" : "text-[28px] leading-[38px]"}`}>
        {childName || "User"}
      </h1>
      <p className={`text-[#2C3D68] font-semibold tracking-tight mt-1 ${large ? "text-2xl leading-8" : "text-base leading-6"}`}>
        Let&apos;s start your journey to a brighter future
      </p>
    </div>
  );

  const MobileHomeContent = () => (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-5 pt-5 pb-6"
        style={{ background: "#2C3D68", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "20px", color: "#FF8B13", letterSpacing: "-0.5px" }}>sensei</span>
          <div className="w-9 h-9 rounded-full bg-[#FF8B13] flex items-center justify-center">
            <User className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "2px" }}>Hello!</p>
        <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "28px", lineHeight: "34px", letterSpacing: "-0.5px", background: "linear-gradient(90deg, #F8BF3B, #FF8B13, #EF5F3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "4px" }}>
          {childName || "User"}
        </h1>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
          Let&apos;s start your journey to a brighter future
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-5" style={{ scrollbarWidth: "none" }}>
        {hasSubjects ? (
          <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
            {filteredSubjects.map((subject, i) => (
              <MobileSubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
            ))}
          </div>
        ) : <NoSubjectsFound />}

        <div className="mt-5">
          <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", color: "#333333", marginBottom: "12px" }}>Recent</h3>
          <div className="flex gap-2 mb-4">
            {["All", "Complete", "Pending"].map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{ flex: 1, height: "38px", borderRadius: "8px", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", background: activeFilter === f ? "#2C3D68" : "#FFFFFF", color: activeFilter === f ? "#FFFFFF" : "#2C3D68", border: activeFilter === f ? "none" : "1.5px solid #2C3D68", transition: "all 0.2s" }}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {recentLoading ? (
              [...Array(3)].map((_, i) => <div key={i} className="animate-pulse w-full rounded-xl bg-gray-100" style={{ height: "88px" }} />)
            ) : hasRecentActivities ? (
              recentActivities.map((activity, i) => <MobileRecentItem key={i} activity={activity} />)
            ) : (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <div className="text-4xl">📋</div>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "#999999", textAlign: "center", lineHeight: "19px" }}>
                  No recent activities yet.{"\n"}Start a subject to see your progress here!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const MobileHomeFull = () => (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-5 pt-5 pb-6"
        style={{ background: "#2C3D68", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "20px", color: "#FF8B13" }}>sensei</span>
          <div className="w-9 h-9 rounded-full bg-[#FF8B13] flex items-center justify-center">
            <User className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "2px" }}>Hello!</p>
        <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "28px", lineHeight: "34px", letterSpacing: "-0.5px", background: "linear-gradient(90deg, #F8BF3B, #FF8B13, #EF5F3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "4px" }}>
          {childName || "User"}
        </h1>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
          Let&apos;s start your journey to a brighter future
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-5" style={{ scrollbarWidth: "none" }}>
        {hasSubjects ? (
          <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {filteredSubjects.map((subject, i) => (
              <MobileSubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
            ))}
          </div>
        ) : <NoSubjectsFound />}

        <div className="mt-5 rounded-2xl p-4" style={{ background: "#FFF7F1" }}>
          <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "16px", color: "#222222", marginBottom: "14px" }}>
            Life-skills your child shows:
          </h2>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#389F78]" />
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", color: "#666666" }}>Strong</span>
              </div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "22px", color: "#333333" }}>
                {strongSkills.length > 0
                  ? strongSkills.map((s, i) => <div key={i}>{s}</div>)
                  : <><div>Communication</div><div>Self-awareness</div><div>Problem Solving</div></>}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#EC5F3D]" />
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", color: "#666666" }}>Need Attention</span>
              </div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "22px", color: "#333333" }}>
                {needAttentionSkills.length > 0
                  ? needAttentionSkills.map((s, i) => <div key={i}>{s}</div>)
                  : <><div>Creativity</div><div>Empathy</div><div>Stress Mgmt</div><div>Interpersonal</div></>}
              </div>
            </div>
          </div>
          <button className="w-full h-12 text-white flex items-center justify-center gap-2 rounded-xl font-bold"
            style={{ background: "#2C3D68", fontFamily: "Nunito, sans-serif", fontSize: "14px" }}>
            <span>View Full Report</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div style={{ height: "72px" }} />

      {/* ════ DESKTOP ════ */}
      <div className="hidden md:block">
        {activeNav === "home" && (
          selectedSubject ? (
            <div className="px-6 py-6 pb-28">
              <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            </div>
          ) : (
            <div className="relative flex gap-6 px-6 py-6 pb-28">
              <div className="flex-1 min-w-0">
                <Greeting large={true} />
                <SubjectGrid />
              </div>
              <div className="absolute top-6 right-16 w-[350px] bg-[#FFF7F1] p-4 rounded-2xl flex flex-col gap-8">
                <h2 className="text-black text-2xl font-extrabold leading-8">Life-skills your child shows:</h2>
                <div className="flex gap-6">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-4 h-4 rounded-full bg-[#389F78] flex-shrink-0" />
                      <span className="text-[#666666] font-bold text-base">Strong</span>
                    </div>
                    <div className="text-[#333333] font-bold text-[18px] leading-[25px]">
                      {strongSkills.length > 0 ? strongSkills.map((s, i) => <div key={i}>{s}</div>) : <><div>Communication</div><div>Self-awareness</div><div>Problem Solving</div></>}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-4 h-4 rounded-full bg-[#EC5F3D] flex-shrink-0" />
                      <span className="text-[#666666] font-bold text-base">Need Attention</span>
                    </div>
                    <div className="text-[#333333] font-bold text-[18px] leading-[25px]">
                      {needAttentionSkills.length > 0 ? needAttentionSkills.map((s, i) => <div key={i}>{s}</div>) : <><div>Creativity</div><div>Empathy</div><div>Stress</div><div>Management</div></>}
                    </div>
                  </div>
                </div>
                <button className="w-full h-14 bg-[#2C3D68] text-white px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-base hover:bg-[#1f2d4d] transition-all">
                  <span>View Full Report</span>
                  <ArrowRight className="w-6 h-6" strokeWidth={2} />
                </button>
              </div>
            </div>
          )
        )}

        {activeNav === "book" && (
          <div className="px-6 py-6 pb-28">
            {selectedSubject ? (
              <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            ) : (
              <div className="flex gap-6">
                <div className="flex-1 min-w-0 max-w-[720px]">
                  <Greeting large={true} />
                  <SubjectCarousel />
                </div>
                <div className="flex-shrink-0 flex flex-col items-start"
                  style={{ width: "350px", height: "560px", padding: "16px", gap: "15px", background: "#FFF7F1", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)", borderRadius: "16px", marginLeft: "24px", marginTop: "122px" }}>
                  <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.02em", color: "#666666", margin: 0 }}>Recent</h3>
                  <div className="flex flex-row w-full" style={{ gap: "8px", height: "40px" }}>
                    {["All", "Complete", "Pending"].map((f) => (
                      <button key={f} onClick={() => setActiveFilter(f)} className="flex-1 flex items-center justify-center transition-all"
                        style={{ height: "40px", padding: "8px", borderRadius: "8px", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "24px", background: activeFilter === f ? "#2C3D68" : "#FFFFFF", color: activeFilter === f ? "#FFFFFF" : "#2C3D68", border: activeFilter === f ? "none" : "1px solid #2C3D68" }}>
                        {f}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col w-full overflow-y-auto flex-1" style={{ gap: "15px", scrollbarWidth: "thin" }}>
                    {recentLoading ? (
                      [...Array(3)].map((_, i) => <div key={i} className="animate-pulse" style={{ width: "318px", height: "122px", background: "#e5e7eb", borderRadius: "8px" }} />)
                    ) : hasRecentActivities ? (
                      recentActivities.map((activity, i) => <RecentItem key={i} activity={activity} />)
                    ) : (
                      <div className="flex flex-col items-center justify-center flex-1 gap-3">
                        <div className="text-4xl">📋</div>
                        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "#999999", textAlign: "center", lineHeight: "20px" }}>
                          No recent activities yet. Start a subject to see your progress here!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeNav === "user" && (
          <div className="px-6 py-6 pb-28 flex justify-center">
            <div className="w-full max-w-[600px]">
              <ProfilePage parentData={parentData} childData={childData} plan={plan} session={session} />
            </div>
          </div>
        )}

        {activeNav !== "home" && activeNav !== "book" && activeNav !== "user" && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Coming soon…</p>
          </div>
        )}
      </div>

      {/* ════ MOBILE ════ */}
      <div className="md:hidden" style={{ marginTop: "-72px" }}>
        {activeNav === "home" && (
          selectedSubject
            ? <div className="px-4 py-4 pb-28"><SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} /></div>
            : <MobileHomeFull />
        )}
        {activeNav === "book" && (
          selectedSubject
            ? <div className="px-4 py-4 pb-28"><SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} /></div>
            : <MobileHomeContent />
        )}
        {activeNav === "user" && (
          <ProfilePage parentData={parentData} childData={childData} plan={plan} session={session} />
        )}
        {activeNav !== "home" && activeNav !== "book" && activeNav !== "user" && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Coming soon…</p>
          </div>
        )}
      </div>

      {/* ── Navbars ── */}
      <DesktopBottomNav activeNav={activeNav} setActiveNav={setActiveNav} setSelectedSubject={setSelectedSubject} />
      <MobileBottomNav  activeNav={activeNav} setActiveNav={setActiveNav} setSelectedSubject={setSelectedSubject} />

      {/* ── Parent Signup Modal ── */}
      {showSignupModal && (
        <ParentSignupModal session={session} onComplete={handleSignupComplete} />
      )}
    </div>
  );
};

export default UserDashboard;