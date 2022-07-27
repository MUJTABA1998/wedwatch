import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

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

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1390534/pexels-photo-1390534.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const FindMatch = () => {
  return (
    <div className="h-auto py-10 bg-work">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 content-center">
          <div className="">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 3000,
              }}
              modules={[Pagination, Autoplay, EffectFade]}
            >
              {images.map((i) => (
                <SwiperSlide>
                  <div className="max-w-[565px] max-h-[657px] ">
                    <img
                      src={i.url}
                      key={i.id}
                      alt="people"
                      className="w-full h-full  object-contain rounded-3xl drop-shadow-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              className="text-white rounded-md px-4 py-3 bg-primary capitalize mx-auto hover:bg-pr-s transition-all duration-200 ease-in-out"
            >
              Find a Match
            </Link>
            <Link to="#" className="mx-auto">
              Are you a photographer?{" "}
              <span className="text-primary underline">Request To Join</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMatch;
