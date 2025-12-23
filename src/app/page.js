
import FAQS from "@/components/homeComps/FAQS";
// import GetStarted from "@/components/homeComps/GetStarted";
// import Journey from "@/components/homeComps/Journey";
import Comments from "../components/homeComps/Comments";
import HeroSection from "../components/homeComps/HeroSection";
import Rating from "@/components/homeComps/Rating";
import WhatIsSenseiSection from "@/components/homeComps/WhatIsSensei";
import WhyChooseSenseiSection from "@/components/homeComps/WhyChooseSensei";
import { HowItWorks } from "@/components/homeComps/HowItWorks";
import { TestimonialsSection } from "@/components/homeComps/Testimonials";
import { ArticlesSection } from "@/components/homeComps/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mt-3 overflow-x-hidden overflow-y-scroll flex flex-col gap-8">
      <HeroSection />
      <Rating />
      <WhatIsSenseiSection />
      <WhyChooseSenseiSection />
      <HowItWorks />
      <TestimonialsSection />
      <ArticlesSection />
      {/* <Comments /> */}
      {/* <GetStarted /> */}
      <FAQS />
      <Footer />
    </div>
  );
}

