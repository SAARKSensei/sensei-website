import React from "react";
import { blogs } from "@/utils/data";
import ClientLink from "@/components/miniComps/ClientLink";
import Blog from "@/components/miniComps/Blog";
import { slug } from "@/utils/logic";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <div className="container mx-auto mt-4 flex flex-wrap gap-4 p-4 py-20 md:mt-8">
        <h5 className="h5_b underline-grad relative w-full text-[#333333]">
          Blogs & News
        </h5>
        <div className="flex flex-wrap gap-4 p-4">
          {blogs.map((blog, index) => (
            <ClientLink href={`/blogs/${slug(blog.title)}`} key={index}>
              <Blog blog={blog} />
            </ClientLink>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
