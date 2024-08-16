import React from "react";
import CircleOfTrust from "@/components/homeComps/CircleOfTrust";
import ContactUs from "@/components/homeComps/ContactUs";
import FAQS from "@/components/homeComps/FAQS";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
import Contact from "@/assets/contactimg.svg";
import Stars from "@/components/miniComps/Stars";
export const metadata = {
  title: "Contact Us",
};
const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ABLTopology.src})`,
      }}
      className="container mx-auto flex max-w-[100vw] flex-col gap-40 overflow-hidden px-4 py-24"
    >
      <div className="flex w-full flex-wrap justify-center gap-10">
        <div className="relative flex flex-col gap-10">
          <Stars />
          <div className="text-left">
            <h4 className="h4 h-fit max-w-[90vw] uppercase text-secondary">
              Hello visitor
            </h4>
            <h1 className="inline-block bg-grad_1 bg-clip-text text-left font-Nunito text-5xl font-bold text-transparent lg:text-7xl lg:font-extrabold">
              Get in touch
            </h1>
            <p className="text-[#2C3D68] md:text-xl md:font-medium">
              Let&apos;s embark on the exciting journey together!{" "}
            </p>
          </div>

          <Contact />
        </div>
        <ContactUs />
      </div>
      <CircleOfTrust />
      <FAQS />
    </div>
  );
};

export default Page;
