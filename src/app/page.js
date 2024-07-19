import AboutUs from "@/components/AboutUs";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import OurModules from "@/components/OurModules";
import ParentIssues from "@/components/ParentIssues";
import Psychologists from "@/components/Psychologists";
import Comments from "@/components/Comments";
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
