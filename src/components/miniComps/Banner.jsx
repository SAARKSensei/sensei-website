import React from "react";
import Topology from "@/assets/ABLTopology-1.svg";
import Image from "next/image";
import Whatsapp from "@/assets/whatsapp.svg";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative min-h-[85px] w-full overflow-hidden rounded-[20px] bg-secondary">
      <Topology className="absolute -top-[600px] left-[10%] z-[0]" />
      <div className="scrollText flex w-max items-center justify-between gap-6 whitespace-nowrap py-4">
        <Body />
        <Body />
        <Body />
        <Body />
      </div>
      v
    </div>
  );
};
const Body = () => {
  return (
    <>
      <p className="body_1 font-semibold text-white">
        DMs us <span className="text-primary">GETEARLY</span> and get our FREE
        fun activities to improve your child&apos;s Life-skill & SEL
      </p>
      <Link
        href="https://wa.me/916200405504?text=w27673248"
        className="flex -rotate-3 items-center gap-2 rounded-full bg-white p-2 px-3 text-xl font-extrabold text-primary transition-all hover:rotate-0"
        passHref
      >
        <Whatsapp className="" />
        WhatsApp Us
      </Link>
    </>
  );
};
export default Banner;
