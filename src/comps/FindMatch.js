import React from "react";
import Find from "../asset/find.png";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Pre-vetted for amazing reviews",
    icon: "/Images/check.png",
  },
  {
    id: 2,
    title: "Websites analyzed for consistency of work",
    icon: "/Images/check.png",
  },
  {
    id: 3,
    title: "Photographers of all prices and styles",
    icon: "/Images/check.png",
  },
  {
    id: 4,
    title: "100+ Wedding photographers per state",
    icon: "/Images/check.png",
  },
];

const FindMatch = () => {
  return (
    <div className="h-auto py-10 bg-work">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 content-center">
          <div className="relative max-w-max mx-auto">
            <img src={Find} alt="find" />
          </div>
          <div className="flex h-full flex-col justify-center items-start gap-10 max-w-max mx-auto">
            <h1 className="text-center text-2xl text-secondary">
              Meet a few photographers
            </h1>
            <div className="flex flex-col gap-y-10">
              {properties.map((p) => (
                <div className="flex justify-start gap-5">
                  <div>
                    <img src={p.icon} alt="icon" />
                  </div>
                  <h3>{p.title}</h3>
                </div>
              ))}
            </div>
            <Link
              to="#"
              className="text-white rounded-md px-4 py-3 bg-primary capitalize mx-auto"
            >
              Find a Match
            </Link>
            <Link to="#" className="mx-auto">
              Are you a photographer?{" "}
              <span className="text-primary">Request To Join</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMatch;
