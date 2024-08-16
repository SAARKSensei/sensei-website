import React from "react";
import { blogs } from "@/utils/data";
import ClientLink from "@/components/miniComps/ClientLink";
import Blog from "@/components/miniComps/Blog";
import { slug } from "@/utils/logic";
const page = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-4 p-4 py-20">
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
  );
};

export default page;
