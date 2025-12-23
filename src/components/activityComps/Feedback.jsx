"use client";
import React, { useState } from "react";
import FeedbackTopStars from "@/assets/in-Use/feedbackTopStars.svg";
import Feedbackstar from "@/assets/in-Use/feedbackStar.svg";
import Emptystar from "@/assets/in-Use/emptystar.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import axios from "axios";

const Feedback = ({ activityId, activityName }) => {
  const Router = useRouter();
  const [star, setStar] = useState(2);
  const [feedback, setFeedback] = useState('');

  const getChildName = async () => {
    const parent = (await getSession()).user
   // const childName = (await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/parent-users/getPricingPlan?email=${parent.email}`)).data.childName
   // return childName
  }

  return (
    <div className="mt-5 md:mt-8 relative flex min-h-[90vh] flex-col items-center justify-evenly">
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <FeedbackTopStars />
        <h3 className="h3 mx-auto font-bold text-secondary">{star+1}/5</h3>
        <h3 className="h3 text-grad mx-auto font-bold">
          Did you find it fun?{" "}
        </h3>
        <p className="body-3 mx-auto max-w-[min(90vw,500px)] text-center text-grey_1">
          Rate this activity and provide your valuable feedback to help us grow.{" "}
        </p>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) =>
            index <= star ? (
              <Feedbackstar onClick={() => setStar(index) } key={index} />
            ) : (
              <Emptystar onClick={() => setStar(index)} key={index} />
            ),
          )}
        </div>
      </div>
      <textarea
        className="body_2 h-[min(20vh,200px)] w-[min(90vw,500px)] rounded-[20px] p-5 shadow-cs focus:outline-none"
        placeholder="Please drop your feedback here..."
        onChange={(e) => {setFeedback(e.target.value)}}
      />
      <div
        onClick={async () => {
          console.log(star+1)
          console.log(feedback)
          console.log(activityId + " " + activityName)
          const parent = (await getSession()).user
          const childName = await getChildName();
          try{
            const response = await axios.post("/feedback", {
              activityId,
              activityName,
              rating : star+1,
              message : feedback,
              parentName : parent.name,
              emailId : parent.email,
              childName : childName
            })

            if(response.status === 201){
              console.log("feedback submitted")
            } else {
              console.log("feedback not submitted")
            }
          } catch(err){
            console.log(err)
          } finally{
            Router.back()
          }
        }}
        className="h5_b mx-auto w-[min(90vw,300px)] rounded-[16px] border-b-4 border-[#C96D0E] bg-grad_1 px-6 py-2 text-center text-white disabled:opacity-50 cursor-pointer" 
      >
        Submit
      </div>
    </div>
  );
};

export default Feedback;
