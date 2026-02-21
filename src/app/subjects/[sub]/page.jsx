"use client";

import { useEffect, useState } from "react";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
import { SubjectSection } from "@/components/SubjectSection";
import { useRouter } from "next/navigation";
import MythFact from "@/components/MythFact";

/* =========================================================
   MAIN PAGE COMPONENT
========================================================= */

const Page = ({ params: { sub } }) => {
  const [modalContent, setModalContent] = useState(null);
  const router = useRouter();

  const subject = subjects.find(
    (s) => slug(s?.slug || s?.title) === sub
  );

  /* Store Myth Fact in localStorage */
  useEffect(() => {
    const mythFact = {
      id: "self-social-awareness-1",
      text: "Talking about emotions is for the weak.",
      answer: "myth",
    };

    localStorage.setItem(
      "myth-fact-data-self-social-awareness",
      JSON.stringify(mythFact)
    );
  }, []);

  /* Fallback UI instead of notFound (client component safe) */
  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Subject not found</p>
      </div>
    );
  }

  const openModal = (concern) => setModalContent(concern);
  const closeModal = () => setModalContent(null);

  const mythFactQuestions = [
    { text: "Talking about emotions is for the weak.", answer: "myth" },
    { text: "Communicating feelings makes you stronger.", answer: "fact" },
    { text: "SEL is for children only.", answer: "myth" },
    { text: "Adults need SEL too.", answer: "fact" },
    { text: "Ignoring emotions makes them disappear.", answer: "myth" },
    { text: "Emotions grow when ignored.", answer: "fact" },
  ];

  return (
    <div className="container mx-auto mt-6 p-2 py-10 xl:max-w-[1300px]">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#FF8B13]"
      >
        ← Back
      </button>

      <SubjectSection sub={sub} />

      {/* Emotional Wellness Cards */}
      {subject.title === "Emotional Wellness" && (
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subject.concerns.map((c, i) => (
            <EmoWellnessSubjectCard key={i} concern={c} openModal={openModal} />
          ))}
        </div>
      )}

      {/* Myth or Fact */}
      {subject.title === "Self & Social Awareness" && (
        <div className="mt-16">
          <MythFact questions={mythFactQuestions} />
        </div>
      )}

      {/* Modal */}
      {modalContent && (
        <ModalView concern={modalContent} onClose={closeModal} />
      )}
    </div>
  );
};

/* =========================================================
   CARD COMPONENT
========================================================= */

