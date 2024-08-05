import React from "react";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
import mental from "@/assets/mental.svg?url";
export function generateMetadata({ params: { sub } }) {
  const subject = subjects.find((s) => slug(s?.slug || s?.title) === sub);
  if (!subject) return { title: "404", description: "Page Not Found" };
  return {
    title: subject.title,
    description: subject.description,
  };
}
const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
