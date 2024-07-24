import React from "react";
import Image from "next/image";
import linkedin from "@/assets/linkedin-solid.svg?url";
import Mission from "@/assets/mission.svg";
import Vision from "@/assets/vision.svg";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
import group from "@/assets/us/Group_40155.png";
// import { team, psychologists } from "@/utils/data";
import Link from "next/link";
import Background from "@/components/miniComps/BackGround";
import CircleOfTrust from "../../components/homeComps/CircleOfTrust";
export const metadata = {
  title: "About",
};
const Page = async () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEET_KEY; // Replace with your API key
  const spreadsheetId = "1L9zcehnh2JwbT2n0xf1-J1BzjkuBfpzdkEcXrIZRmpU"; // Replace with your spreadsheet ID
  const sheetName = "Sheet1"; // Replace with your sheet name

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      return data.values;
    })
    .catch((error) => console.log("Error:", error));
  const team = res.filter(
    (person, index) =>
      index !== 0 &&
      !person[1].includes("Psycho") &&
      !person[1].includes("Counsellor"),
  );
  const psychologists = res.filter(
    (person, index) =>
      index !== 0 &&
      (person[1].includes("Psycho") || person[1].includes("Counsellor")),
  );

  return (
    <div
      style={{
        backgroundImage: `url(${ABLTopology.src})`,
      }}
      className="container mx-auto my-10 flex flex-col items-center gap-20 p-4"
    >
      <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
        SAARK Education Pvt. Ltd.
      </h2>
      <Image src={group} alt="group" width={910} height={440} priority />
      <div className="flex gap-4 max-md:flex-wrap">
        <h1 className="h1">
          Our Passionate team of developers, designers & child experts craft
          engaging learning experiences for you & your child.
        </h1>
        <div className="flex flex-col gap-4 text-grey_1">
          <div className="flex gap-2 max-sm:flex-wrap">
            <Vision className="m-4" />
            <div>
              <h4 className="h4 h-fit max-w-[90vw] uppercase text-secondary">
                Vision
              </h4>
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
            <Mission className="m-[22.5px]" />
            <div>
              <h4 className="h4 h-fit max-w-[90vw] uppercase text-secondary">
                Mission
              </h4>
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
        <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {team.map(
            (person, index) =>
              person[4] === "Core" && (
                <Person person={person} key={index} index={index} />
              ),
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-20">
        <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
          Our Psychologist{" "}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {psychologists.map(
            (person, index) =>
              person[4] === "Psychology" && (
                <Person person={person} key={index} index={index} />
              ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
          Our Advisor
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {team.map(
            (person, index) =>
              person[4] === "Advisor" && (
                <Person person={person} key={index} index={index} />
              ),
          )}
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
        src={
          person?.img ||
          `https://drive.google.com/uc?export=view&id=${person[2].split("/")[5]}`
        }
        alt="member"
        className="h-auto w-full saturate-0 transition-all group-hover:saturate-100"
      />
      <div
        className={`absolute inset-0 flex justify-end rounded-[10px] bg-gradient-to-b align-bottom text-white hover:!via-transparent hover:!to-transparent ${index % 2 == 0 ? "from-primary/0 via-primary to-primary" : "from-secondary/0 via-secondary to-secondary"} flex flex-col from-40% via-85% p-6 opacity-100 transition-all duration-500 hover:opacity-30`}
      >
        <div className="flex justify-between gap-2">
          <p className="body1_b">{person?.name || person[0]}</p>
          <Link target="_blank" href={person?.linkedIn_url || person[3]}>
            <Image src={linkedin} alt="linkedin" />
          </Link>
        </div>
        <p className="body3_b">{person?.description || person[1]}</p>
      </div>
    </div>
  );
};
export default Page;
