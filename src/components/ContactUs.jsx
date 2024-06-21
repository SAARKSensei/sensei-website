import React from "react";
import contact from "../assets/contactimg.svg";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center gap-10">
      <div className="flex flex-col gap-10">
        <div className="text-left">
          <h4 className="h4 text-secondary">Hello visitor</h4>

          <h1 className="inline-block bg-grad_1 bg-clip-text text-left font-Nunito text-5xl font-bold text-transparent lg:text-7xl lg:font-extrabold">
            Get in touch
          </h1>
          <p className="text-[#2C3D68] md:text-xl md:font-medium">
            Let&apos;s embark on the exciting journey together!{" "}
          </p>
        </div>
        <Image
          src={contact}
          alt="contact"
          className="-order-1 border border-white md:order-none"
          sizes="auto"
        />
      </div>
      <form
        action=""
        className="flex max-w-[600px] grow flex-col gap-4 md:gap-8"
      >
        <div className="w-full rounded-lg bg-grad_1 p-[1px]">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
          />
        </div>
        <div className="w-full rounded-lg bg-grad_1 p-[1px]">
          <input
            required
            type="email"
            placeholder="Email*"
            className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
          />
        </div>
        <div className="w-full rounded-lg bg-grad_1 p-[1px]">
          <input
            type="text"
            required
            placeholder="Phone Number*"
            className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
          />
        </div>
        <div className="w-full rounded-lg bg-grad_1 p-[1px] pb-0">
          <textarea
            name="messege"
            id="messege"
            cols="30"
            rows="5"
            placeholder="Message"
            className="h-min w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
          ></textarea>
        </div>
        <button className="rounded-full bg-grad_1 p-2 text-white md:p-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
