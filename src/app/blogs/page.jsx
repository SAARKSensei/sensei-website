"use client";
import React from "react";
import Image from "next/image";
import { blogs } from "@/utils/data";
import arrow from "@/assets/arrow-left-circle.svg?url";
import FbLinkdMailLink from "@/components/FbLinkdMailLink";
import Mainlogo from "@/assets/mainlogo.svg";
import heart from "@/assets/heart1.svg?url";
import send from "@/assets/send.svg?url";
const Page = () => {
  const [blog, setBlog] = React.useState(blogs[0]);
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4 py-20">
      <div className="flex items-center gap-2 text-primary">
        {/* <Image src={arrow} alt="arrow" /> */}
        <h5 className="h5_b">Blogs & News</h5>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-4">
          <h5 className="h5 underline-grad relative text-secondary">
            {blog.date}&nbsp;&bull;&nbsp;{blog.duration}
          </h5>
          {/* <FbLinkdMailLink /> */}
        </div>
        <div className="flex gap-4 max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="h2 text-grad">{blog.title}</h2>
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
              <h1 className="h5_b text-secondary">{blog.blogger}</h1>
            </div>
            <Image
              src={blog.image}
              alt={blog.title}
              sizes="auto "
              width={787}
              height={512}
              className="max-h-fit max-w-[95%]"
            />
            <p className="body_2 text-secondary">{blog.description}</p>
            <ol className="flex flex-col gap-4">
              {blog.points.map((content, index) => (
                <li key={index} className="flex flex-col gap-2 text-secondary">
                  <h2 className="h3 font-bold">{content.title}</h2>
                  <p className="body_2">{content.description}</p>
                </li>
              ))}
            </ol>
            <p className="body_2 text-secondary">{blog.conclusion}</p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[min(95vw,396px)] lg:max-w-[min(95vw,380px)]">
            <h5 className="h4 underline-grad !text-grad relative w-full font-bold !text-transparent text-secondary">
              Related Blogs
            </h5>
            <div className="flex gap-4 p-4 max-lg:overflow-scroll lg:flex-col">
              {blogs.map((blog, index) => (
                <Blog
                  key={index}
                  blog={blog}
                  blogAction={(blog) => setBlog(blog)}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="relative flex justify-between bg-white p-4">
          <span className="absolute inset-0 -inset-y-[1px] -z-10 bg-grad_1" />

           <FbLinkdMailLink /> 
          <Image src={mainlogo} alt={"sensei"} />
        </div> */}
        <div className="body3_b flex justify-between p-4 text-secondary">
          <span>
            345 views &nbsp; &nbsp; &nbsp;
            {/* 34 comments */}
          </span>
          <span className="flex items-center gap-2">
            <Image src={heart} alt="heart" sizes="auto " />
            290
          </span>
        </div>
        {/* <div className="relative flex justify-between bg-white p-7">
          <span className="absolute -inset-[1px] -z-10 bg-grad_1" />

          <input
            className="placeholder:body3_b text-secondary placeholder:text-secondary"
            type="text"
            placeholder="Leave a comment..."
          />
          <Image src={send} alt={"send"} />
        </div> */}
      </div>
    </div>
  );
};
const Blog = ({ blog, blogAction }) => {
  return (
    <div
      onClick={() => blogAction(blog)}
      className="flex w-full min-w-[min(95vw,380px)] flex-col rounded-lg bg-white shadow-cs"
    >
      <div className="relative mb-2 h-[230px] w-full">
        <Image
          src={blog.image}
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
export default Page;
