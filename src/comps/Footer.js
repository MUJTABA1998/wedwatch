import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-auto py-10 bg-footer">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-y-10 ">
          <div>
            <h1 className="font-secondary-font text-secondary text-center md:text-left">
              The easiest way to find your perfect
              <br /> wedding photographer.
            </h1>

            <ul className="flex items-center justify-center md:justify-start  md:items-start gap-10 my-5">
              <li>
                <img src="/Images/fb.png" alt="facebook" />
              </li>
              <li>
                <img src="/Images/insta.png" alt="instagram" />
              </li>
              <li>
                <img src="/Images/pin.png" alt="pintrest" />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-secondary-font text-secondary uppercase">
              locations
            </h1>
            <ul className="flex flex-col justify-start  mt-5">
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Virginia
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Charlottesville
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Washington DC
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Virginia Beach
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Richmond
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-secondary-font text-secondary uppercase">
              about
            </h1>
            <ul className="flex flex-col justify-start   mt-5">
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Photographer Login
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  About us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
