import React, { useState } from "react";
import LOGO from "../asset/logo.png";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  w-full ">
      <img
        src={LOGO}
        alt="logo"
        className="block md:w-[220px] md:h-[80px] md:object-contain w-[150px]"
      />
      <div className="absolute lg:relative right-0 h-screen lg:h-auto w-[400px] lg:w-full overflow-hidden top-0 flex justify-end">
        <div
          className={`flex items-center gap-5 max-w-[400px] lg:max-w-max w-full flex-col absolute z-10   lg:relative top-0 justify-center right-0 lg:h-auto h-screen lg:right-0 bg-primary lg:bg-transparent lg:flex-row lg:py-10 transition-all duration-500 ease-linear ${
            open === true ? "" : "mr-[-400px] lg:mr-0"
          }`}
        >
          <Link
            to="#"
            className="text-white ml-7 lg:ml-0 lg:font-primary font-secondary-font text-md tracking-widest hover:text-primary transition-all duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-white ml-7 lg:ml-0 lg:font-primary font-secondary-font text-md tracking-widest hover:text-primary transition-all duration-150 ease-in-out"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-white ml-7 lg:ml-0 lg:font-primary font-secondary-font text-md tracking-widest hover:text-primary transition-all duration-150 ease-in-out"
          >
            For Photographers
          </Link>
          <Link
            to="#"
            className="text-white ml-7 lg:ml-0 lg:font-primary font-secondary-font text-md tracking-widest hover:text-primary transition-all duration-150 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="text-white rounded-md ml-7 lg:font-primary lg:ml-0 lg:px-4 lg:py-3 hover:bg-pr-s transition-all duration-200 ease-in-out lg:bg-primary font-secondary-font tracking-widest"
          >
            Take The Free Quiz
          </Link>
          <Link
            to="#"
            className="text-white font-secondary-font lg:font-primary text-md ml-7 lg:ml-0 tracking-widest hover:text-primary transition-all duration-150 ease-in-out"
          >
            Vendor Login
          </Link>
        </div>
      </div>
      <Link
        to="#"
        className="absolute block text-3xl z-10 text-white cursor-pointer lg:hidden right-16 "
        onClick={() => setOpen(!open)}
      >
        <ImMenu />
      </Link>
    </div>
  );
};

export default Navbar;
