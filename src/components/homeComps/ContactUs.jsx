"use client";
import React from "react";

import { useRef } from "react";
const ContactUs = () => {
  const Form = useRef(null);
  const [loading, setLoading] = React.useState(false);
  async function handleSubmit(e) {
    // "use server";
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3_FORM,
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    setLoading(false);
    if (result.success) {
      Form.current?.reset();
      alert("Message sent successfully");
    } else {
      alert("Message not sent");
    }
  }

  return (
    <form
      ref={Form}
      onSubmit={handleSubmit}
      className="flex max-w-[600px] grow flex-col gap-4 md:gap-8"
    >
      <div className="w-full rounded-lg bg-grad_1 p-[1px]">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
        />
      </div>
      <div className="w-full rounded-lg bg-grad_1 p-[1px]">
        <input
          required
          type="email"
          name="email"
          placeholder="Email*"
          className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
        />
      </div>
      <div className="w-full rounded-lg bg-grad_1 p-[1px]">
        <input
          name="phone"
          type="text"
          required
          placeholder="Phone Number*"
          className="w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
        />
      </div>
      <div className="w-full rounded-lg bg-grad_1 p-[1px] pb-0">
        <textarea
          name="message"
          id="messege"
          cols="30"
          rows="5"
          placeholder="Message"
          className="h-min w-full rounded-lg bg-gradient-to-r from-primary/10 to-primary/25 p-2 outline-none md:p-4"
        ></textarea>
      </div>
      <button
        disabled={loading}
        type="submit"
        className="rounded-full bg-grad_1 p-2 text-white disabled:opacity-50 md:p-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUs;
