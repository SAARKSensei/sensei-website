import React from "react";
import Image from "next/image";
import family from "@/assets/family.svg";
import buildings from "@/assets/buildings.svg";
import school from "@/assets/school.svg";
import { cards } from "@/utils/data";
const CircleOfTrust = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-around gap-5">
        <div className="flex max-w-[524px] flex-col gap-2 p-10">
          <h4 className="h4 text-secondary">Our Verticals</h4>

          <p className="body_2 mx-auto max-w-[1000px]">
            Children evolve in interconnected environments, or microsystems. By offering programs in places such as societies and classrooms, Sensei bridges the gap between different microsystems.
          </p>
        </div>
        <Card card={cards[0]} image={buildings} color={"#FF8B13"} />
        <Card card={cards[1]} image={school} color={"#EF5F3D"} />
        {/* <Card card={cards[2]} image={school} color={"#F8BF3B"} /> */}
      </div>
    </div>
  );
};
export const Card = ({ card, image, color }) => {
  return (
    <div className="relative flex max-w-[min(524px,90vw)] flex-col gap-4 overflow-hidden rounded-[20px] bg-white p-10">
      <p className="body1_b">{card.title}</p>
      <span
        style={{ backgroundColor: color }}
        className={`min-h-1 w-[56px] rounded-full`}
      />
      <p className="body_3">{card.description} </p>

      {/* <button className="group relative z-[10] h-fit w-fit">
        <span className="absolute -inset-[2px] z-[-1] block rounded-full bg-grad_1" />
        <span className="absolute inset-0 z-[-1] block rounded-full bg-white" />

        <span className="button_1 text-grad relative block group-hover:bg-clip-border group-hover:text-white">
          {card.button}
        </span>
      </button> */}
      <Image
        src={image}
        alt={card.image}
        sizes="auto"
        className="absolute -bottom-12 right-0"
      />
    </div>
  );
};
export default CircleOfTrust;
