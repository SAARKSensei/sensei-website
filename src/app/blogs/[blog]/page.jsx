import React from "react";
import Image from "next/image";
import { blogs } from "@/utils/data";
import arrow from "@/assets/arrow-left-circle.svg?url";
// import FbLinkdMailLink from "@/components/miniComps/FbLinkdMailLink";
import Mainlogo from "@/assets/mainlogo.svg";
import heart from "@/assets/heart1.svg?url";
import send from "@/assets/send.svg?url";
import ClientLink from "@/components/miniComps/ClientLink";
import Blog from "@/components/miniComps/Blog";
import { slug } from "@/utils/logic";
import { Bigplayer } from "@/components/miniComps/VideoPlay";

const findBlog = (blog) => {
  return blogs.find((b) => slug(b.title) === blog);
};
export async function getStaticPaths() {
  const paths = blogs.map((b) => ({
    params: { blog: slug(b.title) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function generateMetadata({ params: { blog } }) {
  const Blog = findBlog(blog);
  return {
    title: Blog.title,
    description: Blog.description,
    openGraph: {
      images: [
        {
          url: Blog.image,
        },
      ],
    },
  };
}
const Page = ({ params: { blog } }) => {
  const cBlog = findBlog(blog);
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4 py-20">
      <div className="flex items-center gap-2 text-primary">
        {/* <Image src={arrow} alt="arrow" /> */}
        <h5 className="h5_b">Blogs & News</h5>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-4">
          <h5 className="h5 underline-grad relative text-secondary">
            {cBlog.date}&nbsp;&bull;&nbsp;{cBlog.duration}
          </h5>
          {/* <FbLinkdMailLink /> */}
        </div>
        <div className="flex gap-4 max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="h2 text-grad">{cBlog.title}</h2>
            <div className="flex items-center gap-3 pb-2">
              {blog?.logo ? (
                <Image
                  className="rounded-full object-cover"
                  width={36}
                  height={36}
                  src={cBlog.logo}
                  sizes="auto"
                  alt="logo"
                />
              ) : (
                <Mainlogo className="h-8 w-8 rounded-full bg-secondary text-white" />
              )}
              <h1 className="h5_b text-secondary">{cBlog.blogger}</h1>
            </div>
            <Image
              src={cBlog.image}
              alt={cBlog.title}
              sizes="auto "
              width={787}
              height={512}
              className="max-h-fit max-w-[95%]"
            />
            <p className="body_2 text-secondary">{cBlog.description}</p>
            <ol className="flex flex-col gap-4">
              {cBlog.points.map((content, index) => (
                <li key={index} className="flex flex-col gap-2 text-secondary">
                  <h2 className="h3 font-bold">{content.title}</h2>
                  <p className="body_2">{content.description}</p>
                  {content?.video && <Bigplayer url={content.video} />}
                  {content?.subpoints && (
                    <ul className="flex flex-col gap-2">
                      {content?.subpoints.map((subpoint, index) => (
                        <li key={index} className="">
                          <p className="body_2 text-secondary">
                            <span className="h5 font-bold text-secondary">
                              {subpoint.title}
                              {" : "}
                            </span>
                            {subpoint.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
            <p className="body_2 text-secondary">{cBlog.conclusion}</p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[min(95vw,396px)] lg:max-w-[min(95vw,380px)]">
            <h5 className="h4 underline-grad !text-grad relative w-full font-bold !text-transparent text-secondary">
              Related Blogs
            </h5>
            <div className="flex gap-4 p-4 max-lg:overflow-scroll lg:flex-col">
              {blogs.map((blog, index) => (
                <ClientLink href={`/blogs/${slug(blog.title)}`} key={index}>
                  <Blog blog={blog} />
                </ClientLink>
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

export default Page;
