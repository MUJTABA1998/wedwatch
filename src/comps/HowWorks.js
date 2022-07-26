import React from "react";
import Video from "../asset/video.png";
import Play from "../asset/playBtn.png";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Wedding Details",
    details:
      "Enter details about your wedding so that we can only show you photographers that are available, in budget, and near your wedding venue.",
  },
  {
    id: 2,
    title: "Pick Photos",
    details:
      "This is where the magic happens. You’ll pick your favorite real wedding photos from the photographers that meet your criteria.",
  },
  {
    id: 3,
    title: "View Matches",
    details:
      "View your top 5 matches and with one click go to their website, Instagram, or email. Contact them to get the conversation started.",
  },
  {
    id: 4,
    title: "Book Your Favorite",
    details:
      "Start a conversation, or let your matches contact you. If you love your matches (we think you will), book the one you connect with!",
  },
];

const HowWorks = () => {
  return (
    <div className="py-10 h-auto bg-work">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  content-center">
          <div className="text-center relative">
            <div className="relative max-w-max mx-auto">
              <img src={Video} alt="video" />
              <div className="absolute inset-0 m-auto max-w-[100px] sm:max-w-max max-h-max">
                <img className="w-full" src={Play} alt="play" />
              </div>
            </div>
            <h5 className="mt-5">Watch the process</h5>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {cards.map((c) => (
                <div key={c.id} className="flex flex-col items-start">
                  <h1 className="text-gray-300 text-3xl lg:text-6xl font-secondary-font">{`0${c.id}.`}</h1>
                  <h3 className="text-gray-800 font-extrabold text-xl">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 mt-5">{c.details}</p>
                </div>
              ))}
            </div>
            <Link
              to="#"
              className="text-white rounded-md px-4 py-3 bg-primary capitalize"
            >
              take the free quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
