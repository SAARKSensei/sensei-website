import EmotionNav from "@/components/Modules/EmotionNav";
import Intro from "@/components/Modules/Intro";
import Navbar from "@/components/Modules/Navbar";
import React from "react";
import Process from "@/components/Modules/Process";
import BackToTop from "@/components/Modules/BackToTop";
import Footer from "@/components/Modules/Footer";
import Bookm from "@/components/Modules/bookm";
export const Home = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      <EmotionNav />
      <Intro />
      <Process />
      <BackToTop />
      <Bookm />

      <Footer />
    </div>
  );
};
export default Home;
