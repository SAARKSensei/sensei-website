import React from "react";
import monstar from "@/Images/monstar.jpg";
import Image from "next/image";
import book from "@/Images/book.svg";
import insideOut from "@/Images/InsideOut.jpg";
const Bookm = () => {
  return (
    <div className="flex flex-wrap gap-4 p-6 sm:gap-10 md:flex-nowrap md:p-10 lg:gap-20 min-[1300px]:p-20">
      <div className="flex flex-col gap-4 sm:gap-10 lg:gap-20">
        <div className="flex flex-wrap gap-5 font-Nunito text-lg font-medium min-[400px]:flex-nowrap">
          <Image
            src={monstar}
            alt="monstar"
            sizes="auto"
            className="max-h-64 w-fit min-w-40 grow object-contain md:grow-0"
          />
          <div className="custome-box-shadow order-1 h-fit min-w-fit rounded-xl p-4 sm:order-none">
            <p className="flex items-center gap-1">
              {" "}
              <Image alt={book} src={book} sizes="auto" />
              <span className="bg-gradient-to-r from-[#0764A7] to-[#2C3D68] bg-clip-text text-transparent">
                Book Preference :-
              </span>
            </p>
            <p className="bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text text-center text-base text-transparent">
              <span className="text-lg font-semibold leading-none">
                The Color Monstar
              </span>
              <br />
              by Anna Llenas
            </p>
          </div>
        </div>
        <label className="relative w-fit pb-1">
          <Image
            src={insideOut}
            alt="inside out"
            sizes="auto"
            className="grow rounded-3xl object-contain"
          />
          <span className="absolute -bottom-4 left-[calc(50%-86px)] rounded-xl border-2 border-solid border-white bg-gradient-to-r from-[#0764A7] to-[#2C3D68] p-2 text-white">
            {" "}
            Inside Out (Disney Pixar)
          </span>
        </label>
      </div>
      <div className="relative m-4 flex h-fit max-w-[500px] flex-col rounded-2xl bg-white p-5 text-black md:w-[45%]">
        <span className="absolute -inset-4 z-[-1] rounded-2xl bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B]" />
        KEY MESSAGES
        <ul className="list-disc p-5">
          <li>
            {" "}
            Understanding and expressing emotions are vital for healthy
            communication and relationships.
          </li>
          <li>
            {" "}
            Art can be a powerful tool for expressing emotions and connecting
            with others.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bookm;
