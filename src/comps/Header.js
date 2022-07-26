import React from "react";
import Navbar from "./Navbar";
import Stars from "../asset/stars.png";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

const Header = () => {
  return (
    <div className="w-full h-screen bg-header bg-no-repeat bg-cover">
      <div className="w-full h-full bg-overlay bg-no-repeat bg-cover">
        <div className="main-container">
          <Navbar />
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen lg:h-[84vh]">
            <div className="flex flex-col justify-center items-start gap-5">
              <h5 className="text-gray-300 text-md font-primary">WedMatch</h5>
              <h2 className="text-white text-xl lg:text-4xl font-primary">
                Easily see which Wedding Photographer is{" "}
                <span className="underline">perfect</span> for you.
              </h2>
              <p className="text-white text-sm lg:text-xl">
                No credit card, ever. WedMatch is a 100% free tool for finding
                your perfect wedding photographer. Hundreds of top rated
                photographers narrowed down to your top 5 in fewer than 10
                minutes.
              </p>
              <div className="flex justify-around items-center gap-3">
                <img
                  src={Stars}
                  alt="rating"
                  className="w-[80px] lg:w-[150px]"
                />
                <span className="text-white">5 of 5 rating on Google.</span>
              </div>
              <Link
                to="#"
                className="text-white rounded-md px-4 py-3 bg-primary"
              >
                Take The Free Quiz
              </Link>
            </div>
            <div className=" hidden lg:flex flex-col justify-center items-center gap-20">
              <div className="bg-white pl-7 py-4 w-[170px] h-[80px] rounded-md relative">
                <div className="w-[40px] h-[40px] rounded-full bg-rectangle bg-no-repeat bg-cover absolute top-[-30%] left-[-8%] flex justify-center items-center">
                  <GiCheckMark className="text-white" />
                </div>
                <h4 className="text-gray-600">Always</h4>
                <h4 className="font-bold text-gray-800">In Budget</h4>
              </div>
              <div className="bg-white pl-7 py-4 w-[170px] h-[80px] rounded-md relative ml-[-150px]">
                <div className="w-[40px] h-[40px] rounded-full bg-rectangle bg-no-repeat bg-cover absolute top-[-30%] right-[-8%] flex justify-center items-center">
                  <GiCheckMark className="text-white" />
                </div>
                <h4 className="text-gray-600">Always</h4>
                <h4 className="font-bold text-gray-800">In Budget</h4>
              </div>
              <div className="bg-white pl-7 py-4 w-[170px] h-[80px] rounded-md relative">
                <div className="w-[40px] h-[40px] rounded-full bg-rectangle bg-no-repeat bg-cover absolute top-[-30%] left-[-8%] flex justify-center items-center">
                  <GiCheckMark className="text-white" />
                </div>
                <h4 className="text-gray-600">Always</h4>
                <h4 className="font-bold text-gray-800">In Budget</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[90px] bg-header-curve absolute bg-no-repeat bg-cover bottom-[1%]"></div>
        <div className="w-full h-[90px] bg-header-curve2 absolute bg-no-repeat bg-cover bottom-[0.5%]"></div>
        <div className="w-full h-[100px] bg-header-curve3 absolute bg-no-repeat bg-cover bottom-[-0.5%]"></div>
      </div>
    </div>
  );
};

export default Header;
