import React, { useState } from "react";
import LOGO from "../asset/logo.png";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <img
        src={LOGO}
        alt="logo"
        className="block md:w-[220px] md:h-[80px] md:object-contain w-[150px]"
      />
      <div
        className={`flex items-center gap-5 flex-col absolute top-0 pr-40 justify-center right-0 lg:h-auto h-screen lg:right-0 bg-primary lg:bg-transparent lg:flex-row lg:py-10 duration-500 ease-linear ${
          open === true ? "right-[0%]" : "right-[-120%]"
        }`}
      >
        <Link to="#" className="ml-32 text-white font-primary text-md lg:ml-0">
          Home
        </Link>
        <Link
          to="#"
          className="ml-32 text-white font-primary text-md lg:mt-0 lg:ml-0"
        >
          About
        </Link>
        <Link to="#" className="ml-32 text-white font-primary text-md lg:ml-0">
          For Photographers
        </Link>
        <Link to="#" className="ml-32 text-white font-primary text-md lg:ml-0">
          Contact
        </Link>
        <Link
          to="#"
          className="ml-32 text-white rounded-md lg:px-4 lg:py-3 lg:bg-primary font-primary lg:ml-0"
        >
          Take The Free Quiz
        </Link>
        <Link to="#" className="ml-32 text-white font-primary text-md lg:ml-0">
          Vendor Login
        </Link>
      </div>
      <Link
        to="#"
        className="absolute block text-3xl text-white cursor-pointer lg:hidden right-16"
        onClick={() => setOpen(!open)}
      >
        <ImMenu />
      </Link>
    </div>
  );
};

export default Navbar;
