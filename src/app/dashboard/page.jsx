"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import nodataimage from "@/assets/in-Use/nodataimg.svg?url";
import {
  Home, BookOpen, FileText, User,
  ArrowRight, Heart, ChevronRight, Clock, BarChart2,
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
          <Image
            src={subjectImage}
            alt={name}
            width={220}
            height={210}
            style={{ objectFit: "contain", position: "absolute", bottom: 0 }}
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center mb-4">
            <span className="text-5xl">📚</span>
          </div>
        )}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform z-10"
        >
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
    <div
      onClick={onClick}
      className="flex-shrink-0 w-[200px] bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100"
      style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.10)" }}
    >
      {/* Illustration */}
      <div
        className="relative h-[160px] flex items-end justify-center overflow-hidden"
        style={{ background: subjectBg }}
      >
        {subjectImage ? (
          <Image
            src={subjectImage}
            alt={name}
            width={160}
            height={150}
            style={{ objectFit: "contain", position: "absolute", bottom: 0 }}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center mb-3">
            <span className="text-4xl">📚</span>
          </div>
        )}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400" />
        </button>
      </div>

      {/* Info */}
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
        {thumbnail ? <Image src={thumbnail} alt={title} fill className="object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-2xl">🎭</div>}
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
    <div
      className="flex flex-row items-center bg-white cursor-pointer active:opacity-80 transition-opacity w-full"
      style={{ padding: "12px 14px", gap: "12px", boxShadow: "0px 2px 6px rgba(0,0,0,0.09)", borderRadius: "12px", minHeight: "88px" }}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-blue-100 to-pink-100"
        style={{ width: "80px", height: "56px", borderRadius: "8px" }}>
        {thumbnail
          ? <Image src={thumbnail} alt={title} fill className="object-cover" />
          : <div className="absolute inset-0 flex items-center justify-center text-xl">🎭</div>}
      </div>

      {/* Text */}
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
      <button
        key={key}
        onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
        className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeNav === key ? "bg-white" : ""}`}>
          <Icon className={`w-5 h-5 ${activeNav === key ? "text-[#FF8B13]" : "text-white/70"}`} strokeWidth={activeNav === key ? 2.5 : 1.8} />
        </div>
        <span className={`text-[10px] font-bold tracking-wide ${activeNav === key ? "text-[#FF8B13]" : "text-white/60"}`}>{label}</span>
      </button>
    ))}
  </div>
);

// ─── Desktop Horizontal Bottom Navbar (matches Figma exactly) ────────────────
const DesktopBottomNav = ({ activeNav, setActiveNav, setSelectedSubject }) => (
  <div
    className="fixed bottom-6 left-1/2 z-50 hidden md:flex items-center justify-center"
    style={{
      transform: "translateX(-50%)",
      width: "386px",
      height: "80px",
      background: "#2C3D68",
      borderRadius: "16px",
      padding: "16px",
      gap: "56px",
      boxShadow: "0px 8px 32px rgba(44,61,104,0.35)",
    }}
  >
    {[
      { key: "home",  Icon: Home,     iconSize: 24, strokeWidth: 2.5  },
      { key: "book",  Icon: BookOpen, iconSize: 32, strokeWidth: 3    },
      { key: "chart", Icon: FileText, iconSize: 32, strokeWidth: 3    },
      { key: "user",  Icon: User,     iconSize: 32, strokeWidth: 3.5  },
    ].map(({ key, Icon, iconSize, strokeWidth }) => {
      const isActive = activeNav === key;
      return (
        <button
          key={key}
          onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isActive ? "#FFFAF0" : "transparent",
            flexShrink: 0,
            transition: "background 0.2s",
          }}
        >
          <Icon
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
            color={isActive ? "#FF8B13" : "#FFFAF0"}
            strokeWidth={strokeWidth}
          />
        </button>
      );
    })}
  </div>
);

// ─── Main Dashboard ───────────────────────────────────────────────────────────
const UserDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const carouselRef = useRef(null);

  const [subjectData, setSubjectData]                 = useState([]);
  const [recentActivities, setRecentActivities]       = useState([]);
  const [recentLoading, setRecentLoading]             = useState(true);
  const [loading, setLoading]                         = useState(true);
  const [selectedSubject, setSelectedSubject]         = useState(null);
  const [activeNav, setActiveNav]                     = useState("home");
  const [activeFilter, setActiveFilter]               = useState("All");
  const [strongSkills, setStrongSkills]               = useState([]);
  const [needAttentionSkills, setNeedAttentionSkills] = useState([]);
  const [plan, setPlan]                               = useState("");
  const [childName, setChildName]                     = useState("");
  const [customUserData, setCustomUserData]           = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const fetchSubjects = async () => {
      try {
        const email = session?.user?.email;
        if (!email) { setLoading(false); return; }

        let hasUserData = false;
        try {
          const res = await axios.get(`${BASE_URL}/parent-users/getPricingPlan?email=${email}`);
          if (res.data?.pricingPlan) {
            setPlan(res.data.pricingPlan.name === "No active plan found for this user." ? "Upgrade Now!" : res.data.pricingPlan.name);
          }
          setChildName(res.data?.childName || session?.user?.name || "User");
          if (res?.data?.pricingPlan?.subjects?.length > 0) {
            setSubjectData(res.data.pricingPlan.subjects);
            setCustomUserData(true);
            hasUserData = true;
          }
        } catch {
          setChildName(session?.user?.name || "User");
        }

        if (!hasUserData) {
          try {
            const response = await axios.get(`${BASE_URL}/api/subjects`);
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

    fetchSubjects();

    const storedStrong = localStorage.getItem("SenseiStrongSkills");
    const storedNeeds  = localStorage.getItem("SenseiNeedAttentionSkills");
    if (storedStrong) setStrongSkills(JSON.parse(storedStrong));
    if (storedNeeds)  setNeedAttentionSkills(JSON.parse(storedNeeds));

    const fetchRecentActivities = async () => {
      setRecentLoading(true);
      try {
        const email = session?.user?.email;
        if (email) {
          const res = await axios.get(`${BASE_URL}/recent-activities?email=${email}`);
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

  const handleSubjectClick = (subject) => {
    if (subject.modules) localStorage.setItem("modules", JSON.stringify(subject.modules));
    if (subject.colors)  localStorage.setItem("colors",  JSON.stringify(subject.colors));
    if (subject.locked)  localStorage.setItem("locked",  JSON.stringify(subject.locked));
    setSelectedSubject(subject);
  };

  const scrollCarousel = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 290, behavior: "smooth" });
  };

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
      </div>
    );
  }

  // ── Desktop carousel ──────────────────────────────────────────────────────
  const SubjectCarousel = () => (
    hasSubjects ? (
      <div className="flex items-center">
        <div ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth w-[570px]"
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

  // ── Desktop greeting ──────────────────────────────────────────────────────
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

  // ═══════════════════════════════════════════════════════════════════════════
  // ── MOBILE SHARED LAYOUT (used for home & book tabs) ──────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  const MobileHomeContent = () => (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Dark navy header with greeting ── */}
      <div
        className="px-5 pt-5 pb-6"
        style={{ background: "#2C3D68", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}
      >
        {/* Logo row */}
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "20px", color: "#FF8B13", letterSpacing: "-0.5px" }}>
            sensei
          </span>
          <div className="w-9 h-9 rounded-full bg-[#FF8B13] flex items-center justify-center">
            <User className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Greeting text */}
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "2px" }}>
          Hello!
        </p>
        <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "28px", lineHeight: "34px", letterSpacing: "-0.5px", background: "linear-gradient(90deg, #F8BF3B, #FF8B13, #EF5F3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "4px" }}>
          {childName || "User"}
        </h1>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
          Let&apos;s start your journey to a brighter future
        </p>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-5" style={{ scrollbarWidth: "none" }}>

        {/* Subject cards horizontal scroll */}
        {hasSubjects ? (
          <div
            className="flex gap-3 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {filteredSubjects.map((subject, i) => (
              <MobileSubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
            ))}
          </div>
        ) : (
          <NoSubjectsFound />
        )}

        {/* ── Recent section ── */}
        <div className="mt-5">
          <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", color: "#333333", marginBottom: "12px" }}>
            Recent
          </h3>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-4">
            {["All", "Complete", "Pending"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  flex: 1,
                  height: "38px",
                  borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  background: activeFilter === f ? "#2C3D68" : "#FFFFFF",
                  color: activeFilter === f ? "#FFFFFF" : "#2C3D68",
                  border: activeFilter === f ? "none" : "1.5px solid #2C3D68",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Activity list */}
          <div className="flex flex-col gap-3">
            {recentLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse w-full rounded-xl bg-gray-100" style={{ height: "88px" }} />
              ))
            ) : hasRecentActivities ? (
              recentActivities.map((activity, i) => (
                <MobileRecentItem key={i} activity={activity} />
              ))
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

  // ─── Home tab with life skills panel instead of recent ───────────────────
  const MobileHomeFull = () => (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Dark navy header */}
      <div
        className="px-5 pt-5 pb-6"
        style={{ background: "#2C3D68", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}
      >
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "20px", color: "#FF8B13" }}>
            sensei
          </span>
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

        {/* Subject cards */}
        {hasSubjects ? (
          <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {filteredSubjects.map((subject, i) => (
              <MobileSubjectCard key={subject.id || i} subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
            ))}
          </div>
        ) : <NoSubjectsFound />}

        {/* Life skills panel */}
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
          <button
            className="w-full h-12 text-white flex items-center justify-center gap-2 rounded-xl font-bold"
            style={{ background: "#2C3D68", fontFamily: "Nunito, sans-serif", fontSize: "14px" }}
          >
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
        {/* ── HOME ── */}
        {activeNav === "home" && (
          selectedSubject ? (
            <div className="px-6 py-6 pb-28">
              <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            </div>
          ) : (
            <div className="relative flex gap-6 px-6 py-6 pb-28">
              <div className="flex-1 min-w-0 max-w-[720px]">
                <Greeting large={true} />
                <SubjectCarousel />
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

        {/* ── BOOK ── */}
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

        {/* ── OTHER TABS ── */}
        {activeNav !== "home" && activeNav !== "book" && (
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

        {activeNav !== "home" && activeNav !== "book" && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Coming soon…</p>
          </div>
        )}
      </div>

      {/* ── Desktop Horizontal Bottom Navbar (Figma-matched) ── */}
      <DesktopBottomNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setSelectedSubject={setSelectedSubject}
      />

      {/* ── Mobile Bottom Nav (unchanged) ── */}
      <MobileBottomNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setSelectedSubject={setSelectedSubject}
      />
    </div>
  );
};

export default UserDashboard;
