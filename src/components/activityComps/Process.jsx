"use client";

import React, { useRef, useState } from "react";

import Animatebg from "@/components/Modules/Animatebg";

const Process = () => {
  const menuRef = useRef(null);
  const scrollref = useRef(null);
  const [trans, setTrans] = useState({
    transform: "translateX(0px)",
    width: "0px",
  });

  const handleMouseOver = (event) => {
    // event.preventDefault();
    if (
      event.currentTarget.offsetWidth !== 0 &&
      event.target?.value === undefined
    ) {
      const val =
        event.currentTarget.offsetLeft -
        scrollref.current.scrollLeft -
        (window.innerWidth * 4) / 15;
      // console.log(event.target?.value, val);
      scrollref.current.scrollBy(val, 0);
      setTrans({
        transform: `translateX(${event.currentTarget.offsetLeft}px)`,
        width: `${event.currentTarget.offsetWidth}px`,
      });
    }
  };

  const [selectedOption, setSelectedOption] = useState("Preparation");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Animatebg>
      <div className="flex items-center justify-between font-Nunito text-base text-white">
        <h1 className="text-left font-Nunito text-lg min-[1300px]:text-3xl min-[1300px]:font-bold">
          PROCESS
        </h1>
      </div>
      <div
        ref={scrollref}
        className="scrollbar-hide overflow-x-auto scroll-smooth"
      >
        <div
          ref={menuRef}
          className="scroll relative my-4 flex min-h-fit min-w-fit items-center justify-between gap-4 whitespace-nowrap pb-4 font-Nunito text-base text-white"
        >
          <span className="absolute bottom-2 left-0 right-0 h-1 rounded-full bg-white"></span>
          <span
            style={trans}
            className="white absolute bottom-2 left-0 z-10 h-1 min-w-10 rounded-full bg-gradient-to-r from-[#F8BF3B] to-[#EF5F3D] transition-all duration-500"
          />
          <label
            onClick={handleMouseOver}
            htmlFor="Preparation"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              defaultChecked
              name="process"
              type="radio"
              id="Preparation"
              value="Preparation"
              checked={selectedOption === "Preparation"}
              onChange={handleOptionChange}
              className="peer/1 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/1:border-0 peer-checked/1:bg-gradient-to-r peer-checked/1:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Preparation
            </h1>
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="CreatetheScenario"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="CreatetheScenario"
              value="CreatetheScenario"
              checked={selectedOption === "CreatetheScenario"}
              onChange={handleOptionChange}
              className="peer/2 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/2:border-0 peer-checked/2:bg-gradient-to-r peer-checked/2:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Create the Scenario
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (3-5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="BrainstormSolutions"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="BrainstormSolutions"
              value="BrainstormSolutions"
              checked={selectedOption === "BrainstormSolutions"}
              onChange={handleOptionChange}
              className="peer/3 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/3:border-0 peer-checked/3:bg-gradient-to-r peer-checked/3:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Brainstorm Solutions
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="ConsideringConsequences"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="ConsideringConsequences"
              value="ConsideringConsequences"
              checked={selectedOption === "ConsideringConsequences"}
              onChange={handleOptionChange}
              className="peer/4 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/4:border-0 peer-checked/4:bg-gradient-to-r peer-checked/4:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Considering Consequences
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="MakingtheDecision"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="MakingtheDecision"
              value="MakingtheDecision"
              checked={selectedOption === "MakingtheDecision"}
              onChange={handleOptionChange}
              className="peer/5 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/5:border-0 peer-checked/5:bg-gradient-to-r peer-checked/5:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Making the Decision
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="ReflectionandDecision"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="ReflectionandDecision"
              value="ReflectionandDecision"
              checked={selectedOption === "ReflectionandDecision"}
              onChange={handleOptionChange}
              className="peer/6 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/6:border-0 peer-checked/6:bg-gradient-to-r peer-checked/6:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Reflection and Decision
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="Wrapup"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="Wrapup"
              value="Wrapup"
              checked={selectedOption === "Wrapup"}
              onChange={handleOptionChange}
              className="peer/7 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/7:border-0 peer-checked/7:bg-gradient-to-r peer-checked/7:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl font-medium leading-7 min-[1300px]:text-2xl min-[1300px]:font-bold">
              Wrap-up
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
          <label
            onClick={handleMouseOver}
            htmlFor="AdditionalTips"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="AdditionalTips"
              value="AdditionalTips"
              checked={selectedOption === "AdditionalTips"}
              onChange={handleOptionChange}
              className="peer/8 appearance-none"
            />
            <svg
              className="max-h-[25px] max-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/8:border-0 peer-checked/8:bg-gradient-to-r peer-checked/8:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
              Additional Tips
            </h1>{" "}
            <span className="font-Nunito text-base font-normal">
              (5 minutes)
            </span>
          </label>
        </div>
      </div>
      <div className="font-Nunito text-lg font-medium md:text-2xl">
        {selectedOption === "Preparation" && (
          <ul className="list-disc p-5 text-white">
            <li>
              Begin by discussing emotions with the children. Ask them to name
              different emotions they know.
            </li>
            <li>
              Explain the importance of understanding and expressing emotions
              for healthy communication and relationships.
            </li>
          </ul>
        )}
        {selectedOption === "CreatetheScenario" && (
          <ul className="list-disc p-5 text-white">
            <p>
              Together, write down a situation where this superhero faces a
              tough choice. Example:
            </p>
            <li>
              Super Hero 1 finds a lost puppy. They want to keep it, but they
              don&apos;t know whose it is. What should they do?
            </li>
            <li>
              Super Hero 2 accidentally breaks a toy belonging to their friend.
              Should they tell the truth or try to hide it?
            </li>
            <li>
              Super Hero 3 sees another kid taking candy without paying. What
              should they do?
            </li>
            <li>
              Super Hero 4 witnesses a friend cyberbullying someone online.
              Should they speak up or stay silent?
            </li>
            <li>
              Super Hero 5 is offered a chance to cheat on a test to get a good
              grade. What should they do?
            </li>
            <li>
              Super Hero 4 witnesses a friend cyberbullying someone online.
              Should they speak up or stay silent?
            </li>
            <li>
              Super Hero 6 finds a wallet full of money. The owner isn&apos;t
              around. Should they keep it or try to find them?
            </li>
          </ul>
        )}
        {selectedOption === "BrainstormSolutions" && (
          <ul className="list-disc p-5 text-white">
            <li>
              Explain, &quot;Let&apos;s help our superhero make the best
              choice!&quot;{" "}
            </li>
            <li>
              Brainstorm all the possible solutions the superhero could take in
              this situation.{" "}
            </li>
            <li>
              Write down each solution on a separate piece of paper for easy
              reference.{" "}
            </li>
            <li>
              Encourage your child to come up with creative ideas, even if they
              seem silly at first.
            </li>
          </ul>
        )}
        {selectedOption === "ConsideringConsequences" && (
          <ul className="list-disc p-5 text-white">
            <li>
              Discuss the potential outcomes of each choice in simple terms.
              Example: &quot;If Super Hero 1 asks their friend why they&apos;re
              crying, they might learn what&apos;s wrong and help them feel
              better.&quot;
            </li>
            <li>Focus on basic cause-and-effect relationships.</li>
            <li>
              Introduce the concept of &quot;pros&quot; and &quot;cons.&quot;
              Explain that each choice might have good and bad outcomes.
            </li>
            <li>
              List the positive and negative consequences for each solution on
              the corresponding piece of paper.
            </li>
            <li>
              You can use the dice (optional) to randomly pick a solution and
              then discuss its pros and cons in detail.
            </li>
          </ul>
        )}
        {selectedOption === "MakingtheDecision" && (
          <ul className="list-disc p-5 text-white">
            <li>
              After considering all the options and their consequences, discuss
              what the superhero should do.
            </li>
            <li>
              Guide your child towards a responsible decision that aligns with
              the superhero&apos;s values.
            </li>
          </ul>
        )}
        {selectedOption === "ReflectionandDecision" && (
          <ul className="list-disc p-5 text-white">
            <li>
              Talk about how the superhero&apos;s decision reflects their values
              (e.g., bravery, honesty).
            </li>
            <li>
              Discuss how this situation relates back to your child&apos;s life.
            </li>
            <li>Ask, &quot;What would you do in a similar situation?&quot;</li>
          </ul>
        )}
        {selectedOption === "Wrapup" && (
          <ul className="list-disc p-5 text-white">
            <li>Briefly summarize the key takeaways from the activity.</li>
            <li>
              Praise your child for their participation and thoughtful answers.
            </li>
          </ul>
        )}
        {selectedOption === "AdditionalTips" && (
          <ul className="list-disc p-5 text-white">
            <li>
              Act out the scenarios for younger children or use silly voices to
              make it more engaging.
            </li>
            <li>
              Encourage your child to come up with their own superhero scenarios
              after playing the game.
            </li>
            <li>
              Use real-life situations from your child&apos;s experience for a
              more relatable activity.By following these steps and adapting them
              to your child&apos;s age and interests, you can turn the
              &quot;Superhero Choice&quot; game into a valuable learning
              experience that fosters responsible decision-making skills.
            </li>
          </ul>
        )}
      </div>
    </Animatebg>
  );
};

export default Process;
