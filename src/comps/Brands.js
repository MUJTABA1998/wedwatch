import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const brands = [
  { id: 1, image: "/Images/B0.png" },
  { id: 2, image: "/Images/B1.png" },
  { id: 3, image: "/Images/B2.png" },
  { id: 4, image: "/Images/B3.png" },
  { id: 5, image: "/Images/B4.png" },
  { id: 6, image: "/Images/B5.png" },
  { id: 7, image: "/Images/B6.png" },
];

const Brands = () => {
  return (
    <div className="h-auto">
      <div className="main-container">
        <div className="flex flex-col gap-7">
          <h1 className="text-gray-800 font-extrabold text-center uppercase">
            As Seen On
          </h1>
          <div className="flex justify-center items-center gap-5  flex-wrap">
            <Swiper
              className=""
              slidesPerView={5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
              }}
              modules={[Pagination, Autoplay]}
            >
              {brands.map((b) => (
                <SwiperSlide className="w-[150px]">
                  <img
                    src={b.image}
                    key={b.id}
                    alt="brand"
                    className="lg:w-[120px] lg:h-[120px] object-contain w-[100px] h-[100px] mb-10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
