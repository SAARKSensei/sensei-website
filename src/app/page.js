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
    <div className="flex overflow-x-hidden flex-col gap-40 bg-[#FEF5F3]">
      <HeroSection />
      <ParentIssues />
      <Psychologists />
      <OurModules />
      <Comments />
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
      <Footer />
    </div>
  );
}
