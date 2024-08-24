import React from "react";
import CircleOfTrust from "@/components/homeComps/CircleOfTrust";
import ContactUs from "@/components/homeComps/ContactUs";
import FAQS from "@/components/homeComps/FAQS";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
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
      <ContactUs />
      <CircleOfTrust />
      <FAQS />
    </div>
  );
};

export default Page;
