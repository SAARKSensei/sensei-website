import Image from "next/image";
// import Star from "@/assets/starFilled.svg";
import Cake from "@/assets/scrollAssets/bday-cake.svg";

export const ScrollCard = ({ svgUrl,title,activityTime }) => {
  // console.log(svgUrl, title, activityTime);
  return (
    <div className="my-6 mx-6 self-stretch inline-flex flex-col">
      <Image src={svgUrl} alt="book-icon" />
      <div className="self-stretch p-3.5 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-1.5">
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-1.5">
            <div className="w-4 h-4 relative overflow-hidden">
                <Cake className="w-4 h-4" />
              </div>
            <div className="justify-start text-neutral-500 text-xs font-extrabold font-['Nunito']">5-7 years</div>
        </div>
        {/* <div className="flex justify-start items-center gap-1">
            { [...Array(5)].map((_, index) => (
                index < 4 ? (
                    <Star key={index} className="w-4 h-4" />
                ) : (
                    <Star key={index} className="w-4 h-4 saturate-0" />
                )
            ))}
        </div> */}
    </div>
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="justify-start text-neutral-900 text-sm font-extrabold font-['Nunito']">{ title }</div>
        <div className="text-right justify-start text-amber-500 text-xs font-extrabold font-['Nunito'] uppercase leading-none">{ activityTime }</div>
    </div>
</div>
      
    </div>
  );
};

export const ScrollButton = ({svgUrl, title, activityTime }) => {
  return (
    <div className="w-[340px] h-fit max-w-[350px] max-h-[104px]  mx-3 w-90  px-6 py-4 bg-white rounded-[58px] outline outline-[3px] outline-offset-[-3px] outline-amber-500 backdrop-blur-[1px] inline-flex justify-start items-center gap-3">
      <Image src={ svgUrl } alt="book" className="w-12 h-12" />
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
        <div className="inline-flex justify-center items-center gap-1">
          <div className="w-6 h-6 p-px rounded-[3px] flex justify-center items-center gap-1 overflow-hidden">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M9 4.10417V9.4375H13M17 9.4375C17 13.8558 13.4183 17.4375 9 17.4375C4.58172 17.4375 1 13.8558 1 9.4375C1 5.01922 4.58172 1.4375 9 1.4375C13.4183 1.4375 17 5.01922 17 9.4375Z"
                stroke="#FF8B13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="justify-start text-amber-500 text-md font-extrabold font-['Nunito'] leading-none">
            {activityTime}
          </div>
        </div>
        <div className="justify-start text-slate-700 text-md font-extrabold font-['Nunito'] capitalize leading-snug text-wrap">
          {title}
        </div>
      </div>
    </div>
  );
};
