import React from "react";
import { Link } from "react-router-dom";

const Photographer = () => {
  return (
    <div className="h-[400px] lg:h-[845px] w-full bg-work ">
      <div className="h-full w-full bg-transparent lg:bg-photo-bg  bg-no-repeat bg-contain bg-center flex justify-center items-center text-center">
        <div className="main-container">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-xl lg:text-3xl text-secondary font-black lg:w-[50%] w-full">
              Are you a photographer with lots of happy couples?
            </h1>
            <p className="text-xs lg:text-lg lg:w-[50%] w-full">
              Request to join WedMatch. The best way to book weddings 100% risk
              free! No monthly fees or pay per leads – ever.
            </p>
            <Link
              to="#"
              className="text-white rounded-md px-4 py-3 bg-primary capitalize w-[180px]"
            >
              request to join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photographer;
