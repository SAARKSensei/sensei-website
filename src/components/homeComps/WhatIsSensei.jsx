import Image from "next/image";
import BrainIcon from "@/assets/in-Use/brainIcon.svg?url";
import BlockIcon from "@/assets/in-Use/blockIcon.svg?url";
import BulbIcon from "@/assets/in-Use/bulbIcon.svg?url";
import TargetIcon from "@/assets/in-Use/targetIcon.svg?url";
import ExploreCurriculum from "./ExploreCurriculum";
import Link from "next/link";

const WhatIsSenseiSection = () => {
  return (
    <>
      <div className="mt-10 flex w-full items-center justify-center px-4">
        <div className="inline-flex w-full max-w-5xl flex-col items-center justify-start gap-4">
          <div className="justify-center text-center font-['Nunito'] text-2xl font-bold uppercase leading-loose text-[#ff8b13]">
            What is sensei
          </div>
          <div className="justify-center px-4 text-center font-['Nunito'] text-4xl font-black capitalize leading-10 text-slate-700">
            Building the Skills That Matter Beyond Academics
          </div>
          <div className="w-full max-w-3xl justify-center px-4 text-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500">
            Sensei is an innovative learning platform dedicated to nurturing
            your child&apos;s emotional and social development through engaging,
            AI-driven, gamified modules.
          </div>
        </div>
      </div>
      <ExploreCurriculum />
      <div className="mt-20 flex w-full items-center justify-center px-4 lg:px-8">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-10">
          {/* Row 1 */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="order-1 flex w-full flex-col items-center justify-center gap-2 md:order-2 md:items-start">
              <Image src={BrainIcon} alt="icon" className="h-14 w-14" />
              <div className="text-center font-['Nunito'] text-3xl font-black capitalize leading-10 text-zinc-800 md:text-left">
                Psychologist-Backed Curriculum
              </div>
              <div className="text-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500 md:text-left">
                Expert-validated, research-backed modules crafted to develop
                life skills, ethical reasoning, and emotional well-being in a
                structured, engaging way.
              </div>
            </div>
            <div className="order-2 flex w-full justify-center md:order-1">
              <div className="w-full max-w-md">
                <Image src={"/images/image1.webp"} alt="img" width={200} height={200}  className="h-auto w-full" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="order-1 flex w-full flex-col items-center justify-center gap-2 md:items-start">
              <Image src={BlockIcon} alt="icon" className="h-14 w-14" />
              <div className="text-center font-['Nunito'] text-3xl font-black capitalize leading-10 text-zinc-800 md:text-left">
                DIY Activities with Gamified Engagement
              </div>
              <div className="text-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500 md:text-left">
                Interactive (DIY), reward-driven activities transform screen
                time into engaging, hands-on experiences that foster emotional
                growth and essential life skills.
              </div>
            </div>
            <div className="order-2 flex w-full justify-center">
              <div className="w-full max-w-md">
                <Image src={"/images/image2.webp"} alt="img" width={200} height={200} className="h-auto w-full" fetchPriority="auto" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="order-1 flex w-full flex-col items-center justify-center gap-2 md:order-2 md:items-start">
              <Image src={BulbIcon} alt="icon" className="h-14 w-14" />
              <div className="text-center font-['Nunito'] text-3xl font-black capitalize leading-10 text-zinc-800 md:text-left">
                AI-Driven Personalized SEL
              </div>
              <div className="text-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500 md:text-left">
                Leverages advanced psychometric modeling to pinpoint each
                child&apos;s strengths and growth areas, delivering personalized
                activities that nurture essential SEL competencies.
              </div>
            </div>
            <div className="order-2 flex w-full justify-center md:order-1">
              <div className="w-full max-w-md">
                <Image src={"/images/image3.webp"} alt="img" width={200} height={200} className="h-auto w-full" fetchPriority="low"/>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="order-1 flex w-full flex-col items-center justify-center gap-2 md:items-start">
              <Image src={TargetIcon} alt="icon" className="h-14 w-14" />
              <div className="text-center font-['Nunito'] text-3xl font-black capitalize leading-10 text-zinc-800 md:text-left">
                Early Detection & Intervention
              </div>
              <div className="text-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500 md:text-left">
                Monthly behavioral assessments uncover hidden emotional
                challenges early, enabling timely support and personalized
                growth strategies.
              </div>
            </div>
            <div className="order-2 flex w-full justify-center">
              <div className="w-full max-w-md">
                <Image src={"/images/image4.webp"} alt="img" width={200} height={200} className="h-auto w-full" fetchPriority="low"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex w-full items-center justify-center">
        <Link href={"/login"}  className="inline-flex items-center gap-2 rounded-2xl bg-[#ff8b13] px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
          <div className="justify-center text-center font-['Nunito'] md:text-lg font-black leading-snug text-white">
            Get Started for FREE
          </div>
          <div className="relative h-8 w-8 overflow-hidden">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2326 5.90541C28.206 5.47962 28.0247 5.07822 27.723 4.77667C27.4212 4.47512 27.0196 4.2942 26.5938 4.26791C25.0551 4.17666 21.1226 4.31666 17.8588 7.58041L17.1901 8.25041H9.79384C9.56413 8.24987 9.3366 8.29489 9.1244 8.38286C8.9122 8.47083 8.71955 8.6 8.55759 8.76291L4.26384 13.0554C4.03394 13.2854 3.87266 13.5749 3.7981 13.8914C3.72353 14.2079 3.73863 14.5389 3.84169 14.8473C3.94475 15.1557 4.13171 15.4293 4.38158 15.6374C4.63146 15.8455 4.93437 15.9799 5.25634 16.0254L10.1476 16.7079L15.7926 22.3529L16.4751 27.2504C16.521 27.5722 16.6557 27.8748 16.8639 28.1243C17.0722 28.3739 17.3458 28.5605 17.6541 28.6633C17.9625 28.7661 18.2934 28.781 18.6097 28.7063C18.926 28.6316 19.2153 28.4703 19.4451 28.2404L23.7388 23.9467C23.9017 23.7847 24.0309 23.5921 24.1189 23.3799C24.2069 23.1677 24.2519 22.9401 24.2513 22.7104V15.3104L24.9201 14.6417C28.1826 11.3754 28.3238 7.44541 28.2326 5.90541ZM5.26384 14.3754C5.25042 14.3321 5.24903 14.286 5.25982 14.2419C5.27061 14.1979 5.29317 14.1576 5.32509 14.1254L9.61759 9.82291C9.66447 9.77642 9.72783 9.75035 9.79384 9.75041H15.6901L10.2338 15.2054L5.46634 14.5404C5.42031 14.5352 5.37674 14.5169 5.34083 14.4877C5.30492 14.4584 5.2782 14.4194 5.26384 14.3754ZM22.7501 22.7067C22.7498 22.7729 22.7233 22.8362 22.6763 22.8829L18.3851 27.1754C18.3525 27.2084 18.3113 27.2317 18.2662 27.2426C18.2211 27.2535 18.1739 27.2517 18.1297 27.2373C18.0856 27.2229 18.0464 27.1965 18.0164 27.1611C17.9865 27.1256 17.967 27.0825 17.9601 27.0367L17.2951 22.2667L22.7501 16.8104V22.7067ZM23.8588 13.5817L16.5001 20.9392L11.5613 16.0004L18.9201 8.64041C19.9064 7.64781 21.0936 6.87772 22.4021 6.38184C23.7105 5.88596 25.1099 5.67578 26.5063 5.76541C26.5664 5.77043 26.6226 5.79698 26.6646 5.84016C26.7067 5.88334 26.7317 5.94025 26.7351 6.00041C26.8238 7.39579 26.6132 8.79401 26.1173 10.1013C25.6215 11.4086 24.8519 12.5948 23.8601 13.5804L23.8588 13.5817ZM13.0001 23.7892C12.4601 24.9804 10.6413 27.7504 5.50009 27.7504C5.30118 27.7504 5.11042 27.6714 4.96976 27.5307C4.82911 27.3901 4.75009 27.1993 4.75009 27.0004C4.75009 21.8592 7.52009 20.0404 8.71134 19.5004C8.80097 19.4594 8.8978 19.4364 8.99631 19.4328C9.09482 19.4292 9.19308 19.445 9.28547 19.4793C9.37787 19.5137 9.46259 19.5659 9.5348 19.633C9.60702 19.7001 9.66531 19.7808 9.70634 19.8704C9.74738 19.96 9.77036 20.0569 9.77398 20.1554C9.7776 20.2539 9.76177 20.3521 9.72742 20.4445C9.69306 20.5369 9.64084 20.6217 9.57374 20.6939C9.50664 20.7661 9.42597 20.8244 9.33634 20.8654C8.46134 21.2617 6.52009 22.5554 6.27759 26.2292C9.95134 25.9867 11.2451 24.0392 11.6413 23.1704C11.6824 23.0808 11.7407 23.0001 11.8129 22.933C11.8851 22.8659 11.9698 22.8137 12.0622 22.7793C12.1546 22.745 12.2529 22.7292 12.3514 22.7328C12.4499 22.7364 12.5467 22.7594 12.6363 22.8004C12.726 22.8414 12.8066 22.8997 12.8737 22.9719C12.9408 23.0442 12.9931 23.1289 13.0274 23.2213C13.0618 23.3137 13.0776 23.4119 13.074 23.5104C13.0704 23.6089 13.0474 23.7058 13.0063 23.7954L13.0001 23.7892Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WhatIsSenseiSection;