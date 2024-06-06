import AboutUs from "@/components/AboutUs";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Journey from "@/components/Journey";
import OurModules from "@/components/OurModules";
import ParentIssues from "@/components/ParentIssues";
import Psychologists from "@/components/Psychologists";
export default function Home() {
  return (
    <div className="flex flex-col gap-40 bg-[#FEF5F3]">
      <ParentIssues />
      <Psychologists />
      <OurModules />
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
      <Footer />
    </div>
  );
}
