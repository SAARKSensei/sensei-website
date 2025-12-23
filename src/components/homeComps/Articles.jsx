"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Articles } from "@/utils/data";
import Link from "next/link";

// import ParentPlaceHolder from "@/assets/parentPlaceHolder.svg?url";


export const ArticlesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Calculate visible items based on screen width
  const [visibleItems, setVisibleItems] = useState(1);
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
        setShowNavigation(true);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
        setShowNavigation(true);
      } else {
        // For large screens, decide based on number of articles
        const itemsToShow = 4;
        setVisibleItems(itemsToShow);
        
        // Only show navigation if we can't fit all items
        setShowNavigation(Articles.length > itemsToShow);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < Articles.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      // Card width + gap is dynamic based on screen size
      const cardWidth = carouselRef.current.querySelector(".article-card")?.offsetWidth || 300;
      const scrollPosition = currentIndex * (cardWidth + 16); // 16px is the gap
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="flex w-full flex-col items-center justify-start gap-8 mb-8 md:mb-16">
      <div className="justify-center self-stretch text-center font-Nunito text-2xl md:text-4xl font-black capitalize leading-tight md:leading-10 text-[#2c3d68]">
        For Principal, Educator & Parent
      </div>
      
      {/* Articles container */}
      <div className="relative w-full mt-4 px-4 md:px-8">
        {/* For smaller screens - carousel */}
        {showNavigation ? (
          <div 
            ref={carouselRef}
            className="flex w-full items-center justify-start gap-4 overflow-x-auto px-1 pb-4 scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory'}}
          >
            {Articles.map((article, index) => (
              <ArticleCard 
                key={index} 
                title={article.title} 
                description={article.description} 
                imageSrc = {article.imageSrc}
                sourceLink = {article.sourceLink}
                source = {article.source}
                iconSrc = {article.iconSrc}
              />
            ))}
          </div>
        ) : (
          /* For larger screens - centered grid */
          <div className="flex flex-wrap items-center justify-center gap-8">
            {Articles.map((article, index) => (
              <ArticleCard 
                key={index} 
                title={article.title} 
                description={article.description} 
                imageSrc = {article.imageSrc}
                sourceLink = {article.sourceLink}
                source = {article.source}
                iconSrc = {article.iconSrc}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Navigation Controls - only show when needed */}
      {showNavigation && (
        <div className="mt-8 flex items-center justify-center gap-8">
          <button
            ref={prevRef}
            onClick={prevSlide}
            className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            }`}
            aria-label="Previous slide"
            disabled={currentIndex === 0}
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
            onClick={nextSlide}
            className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50 ${
              currentIndex >= Articles.length - visibleItems ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            }`}
            aria-label="Next slide"
            disabled={currentIndex >= Articles.length - visibleItems}
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
      )}
    </div>
  );
};

const ArticleCard = ({ title, description,imageSrc,sourceLink,source, iconSrc }) => {
  return (
    <div className="article-card inline-flex w-full xs:w-64 sm:w-72 md:w-80 flex-col items-start justify-center gap-3 overflow-hidden rounded-[16px] bg-white p-3 md:p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] flex-shrink-0 scroll-snap-align-start">
      <Image
        className="h-40 md:h-48 w-full object-cover rounded-xl"
        src={imageSrc}
        alt="Article"
        width={358}
        height={238}
      />
      <div className="flex h-full flex-col items-start justify-start gap-1 md:gap-2 self-stretch">
        <div className="justify-start self-stretch font-Nunito text-sm md:text-lg font-extrabold text-[#ff8b13]">
          Education News
        </div>
        <div className="justify-start self-stretch font-Nunito text-xl md:text-2xl font-extrabold text-neutral-900">
          {title}
          <div className="h-full justify-start self-stretch font-Nunito text-sm md:text-base font-medium text-neutral-400 line-clamp-3">
            {description}
          </div>
        </div>
        <div className="mt-1 md:mt-2 inline-flex items-center justify-start gap-3 md:gap-4">
          <Image
            className="h-8 w-8 md:h-9 md:w-9 rounded-[30px]"
            src={iconSrc}
            alt="Author"
            width={36}
            height={36}
          />
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="justify-start font-Nunito text-sm md:text-base font-bold text-slate-700">
              {source}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-t border-neutral-200 py-1 md:py-2">
        <div className="inline-flex flex-col items-start justify-center gap-1 md:gap-2 overflow-hidden rounded-lg px-1">
          <Link href={sourceLink} className="inline-flex items-center justify-center gap-1 md:gap-2.5 self-stretch" target="_blank">
            <div className="justify-center text-center font-Nunito text-sm md:text-base font-bold leading-normal text-[#ff8b13]">
              Learn more
            </div>
            <div className="relative h-4 w-4 md:h-5 md:w-5 overflow-hidden">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 4.00586L17.5 10.2559M17.5 10.2559L11.25 16.5059M17.5 10.2559H2.5"
                  stroke="#FF8B13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-start gap-2 md:gap-4">
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-[3px] py-0.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.21721 9.24703C4.83295 8.60993 4.096 8.17894 3.25 8.17894C2.00736 8.17894 1 9.10881 1 10.2559C1 11.4029 2.00736 12.3328 3.25 12.3328C4.096 12.3328 4.83295 11.9018 5.21721 11.2647M5.21721 9.24703C5.39737 9.54573 5.5 9.88973 5.5 10.2559C5.5 10.622 5.39737 10.966 5.21721 11.2647M5.21721 9.24703L14.7828 4.34161M5.21721 11.2647L14.7828 16.1701M14.7828 16.1701C14.6026 16.4688 14.5 16.8128 14.5 17.1789C14.5 18.326 15.5074 19.2559 16.75 19.2559C17.9926 19.2559 19 18.326 19 17.1789C19 16.0319 17.9926 15.102 16.75 15.102C15.904 15.102 15.1671 15.533 14.7828 16.1701ZM14.7828 4.34161C15.1671 4.97871 15.904 5.40971 16.75 5.40971C17.9926 5.40971 19 4.47984 19 3.33278C19 2.18573 17.9926 1.25586 16.75 1.25586C15.5074 1.25586 14.5 2.18573 14.5 3.33278C14.5 3.69891 14.6026 4.04291 14.7828 4.34161Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-[5px] py-[3px]">
            <svg
              width="16"
              height="18"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5933 1.57827C15.6939 1.706 16.5 2.65486 16.5 3.76285V19.2559L9 15.5059L1.5 19.2559V3.76285C1.5 2.65486 2.30608 1.706 3.40668 1.57827C5.24156 1.36532 7.108 1.25586 9 1.25586C10.892 1.25586 12.7584 1.36533 14.5933 1.57827Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};