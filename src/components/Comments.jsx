import React from "react";
import incomma from "@/assets/incomma.svg";
import Image from "next/image";
import { comments } from "@/utils/data";
const Comments = () => {
  return (
    <div className="container mx-auto ">
      <div className=" xl:max-h-[650px] md:max-h-[1000px] gap-5 content-center xl:items-center flex flex-wrap flex-col ">
        {/* <div className="flex flex-col "> */}
        <h2 className="text-grad h2  h-fit lg:col-start-2">
          We hear your voices
        </h2>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} index={index} />
        ))}
      </div>
    </div>
  );
};
export const Comment = ({ comment, index }) => {
  return (
    <div
      className={`p-4 ${
        index < 2 ? "xl:order-[-1] " + (index === 1 ? " xl:mb-20 " : "") : ""
      }  flex flex-col gap-2 max-w-[min(350px,90vw)] min-w-[350px]  rounded-[20px] h-fit shadow-cs `}
    >
      <Image src={incomma} alt="comment" />

      <p className="body_3 text-grey_1  ">{comment.description}</p>
      <p className="body3_b text-secondary">{comment.identity}</p>
      <p className="body_3 italic text-grey_1">{comment.user}</p>
    </div>
  );
};
export default Comments;
