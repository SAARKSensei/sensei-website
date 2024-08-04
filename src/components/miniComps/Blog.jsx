import React from "react";

import Image from "next/image";
import Mainlogo from "@/assets/mainlogo.svg";
const Blog = ({ blog }) => {
  return (
    <div className="flex w-full min-w-[min(95vw,380px)] flex-col gap-2 rounded-lg bg-white pb-4 shadow-cs lg:min-w-[min(95vw,396px)] lg:max-w-[min(95vw,380px)]">
      <div className="relative mb-2 h-[230px] w-full">
        <Image
          src={blog?.image}
          fill
          sizes="auto"
          className="rounded-lg object-cover"
          alt="cardImage"
        />
      </div>
      <div className="flex w-full flex-col gap-2 px-5">
        <div className="flex w-full flex-col gap-2">
          <div className="flex h-[30px] gap-2 border-b-2 border-[#f97316] text-[#2C3D68]">
            {<p className="line-clamp-1">{blog.date}</p>}
            <p className="font-bold">.</p>
            <p className="whitespace-nowrap">{blog.duration}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text font-Nunito text-xl text-transparent">
              {blog.title}
            </h1>
            <p className="line-clamp-3 text-[#2C3D68]">{blog.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 pb-2">
          {blog?.logo ? (
            <Image
              className="rounded-full object-cover"
              width={36}
              height={36}
              src={blog.logo}
              sizes="auto"
              alt="logo"
            />
          ) : (
            <Mainlogo className="h-8 w-8 rounded-full bg-secondary text-white" />
          )}
          <div>
            <h1>{blog.blogger}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
