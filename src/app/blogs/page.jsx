import React from "react";
import { blogs } from "@/utils/data";
import ClientLink from "@/components/miniComps/ClientLink";
import Blog from "@/components/miniComps/Blog";
import { slug } from "@/utils/logic";
const page = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-4 p-4 py-20">
      <h5 className="h4 underline-grad !text-grad relative w-full font-bold !text-transparent text-secondary">
        Blogs & News
      </h5>
      <div className="flex gap-4 p-4 max-lg:overflow-y-scroll">
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
