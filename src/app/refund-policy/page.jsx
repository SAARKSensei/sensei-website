import React from "react";
import Refund from "@/assets/refund.svg";
import refund from "@/assets/refund.svg?url";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Thank you for choosing Sensei by SAARK Education Pvt. Ltd.. We aim to provide you with the best educational experience possible. Please read our refund policy carefully.",

  openGraph: {
    images: [
      {
        url: refund.src,
      },
    ],
  },
};
const Page = () => {
  return (
    <div className="container mx-auto p-4 py-5 md:py-10">
      <div className="flex flex-wrap items-center justify-center p-4">
        <div className="max-w-[524px]">
          <h1 className="h1 text-grad">Refund Policy</h1>
          <p className="body_1">
            Thank you for choosing Sensei by SAARK Education Pvt. Ltd.. We aim
            to provide you with the best educational experience possible. Please
            read our refund policy carefully.
          </p>
        </div>

        <Refund className="relative -top-[20%] max-w-[350px] scale-[1.5]" />
      </div>
      <div className="flex justify-center gap-4 max-md:flex-col md:gap-10">
        <div className="flex max-w-[600px] flex-col gap-2 rounded-[20px] bg-[#E7F0FB] p-4 md:gap-4 md:p-10">
          <h3 className="h3 font-bold text-secondary">Refund Procedure:</h3>
          <ul className="flex list-inside list-disc flex-col md:gap-2">
            <li className="h4">
              To request a refund, please contact our customer support team at
              <span className="text-[#0764A7]"> connect@sensei.org.in</span>.
            </li>
            <li className="h4">
              Refunds will be processed within 31 days from the date of the
              refund request.
            </li>
          </ul>
          <p className="body_1 text-secondary"> Note:</p>
          <ul className="flex list-inside list-disc flex-col md:gap-2">
            <li className="h4">
              Refunds will be issued using the same payment method used for the
              purchase.
            </li>
            <li className="h4">
              Any applicable taxes or fees will be deducted from the refund
              amount.
            </li>
            <li className="h4">
              Refunds will be processed only if the request is made within 7
              days of the purchase date.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4 md:gap-10">
          <div className="flex max-w-[600px] flex-col gap-2 rounded-[20px] bg-[#FFEEDD] p-4 md:flex-grow-[50%] md:gap-4 md:p-10">
            <h3 className="h3 text-primary">Cancellation within 30 Days:</h3>
            <p className="body_1">
              If a parent cancels within 30 days of purchase, they are entitled
              to a 50% refund of the total course fee.
            </p>{" "}
          </div>
          <div className="flex max-w-[600px] flex-col gap-2 rounded-[20px] bg-[#FFEEDD] p-4 md:flex-grow-[50%] md:gap-4 md:p-10">
            <h3 className="h3 text-primary">No Refund After 30 Days:</h3>
            <p className="body_1">
              After 30 days from the date of purchase, no refunds will be
              provided.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
