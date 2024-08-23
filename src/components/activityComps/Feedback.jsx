"use client";
import React, { useState } from "react";
import FeedbackTopStars from "@/assets/feedbackTopStars.svg";
import Feedbackstar from "@/assets/feedbackStar.svg";
import Emptystar from "@/assets/emptystar.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Feedback = () => {
  const Router = useRouter();
  const [star, setStar] = useState(0);
  return (
    <div className="relative flex min-h-[90vh] flex-col items-center justify-evenly">
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <FeedbackTopStars />
        <h3 className="h3 mx-auto font-bold text-secondary">{star + 1}/5</h3>
        <h3 className="h3 text-grad mx-auto font-bold">
          Did you find it fun?{" "}
        </h3>
        <p className="body-3 mx-auto max-w-[min(90vw,500px)] text-center text-grey_1">
          Rate this activity and provide your valuable feedback to help us grow.{" "}
        </p>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) =>
            index <= star ? (
              <Feedbackstar onClick={() => setStar(index)} key={index} />
            ) : (
              <Emptystar onClick={() => setStar(index)} key={index} />
            ),
          )}
        </div>
      </div>
      <textarea
        className="body_2 h-[min(20vh,200px)] w-[min(90vw,500px)] rounded-[20px] p-5 shadow-cs focus:outline-none"
        placeholder="Please drop your feedback here..."
      />
      <div
        onClick={() => Router.back()}
        className="h5_b mx-auto w-[min(90vw,300px)] rounded-[16px] border-b-4 border-[#C96D0E] bg-grad_1 px-6 py-2 text-center text-white disabled:opacity-50"
      >
        Submit
      </div>
    </div>
  );
};

export default Feedback;
