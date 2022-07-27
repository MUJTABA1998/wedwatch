import React from "react";

const Work = () => {
  return (
    <div className="h-auto bg-work mt-10 py-7  mx-w-[459px] w-full">
      <div className="main-container">
        <div className="flex justify-center items-center flex-col text-center gap-6">
          <h2 className="text-primary text-sm md:text-base font-extrabold uppercase">
            how it works
          </h2>
          <h1 className=" text-xl lg:text-4xl lg:w-[50%] font-black leading-relaxed text-secondary">
            Stress-Free Photographer Research
          </h1>
          <p className="text-secondary w-full lg:w-[50%] text-sm md:text-base font-normal">
            Simplify your search – 100 top rated local wedding photographers
            narrowed down to your top 5 in less than 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
