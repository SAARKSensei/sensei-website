"use client";

import React, { useState } from "react";
import blueCartImg  from "@/assets/in-Use/bluecartimg.svg?url";
import greenCartImg from "@/assets/in-Use/greencartimg.svg?url";
import redCartImg   from "@/assets/in-Use/redcartimg.svg?url";
import girl1Src     from "@/assets/in-Use/girl1.svg?url";
import girl2Src     from "@/assets/in-Use/girl2.svg?url";
import leftBgSrc   from "@/assets/in-Use/leftbg.svg?url";
import bottomBgSrc from "@/assets/in-Use/bottombg.svg?url";
import greenBgSrc  from "@/assets/in-Use/greenbg.svg?url";
import redBgSrc    from "@/assets/in-Use/redbg.svg?url";
import orangeBgSrc from "@/assets/in-Use/orangebg.svg?url";

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
        position: "absolute", left: -1, top: "40%",
        width: 1000, pointerEvents: "none", zIndex: 0,
        mixBlendMode: "multiply",
      }}>
        <img src={r(leftBgSrc)} alt="" aria-hidden="true" style={{ width: "100%" }} />
      </div>

      {/* ── Bottom BG decoration ── */}
      

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

        <h2 style={{
          position:"absolute", left:40, top:124,
          width:1101, height:120, margin:0,
          fontWeight:700, fontSize:48, lineHeight:"60px",
          letterSpacing:"-0.02em", color:"#333333",
          display:"block",
          zIndex:2,
        }}>
          Schools like yours are already{" "}
          <span style={{ color:"#FF8B13" }}>building emotionally strong learners</span>
        </h2>

        {/* ── Frame 128 ── */}
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
            overflow:"hidden",
          }}>
            {/* Orange bg SVG — positioned right side matching Figma */}
            <img src={r(orangeBgSrc)} alt="" aria-hidden="true" style={{
              position:"absolute",
              right:50, top:10,
              width:1000, height:"auto",
              pointerEvents:"none", zIndex:0,
              
            }} />
          </div>

          {/* Quote marks SVG */}
          <svg width="821" height="345" viewBox="0 0 821 345" fill="none"
               xmlns="http://www.w3.org/2000/svg"
               style={{ position:"absolute", left:27, top:20, zIndex:5, pointerEvents:"none" }}>
            <path d="M0 63.6634V40.4124C0 29.7096 2.30664 20.8521 6.91993 13.8399C11.7177 6.82766 18.6377 2.21437 27.6797 0V9.68789C22.1438 11.1641 18.1763 13.9321 15.7774 17.9918C13.3785 21.867 11.9945 26.9416 11.6255 33.2157H22.1438V63.6634H0Z" fill="#2C3D68"/>
            <path d="M30.3203 63.6634V40.4124C30.3203 29.7096 32.627 20.8521 37.2402 13.8399C42.0381 6.82766 48.958 2.21437 58 0V9.68789C52.4641 11.1641 48.4967 13.9321 46.0977 17.9918C43.6988 21.867 42.3149 26.9416 41.9458 33.2157H52.4641V63.6634H30.3203Z" fill="#2C3D68"/>
            <path d="M821 280.999V304.251C821 314.954 818.693 323.812 814.08 330.824C809.282 337.836 802.362 342.45 793.32 344.664V334.976C798.856 333.5 802.823 330.732 805.222 326.672C807.621 322.797 809.005 317.722 809.374 311.448H798.856V280.999H821Z" fill="#2C3D68"/>
            <path d="M790.68 280.999V304.251C790.68 314.954 788.373 323.812 783.76 330.824C778.962 337.836 772.042 342.45 762.999 344.664V334.976C768.535 333.5 772.503 330.732 774.902 326.672C777.301 322.797 778.685 317.722 779.054 311.448H768.535V280.999H790.68Z" fill="#2C3D68"/>
          </svg>

          {/* Carousel container */}
          <div style={{
            position:"absolute", left:64, top:78,
            width:744, height:230,
            overflow:"hidden",
            zIndex:4,
          }}>
            <div style={{
              display:"flex", flexDirection:"row",
              alignItems:"center", gap:16,
              padding:"0 16px",
              transition:"transform 0.4s ease",
              transform:`translateX(calc(${73 - activeIdx * 614}px))`,
              willChange:"transform",
            }}>
              {TESTIMONIALS.map((item, i) => (
                <div key={i} style={{
                  flexShrink:0,
                  width:598,
                  padding:24,
                  background:"#FFFFFF",
                  boxShadow:"0px 4px 8px rgba(0,0,0,0.25)",
                  borderRadius:32,
                  display:"flex", flexDirection:"column",
                  gap:16,
                  boxSizing:"border-box",
                  opacity: i === activeIdx ? 1 : 0.5,
                  transition:"opacity 0.4s ease",
                }}>
                  <p style={{
                    margin:0, fontWeight:400, fontSize:18,
                    lineHeight:"23px", color:"#000000", width:550,
                  }}>
                    {item.quote}
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
                      <p style={{ margin:0, fontWeight:700, fontSize:16, lineHeight:"20px", color:"#333333" }}>{item.name}</p>
                      <p style={{ margin:0, fontWeight:400, fontSize:14, lineHeight:"18px", color:"#999999" }}>{item.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div style={{
            position:"absolute", left:386, top:293,
            display:"flex", flexDirection:"row", gap:21,
            alignItems:"center", zIndex:6,
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

        </div>{/* end Frame 128 */}

        {/* ── Animated character placeholder ── */}
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

        {/* ── Vector 678: orange swoosh ── */}
        <div style={{
          position:"absolute", left:577, top:602,
          width:233, height:108,
          pointerEvents:"none", zIndex:3,
        }}>
          <svg width="233" height="108" viewBox="0 0 233 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.06381 0.899133C5.18931 1.91047 6.52432 3.35301 7.49665 4.47493C7.80169 4.82637 7.52283 4.77439 7.72825 5.02185C8.13004 5.50546 8.59867 5.85795 8.98508 6.34167C9.11259 6.50251 8.75518 6.50419 8.89293 6.66872C9.65584 7.57559 10.4569 8.27175 11.3012 9.17252C15.4325 13.5812 19.4198 17.5514 23.7626 21.8079C25.1772 23.1946 26.7203 24.9534 28.2897 26.2749C28.4751 26.431 28.5198 26.1708 28.566 26.1888C29.2844 26.4751 28.8049 26.639 29.1094 27.0022C30.3182 28.442 31.8151 29.8466 33.1705 30.9684C33.7474 31.4449 33.4902 30.6158 33.8793 31.3041C33.9066 31.3516 33.6086 31.3977 33.7429 31.5539C34.048 31.9083 34.7251 32.4669 34.9771 32.7202C35.463 33.2107 35.5441 33.2809 36.0299 33.7234C36.711 34.3462 37.4447 35.1631 38.2096 35.7763C38.3732 35.9066 38.3278 35.543 38.6032 35.7344C38.8789 35.9264 39.5207 36.5264 39.7033 36.7648C39.8862 37.0036 39.6665 37.0613 39.6767 37.1285C39.7551 37.6884 40.8467 37.979 40.9515 38.0548C42.8648 39.463 44.1511 40.9737 45.8805 42.4716C47.1736 43.5905 48.6079 44.6958 49.813 45.7378C51.2431 46.9755 52.3874 48.1097 53.8599 49.3078C54.0137 49.4331 54.0163 49.067 54.2043 49.2195C56.205 50.8418 58.1166 52.4479 59.9471 54.1683C60.1369 54.3461 59.7207 54.33 59.901 54.5191C61.0088 55.6755 62.6484 57.6022 64.0406 57.3187C64.8408 58.0021 65.8123 58.8147 66.4124 59.5543C66.7995 60.0309 66.1749 59.8906 66.8263 60.2473C66.9732 60.328 66.9464 60.0081 67.1571 60.1443C68.0698 60.7375 68.9587 61.5126 69.8763 62.0528C70.0632 62.1622 70.1444 61.9572 70.216 61.9634C70.8107 62.0247 71.1802 62.9424 71.3058 63.0826C72.2639 64.1461 73.1473 64.664 74.1823 65.4312C74.4223 65.609 74.3061 65.1703 74.5429 65.333C75.8059 66.2065 77.0864 67.1601 78.2227 68.1227C78.4755 68.3376 78.087 68.3598 78.2006 68.4726C78.7036 68.9673 79.094 68.681 79.5795 69.1438C79.6822 69.2407 79.4982 69.3657 79.5059 69.3991C79.6268 69.9223 80.2019 69.704 80.292 69.7532C81.4357 70.364 81.818 71.2725 82.9254 71.9373C83.0572 72.0156 82.9204 71.6039 83.2817 71.837C85.7098 73.4013 88.0578 75.0359 90.375 76.7589C90.729 77.0222 90.3579 77.0207 90.3682 77.0561C90.5455 77.6199 91.0649 77.344 91.1958 77.4038C92.2224 77.8874 92.8854 78.8016 93.8477 78.679C97.7775 81.3392 101.997 83.3742 105.947 86.0837C105.997 86.1173 105.784 86.2892 105.884 86.3553C107.09 87.1505 107.028 86.6753 108.084 86.6845C108.349 86.6868 108.726 87.5278 108.764 87.5943C108.9 87.8384 108.516 88.0624 108.572 88.1246C109.035 88.6257 109.511 87.4814 110.301 87.8767C110.325 87.891 110.119 88.0425 110.175 88.096C110.351 88.2631 110.596 88.2843 110.764 88.4547C111.146 88.846 111.048 89.4683 111.91 89.4985C112.019 89.5008 112.189 88.8051 112.88 89.1746C113.155 89.3238 114.403 89.9022 114.731 90.104C115.06 90.3071 114.726 90.4009 114.746 90.4213C115.558 91.1275 115.15 91.0746 115.437 91.6933C115.732 92.313 116.038 91.2966 116.282 91.2787C116.527 91.2619 117.131 91.8038 117.269 91.959C117.408 92.1146 117.133 92.1495 117.268 92.2625C118.162 93.006 117.927 91.9838 118.33 91.9792C119.278 91.9636 119.583 92.9435 120.278 93.321C120.466 93.4228 120.376 93.1917 120.556 93.2499C121.27 93.4814 121.592 93.8788 122.46 93.9919C122.606 94.0122 123.428 93.8392 123.719 94.3248C123.76 94.3945 123.52 94.5081 123.804 94.6678C124.229 94.907 125.022 95.262 125.527 95.3853C125.9 95.4763 125.607 95.0218 126.018 95.285C126.201 95.4019 125.766 95.4373 126.116 95.6423C126.464 95.8474 127.417 96.193 127.78 96.318C128.143 96.4432 128.029 96.143 128.063 96.1383C128.272 96.1148 129.001 96.2526 129.062 96.2741C132.214 97.3646 134.93 98.6668 138.095 99.4332C138.341 99.4927 138.249 99.2001 138.287 99.2067C139.147 99.3386 138.306 99.8089 138.827 100.192C138.883 99.6675 139.201 99.8552 139.802 99.96C140.092 100.01 139.991 99.7738 140.022 99.7609C140.519 99.5791 140.707 100.037 140.762 100.135C140.964 100.496 141.355 100.236 141.493 100.477C141.633 100.716 141.124 100.887 141.689 101.029C141.893 100.889 141.597 100.311 142.042 100.344C143.738 100.479 146.684 101.547 147.989 101.852C149.288 102.162 149.728 102.211 150.483 102.424C151.85 102.804 151.407 102.354 152.296 102.346C153.187 102.335 152.617 103.135 152.708 103.345C152.799 103.554 152.966 103.384 153.101 103.513C153.236 103.642 152.884 103.714 153.236 103.814C153.589 103.914 154.624 103.737 154.781 103.559C155.115 103.183 154.742 102.677 155.664 102.976C155.717 102.994 155.505 103.198 155.71 103.253C157.341 103.681 159.067 103.92 160.715 104.267C160.941 104.315 160.707 104.55 160.839 104.58C162.213 104.899 161.764 104.408 162.572 104.003C162.336 104.629 162.718 105.069 163.778 105.17C164.416 105.23 164.331 104.938 164.759 104.775C164.887 104.726 165.322 104.956 165.414 104.83C165.717 104.417 165.332 103.902 166.404 104.176C166.451 104.189 166.281 104.415 166.445 104.441C167.506 104.611 167.668 104.167 168.818 104.178C169.718 104.188 171.309 104.537 172.34 104.613C172.294 105.341 173.28 105.203 173.687 104.71C174.357 104.746 175.085 104.729 175.726 104.805C175.947 104.83 175.8 105.04 175.828 105.063C176.255 105.423 176.549 104.936 176.693 104.918C178.254 104.736 179.538 105.091 181.032 104.693C181.085 104.679 181.158 104.172 181.569 104.53C181.596 104.554 181.106 104.798 181.813 104.796C182.51 104.794 183.842 105.016 184.808 104.735C185.041 104.667 185.616 104.228 186.113 104.521C186.18 104.561 186.118 104.709 186.215 104.785C186.529 105.024 186.662 104.505 187.04 104.917C187.415 105.329 188.187 105.606 189.144 105.236C189.175 105.225 189.376 104.804 189.684 104.787C190.176 104.76 190.882 104.788 191.397 104.741C191.644 104.718 191.464 104.481 191.506 104.473C193.146 104.187 194.368 104.292 196.148 104.192C196.473 104.174 197.36 103.726 198.019 103.918C198.745 104.127 198.185 105.444 199.745 104.948C200.377 104.746 200.976 103.087 202.248 103.725C204.437 103.207 206.541 103.293 208.74 102.619C208.838 102.589 209.082 102.103 209.32 102.067C209.674 102.014 209.901 102.181 210.148 102.15C211.19 102.024 212.104 101.675 213.11 101.508C213.492 101.444 213.399 101.677 213.856 101.6C214.312 101.522 214.561 101.189 215.205 101.196C215.691 101.202 216.273 101.663 216.911 101.598C216.821 101.044 217.251 100.966 217.958 100.664C218.095 100.606 217.901 100.447 217.964 100.41C218.217 100.253 218.505 100.356 218.742 100.193C218.8 100.153 218.763 99.9656 218.808 99.9227C219.188 99.5518 220.009 99.8117 220.151 99.8567C220.693 100.028 220.864 99.7341 221.258 99.7599C221.653 99.7856 221.131 100.048 221.578 100.016C222.505 99.9501 223.654 99.6508 224.575 99.4404C224.939 99.356 224.631 99.1665 224.682 99.1486C225.402 98.9102 226.214 98.9923 226.503 98.397C227.331 99.549 226.918 98.1644 228.041 98.1553C228.13 98.155 228.388 98.7323 228.089 98.9015C227.789 99.0707 227.255 99.0028 226.845 99.2504C226.747 99.3089 226.283 100.023 226.209 100.077C225.629 100.502 225.321 99.6189 225.275 99.5775C224.768 99.1324 224.158 99.9233 223.97 100.012C223.108 100.419 222.311 100.469 221.59 100.778C221.117 100.979 221.203 101.584 220.812 101.653C219.512 101.878 218.888 101.144 217.841 102.12C217.612 102.329 218.023 102.924 216.964 102.61C216.898 102.59 216.099 102.266 215.756 102.645C215.712 102.693 215.753 102.883 215.689 102.913C215.26 103.107 214.931 103.015 214.457 103.185C213.983 103.354 213.418 103.576 212.851 103.618C212.509 103.643 212.014 103.368 211.838 103.311C211.342 103.144 210.936 103.643 210.603 103.39C210.268 103.135 210.729 102.573 209.962 102.507C210.024 103.008 210.054 103.529 210.098 104.036C208.442 104.315 206.801 104.425 205.168 104.703C204.966 104.738 205.215 104.973 204.999 105.018C204.083 105.203 203.274 105.129 202.312 105.344C201.571 105.511 200.79 105.908 200.019 106.082C199.467 105.572 198.339 105.913 197.498 105.958C197.203 105.975 197.205 105.819 196.991 105.793C196.187 105.698 196.612 106.163 196.406 106.267C195.526 106.709 195.307 105.572 194.214 105.713C194.157 105.72 193.505 106.403 193.41 106.45C192.809 106.759 193.286 106.247 192.892 106.239C192.173 106.222 191.668 106.12 190.852 106.368C190.614 106.442 190.062 106.871 189.57 106.61C189.505 106.576 189.524 106.37 189.473 106.362C188.563 106.23 188.579 106.868 188.071 107.12C187.561 107.371 186.728 106.979 186.558 106.861C186.111 106.557 186.877 106.701 186.899 106.667C187.148 106.268 186.566 106.369 186.118 106.361C186.019 105.739 185.4 105.81 185.654 106.355C185.683 106.415 186.027 106.338 186.118 106.361C185.761 106.997 185.072 107.112 184.291 106.571C183.926 106.317 184.246 105.991 183.181 106.148C182.698 106.218 182.901 106.642 182.475 106.774C181.508 107.076 180.195 106.704 179.182 106.779C178.812 106.807 179.175 107.039 178.923 107.065C178.252 107.137 177.66 106.963 176.987 107.053C176.927 107.061 177.075 107.309 176.866 107.311C175.283 107.336 173.893 107.155 172.232 107.098C171.43 107.072 169.991 107.147 169.164 107.074C167.731 106.954 165.98 106.471 164.751 106.455C163.948 106.443 164.101 106.703 163.743 106.841C163.05 107.107 161.935 106.407 161.789 106.3C161.784 106.297 162.477 106.309 162.123 106.145C161.938 105.86 161.797 106.299 161.789 106.3C161.692 106.232 160.327 106.026 160.05 106.04C159.899 106.048 159.954 106.29 159.876 106.29C158.017 106.282 156.166 106.087 154.33 105.686C154.298 105.676 154.388 105.425 154.313 105.405C153.263 105.12 152.528 105.32 151.611 105.351C150.695 105.381 150.004 105.185 149.569 104.642C148.894 104.57 147.98 104.181 147.465 103.949C146.948 103.717 146.766 104.199 146.715 104.198C145.154 104.19 144.352 103.708 142.817 103.288C142.083 103.087 140.619 102.789 139.819 102.632C139.185 102.508 138.842 102.29 138.249 102.204C138.168 102.193 138.185 102.433 138.159 102.435C137.445 102.517 137.903 102.069 137.798 101.936C137.418 101.453 137.178 101.186 136.314 101.108C136.115 101.09 135.336 101.692 134.976 101.632C134.508 101.551 134.764 101.33 134.28 101.254C134.239 101.247 134.195 101.419 133.912 101.322C132.596 100.877 131.182 100.307 129.798 99.8505C129.609 99.7873 129.759 100.136 129.484 100.049C128.184 99.6357 126.816 99.1321 125.639 98.5507C125.349 98.4068 125.607 98.2937 125.562 98.2147C125.287 97.7346 124.537 97.9969 124.439 97.9695C122.1 97.3328 120.577 96.2119 118.262 95.4595C118.136 95.4202 116.975 95.516 116.745 94.8984C116.728 94.8569 116.51 94.2334 116.009 94.3704C115.977 94.3789 116.135 94.7216 115.693 94.4961C115.254 94.2717 114.446 94.0871 113.964 93.5635C113.808 93.3968 113.56 92.7523 112.825 92.8304C112.778 92.8383 111.521 93.2021 111.462 92.5098C111.453 92.3961 111.781 91.8528 110.957 91.8147C110.799 91.8079 110.975 92.0502 110.592 91.9621C110.004 91.8275 109.378 91.331 108.601 91.2574C108.466 91.2458 107.785 91.3853 107.547 90.8985C107.511 90.823 107.718 90.6915 107.53 90.5694C106.636 89.9882 105.579 89.5995 104.682 88.9604C104.365 88.7342 104.699 88.5249 104.387 88.2553C104.074 87.9857 103.399 87.5235 102.952 87.4581C102.504 87.3926 102.653 88.0933 102.071 87.826C99.5304 86.6539 97.3952 85.0668 95.0215 83.6029C94.6712 83.3864 94.8651 83.7289 94.341 83.4203C92.4405 82.3087 89.1335 80.4673 87.7132 79.0575C86.583 77.9365 88.3669 78.7844 87.4403 78.0272C86.9976 77.665 86.1576 77.8732 86.0316 77.8148C84.8192 77.2652 84.2053 76.5224 83.1606 75.9271C82.9446 75.8038 83.004 76.1524 82.8216 76.045C82.197 75.6798 81.6294 75.1577 81.0422 74.7829C80.7784 74.6151 80.7155 74.8094 80.4861 74.6342C79.9354 74.2164 79.4764 73.7999 79.0514 73.2819C79.0122 73.2343 79.48 73.2621 79.079 72.9729C78.4292 72.505 77.7157 71.7846 76.847 71.3993C76.5888 71.2855 76.321 71.645 76.0136 71.0472C75.9489 70.9218 76.3914 70.5773 75.5548 70.5512C75.4154 70.547 74.0946 70.3716 73.8604 69.7032C73.7986 69.5274 73.7405 68.9423 73.4261 68.7993C73.3825 68.7812 73.39 69.084 73.1491 68.9379C72.285 68.4066 71.5194 67.8129 70.6723 67.2797C70.4474 67.1388 70.6161 67.5735 70.2854 67.3568C69.3758 66.7612 68.32 65.8913 67.5074 65.1787C67.2081 64.9156 67.5516 64.917 67.542 64.8816C67.3919 64.3102 66.8747 64.5358 66.7339 64.4648C65.8653 64.0201 65.4077 63.3779 64.6775 62.8924C64.4791 62.76 64.4693 63.049 64.419 63.0366C63.9044 62.8979 64.4523 62.7881 64.2343 62.5609C63.6242 61.9229 62.8408 61.3369 62.1195 60.8096C61.8544 60.616 61.9765 61.058 61.7403 60.8816C60.3388 59.8415 58.9186 58.679 57.6571 57.4709C57.4199 57.243 57.712 57.209 57.6889 57.1288C57.5231 56.5652 56.736 56.5164 56.5854 56.4503C55.9187 56.1659 55.8248 55.8504 55.3233 55.4862C52.8946 53.7309 49.944 51.1113 47.873 49.2523C45.1242 46.7912 42.9458 44.6422 40.2759 42.3661C40.1053 42.2202 40.0911 42.5792 39.9416 42.456C38.0195 40.8551 36.2272 39.1144 34.2581 37.4506C34.0968 37.3136 34.1465 37.7143 33.8815 37.5009C33.3308 37.0591 32.7018 36.4713 32.2559 35.9531C32.0369 35.6996 32.5198 35.8311 32.2962 35.5793C31.7758 34.9925 31.1679 34.4139 30.5427 33.9004C30.2762 33.6822 30.477 34.232 30.1447 33.9327C27.8961 31.9147 25.5442 29.8025 23.5843 27.4898C23.4479 27.3292 23.6895 26.8025 23.2921 26.5746C23.1633 26.663 23.0419 26.7952 22.9197 26.9041C19.6582 23.9684 16.4696 20.6697 13.3549 17.6242C13.221 17.4933 13.2517 17.9277 12.9912 17.6753C11.4829 16.2138 9.94814 14.8363 8.58166 13.0972C8.44572 12.9248 8.88392 12.6366 8.37061 12.2432C8.27868 12.1732 7.54136 11.547 7.29776 11.4639C7.26261 11.4529 7.21678 11.7429 6.99712 11.5373C5.7234 10.3393 4.44513 9.00344 3.28611 7.65082C3.09936 7.43218 3.49542 7.4658 3.36397 7.30848C2.43035 6.19416 1.16859 5.21344 0.338316 4.05903C-0.216937 3.28535 0.340258 3.21916 0.292719 2.55931C0.285937 2.46619 -0.11999 2.04688 0.0368721 1.84709C0.430394 1.34391 1.12109 1.05262 1.51691 0.492641C1.60261 0.372546 0.939166 -0.0692422 1.51509 0.00923102C1.55466 0.0155429 2.03744 0.333063 2.22015 0.346845C2.347 0.356926 2.40476 0.0521532 2.61919 0.117058C2.8335 0.181952 2.83516 0.487392 3.15414 0.630343C3.47398 0.771892 3.5786 0.464352 4.06381 0.899133Z" fill="#FF8B13"/>
          </svg>
        </div>

        {/* ── Rectangle 2557 border box ── */}
        <div style={{
          position:"absolute", left:806, top:671,
          width:474, height:84, boxSizing:"border-box",
          border:"1px solid #6B6868", opacity:0.25,
          zIndex:2, pointerEvents:"none",
        }} />

        {/* ── "We wouldn't be the first." text ── */}
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

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — "Sensei is a good fit for your school"
        ══════════════════════════════════════════════════════════ */}

        {/* Headline */}
        <h2 style={{
          position:"absolute", left:38, top:848,
          width:1101, height:60, margin:0,
          fontWeight:700, fontSize:48, lineHeight:"60px",
          letterSpacing:"-0.02em", color:"#333333",
          display:"block", zIndex:2,
        }}>
          Sensei is a <span style={{ color:"#FF8B13" }}> good fit </span> for your school
        </h2>

        {/* ─────────────────────────────────────────────────────────
            GREEN PANEL GROUP — Group 40381
            Figma: left:-16, top:940, width:768, height:337
            Girl image: left:34, top:-91 relative to group
              → absolute left:18, top:849
              → width:440, height:336
            Panel (Frame 1116607573): left:-16, top:1031, w:768, h:246
            Content (Frame 1116607570): left:15 rel to Frame → abs left:-1, top:1031, w:753, h:248
        ───────────────────────────────────────────────────────── */}

        {/* White dashed border box — Frame 1116607573 */}
        <div style={{
          position:"absolute", left:-16, top:1031,
          width:768, height:246, boxSizing:"border-box",
          background:"#FFFFFF",
          border:"2px dashed #4B926F",
          boxShadow:"inset 0px 0px 4px 4px rgba(0,0,0,0.25)",
          borderRadius:"0px 16px 16px 0px",
          zIndex:3,
        }} />

        {/* Green content panel — Frame 1116607570
            Girl image is 440px wide starting at left:18 (abs).
            Panel starts at left:-1 (abs) → girl's right edge = 18+440 = 458px abs
            = 458 - (-1) = 459px from panel's left edge.
            So we push text area to start at 460px from panel left,
            leaving right text zone = 753 - 460 = 293px for text.
            Use paddingLeft:460 + paddingRight:40 */}
        <div style={{
          position:"absolute", left:-15, top:1031,
          width:768, height:248,
          background:"#EBFFF5",
          borderRadius:"0px 16px 16px 0px",
          display:"flex", flexDirection:"column",
          justifyContent:"center", alignItems:"flex-end",
          paddingTop:24, paddingBottom:24,
          paddingLeft:460, paddingRight:40,
          gap:24,
          boxSizing:"border-box",
          zIndex:4,
          overflow:"hidden",
        }}>
          {/* Green bg SVG */}
          <img src={r(greenBgSrc)} alt="" aria-hidden="true" style={{
            position:"absolute",
            left:-1, top:-414,
            width:1096, height:1096,
            pointerEvents:"none", zIndex:0,
            mixBlendMode:"multiply",
            
          }} />
          {[
            "Cares about student well-being",
            "Wants structured EQ, not ad-hoc workshops",
            "Values calm, confident learners",
          ].map((text, i) => (
            <p key={i} style={{
              position:"relative", zIndex:1,
              margin:0, fontWeight:700, fontSize:18,
              lineHeight:"30px", letterSpacing:"-0.02em",
              color:"#000000", textAlign:"right",
              width:"100%",
            }}>{text}</p>
          ))}
        </div>

        {/* Girl1 image — bottom flush with green panel bottom
            Group top:940, girl top:-91 relative → absolute top:849
            Group bottom = 940+337 = 1277
            Girl bottom = 849+336 = 1185 ... adjusted:
            Panel bottom = 1031+246 = 1277
            Girl top = 1277 - 336 = 941 → use 940 to match group top exactly */}
        <img src={r(girl1Src)} alt="Student girl" style={{
          position:"absolute",
          left:18,
          top:940,
          width:440,
          height:337,
          objectFit:"contain",
          objectPosition:"center bottom",
          zIndex:5,
        }} />

        {/* ─── RED PANEL — Group 40382 (left:538, top:1121, w:764, h:347) ─── */}

        {/* White inset border box — Frame 1116607574 */}
        <div style={{
          position:"absolute", left:538, top:1317,
          width:764, height:151, boxSizing:"border-box",
          background:"#FFFFFF",
          boxShadow:"inset 0px 0px 4px 4px rgba(0,0,0,0.25)",
          borderRadius:"16px 0px 0px 16px",
          zIndex:3,
        }} />

        {/* Red content panel — Frame 1116607571
            Red Vector: left:-95.03% of 753=-715px, top:-462.25% of 148=-684px, 1096×1096 */}
        <div style={{
          position:"absolute", left:540, top:1319,
          width:760, height:148,
          background:"#FFF3F1",
          border:"2px dashed #EF5F3D",
          borderRadius:"16px 0px 0px 16px",
          display:"flex", flexDirection:"column",
          justifyContent:"center", alignItems:"flex-start",
          padding:"24px 40px", gap:24,
          boxSizing:"border-box",
          zIndex:4,
          overflow:"hidden",
        }}>
          {/* Red bg SVG */}
          <img src={r(redBgSrc)} alt="" aria-hidden="true" style={{
            position:"absolute",
            left:-80, top:-580,
            width:900, height:1096,
            pointerEvents:"none", zIndex:0,
            mixBlendMode:"multiply",
            
          }} />
          {[
            "Looking for short-term events only",
            "Wants zero involvement or alignment",
          ].map((text, i) => (
            <p key={i} style={{
              position:"relative", zIndex:1,
              margin:0, fontWeight:700, fontSize:18,
              lineHeight:"38px", letterSpacing:"-0.02em",
              color:"#000000",
            }}>{text}</p>
          ))}
        </div>

        {/* girl2 image */}
        <img src={r(girl2Src)} alt="Student" style={{
          position:"absolute", left:1001, top:1120,
          width:197, height:347,
          objectFit:"cover", objectPosition:"center top",
          transform:"scaleX(-1)",
          zIndex:5,
        }} />

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — "What schools implement with Sensei"
        ═══════════════════════════════════════════════════════ */}

        {/* Headline */}
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

        {/* Three cartoon cards
            Figma: Frame 1116607575 — left:calc(50%-816/2), top:1661, w:816, h:377
            All cards share the same container height:377 so bottoms align.
            Each card wrapper is also h:377 so alignItems:flex-end aligns all bottoms.
            Card box starts at top:91, height:286 for all.
            Cartoon overflows above (top:0).
            Text at top:277 for all three.
        */}
        <div style={{
          position:"absolute",
          left:"50%", transform:"translateX(-50%)",
          top:1661,
          width:816, height:377,
          display:"flex", flexDirection:"row",
          justifyContent:"center", alignItems:"flex-end",
          gap:55, zIndex:2,
        }}>

          {/* ── Blue card — w:244, h:377 (same as container so bottom aligns) ── */}
          <div style={{ position:"relative", width:244, height:377, flexShrink:0 }}>
            <div style={{
              position:"absolute", left:0, top:91,
              width:244, height:286,
              background:"#FFFFFF",
              border:"1px solid #A0C4E7",
              borderRadius:16, boxSizing:"border-box",
            }} />
            <img src={r(blueCartImg)} alt="Blue cartoon" style={{
              position:"absolute",
              left:"50%", transform:"translateX(-50%)",
              top:0, width:179, height:179,
              objectFit:"contain", zIndex:2,
            }} />
            <p style={{
              position:"absolute", left:16.74, top:277,
              width:210, margin:0,
              fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", zIndex:2,
            }}>
              Age-appropriate EQ &amp; life-skills programs
            </p>
          </div>

          {/* ── Green card — w:222, h:377 ── */}
          <div style={{ position:"relative", width:222, height:377, flexShrink:0 }}>
            <div style={{
              position:"absolute", left:0, top:91,
              width:222, height:286,
              background:"#FFFFFF",
              border:"1px solid #38A077",
              borderRadius:16, boxSizing:"border-box",
            }} />
            <img src={r(greenCartImg)} alt="Green cartoon" style={{
              position:"absolute",
              left:"50%", transform:"translateX(-50%)",
              top:0, width:178, height:178,
              objectFit:"contain", zIndex:2,
            }} />
            <p style={{
              position:"absolute",
              left:"50%", transform:"translateX(-50%)",
              top:277, width:179, margin:0,
              fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", textAlign:"center", zIndex:2,
            }}>
              Delivered during school hours
            </p>
          </div>

          {/* ── Red/Orange card — w:240, h:377 ── */}
          <div style={{ position:"relative", width:240, height:377, flexShrink:0 }}>
            <div style={{
              position:"absolute", left:0, top:91,
              width:240, height:286,
              background:"#FFE9D5",
              boxShadow:"2px 2px 8px rgba(0,0,0,0.12)",
              borderRadius:16, boxSizing:"border-box",
            }} />
            <img src={r(redCartImg)} alt="Red cartoon" style={{
              position:"absolute",
              left:"50%", transform:"translateX(-50%)",
              top:0, width:179, height:182,
              objectFit:"contain", zIndex:2,
            }} />
            <p style={{
              position:"absolute",
              left:"50%", transform:"translateX(-50%)",
              top:277, width:175, margin:0,
              fontWeight:600, fontSize:20, lineHeight:"32px",
              color:"#333333", textAlign:"center", zIndex:2,
            }}>
              Designed for long-term impact
            </p>
          </div>

        </div>

        {/* Rectangle 2563 border box */}
        <div style={{
          position:"absolute", left:149, top:2068,
          width:1173, height:120, boxSizing:"border-box",
          border:"1px solid #333333", opacity:0.25, borderRadius:8,
          zIndex:2, pointerEvents:"none",
        }} />

        {/* Frame 1116607556 */}
        <div style={{
          position:"absolute", left:168, top:2087,
          width:393, height:82,
          display:"flex", flexDirection:"column",
          gap:6, zIndex:3,
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <div style={{
              width:36, height:36, borderRadius:8,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            }}>
              <XIcon />
            </div>
            <p style={{ margin:0, fontWeight:700, fontSize:30, lineHeight:"38px", color:"#EF5F3D" }}>
              No curriculum deep dive
            </p>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <div style={{
              width:36, height:36, borderRadius:8,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            }}>
              <XIcon />
            </div>
            <p style={{ margin:0, fontWeight:700, fontSize:30, lineHeight:"38px", color:"#EF5F3D" }}>
              No feature lists
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4 — "See how Sensei can work in your school"
        ═══════════════════════════════════════════════════════ */}

        {/* Frame 1116607576 */}
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

        {/* Form box */}
        <div style={{
          position:"absolute",
          left:"50%", transform:"translateX(-50%)",
          top:2492, width:1115, height:465,
          background:"#FFE9D5",
          boxShadow:"inset 4px 4px 8px rgba(0,0,0,0.25)",
          borderRadius:16, zIndex:2,
          overflow:"hidden",
        }}>

          {/* ── bottombg image inside form box — right side matching Figma ── */}
          <img src={r(bottomBgSrc)} alt="" aria-hidden="true" style={{
            position:"absolute",
            right:-100, top:-20,
            width:700, height:"auto",
            pointerEvents:"none", zIndex:0,
            opacity:0.5,
          }} />

          <div style={{
            position:"absolute", left:0, top:0,
            width:1115, height:427,
            display:"flex", flexDirection:"column",
            alignItems:"center", padding:0, gap:16,
            zIndex:1,
          }}>

            {/* Form fields area */}
            <div style={{
              width:1115, padding:24,
              boxSizing:"border-box",
              display:"flex", flexDirection:"column", gap:32,
            }}>

              <div style={{
                display:"flex", flexWrap:"wrap",
                alignItems:"flex-end", gap:16,
                width:1067,
              }}>

                {/* Line 1 */}
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

                {/* Line 2 */}
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

                {/* Line 3 */}
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

                {/* Line 4 */}
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

                {/* Line 5 */}
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

              </div>

              {/* Button + helper */}
              <div style={{ display:"flex", flexDirection:"column", gap:24, width:1067 }}>
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

            </div>

            {/* "What happens next" */}
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
                What happens <span style={{ color:"#FF8B13" }}>next</span>
              </p>

              <div style={{
                flex:1, display:"flex", flexDirection:"row",
                justifyContent:"space-between", alignItems:"center", gap:15,
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

          </div>
        </div>{/* end form box */}

      </div>
    </section>
  );
}