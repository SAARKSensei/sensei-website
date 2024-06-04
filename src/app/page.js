import Comments from "@/components/Comments";
import FAQS from "@/components/FAQS";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import InfiniteScroll from "@/components/InfiniteScroll";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Section2Home from "@/components/Section2Home";
import Section3Home from "@/components/Section3Home";
import Section4Home from "@/components/Section4Home";
export default function Home() {
  return (
    <div className="flex flex-col gap-40 bg-[#FEF5F3]">
      <HeroSection />
      {/* <Section2Home />
      <Section3Home />
      <Section4Home />
      <Features />
      <Comments />*/}
      <GetStarted />
      <Journey />
      <FAQS />
      <Footer />
    </div>
  );
}
