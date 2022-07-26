import React from "react";
import { Link } from "react-router-dom";
import Stars from "../asset/stars.png";

const feedback = [
  {
    id: 1,
    comment:
      "I absolutely LOVED WedMatch! I’ve been using the knot and wedding wire for over a month now and have been SO stressed trying to find a photographer. Two thumbs up and 5 stars. Seriously.",
    name: "Amber M.",
    type: "bride",
    image: "/Images/p1.png",
  },
  {
    id: 2,
    comment:
      "Easiest website I have ever used. Set me up with multiple photographers in my price range and then they contacted me! Found my photographer on WedMatch and I love her!!!",
    name: "Katelyn A.",
    type: "bride",
    image: "/Images/p2.png",
  },
  {
    id: 3,
    comment:
      "I could not be more pleased with this process! I ended up booking within a week of using the site and I can’t say enough good things…I would highly recommend!! You will not be disappointed.",
    name: "Taylor C.",
    type: "bride",
    image: "/Images/p3.png",
  },
];

const Testimonial = () => {
  return (
    <div className="h-auto bg-work py-10">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-start items-start gap-5">
              <h5 className="text-primary uppercase font-extrabold">
                testimonial
              </h5>
              <h1 className="text-3xl text-secondary font-extrabold font-secondary-font">
                What Our Couples Say
              </h1>
              <p className="text-secondary">
                We’re really proud of our 100% 5 star reviews on Google.
                WedMatch is completely free to use, and couples love us, so why
                not give it a try yourself?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-4xl lg:text-8xl font-secondary-font text-gray-300">
                5.0
              </h1>
              <div>
                <img src={Stars} alt="stars" />
              </div>
              <h1 className="text-3xl font-extrabold text-secondary font-secondary-font">
                Average Couples Rating
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {feedback.map((f) => (
                <div className="flex flex-col justify-center items-start py-24 px-10 gap-5 drop-shadow-2xl bg-white">
                  <div>
                    <img
                      src={Stars}
                      alt="rating"
                      className="w-[100px] object-contain"
                    />
                  </div>
                  <h3 className="font-medium">{f.comment}</h3>
                  <div className="flex justify-around items-center gap-5">
                    <div>
                      {" "}
                      <img src={f.image} alt="user" />
                    </div>
                    <div>
                      <h3 className="font-secondary-font text-secondary">
                        {f.name}
                      </h3>
                      <h4 className="font-secondary-font capitalize text-gray-400 font-light">
                        {f.type}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            to="#"
            className="text-white rounded-md px-4 py-3 bg-primary capitalize"
          >
            Take the free quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
