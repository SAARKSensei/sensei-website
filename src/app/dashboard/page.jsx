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
import SubjectView from "@/components/SubjectView"; // ← inline subject view (no page nav)

const DASHBOARD_ENABLED = true;

// ─── Card background gradients (per-subject cycling) ────────────────────────
const CARD_GRADIENTS = [
  "from-[#B8D4F5] to-[#D4E8FF]",
  "from-[#F5C6C6] to-[#FFE4D6]",
  "from-[#C6E8D0] to-[#D4F5E0]",
  "from-[#F5E6B8] to-[#FFF3CC]",
  "from-[#E8C6F5] to-[#F3D4FF]",
];
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

// ─── Subject Card (Figma carousel style) ────────────────────────────────────
const SubjectCard = ({ subject, onClick, index = 0 }) => {
  const {
    name                  = "Subject Name",
    thumbnail             = "",
    interactiveActivities = 0,
    gamifiedActivities    = 0,
    coins                 = 0,
  } = subject;

  const gradientClass  = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const nameColorClass = CARD_NAME_COLORS[index % CARD_NAME_COLORS.length];

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-[270px] min-h-[385px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-100"
    >
      {/* Illustration area */}
      <div className={`relative h-[220px] bg-gradient-to-br ${gradientClass} flex items-center justify-center overflow-hidden`}>
        {thumbnail ? (
          <Image src={thumbnail} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-28 h-28 rounded-full bg-white/40 flex items-center justify-center">
            <span className="text-5xl">📚</span>
          </div>
        )}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
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

// ─── Recent Activity Item — exact Figma measurements ────────────────────────
// Card: 318×122px, padding 16px, gap 12px, white bg, shadow, radius 8px
// Thumbnail: 112×69px, radius 8px
// Text area: 162px wide, gap 4px
// Duration row: height 20px, gap 4px — clock icon 20×20 white bg radius 3px orange border
// Title: Nunito 700 16px lh22 tracking -0.02em capitalize #333333
// Subtitle: Nunito 400 12px lh18 tracking -0.02em #333333
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
        padding: "16px",
        gap: "12px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",
        borderRadius: "8px",
        width: "318px",
        minHeight: "122px",
      }}
    >
      {/* Thumbnail — 112 × 69 px */}
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

      {/* Text area — flex-grow, gap 4px */}
      <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: "4px" }}>

        {/* Duration row — height 20px, gap 4px */}
        <div className="flex flex-row items-center" style={{ gap: "4px", height: "20px" }}>
          {/* Clock icon container — 20×20, white bg, radius 3px */}
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: "20px",
              height: "20px",
              background: "#FFFFFF",
              borderRadius: "3px",
              padding: "1.125px",
            }}
          >
            {/* Clock SVG with orange border as per Figma */}
            <Clock
              className="flex-shrink-0"
              style={{ width: "14px", height: "14px", color: "#FF8B13" }}
              strokeWidth={1.5}
            />
          </div>
          {/* Duration text — Nunito 600 14px #333333 tracking -0.02em */}
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "-0.02em",
              color: "#333333",
            }}
          >
            {duration}
          </span>
        </div>

        {/* Activity name — Nunito 700 16px lh22 tracking -0.02em capitalize #333333 */}
        <p
          className="line-clamp-2"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
            color: "#333333",
            width: "162px",
          }}
        >
          {title}
        </p>

        {/* Subtitle — Nunito 400 12px lh18 tracking -0.02em #333333 */}
        {subtitle && (
          <span
            className="line-clamp-1"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              letterSpacing: "-0.02em",
              color: "#333333",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

// ─── Main Dashboard ───────────────────────────────────────────────────────────
const UserDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const carouselRef = useRef(null);

  const [subjectData, setSubjectData]             = useState([]);
  const [recentActivities, setRecentActivities]   = useState([]);
  const [recentLoading, setRecentLoading]         = useState(true);
  const [loading, setLoading]                     = useState(true);
  const [selectedSubject, setSelectedSubject]     = useState(null);   // ← inline subject mode
  const [activeNav, setActiveNav]                 = useState("home");
  const [activeFilter, setActiveFilter]           = useState("All");
  const [strongSkills, setStrongSkills]           = useState([]);
  const [needAttentionSkills, setNeedAttentionSkills] = useState([]);
  const [plan, setPlan]                           = useState("");
  // FIX 1: childName state — now actually used in greeting + navbar
  const [childName, setChildName]                 = useState("");
  const [customUserData, setCustomUserData]       = useState(false);

  // ── Auth guard ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  // ── Data fetching ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (status !== "authenticated") return;

    const fetchSubjects = async () => {
      try {
        const email = session?.user?.email;
        if (!email) {
          console.error("No email found in session");
          setLoading(false);
          return;
        }

        console.log("Fetching data for:", email);
        let hasUserData = false;

        // First API: Fetch pricing plan and user-specific data
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/parent-users/getPricingPlan?email=${email}`
          );
          console.log("User pricing plan response:", res.data);

          if (res.data?.pricingPlan) {
            setPlan(
              res.data.pricingPlan.name === "No active plan found for this user."
                ? "Upgrade Now!"
                : res.data.pricingPlan.name
            );
          }

          // Set child name from API — falls back to session name
          setChildName(res.data?.childName || session?.user?.name || "User");

          if (res?.data?.pricingPlan?.subjects?.length > 0) {
            setSubjectData(res.data.pricingPlan.subjects);
            setCustomUserData(true);
            hasUserData = true;
          }
        } catch (userDataError) {
          console.error("Error fetching pricing plan:", userDataError);
          // Still set a name from session as fallback
          setChildName(session?.user?.name || "User");
        }

        // Second API: Fetch general subjects if no user-specific data
        if (!hasUserData) {
          try {
            const response = await axios.get(
              process.env.NEXT_PUBLIC_API_SUBJECTS || "/api/subjects"
            );
            setSubjectData(response.data || []);
            setCustomUserData(false);
          } catch (err) {
            console.error("Error fetching subjects:", err);
            setSubjectData([]);
          }
        }
      } catch (error) {
        console.error("Error in fetchSubjects:", error);
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

    // Fetch recent activities from API (only real user data — no placeholders)
    const fetchRecentActivities = async () => {
      setRecentLoading(true);
      try {
        const email = session?.user?.email;
        if (email) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/recent-activities?email=${email}`
          );
          const activities = res.data?.activities || res.data || [];
          setRecentActivities(Array.isArray(activities) ? activities : []);
        }
      } catch (err) {
        console.error("Error fetching recent activities:", err);
        // Fallback: try localStorage
        const storedRecent = localStorage.getItem("SenseiRecentActivities");
        if (storedRecent) {
          try { setRecentActivities(JSON.parse(storedRecent)); } catch {}
        }
      } finally {
        setRecentLoading(false);
      }
    };

    fetchRecentActivities();
  }, [status, session]);

  // ── Subject navigation ─────────────────────────────────────────────────────
  const handleSubjectClick = (subject) => {
    // Store in localStorage as before (for backwards compatibility)
    if (subject.modules) localStorage.setItem("modules", JSON.stringify(subject.modules));
    if (subject.colors)  localStorage.setItem("colors",  JSON.stringify(subject.colors));
    if (subject.locked)  localStorage.setItem("locked",  JSON.stringify(subject.locked));
    // ← Switch to inline subject view instead of navigating to a new page
    setSelectedSubject(subject);
  };

  // ── Carousel scroll ────────────────────────────────────────────────────────
  const scrollCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 290, behavior: "smooth" });
    }
  };

  // ── Filter logic ───────────────────────────────────────────────────────────
  const filteredSubjects =
    activeFilter === "All"
      ? subjectData
      : subjectData.filter(() => true);

  // ── Guards ─────────────────────────────────────────────────────────────────
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

  const hasSubjects = subjectData.length > 0;
  const hasRecentActivities = recentActivities.length > 0;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">

      {/* ── Spacer (navbar removed, component handles it globally) ─────────── */}
      <div style={{ height: "72px" }} />

      {/* ── Page Body ──────────────────────────────────────────────────────── */}
      <div className="relative flex gap-6 px-6 py-6">

        {/* ── Left Sidebar ───────────────────────────────────────────────── */}
        <div className="w-20 flex-shrink-0 bg-[#2C3D68] h-[724px] flex flex-col items-center py-4 rounded-2xl">
          <div className="flex flex-col gap-12 mt-2">
            {[
              { key: "home",  Icon: Home,     sw: 3 },
              { key: "book",  Icon: BookOpen, sw: 3 },
              { key: "chart", Icon: FileText, sw: 3 },
            ].map(({ key, Icon, sw }) => (
              <button
                key={key}
                onClick={() => { setActiveNav(key); setSelectedSubject(null); }}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                  activeNav === key ? "bg-white" : "hover:bg-white/10"
                }`}
              >
                <Icon
                  className={`w-8 h-8 ${activeNav === key ? "text-[#FF8B13]" : "text-[#FFFAF0]"}`}
                  strokeWidth={sw}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => { setActiveNav("user"); setSelectedSubject(null); }}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all mt-auto mb-2 ${
              activeNav === "user" ? "bg-white" : "hover:bg-white/10"
            }`}
          >
            <User
              className={`w-8 h-8 ${activeNav === "user" ? "text-[#FF8B13]" : "text-[#FFFAF0]"}`}
              strokeWidth={3.5}
            />
          </button>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            HOME PAGE
        ════════════════════════════════════════════════════════════════════ */}
        {activeNav === "home" && (
          <>
            {/* Subjects Carousel */}
            <div className="flex-1 min-w-0 max-w-[720px] ml-6">
              <div className="mb-6">
                <p className="text-[#2C3D68] text-2xl font-semibold tracking-tight leading-8">Hello!</p>
                <h1 className="text-[36px] font-semibold bg-gradient-to-r from-[#F8BF3B] via-[#FF8B13] to-[#EF5F3D] bg-clip-text text-transparent tracking-tight leading-[44px]">
                  {childName || "User"}
                </h1>
                <p className="text-[#2C3D68] text-2xl font-semibold tracking-tight leading-8 mt-1">
                  Let&apos;s start your journey to a brighter future
                </p>
              </div>

              {hasSubjects ? (
                <div className="flex items-center">
                  <div
                    ref={carouselRef}
                    className="flex gap-5 overflow-x-auto pb-4 scroll-smooth w-[570px]"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {filteredSubjects.map((subject, i) => (
                      <SubjectCard
                        key={subject.id || i}
                        subject={subject}
                        index={i}
                        onClick={() => handleSubjectClick(subject)}
                      />
                    ))}
                  </div>

                  <button
                    onClick={scrollCarousel}
                    className="flex-shrink-0 -ml-[31px] mb-4 w-[62px] h-[62px] rounded-full bg-[#FF8B13] bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all z-10 border-4 border-[#FF8B13]"
                  >
                    <ChevronRight className="w-7 h-7 text-[#FF8B13]" strokeWidth={4} />
                  </button>
                </div>
              ) : (
                <NoSubjectsFound />
              )}
            </div>

            {/* Life Skills Panel */}
            <div className="absolute top-6 right-16 w-[350px] bg-[#FFF7F1] p-4 rounded-2xl flex flex-col gap-8">
              <h2 className="text-black text-2xl font-extrabold leading-8">
                Life-skills your child shows:
              </h2>
              <div className="flex gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#389F78] flex-shrink-0" />
                    <span className="text-[#666666] font-bold text-base">Strong</span>
                  </div>
                  <div className="text-[#333333] font-bold text-[18px] leading-[25px]">
                    {strongSkills.length > 0
                      ? strongSkills.map((s, i) => <div key={i}>{s}</div>)
                      : <><div>Communication</div><div>Self-awareness</div><div>Problem Solving</div></>}
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#EC5F3D] flex-shrink-0" />
                    <span className="text-[#666666] font-bold text-base">Need Attention</span>
                  </div>
                  <div className="text-[#333333] font-bold text-[18px] leading-[25px]">
                    {needAttentionSkills.length > 0
                      ? needAttentionSkills.map((s, i) => <div key={i}>{s}</div>)
                      : <><div>Creativity</div><div>Empathy</div><div>Stress</div><div>Management</div><div>Interpersonal</div><div>Relationships</div></>}
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

        {/* ════════════════════════════════════════════════════════════════════
            BOOK PAGE
        ════════════════════════════════════════════════════════════════════ */}
        {activeNav === "book" && (
          <div className="flex-1 min-w-0">

            {/* ── SUBJECT VIEW MODE — renders when a card is clicked ── */}
            {selectedSubject ? (
              <SubjectView
                subject={selectedSubject}
                onBack={() => setSelectedSubject(null)}
              />
            ) : (

            /* ── CAROUSEL MODE — default book page ── */
            <div className="flex gap-6">

            {/* Subjects Carousel */}
            <div className="flex-1 min-w-0 max-w-[720px] ml-6">
              <div className="mb-6">
                <p className="text-[#2C3D68] text-2xl font-semibold tracking-tight leading-8">Hello!</p>
                {/* FIX 1: Use childName here too */}
                <h1 className="text-[36px] font-semibold bg-gradient-to-r from-[#F8BF3B] via-[#FF8B13] to-[#EF5F3D] bg-clip-text text-transparent tracking-tight leading-[44px]">
                  {childName || "User"}
                </h1>
                <p className="text-[#2C3D68] text-2xl font-semibold tracking-tight leading-8 mt-1">
                  Let&apos;s start your journey to a brighter future
                </p>
              </div>

              {hasSubjects ? (
                <div className="flex items-center">
                  {/* FIX 3: Replaced <style jsx> with inline style object — works without styled-jsx */}
                  <div
                    ref={carouselRef}
                    className="flex gap-5 overflow-x-auto pb-4 scroll-smooth w-[570px]"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {filteredSubjects.map((subject, i) => (
                      <SubjectCard
                        key={subject.id || i}
                        subject={subject}
                        index={i}
                        onClick={() => handleSubjectClick(subject)}
                      />
                    ))}
                  </div>

                  <button
                    onClick={scrollCarousel}
                    className="flex-shrink-0 -ml-[31px] mb-4 w-[62px] h-[62px] rounded-full bg-[#FF8B13] bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all z-10 border-4 border-[#FF8B13]"
                  >
                    <ChevronRight className="w-7 h-7 text-[#FF8B13]" strokeWidth={4} />
                  </button>
                </div>
              ) : (
                <NoSubjectsFound />
              )}
            </div>

            {/* ── Recent Activity Panel — exact Figma specs ──────────────
                Panel: 350×560px, padding 16px, gap 15px, #FFF7F1, shadow, radius 16px
                "Recent" header: Nunito 600 20px #666666 tracking -0.02em
                Filter buttons: h-40px, Nunito 700 14px, radius 8px
            ────────────────────────────────────────────────────────── */}
            <div
              className="flex-shrink-0 flex flex-col items-start"
              style={{
                width: "350px",
                height: "560px",
                padding: "16px",
                gap: "15px",
                background: "#FFF7F1",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",
                borderRadius: "16px",
                marginLeft: "24px",
                marginTop: "122px",
              }}
            >
              {/* "Recent" label — Nunito 600 20px #666666 tracking -0.02em */}
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#666666",
                  margin: 0,
                }}
              >
                Recent
              </h3>

              {/* Filter row — gap 8px, height 40px, full width */}
              <div className="flex flex-row w-full" style={{ gap: "8px", height: "40px" }}>
                {["All", "Complete", "Pending"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="flex-1 flex items-center justify-center transition-all"
                    style={{
                      height: "40px",
                      padding: "8px",
                      borderRadius: "8px",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "24px",
                      background: activeFilter === f ? "#2C3D68" : "#FFFFFF",
                      color: activeFilter === f ? "#FFFFFF" : "#2C3D68",
                      border: activeFilter === f ? "none" : "1px solid #2C3D68",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Activity list — scrollable, only real user activities */}
              <div
                className="flex flex-col w-full overflow-y-auto flex-1"
                style={{ gap: "15px", scrollbarWidth: "thin" }}
              >
                {recentLoading ? (
                  /* Loading skeleton */
                  [...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse"
                      style={{
                        width: "318px",
                        height: "122px",
                        background: "#e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                  ))
                ) : hasRecentActivities ? (
                  recentActivities.map((activity, i) => (
                    <RecentItem key={i} activity={activity} />
                  ))
                ) : (
                  /* Empty state — no placeholder data, only real activity */
                  <div className="flex flex-col items-center justify-center flex-1 gap-3">
                    <div className="text-4xl">📋</div>
                    <p
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#999999",
                        textAlign: "center",
                        lineHeight: "20px",
                      }}
                    >
                      No recent activities yet.{"\n"}Start a subject to see your progress here!
                    </p>
                  </div>
                )}
              </div>
            </div>

            </div>
            )}
          </div>
        )}

        {/* Other nav views */}
        {activeNav !== "home" && activeNav !== "book" && (
          <div className="flex-1 flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Coming soon…</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserDashboard;