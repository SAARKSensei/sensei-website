import { blogs, subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
export default async function sitemap() {
  const Blogs = blogs.map((blog) => ({
    url: `https://www.sensei.org.in/blogs/${slug(blog.title)}`,
    lastModified: new Date(blog.date),
  }));
  const Subjects = subjects.map((s) => ({
    url: `https://www.sensei.org.in/subjects/${slug(s?.slug || s?.title)}`,
    lastModified: new Date(),
  }));
  // console.log(Blogs);
  return [
    {
      url: "https://www.sensei.org.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.sensei.org.in/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.sensei.org.in/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.sensei.org.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://www.sensei.org.in/blogs",
      lastModified: new Date(),
    },
    ...Blogs,
    ...Subjects,
    {
      url: "https://www.sensei.org.in/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.sensei.org.in/t&amp;c",
      lastModified: new Date(),
    },
    {
      url: "https://www.sensei.org.in/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.sensei.org.in/t&amp;c",
      lastModified: new Date(),
    },
  ];
}
