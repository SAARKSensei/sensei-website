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
export default function Home() {
  return (
    <div className="bbg-[#FEF5F3] flex flex-col gap-20 overflow-x-hidden pb-20 md:gap-40 md:pb-40">
      <HeroSection />
      <ParentIssues />
      <Psychologists />
      <OurModules />
      <Comments />
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
    </div>
  );
}
