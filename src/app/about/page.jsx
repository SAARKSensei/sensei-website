import React from "react";
import Image from "next/image";
import linkedin from "@/assets/linkedin-solid.svg";
import mission from "@/assets/mission.svg";
import vision from "@/assets/vision.svg";
import group from "@/assets/us/Group_40155.png";
import { team, psychologists } from "@/utils/data";
import Link from "next/link";
import Background from "@/components/BackGround";
import CircleOfTrust from "@/components/CircleOfTrust";
const Page = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col items-center gap-20 p-4">
      <h4 className="h4 text-secondary">SAARK Education Pvt. Ltd.</h4>
      <Image src={group} alt="group" width={910} height={440} />
      <div className="flex gap-4 max-md:flex-wrap">
        <h1 className="h1">
          Lorem ipsum dolor sit amet consectetur. Amet cras enim odio eleifend
          dignissim .
        </h1>
        <div className="flex flex-col gap-4 text-grey_1">
          <div className="flex gap-2 max-sm:flex-wrap">
            <Image className="m-4" src={vision} alt="vision" />
            <div>
              <h4 className="h4">Vision</h4>
              <p className="body_3">
                Our vision is to ignite a transformative revolution in youth
                empowerment, prioritizing mental health and comprehensive sex
                education. We&apos;re committed to delivering accessible,
                cutting-edge resources that empower the next generation with
                resilience, self-awareness, and informed decision-making,
                fostering a future of holistic well-being and knowledge.
              </p>{" "}
            </div>
          </div>
          <div className="flex gap-2 max-sm:flex-wrap">
            <Image className="m-[22.5px]" src={mission} alt="mission" />
            <div>
              <h4 className="h4">Mission</h4>
              <p className="body_3">
                Revolutionizing education for 10k students by 2025 and running
                the count to 1.5 lakh students across India. Achieving an
                optimal counselor-to-student ratio of [250:1], ensuring
                individualized care. Catering over 48.1% active internet users
                in India we wish to make our product accessible to the other
                half of it.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <h4 className="h4 text-secondary">Our Team</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {team.map((person, index) => (
            <Person person={person} key={index} index={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <h4 className="h4 text-secondary">Our Psychologist </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {psychologists.map((person, index) => (
            <Person person={person} key={index} index={index} />
          ))}
        </div>
      </div>
      <CircleOfTrust />
    </div>
  );
};
export const Person = ({ person, index }) => {
  return (
    <div className="group relative rounded-[10px]">
      <Image
        height={366}
        width={308}
        src={person.img}
        alt={person.name}
        className="saturate-0 transition-all group-hover:saturate-100"
      />
      <div
        className={`absolute inset-0 flex justify-end rounded-[10px] bg-gradient-to-b align-bottom text-white hover:!via-transparent hover:!to-transparent ${index % 2 == 0 ? "from-primary/0 via-primary to-primary" : "from-secondary/0 via-secondary to-secondary"} flex flex-col from-40% via-85% p-6 opacity-100 transition-all duration-500 hover:opacity-30`}
      >
        <div className="flex justify-between gap-2">
          <p className="body1_b">{person.name}</p>
          <Link
            target="_blank"
            href={
              person?.linkedIn_url || "https://www.linkedin.com/in/anantapaul/"
            }
          >
            <Image src={linkedin} alt="linkedin" />
          </Link>
        </div>
        <p className="body3_b">{person.description}</p>
      </div>
    </div>
  );
};
export default Page;
