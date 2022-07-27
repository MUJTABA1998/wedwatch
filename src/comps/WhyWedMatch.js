import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "100+ Photographers in each state",
    description:
      "We’ve pre-vetted over 100 wedding photographers in each state in every style and price range.",
    icon: "/Images/ser1.png",
  },
  {
    id: 2,
    title: "Save hours of research",
    description:
      "Our quiz narrows 100+ photographers to your top 5 in less than 10 minutes",
    icon: "/Images/ser2.png",
  },
  {
    id: 3,
    title: "100% Free forever",
    description:
      "WedMatch is always free for couples to use, and free for photographers to join",
    icon: "/Images/ser3.png",
  },
];

const WhyWedMatch = () => {
  return (
    <div className="h-auto py-10">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center self-start text-center gap-y-20">
          <h1 className="font-secondary-font text-secondary text-[40px] capitalize">
            why try wedMatch?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-10 lg:gap-20">
            {services.map((s) => (
              <div className="flex flex-col justify-start items-center gap-5 text-center">
                <div>
                  <img
                    src={s.icon}
                    alt="icon"
                    className=" object-contain w-[84px] h-[74px] hover:scale-105 transition-all duration-100 ease-in-out"
                  />
                </div>
                <h1 className="text-[25px] text-secondary font-secondary-font">
                  {s.title}
                </h1>
                <p className="text-secondary text-base">{s.description}</p>
              </div>
            ))}
          </div>
          <Link
            to="#"
            className="text-white rounded-md px-4 py-3 bg-primary capitalize hover:bg-pr-s transition-all duration-200 ease-in-out"
          >
            take the free quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyWedMatch;
