import React from "react";
import Image from "next/image";
// import family from "@/assets/family.svg?url";
import buildings from "@/assets/buildings.svg?url";
import school from "@/assets/school.svg?url";
import { cards } from "@/utils/data";
const CircleOfTrust = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="mx-auto flex flex-wrap justify-evenly gap-5 md:gap-10">
        <div className="flex h-fit max-w-[524px] flex-1 flex-col gap-2 rounded-[20px] p-5 shadow-cs sm:p-10">
          <h2 className="h4 h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
            Our Verticals
          </h2>
          <p className="body_2 mx-auto max-w-[1000px]">
            Children evolve in interconnected environments, or microsystems. By
            offering programs in places such as societies and classrooms, Sensei
            bridges the gap between different microsystems.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <Card card={cards[0]} image={buildings} color={"#FF8B13"} />
          <Card card={cards[1]} image={school} color={"#EF5F3D"} />
        </div>
        {/* <Card card={cards[2]} image={school} color={"#F8BF3B"} /> */}
      </div>
    </div>
  );
};
export const Card = ({ card, image, color }) => {
  return (
    <div className="relative flex max-w-[min(524px,90vw)] flex-col gap-4 overflow-hidden rounded-[20px] bg-white p-5 shadow-cs sm:p-10">
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
