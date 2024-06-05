import AboutUs from "@/components/AboutUs";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Journey from "@/components/Journey";
export default function Home() {
  return (
    <div className="flex flex-col gap-40 bg-[#FEF5F3]">
      <AboutUs />
      <GetStarted />
      <Journey />
      <FAQS />
      <Footer />
    </div>
  );
}
