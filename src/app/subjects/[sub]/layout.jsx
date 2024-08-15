import React from "react";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";

export function generateMetadata({ params: { sub } }) {
  const subject = subjects.find((s) => slug(s?.slug || s?.title) === sub);
  if (!subject) return { title: "404", description: "Page Not Found" };
  return {
    title: subject.title,
    description: subject.description,
    openGraph: {
      images: [
        {
          url: subject.image?.src,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
