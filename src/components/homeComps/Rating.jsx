const RatingInfo = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="my-4 grid max-w-screen-xl grid-cols-2 gap-4 px-4 md:my-8 md:grid-cols-4 md:gap-6">
        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-[10px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] md:p-6">
          <div className="font-['Nunito'] text-2xl font-black text-[#ff8b13] md:text-3xl">
            2000+
          </div>
          <div className="md:text-md font-['Nunito'] text-sm font-semibold text-stone-500">
            Users
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-[10px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] md:p-6">
          <div className="font-['Nunito'] text-xl font-black text-[#ff8b13] md:text-2xl">
            5-10 Years
          </div>
          <div className="md:text-md font-['Nunito'] text-sm font-semibold text-stone-500">
            Age Group
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-[10px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] md:p-6">
          <div className="font-['Nunito'] text-2xl font-black text-[#ff8b13] md:text-3xl">
            700+
          </div>
          <div className="md:text-md font-['Nunito'] text-sm font-semibold text-stone-500">
            DIY Activities
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-[10px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] md:p-6">
          <div className="flex items-center justify-between">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                width="16"
                height="16"
                className="md:h-5 md:w-5"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 5 (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0933 1.4267C10.6138 0.175476 12.3862 0.175475 12.9067 1.4267L15.3233 7.23707L21.5961 7.73995C22.9469 7.84824 23.4946 9.53399 22.4655 10.4156L17.6863 14.5095L19.1464 20.6306C19.4608 21.9488 18.0268 22.9906 16.8704 22.2843L11.5 19.0041L6.12963 22.2843C4.97315 22.9906 3.53917 21.9488 3.8536 20.6306L5.31372 14.5095L0.534527 10.4156C-0.494639 9.53399 0.0530867 7.84825 1.40389 7.73995L7.67667 7.23707L10.0933 1.4267Z"
                  fill="url(#paint0_linear_494_576)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_494_576"
                    x1="3.03312"
                    y1="4.72368"
                    x2="21.9753"
                    y2="4.82038"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F8BF3B" />
                    <stop offset="0.305" stopColor="#FF8B13" />
                    <stop offset="1" stopColor="#EF5F3D" />
                  </linearGradient>
                </defs>
              </svg>
            ))}
            <svg
              width="16"
              height="16"
              className="md:h-5 md:w-5"
              viewBox="0 0 23 23"
              fill="grey"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 5 (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0933 1.4267C10.6138 0.175476 12.3862 0.175475 12.9067 1.4267L15.3233 7.23707L21.5961 7.73995C22.9469 7.84824 23.4946 9.53399 22.4655 10.4156L17.6863 14.5095L19.1464 20.6306C19.4608 21.9488 18.0268 22.9906 16.8704 22.2843L11.5 19.0041L6.12963 22.2843C4.97315 22.9906 3.53917 21.9488 3.8536 20.6306L5.31372 14.5095L0.534527 10.4156C-0.494639 9.53399 0.0530867 7.84825 1.40389 7.73995L7.67667 7.23707L10.0933 1.4267Z"
                fill="#E6E6E6"
              />
            </svg>
          </div>
          <div className="pt-2 md:text-md font-['Nunito'] text-sm font-semibold text-stone-500">
            Google Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingInfo;
