"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { Testimonials } from "@/utils/data";
import useEmblaCarousel from 'embla-carousel-react';
// import ParentPlaceHolder from "@/assets/in-Use/parentPlaceHolder.svg?url";


// TestimonialCard Component
const TestimonialCard = ({ content, name, title, img, identity }) => {
  return (
    <div className="mx-auto w-full lg:h-[350px] h-[450px] rounded-2xl bg-white py-6 px-4 md:p-10 shadow-md">
      <div className="relative">
        <div className="absolute -top-8 md:-top-10 right-10 md:left-10 size-8 md:size-12">
          <svg
            width="50"
            height="39"
            viewBox="0 0 60 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.09 45.6615C13.6528 47.5282 12.072 48.6051 10.3474 48.8923C8.76655 49.1795 7.32941 48.8923 6.03599 48.0308C4.88628 47.1692 4.23956 45.8769 4.09585 44.1539C3.95213 42.4308 4.6707 40.5641 6.25156 38.5539C8.6947 35.5385 10.3474 32.4513 11.2097 29.2923C12.2157 25.9898 12.7187 23.0462 12.7187 20.4615L13.581 25.4154C9.55698 25.4154 6.25156 24.2667 3.66471 21.9692C1.22157 19.6718 0 16.5846 0 12.7077C0 8.97436 1.14971 5.95898 3.44914 3.66154C5.74856 1.22052 8.83841 0 12.7187 0C16.599 0 19.6888 1.3641 21.9882 4.09231C24.4314 6.67692 25.6529 10.5538 25.6529 15.7231C25.6529 18.7385 25.2937 21.9692 24.5751 25.4154C24.0002 28.718 22.9942 32.0923 21.5571 35.5385C20.12 38.9846 17.9642 42.359 15.09 45.6615ZM49.437 45.6615C47.9999 47.5282 46.419 48.6051 44.6945 48.8923C43.1136 49.1795 41.6765 48.8923 40.383 48.0308C39.2333 47.1692 38.5866 45.8769 38.4429 44.1539C38.2992 42.4308 39.0178 40.5641 40.5986 38.5539C43.0417 35.5385 44.6945 32.4513 45.5567 29.2923C46.5627 25.9898 47.0657 23.0462 47.0657 20.4615L47.928 25.4154C43.904 25.4154 40.5986 24.2667 38.0118 21.9692C35.5686 19.6718 34.3471 16.5846 34.3471 12.7077C34.3471 8.97436 35.4968 5.95898 37.7962 3.66154C40.0956 1.22052 43.1855 0 47.0657 0C50.946 0 54.0359 1.3641 56.3353 4.09231C58.7784 6.67692 60 10.5538 60 15.7231C60 18.7385 59.6407 21.9692 58.9221 25.4154C58.3473 28.718 57.3413 32.0923 55.9041 35.5385C54.467 38.9846 52.3113 42.359 49.437 45.6615Z"
              fill="url(#paint0_linear_749_4896)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_749_4896"
                x1="7.9125"
                y1="9.42308"
                x2="57.3265"
                y2="9.71887"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8BF3B" />
                <stop offset="0.305" stopColor="#FF8B13" />
                <stop offset="1" stopColor="#EF5F3D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* changed col span to enlarge text */}
      <div className="my-4 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 h-full">   
        {/* <div className="md:col-span-2 h-full min-h-32">
          <div className="h-full w-full overflow-hidden rounded-xl bg-zinc-200">
            {(
              <iframe
                src={videoSrc}
                autoPlay
                loop
                muted
                className="h-full w-full object-cover min-h-32"
              />
            )}
          </div>
        </div> */}

        <div className="flex flex-col justify-between md:col-span-3 h-full">
          <div className="mb-4 font-['Nunito'] text-base md:text-lg font-bold leading-relaxed text-neutral-900 line-clamp-6">
            {content}
          </div>

          <div className="mt-auto flex items-center gap-3 md:gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-amber-500">
                <Image
                  src={img}
                  alt={name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
            </div>

            <div>
              <div className="font-Nunito text-base md:text-lg font-bold text-slate-700">
                {identity}
              </div>
              <div className="font-Nunito text-xs md:text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  // To ensure a true infinite loop, create many duplicates
  const multipleTestimonials = [];
  
  // Add multiple copies of the testimonials to ensure smooth looping
  for (let i = 0; i < 5; i++) {
    multipleTestimonials.push(...Testimonials);
  }
  
  // Set up Embla Carousel with options
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: 'keepSnaps',
    dragFree: false,
    watchDrag: true,
  });

  // Handle selection changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Handle prev/next navigation
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Set up event listeners on mount
  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    // Reposition to middle of duplicate array to allow many prev/next actions
    emblaApi.scrollTo(Testimonials.length * 2);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Set up navigation buttons
  useEffect(() => {
    if (!emblaApi || !prevRef.current || !nextRef.current) return;

    const prevButton = prevRef.current;
    const nextButton = nextRef.current;

    prevButton.addEventListener('click', scrollPrev);
    nextButton.addEventListener('click', scrollNext);

    return () => {
      prevButton.removeEventListener('click', scrollPrev);
      nextButton.removeEventListener('click', scrollNext);
    };
  }, [emblaApi, scrollPrev, scrollNext]);

  return (
    <section className="py-8 flex flex-col items-center justify-center max-w-screen">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="font-['Nunito'] text-3xl md:text-4xl font-black capitalize text-[#2c3d68]">
          What Parents Say
        </h2>
      </div>

      <div className="p-4 my-4 relative w-full md:mx-auto">
        {/* Embla Carousel */}
        <div ref={emblaRef}>
          <div className="flex">
            {multipleTestimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${index}`}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-2 md:px-4 transition-all duration-300"
              >
                <TestimonialCard
                  content={testimonial.description}
                  name={testimonial.user}
                  identity={testimonial.identity}
                  title={testimonial.name}
                  img={testimonial.img}
                  // videoSrc={testimonial.videoSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          ref={prevRef}
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
          aria-label="Previous slide"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.25"
              cx="31"
              cy="31"
              r="31"
              transform="matrix(-1 0 0 1 62 0)"
              fill="#FF8B13"
            />
            <path
              d="M35.6793 43.2832L23.3962 31.0002L35.6793 18.7172"
              stroke="#FF8B13"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
          aria-label="Next slide"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.25" cx="31" cy="31" r="31" fill="#FF8B13" />
            <path
              d="M26.3207 43.2832L38.6038 31.0002L26.3207 18.7172"
              stroke="#FF8B13"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Custom CSS for Embla Carousel */}
      <style jsx global>{`
        .embla {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          position: relative;
          flex: 0 0 100%;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        .embla__slide.is-selected {
          z-index: 1;
        }
        .embla__slide:not(.is-selected) {
          opacity: 0.5;
          transform: scale(0.9);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;