const EmoWellnessSubjectCard = ({ concern, openModal }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) setExpanded(!expanded);
    else openModal(concern);
  };

  return (
    <div className="flex flex-col rounded-xl bg-white shadow p-4">
      <h3 className="text-[#FF8B13] font-bold">{concern.title}</h3>

      <p className={`mt-2 ${!expanded && "line-clamp-4"}`}>
        {concern.description}
      </p>

      <button onClick={handleClick} className="mt-auto text-[#FF8B13]">
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

/* =========================================================
   MODAL COMPONENT
========================================================= */

const ModalView = ({ concern, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    onClick={onClose}
  >
    <div
      className="bg-white p-6 rounded-xl max-w-xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold text-[#FF8B13]">
        {concern.title}
      </h2>
      <p className="mt-4">{concern.description}</p>

      <button
        onClick={onClose}
        className="mt-6 rounded bg-[#FF8B13] px-4 py-2 text-white"
      >
        Close
      </button>
    </div>
  </div>
);

export default Page;
// "use client";
// import { useState } from "react";
// import { useEffect } from "react";
// // import Image from "next/image";

// import { subjects } from "@/utils/data";
// import { slug } from "@/utils/logic";
// import { SubjectSection } from "@/components/SubjectSection";
// import { useRouter,notFound } from "next/navigation";
// import MythFact from "@/components/MythFact";

// // import Link from "next/link";

// const Page = ({ params: { sub } }) => {
//   const [modalContent, setModalContent] = useState(null);
//   const Router = useRouter();

//   const subject = subjects.find((s) => slug(s?.slug || s?.title) === sub);
//   if (!subject) return notFound();

//   const openModal = (concern) => {
//     setModalContent(concern);
//   };

//<<<<<<< HEAD
//   const closeModal = () => {
//     setModalContent(null);
//   };
//  useEffect(() => {
//   const mythFact = {
//     id: "self-social-awareness-1",
//     text: "Talking about emotions is for the weak.",
//     answer: "myth",
//   };

//   localStorage.setItem(
//     "myth-fact-data-self-social-awareness",
//     JSON.stringify(mythFact)
//   );
// }, []);
// const mythFactQuestions = [
//   { text: "Talking about emotions is for the weak.", answer: "myth" },
//   { text: "Communicating feelings makes you stronger as you can manage what you understand.", answer: "fact" },
// =======
//   const closeModal = () => {
//     setModalContent(null);
//   };
 
// const mythFactQuestions = [
//   { text: "Talking about emotions is for the weak.", answer: "myth" },
//   { text: "Communicating feelings makes you stronger as you can manage what you understand.", answer: "fact" },
// >>>>>>> kunal

//   { text: "SEL is for children in school only.", answer: "myth" },
//   { text: "Adults need SEL too. Ever met a boss who cannot control his temper? Exactly.", answer: "fact" },

//   { text: "If you ignore your emotions, they will disappear.", answer: "myth" },
//   { text: "Emotions are like uninvited guests: The more you ignore them, the louder they get.", answer: "fact" },

//   { text: "SEL is touchy-feely stuff; real success depends on IQ.", answer: "myth" },
//   { text: "Research has shown that people with higher EQs (emotional intelligence) do better at their job and maintain better relationships than those who rely on IQ alone.", answer: "fact" },

//   { text: " Emotions have no place in the classroom or in the workspace. ", answer: "myth" },
//   { text: " Emotions show up everywhere, pretending they don’t exist just creates stress and miscommunication.", answer: "fact" },
// ];



  

//   return (
//     <div className="container mt-6 md:mt-12 mx-auto p-2 py-10 md:py-20 xl:max-w-[1300px]">
//       <button onClick={() => {Router.back()} } className="inline-flex items-center justify-start">
//         <svg
//           width="50"
//           height="25"
//           viewBox="0 0 35 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M23 11.5C23.5523 11.5 24 11.9477 24 12.5C24 13.0523 23.5523 13.5 23 13.5L23 11.5ZM0.292893 13.2071C-0.0976314 12.8166 -0.0976315 12.1834 0.292892 11.7929L6.65685 5.42893C7.04738 5.03841 7.68054 5.03841 8.07107 5.42893C8.46159 5.81946 8.46159 6.45262 8.07107 6.84315L2.41421 12.5L8.07107 18.1569C8.46159 18.5474 8.46159 19.1805 8.07107 19.5711C7.68054 19.9616 7.04738 19.9616 6.65686 19.5711L0.292893 13.2071ZM23 13.5L1 13.5L1 11.5L23 11.5L23 13.5Z"
//             fill="#FF8B13"
//           />
//         </svg>
//         <div className="justify-start font-Nunito text-lg font-normal text-[#FF8B13]">
//           Back
//         </div>
//       </button>
//      <SubjectSection sub={sub} />

// {/* Emotional Wellness Cards */}
// {subject.title === "Emotional Wellness" && (
//   <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
//     {subject.concerns.map((concern, index) => (
//       <EmoWellnessSubjectCard
//         key={index}
//         concern={concern}
//         openModal={openModal}
//       />
//     ))}
//   </div>
// )}

// {/* Myth or Fact — FULL WIDTH SECTION */}
// {subject.title === "Self & Social Awareness" && (
//   <div className="mt-16">   {/* 👈 adjust this value */}
//     <MythFact questions={mythFactQuestions} />
//   </div>
// )}




//       {/* Modal Overlay */}
//       {modalContent && (
//         <ModalView concern={modalContent} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// const EmoWellnessSubjectCard = ({ concern, openModal }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpandOrOpenModal = () => {
//     // On mobile, expand inline
//     if (window.innerWidth < 768) {
//       setExpanded(!expanded);
//     } else {
//       // On desktop, open modal
//       openModal(concern);
//     }
//   };

//   return (
//     <div className="mb-6 flex h-full min-h-[260px] w-full flex-col rounded-[20px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)]">
//       <div className="p-5">
//         <div className="mb-4 inline-flex items-center justify-center gap-2">
//           <h1 className="justify-start font-Nunito text-xl font-extrabold text-[#ff8b13] md:text-2xl">
//             {concern.title}
//           </h1>
//         </div>

//         {/* Description section - increased height with line clamp */}
//         <div className="relative mb-3">
//           <p
//             className={`text-sm text-gray-700 md:text-base ${!expanded ? "line-clamp-4" : ""}`}
//           >
//             {concern.description}
//           </p>
//           {!expanded && (
//             <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
//           )}
//         </div>
//       </div>

//       {/* Expandable content - only visible when expanded on mobile */}
//       {expanded && (
//         <div className="px-4 pb-4 md:hidden">
//           {concern.subdevision?.map((section, index) => (
//             <div key={index} className="mb-4 flex flex-col gap-2">
//               {section.title && (
//                 <p className="text-sm font-semibold md:text-base">
//                   {section.title}
//                 </p>
//               )}
//               {section.description && (
//                 <p className="font-Nunito text-sm font-medium text-neutral-400 md:text-base">
//                   {section.description}
//                 </p>
//               )}

//               {section.subpoints && (
//                 <ul className="ml-3 list-inside list-disc md:ml-5">
//                   {section.subpoints.map((point, pidx) => (
//                     <li key={pidx} className="mb-1 text-sm md:text-base">
//                       {point.title && (
//                         <span className="font-medium">{point.title}: </span>
//                       )}
//                       {point.description}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {/* Handle nested subdevision if present (like in Conduct Disorder) */}
//               {section.subdevision?.map((subsection, subidx) => (
//                 <div key={`subsection-${subidx}`} className="ml-2 mt-2">
//                   {subsection.title && (
//                     <p className="text-sm font-semibold md:text-base">
//                       {subsection.title}
//                     </p>
//                   )}
//                   {subsection.description && (
//                     <p className="font-Nunito text-sm font-medium text-neutral-400 md:text-base">
//                       {subsection.description}
//                     </p>
//                   )}

//                   {subsection.subpoints && (
//                     <ul className="ml-3 list-inside list-disc md:ml-5">
//                       {subsection.subpoints.map((subpoint, spidx) => (
//                         <li key={spidx} className="mb-1 text-sm md:text-base">
//                           {subpoint.title && (
//                             <span className="font-medium">
//                               {subpoint.title}:{" "}
//                             </span>
//                           )}
//                           {subpoint.description}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Button section - fixed at bottom */}
//       <div className="mt-auto border-t border-neutral-200 p-4">
//         <div
//           onClick={toggleExpandOrOpenModal}
//           className="flex items-center gap-2 text-sm font-medium text-[#ff8b13] hover:cursor-pointer"
//         >
//           {expanded ? "Show Less" : "Read More"}
//           <svg
//             width="21"
//             height="20"
//             viewBox="0 0 21 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
//           >
//             <path
//               d="M11.75 3.75L18 10M18 10L11.75 16.25M18 10H3"
//               stroke="#FF8B13"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AwarenessCard = ({ concern, openModal }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpandOrOpenModal = () => {
//     // On mobile, expand inline
//     if (window.innerWidth < 768) {
//       setExpanded(!expanded);
//     } else {
//       // On desktop, open modal
//       openModal(concern);
//     }
//   };

//   return (
//     <div className="mb-6 flex h-full min-h-[260px] w-full flex-col rounded-[20px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)]">
//       {/* Header section - increased height */}
//       <div className="p-5">
//         <div className="mb-4 inline-flex items-center justify-center gap-2">
//           {/* Icon could be added here if you have icons for each concern */}
//           <h1 className="justify-start font-Nunito text-xl font-extrabold text-[#ff8b13] md:text-2xl">
//             {concern.title}
//           </h1>
//         </div>

//         {/* Description section - increased height */}
//         <div className="relative mb-3 h-28 overflow-hidden">
//           <p className="text-sm text-gray-700 md:text-base">
//             {/* Using the first subpoint description as a summary for the card */}
//             {concern.subdevision?.[0]?.subpoints?.[0]?.description || ""}
//           </p>
//           {!expanded && (
//             <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
//           )}
//         </div>
//       </div>

//       {/* Expandable content - only visible when expanded on mobile */}
//       {expanded && (
//         <div className="px-4 pb-4 md:hidden">
//           {concern.subdevision?.map((section, index) => (
//             <div key={index} className="mb-4 flex flex-col gap-2">
//               {section.title && (
//                 <p className="text-sm font-semibold md:text-base">
//                   {section.title}
//                 </p>
//               )}
//               {section.description && (
//                 <p className="font-Nunito text-sm font-medium text-neutral-400 md:text-base">
//                   {section.description}
//                 </p>
//               )}
//               <ul className="ml-3 list-inside list-disc md:ml-5">
//                 {section.subpoints?.map((point, pointIndex) => (
//                   <li key={pointIndex} className="mb-1 text-sm md:text-base">
//                     {point.title && (
//                       <span className="font-medium">{point.title}: </span>
//                     )}
//                     {point.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Button section - fixed at bottom */}
//       <div className="mt-auto border-t border-neutral-200 p-4">
//         <div
//           onClick={toggleExpandOrOpenModal}
//           className="flex items-center gap-2 text-sm font-medium text-[#ff8b13] hover:cursor-pointer"
//         >
//           {expanded ? "Show Less" : "Read More"}
//           <svg
//             width="21"
//             height="20"
//             viewBox="0 0 21 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
//           >
//             <path
//               d="M11.75 3.75L18 10M18 10L11.75 16.25M18 10H3"
//               stroke="#FF8B13"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ModalView = ({ concern, onClose }) => {
//   return (
//     <>
//       {/* Modal Backdrop */}
//       <div
//         className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4"
//         onClick={onClose}
//       >
//         {/* Modal Content */}
//         <div
//           className="mt-32 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[20px] bg-white"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Modal Header */}
//           <div className="border-b border-neutral-200 p-5">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 {/* <Image src={concern.icon} alt={concern.title} width={40} height={40} className="w-10 h-10" /> */}
//                 <h2 className="font-Nunito text-2xl font-extrabold text-[#ff8b13]">
//                   {concern.title}
//                 </h2>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Modal Body */}
//           <div className="p-5">
//             <div className="mb-6">
//               <p className="mb-4 text-base text-gray-700">
//                 {concern.description}
//               </p>
//             </div>

//             {concern.subdevision?.map((s, index) => (
//               <div key={index} className="mb-6">
//                 {s.title && (
//                   <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
//                 )}
//                 {s.description && (
//                   <p className="mb-3 font-Nunito text-base font-medium text-neutral-600">
//                     {s.description}
//                   </p>
//                 )}
//                 <ul className="ml-5 list-disc space-y-2">
//                   {s.subpoints?.map((p, index) => (
//                     <li key={index} className="text-base">
//                       {p.title && (
//                         <span className="font-medium">{p.title}: </span>
//                       )}
//                       {p.description}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Modal Footer */}
//           <div className="flex justify-end border-t border-neutral-200 p-5">
//             <button
//               onClick={onClose}
//               className="rounded-md bg-[#ff8b13] px-4 py-2 text-white transition-colors hover:bg-[#e07b0f]"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;

// const Description = ({ className, concern }) => {
//   // console.log(concern);
//   return (
//     <div
//       className={
//         className +
//         " scrollbar h5 flex max-h-[658px] grow flex-col gap-3 overflow-y-scroll rounded-[10px] bg-white p-5 text-primary shadow-cs sm:max-h-[408px] sm:w-1/2 lg:p-10"
//       }
//     >
//       {/* <p>{concern?.title}</p> */}
//       <p>{concern?.description}</p>
//       {concern?.subdevision?.map((s, index) => (
//         <div key={index} className="flex-flex-col gap-2">
//           {s?.title && <p>{s?.title}: </p>}
//           <p>{s?.description}</p>
//           <ul className="llist-inside ml-3 list-disc md:ml-5">
//             {s?.subpoints?.map((p, index) => (
//               <li key={index} className="h5">
//                 {p?.title && p?.title + ": "}
//                 {p?.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       {/* <p>Preventive Measures for {concern?.title} :</p>
//     <ul className="llist-inside ml-3 flex list-disc flex-col gap-1 md:ml-5">
//       {concern?.preventions.map((s, index) => (
//         <li key={index} className="h5">
//           {s?.title && <h6>{s?.title} :</h6>}
//           <h6>{s?.description}</h6>
//         </li>
//       ))}
//     </ul>
//     {concern?.conclusion && (
//       <>
//         <p>Conclusion :</p>
//         <p>{concern?.conclusion}</p>
//       </>
//     )} */}
//     </div>
//   );
// };

//---------------------------------------------------------kuanl code------------------------
// "use client";

// import { useEffect, useState } from "react";
// import { subjects } from "@/utils/data";
// import { slug } from "@/utils/logic";
// import { SubjectSection } from "@/components/SubjectSection";
// import { useRouter } from "next/navigation";
// import MythFact from "@/components/MythFact";

// const Page = ({ params: { sub } }) => {
//   const [modalContent, setModalContent] = useState(null);
//   const router = useRouter();

//   const subject = subjects.find(
//     (s) => slug(s?.slug || s?.title) === sub
//   );

//   useEffect(() => {
//     const mythFact = {
//       id: "self-social-awareness-1",
//       text: "Talking about emotions is for the weak.",
//       answer: "myth",
//     };

//     localStorage.setItem(
//       "myth-fact-data-self-social-awareness",
//       JSON.stringify(mythFact)
//     );
//   }, []);

//   // 👉 Instead of notFound() (server-only), render fallback UI
//   if (!subject) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500">Subject not found</p>
//       </div>
//     );
//   }

//   const openModal = (concern) => setModalContent(concern);
//   const closeModal = () => setModalContent(null);

//   const mythFactQuestions = [
//     { text: "Talking about emotions is for the weak.", answer: "myth" },
//     { text: "Communicating feelings makes you stronger.", answer: "fact" },
//     { text: "SEL is for children only.", answer: "myth" },
//     { text: "Adults need SEL too.", answer: "fact" },
//     { text: "Ignoring emotions makes them disappear.", answer: "myth" },
//     { text: "Emotions grow when ignored.", answer: "fact" },
//   ];

//   return (
//     <div className="container mx-auto mt-6 p-2 py-10 xl:max-w-[1300px]">
//       <button
//         onClick={() => router.back()}
//         className="flex items-center gap-2 text-[#FF8B13]"
//       >
//         ← Back
//       </button>

//       <SubjectSection sub={sub} />

//       {subject.title === "Emotional Wellness" && (
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {subject.concerns.map((c, i) => (
//             <EmoWellnessSubjectCard key={i} concern={c} openModal={openModal} />
//           ))}
//         </div>
//       )}

//       {subject.title === "Self & Social Awareness" && (
//         <div className="mt-16">
//           <MythFact questions={mythFactQuestions} />
//         </div>
//       )}

//       {modalContent && (
//         <ModalView concern={modalContent} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// const EmoWellnessSubjectCard = ({ concern, openModal }) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleClick = () => {
//     if (window.innerWidth < 768) setExpanded(!expanded);
//     else openModal(concern);
//   };

//   return (
//     <div className="flex flex-col rounded-xl bg-white shadow p-4">
//       <h3 className="text-[#FF8B13] font-bold">{concern.title}</h3>

//       <p className={`mt-2 ${!expanded && "line-clamp-4"}`}>
//         {concern.description}
//       </p>

//       <button onClick={handleClick} className="mt-auto text-[#FF8B13]">
//         {expanded ? "Show Less" : "Read More"}
//       </button>
//     </div>
//   );
// };

// const ModalView = ({ concern, onClose }) => (
//   <div
//     className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
//     onClick={onClose}
//   >
//     <div
//       className="bg-white p-6 rounded-xl max-w-xl w-full"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <h2 className="text-xl font-bold text-[#FF8B13]">
//         {concern.title}
//       </h2>
//       <p className="mt-4">{concern.description}</p>

//       <button
//         onClick={onClose}
//         className="mt-6 rounded bg-[#FF8B13] px-4 py-2 text-white"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// export default Page;
//--------------------------------------kunal code ends here ----------------------------------------------
// "use client";

// import { useEffect, useState } from "react";
// import { subjects } from "@/utils/data";
// import { slug } from "@/utils/logic";
// import { SubjectSection } from "@/components/SubjectSection";
// import { useRouter, notFound } from "next/navigation";
// import MythFact from "@/components/MythFact";

// const Page = ({ params: { sub } }) => {
//   const [modalContent, setModalContent] = useState(null);
//   const router = useRouter();

//   const subject = subjects.find(
//     (s) => slug(s?.slug || s?.title) === sub
//   );

//   useEffect(() => {
//     const mythFact = {
//       id: "self-social-awareness-1",
//       text: "Talking about emotions is for the weak.",
//       answer: "myth",
//     };

//     localStorage.setItem(
//       "myth-fact-data-self-social-awareness",
//       JSON.stringify(mythFact)
//     );
//   }, []);

//   if (!subject) return notFound();

//   const openModal = (concern) => setModalContent(concern);
//   const closeModal = () => setModalContent(null);

//   const mythFactQuestions = [
//     { text: "Talking about emotions is for the weak.", answer: "myth" },
//     { text: "Communicating feelings makes you stronger.", answer: "fact" },
//     { text: "SEL is for children only.", answer: "myth" },
//     { text: "Adults need SEL too.", answer: "fact" },
//     { text: "Ignoring emotions makes them disappear.", answer: "myth" },
//     { text: "Emotions grow when ignored.", answer: "fact" },
//   ];

//   return (
//     <div className="container mx-auto mt-6 p-2 py-10 xl:max-w-[1300px]">
//       <button
//         onClick={() => router.back()}
//         className="flex items-center gap-2 text-[#FF8B13]"
//       >
//         ← Back
//       </button>

//       <SubjectSection sub={sub} />

//       {subject.title === "Emotional Wellness" && (
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {subject.concerns.map((c, i) => (
//             <EmoWellnessSubjectCard key={i} concern={c} openModal={openModal} />
//           ))}
//         </div>
//       )}

//       {subject.title === "Self & Social Awareness" && (
//         <div className="mt-16">
//           <MythFact questions={mythFactQuestions} />
//         </div>
//       )}

//       {modalContent && (
//         <ModalView concern={modalContent} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// const EmoWellnessSubjectCard = ({ concern, openModal }) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleClick = () => {
//     if (window.innerWidth < 768) setExpanded(!expanded);
//     else openModal(concern);
//   };

//   return (
//     <div className="flex flex-col rounded-xl bg-white shadow p-4">
//       <h3 className="text-[#FF8B13] font-bold">{concern.title}</h3>

//       <p className={`mt-2 ${!expanded && "line-clamp-4"}`}>
//         {concern.description}
//       </p>

//       <button onClick={handleClick} className="mt-auto text-[#FF8B13]">
//         {expanded ? "Show Less" : "Read More"}
//       </button>
//     </div>
//   );
// };

// const ModalView = ({ concern, onClose }) => (
//   <div
//     className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
//     onClick={onClose}
//   >
//     <div
//       className="bg-white p-6 rounded-xl max-w-xl w-full"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <h2 className="text-xl font-bold text-[#FF8B13]">
//         {concern.title}
//       </h2>
//       <p className="mt-4">{concern.description}</p>

//       <button
//         onClick={onClose}
//         className="mt-6 rounded bg-[#FF8B13] px-4 py-2 text-white"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// export default Page;
