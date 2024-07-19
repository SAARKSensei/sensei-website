import React from "react";
import monstar from "../../Images/monstar.jpg";
import Image from "next/image";
import book from "../../Images/book.svg";
import insideOut from "../../Images/InsideOut.jpg";
const Bookm = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-6 md:p-10 min-[1300px]:p-20 gap-4 sm:gap-10 lg:gap-20">
      <div className=" flex flex-col gap-4 sm:gap-10 lg:gap-20">
        <div className="flex-wrap min-[400px]:flex-nowrap  flex gap-5 font-medium text-lg font-Nunito">
          <Image
            src={monstar}
            alt="monstar"
            sizes="auto"
            className="w-fit min-w-40 max-h-64 object-contain  grow md:grow-0"
          />
          <div className="order-1 sm:order-none min-w-fit p-4 custome-box-shadow h-fit rounded-xl">
            <p className=" flex gap-1 items-center">
              {" "}
              <Image alt={book} src={book} sizes="auto" />
              <span className="bg-gradient-to-r from-[#0764A7] to-[#2C3D68] text-transparent bg-clip-text">
                Book Preference :-
              </span>
            </p>
            <p className="  text-base text-center bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] text-transparent bg-clip-text">
              <span className="text-lg leading-none font-semibold ">
                The Color Monstar
              </span>
              <br />
              by Anna Llenas
            </p>
          </div>
        </div>
        <label className="w-fit relative pb-1">
          <Image
            src={insideOut}
            alt="inside out"
            sizes="auto"
            className=" rounded-3xl object-contain grow"
          />
          <span className="-bottom-4 left-[calc(50%-86px)] rounded-xl absolute border-2 border-solid border-white text-white p-2 bg-gradient-to-r from-[#0764A7] to-[#2C3D68]">
            {" "}
            Inside Out (Disney Pixar)
          </span>
        </label>
      </div>
      <div className=" m-4 h-fit md:w-[45%] max-w-[500px] rounded-2xl bg-white p-5 text-black relative flex flex-col ">
        <span className="rounded-2xl absolute z-[-1] -inset-4 bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B]" />
        KEY MESSAGES
        <ul className=" p-5 list-disc">
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
