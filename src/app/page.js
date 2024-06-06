import AboutUs from "@/components/AboutUs";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Comments from "@/components/Comments";
export default function Home() {
  return (
    <div className="flex overflow-x-hidden flex-col gap-40 bg-[#FEF5F3]">
      <HeroSection />
      <Comments />
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
      <Footer />
    </div>
  );
}
