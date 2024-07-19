import React from "react";
import incomma from "@/assets/incomma.svg?url";
import Image from "next/image";
import { comments } from "@/utils/data";
import Carousel, { CarouselItemWraper } from "./Carousel";
import FreeActivityBtn from "./FreeActivityBtn";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
import Stars from "./Stars";
const Comments = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ABLTopology.src})`,
      }}
      className="container mx-auto flex flex-col gap-16"
    >
      <div className="mx-auto flex max-w-[min(100%,850px)] flex-col content-center gap-5">
        {/* <div className="flex flex-col "> */}
        <h2 className="h4 relative mx-auto h-fit w-full max-w-[90vw] text-center uppercase text-secondary lg:col-start-2">
          Testimonials
        </h2>
        <Carousel>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} index={index} />
          ))}
        </Carousel>
      </div>
      <div className="flex w-full items-center justify-center">
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
