import React from "react";
import Image from "next/image";
import family from "@/assets/family.svg";
import buildings from "@/assets/buildings.svg";
import school from "@/assets/school.svg";
import { cards } from "@/utils/data";
const CircleOfTrust = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="h2 mx-auto w-fit bg-grad_1 bg-clip-text text-transparent">
          Within your circle of trust
        </h2>
        <p className="body_2 mx-auto max-w-[1000px] text-center">
          Knowing how important it is to raise well-rounded children, we want to
          make learning basic life skills easier for you. Sensei brings these
          programs to your trusted spaces - your community, your child&apos;s
          school, or even your own home. Our RCI-approved psychologists create a
          fun and supportive environment for your child to develop self, social
          and emotional skills while promoting ethical choices in life.
          We&apos;re here to support your journey every step of the way.
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
        <Card card={cards[0]} image={family} color={"#FF8B13"} />
        <Card card={cards[1]} image={buildings} color={"#EF5F3D"} />
        <Card card={cards[2]} image={school} color={"#F8BF3B"} />
      </div>
    </div>
  );
};
export const Card = ({ card, image, color }) => {
  return (
    <div className="flex h-[500px] w-[340px] flex-col gap-4 rounded-[20px] bg-white p-10">
      <p className="body1_b">{card.title}</p>
      <span
        style={{ backgroundColor: color }}
        className={`min-h-1 w-[56px] rounded-full`}
      />
      <p className="body_3">{card.description} </p>
      <button className="button_1 relative z-[0] w-fit">
        <span className="absolute -inset-[2px] z-[-1] rounded-full bg-grad_1" />
        <span className="absolute inset-0 z-[-1] rounded-full bg-white" />
        <span className="text-grad">{card.button}</span>
      </button>
      <Image
        src={image}
        alt={card.image}
        sizes="auto"
        className="relative left-10 ml-auto"
      />
    </div>
  );
};
export default CircleOfTrust;
