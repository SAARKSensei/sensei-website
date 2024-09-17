import AboutUs from "@/components/homeComps/AboutUs";
import FAQS from "@/components/homeComps/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/homeComps/GetStarted";
import Journey from "@/components/homeComps/Journey";
import OurModules from "@/components/homeComps/OurModules";
import ParentIssues from "@/components/homeComps/ParentIssues";
import Psychologists from "@/components/homeComps/Psychologists";
import Comments from "../components/homeComps/Comments";
import HeroSection from "../components/homeComps/HeroSection";
import { Bigplayer } from "@/components/miniComps/VideoPlay";
export default function Home() {
  return (
    <div className="bbg-[#FEF5F3] flex flex-col gap-20 overflow-x-hidden pb-20 md:gap-40 md:pb-40">
      <HeroSection />
      <ParentIssues />
      <Psychologists />
      <div className="relative mb-4 pt-[56.25%]">
        <iframe
          src={
            "https://drive.google.com/file/d/1rnBrqxZ03GEkSxFUi-rpPlypwmhJJPuu/preview"
          }
          className="absolute left-0 top-0"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          controls={false}
          allow="autoplay"
        ></iframe>
      </div>
      <OurModules />
      <Comments />
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
    </div>
  );
}
