import React from "react";
import incomma from "@/assets/incomma.svg";
import Image from "next/image";
import { comments } from "@/utils/data";
import Carousel, { CarouselItemWraper } from "./Carousel";
import FreeActivityBtn from "./FreeActivityBtn";
const Comments = () => {
  return (
    <div className="container mx-auto flex flex-col gap-16">
      <div className="max-w-[min(100%,850px)] mx-auto gap-5 content-center flex flex-col">
        {/* <div className="flex flex-col "> */}
        <h2 className="max-w-[90vw] text-secondary h4 mx-auto h-fit lg:col-start-2">
          Testimonials{" "}
        </h2>
        <Carousel>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} index={index} />
          ))}
        </Carousel>
      </div>
      <div className="w-full flex items-center justify-center">
        <FreeActivityBtn />
      </div>
    </div>
  );
};
export const Comment = ({ comment, index }) => {
  return (
    <CarouselItemWraper index={index}>
      <Image src={incomma} alt="comment" />

      <p className="h3 text-grey_1">{comment.description}</p>
      <p className="body3_b text-secondary">{comment.identity}</p>
      <p className="body_3 italic text-grey_1">{comment.user}</p>
    </CarouselItemWraper>
  );
};
export default Comments;
