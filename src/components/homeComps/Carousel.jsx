// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { comments } from "@/utils/data";
// import arrow from "@/assets/rightArrow.svg?url";

// export const Carousel = ({ children }) => {
//   const [curr, setCurr] = useState(0);
//   const slideInterval = useRef(null);

//   const startInterval = () => {
//     slideInterval.current = setInterval(next, 5000);
//   };

//   const stopInterval = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//       slideInterval.current = null;
//     }
//   };

//   const prev = () => {
//     stopInterval();
//     setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
//     startInterval();
//   };

//   const next = () => {
//     stopInterval();
//     setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
//     startInterval();
//   };

//   useEffect(() => {
//     startInterval();
//     return stopInterval;
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       {/* Carousel Container */}
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${curr * 100}%)` }}
//         >
//           {children.map((child, index) => (
//             <div key={index} className="w-full min-w-full">
//               {child}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Navigation Controls - Positioned Below */}
//       <div className="mt-8 flex items-center justify-center gap-4">
//         <button
//           onClick={prev}
//           className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
//         >
//           <Image
//             src={arrow}
//             alt="Previous"
//             width={24}
//             height={24}
//             className="rotate-180"
//           />
//         </button>
        
//         {/* Dots Indicator */}
//         <div className="flex items-center gap-2">
//           {Array.from({ length: children.length }).map((_, i) => (
//             <div
//               key={i}
//               onClick={() => setCurr(i)}
//               className={`h-3 w-3 cursor-pointer rounded-full transition-all ${
//                 curr === i 
//                   ? "bg-primary" 
//                   : "bg-primary bg-opacity-25"
//               }`}
//             />
//           ))}
//         </div>
        
//         <button
//           onClick={next}
//           className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
//         >
//           <Image
//             src={arrow}
//             alt="Next"
//             width={24}
//             height={24}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export const TestimonialCard = ({ content, name, title, imageSrc }) => {
//   return (
//     <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-md">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
//         <div className="md:col-span-2">
//           <div className="aspect-square h-full w-full overflow-hidden rounded-xl bg-zinc-200">
//             {imageSrc && (
//               <Image
//                 src={imageSrc}
//                 alt={name}
//                 width={300}
//                 height={300}
//                 className="h-full w-full object-cover"
//               />
//             )}
//           </div>
//         </div>
        
//         <div className="flex flex-col justify-between md:col-span-3">
//           <div className="mb-4 font-['Nunito'] text-xl font-bold leading-relaxed text-neutral-900">
//             {content}
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-amber-500">
//               {imageSrc && (
//                 <Image
//                   src={imageSrc}
//                   alt={name}
//                   width={56}
//                   height={56}
//                   className="h-full w-full object-cover"
//                 />
//               )}
//             </div>
            
//             <div>
//               <div className="font-Nunito text-lg font-bold text-slate-700">
//                 {name}
//               </div>
//               <div className="font-Nunito text-sm text-neutral-500">
//                 {title}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
