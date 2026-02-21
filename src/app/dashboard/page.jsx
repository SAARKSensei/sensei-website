"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import nodataimage from "@/assets/in-Use/nodataimg.svg?url";
import {
  Home, BookOpen, FileText, User,
  ArrowRight, Heart, ChevronRight, Clock,
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
  "self & social awarness":  SocialImg, // typo variant
  "moral guidance & ethics": EthicsImg,
};

// ✅ Subject name → background color mapping
const SUBJECT_BG_MAP = {
  "emotional wellbeing":     "linear-gradient(180deg, #9FC3E6 30.43%, #4AA6FF 105.22%)",
  "self & social awareness": "#F0ABA4",
  "self & social awarness":  "#F0ABA4",
  "moral guidance & ethics": "#4B926F",
};

// Helpers
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
  <div className="flex flex-col items-center pt-10 pb-4 gap-7 ml-8">
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

// ─── Subject Card ─────────────────────────────────────────────────────────────
const SubjectCard = ({ subject, onClick, index = 0 }) => {
  const {
    name                  = "Subject Name",
    interactiveActivities = 0,
    gamifiedActivities    = 0,
    coins                 = 0,
  } = subject;

  const nameColorClass = CARD_NAME_COLORS[index % CARD_NAME_COLORS.length];

  // ✅ Get subject-specific image and background
  const subjectImage = getSubjectImage(name);
  const subjectBg    = getSubjectBg(name);

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-[270px] min-h-[385px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-100"
    >
      {/* ✅ Illustration area — subject image + correct background color */}
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
            style={{
              objectFit: "contain",
              position: "absolute",
              bottom: 0,
            }}
          />
        ) : (
          // Fallback if no image mapped
          <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center mb-4">
            <span className="text-5xl">📚</span>
          </div>
        )}

        {/* Heart button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform z-10"
        >
          <Heart className="w-4 h-4 text-pink-400" />
        </button>
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4">
        <h3 className={`text-[15px] font-bold leading-tight mb-2 line-clamp-2 ${nameColorClass}`}>
          {name}
        </h3>
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
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #F8BF3B, #FF8B13)" }}
              >
                ✦
              </div>
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-500 ml-1">+{coins}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Recent Activity Item ─────────────────────────────────────────────────────
const RecentItem = ({ activity }) => {
  const {
    thumbnail = "",
    duration  = "15 Mins.",
    title     = "Activity Title",
    subtitle  = "",
  } = activity;

  return (
    <div
      className="flex flex-row items-center rounded-lg bg-white cursor-pointer hover:shadow-md transition-shadow"
      style={{
        padding: "16px", gap: "12px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",
        borderRadius: "8px", width: "318px", minHeight: "122px",
      }}
    >
      <div
        className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-pink-100 relative overflow-hidden"
        style={{ width: "112px", height: "69px", borderRadius: "8px" }}
      >
        {thumbnail ? (
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-2xl">🎭</div>
        )}
      </div>
      <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: "4px" }}>
        <div className="flex flex-row items-center" style={{ gap: "4px", height: "20px" }}>
          <div className="flex items-center justify-center flex-shrink-0"
            style={{ width: "20px", height: "20px", background: "#FFFFFF", borderRadius: "3px", padding: "1.125px" }}>
            <Clock className="flex-shrink-0" style={{ width: "14px", height: "14px", color: "#FF8B13" }} strokeWidth={1.5} />
          </div>
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "14px", letterSpacing: "-0.02em", color: "#333333" }}>
            {duration}
          </span>
        </div>
        <p className="line-clamp-2"
          style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "22px", letterSpacing: "-0.02em", textTransform: "capitalize", color: "#333333", width: "162px" }}>
          {title}
        </p>
        {subtitle && (
          <span className="line-clamp-1"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", letterSpacing: "-0.02em", color: "#333333" }}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

// ─── Mobile Bottom Navigation ─────────────────────────────────────────────────
const MobileBottomNav = ({ activeNav, setActiveNav, setSelectedSubject }) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C3D68] flex items-center justify-around px-4 py-2 md:hidden"
    style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.2)" }}>
    {[
      { key: "home",  Icon: Home,     label: "Home" },
      { key: "book",  Icon: BookOpen, label: "Subjects" },
      { key: "chart", Icon: FileText, label: "Reports" },
      { key: "user",  Icon: User,     label: "Profile" },
    ].map(({ key, Icon, label }) => (
      <button key={key} onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
        className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeNav === key ? "bg-white" : ""}`}>
          <Icon className={`w-5 h-5 ${activeNav === key ? "text-[#FF8B13]" : "text-[#FFFAF0]"}`} strokeWidth={activeNav === key ? 3 : 2} />
        </div>
        <span className={`text-[10px] font-bold ${activeNav === key ? "text-[#FF8B13]" : "text-[#FFFAF0]/70"}`}>{label}</span>
      </button>
    ))}
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

  // Shared carousel component
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
          className="flex-shrink-0 -ml-[31px] mb-4 w-[62px] h-[62px] rounded-full bg-[#FF8B13] bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all z-10 border-4 border-[#FF8B13]">
          <ChevronRight className="w-7 h-7 text-[#FF8B13]" strokeWidth={4} />
        </button>
      </div>
    ) : <NoSubjectsFound />
  );

  // Shared greeting
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

  return (
    <div className="min-h-screen bg-white">
      <div style={{ height: "72px" }} />

      {/* ════ DESKTOP ════ */}
      <div className="hidden md:block">
        <div className="relative flex gap-6 px-6 py-6">

          {/* Left Sidebar */}
          <div className="w-20 flex-shrink-0 bg-[#2C3D68] h-[724px] flex flex-col items-center py-4 rounded-2xl">
            <div className="flex flex-col gap-12 mt-2">
              {[
                { key: "home",  Icon: Home,     sw: 3 },
                { key: "book",  Icon: BookOpen, sw: 3 },
                { key: "chart", Icon: FileText, sw: 3 },
              ].map(({ key, Icon, sw }) => (
                <button key={key} onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${activeNav === key ? "bg-white" : "hover:bg-white/10"}`}>
                  <Icon className={`w-8 h-8 ${activeNav === key ? "text-[#FF8B13]" : "text-[#FFFAF0]"}`} strokeWidth={sw} />
                </button>
              ))}
            </div>
            <button onClick={() => { setActiveNav("user"); setSelectedSubject(null); }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all mt-auto mb-2 ${activeNav === "user" ? "bg-white" : "hover:bg-white/10"}`}>
              <User className={`w-8 h-8 ${activeNav === "user" ? "text-[#FF8B13]" : "text-[#FFFAF0]"}`} strokeWidth={3.5} />
            </button>
          </div>

          {/* HOME */}
          {activeNav === "home" && (
            <>
              {selectedSubject ? (
                <div className="flex-1 min-w-0">
                  <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
                </div>
              ) : (
                <>
                  <div className="flex-1 min-w-0 max-w-[720px] ml-6">
                    <Greeting large={true} />
                    <SubjectCarousel />
                  </div>

                  {/* Life Skills Panel */}
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
                </>
              )}
            </>
          )}

          {/* BOOK */}
          {activeNav === "book" && (
            <div className="flex-1 min-w-0">
              {selectedSubject ? (
                <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
              ) : (
                <div className="flex gap-6">
                  <div className="flex-1 min-w-0 max-w-[720px] ml-6">
                    <Greeting large={true} />
                    <SubjectCarousel />
                  </div>

                  {/* Recent Activity Panel */}
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

          {activeNav !== "home" && activeNav !== "book" && (
            <div className="flex-1 flex items-center justify-center py-20">
              <p className="text-gray-400 text-lg">Coming soon…</p>
            </div>
          )}
        </div>
      </div>

      {/* ════ MOBILE ════ */}
      <div className="md:hidden px-4 py-4 pb-28">

        {activeNav === "home" && (
          <>
            {selectedSubject ? (
              <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            ) : (
              <>
                <Greeting large={false} />
                {hasSubjects ? (
                  <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {filteredSubjects.map((subject, i) => (
                      <div key={subject.id || i} className="flex-shrink-0 w-[220px]">
                        <SubjectCard subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
                      </div>
                    ))}
                  </div>
                ) : <NoSubjectsFound />}

                <div className="mt-6 bg-[#FFF7F1] p-4 rounded-2xl flex flex-col gap-5">
                  <h2 className="text-black text-lg font-extrabold leading-7">Life-skills your child shows:</h2>
                  <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#389F78] flex-shrink-0" />
                        <span className="text-[#666666] font-bold text-sm">Strong</span>
                      </div>
                      <div className="text-[#333333] font-bold text-[15px] leading-[22px]">
                        {strongSkills.length > 0 ? strongSkills.map((s, i) => <div key={i}>{s}</div>) : <><div>Communication</div><div>Self-awareness</div><div>Problem Solving</div></>}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#EC5F3D] flex-shrink-0" />
                        <span className="text-[#666666] font-bold text-sm">Need Attention</span>
                      </div>
                      <div className="text-[#333333] font-bold text-[15px] leading-[22px]">
                        {needAttentionSkills.length > 0 ? needAttentionSkills.map((s, i) => <div key={i}>{s}</div>) : <><div>Creativity</div><div>Empathy</div><div>Stress Mgmt</div><div>Interpersonal</div></>}
                      </div>
                    </div>
                  </div>
                  <button className="w-full h-12 bg-[#2C3D68] text-white px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#1f2d4d] transition-all">
                    <span>View Full Report</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {activeNav === "book" && (
          <>
            {selectedSubject ? (
              <SubjectView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            ) : (
              <>
                <Greeting large={false} />
                {hasSubjects ? (
                  <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {filteredSubjects.map((subject, i) => (
                      <div key={subject.id || i} className="flex-shrink-0 w-[220px]">
                        <SubjectCard subject={subject} index={i} onClick={() => handleSubjectClick(subject)} />
                      </div>
                    ))}
                  </div>
                ) : <NoSubjectsFound />}

                <div className="mt-6 flex flex-col w-full rounded-2xl p-4" style={{ background: "#FFF7F1", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)", gap: "12px" }}>
                  <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.02em", color: "#666666", margin: 0 }}>Recent</h3>
                  <div className="flex flex-row w-full gap-2" style={{ height: "40px" }}>
                    {["All", "Complete", "Pending"].map((f) => (
                      <button key={f} onClick={() => setActiveFilter(f)} className="flex-1 flex items-center justify-center transition-all rounded-lg"
                        style={{ height: "40px", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "24px", background: activeFilter === f ? "#2C3D68" : "#FFFFFF", color: activeFilter === f ? "#FFFFFF" : "#2C3D68", border: activeFilter === f ? "none" : "1px solid #2C3D68" }}>
                        {f}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col w-full gap-3">
                    {recentLoading ? (
                      [...Array(3)].map((_, i) => <div key={i} className="animate-pulse w-full h-[100px] bg-gray-200 rounded-lg" />)
                    ) : hasRecentActivities ? (
                      recentActivities.map((activity, i) => (
                        <div key={i} className="flex flex-row items-center rounded-lg bg-white cursor-pointer hover:shadow-md transition-shadow w-full"
                          style={{ padding: "12px", gap: "12px", boxShadow: "0px 2px 5px rgba(0,0,0,0.12)", borderRadius: "8px", minHeight: "96px" }}>
                          <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-pink-100 relative overflow-hidden" style={{ width: "90px", height: "60px", borderRadius: "8px" }}>
                            {activity.thumbnail ? <Image src={activity.thumbnail} alt={activity.title || ""} fill className="object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-xl">🎭</div>}
                          </div>
                          <div className="flex flex-col flex-1 min-w-0" style={{ gap: "4px" }}>
                            <div className="flex items-center gap-1">
                              <Clock style={{ width: "13px", height: "13px", color: "#FF8B13" }} strokeWidth={1.5} />
                              <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "12px", color: "#333333" }}>{activity.duration || "15 Mins."}</span>
                            </div>
                            <p className="line-clamp-2" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", textTransform: "capitalize", color: "#333333" }}>
                              {activity.title || "Activity Title"}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <div className="text-4xl">📋</div>
                        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", color: "#999999", textAlign: "center", lineHeight: "20px" }}>
                          No recent activities yet. Start a subject to see your progress here!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {activeNav !== "home" && activeNav !== "book" && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Coming soon…</p>
          </div>
        )}
      </div>

      <MobileBottomNav activeNav={activeNav} setActiveNav={setActiveNav} setSelectedSubject={setSelectedSubject} />
    </div>
  );
};

export default UserDashboard;