import React from "react";

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
        <h1 className="text-gray-800 font-extrabold text-center uppercase">
          As Seen On
        </h1>
        <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
          {brands.map((b) => (
            <img
              src={b.image}
              key={b.id}
              alt="brand"
              className="w-[100px] h-[100px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
