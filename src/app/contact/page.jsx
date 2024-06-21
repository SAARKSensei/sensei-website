import CircleOfTrust from "@/components/CircleOfTrust";
import ContactUs from "@/components/ContactUs";
import FAQS from "@/components/FAQS";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto flex flex-col gap-40 px-4 py-24">
      <ContactUs />
      <CircleOfTrust />
      <FAQS />
    </div>
  );
};

export default Page;
