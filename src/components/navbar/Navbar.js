import React from "react";
import habot_header from "../../Assets/habot_header.svg";
import dropdown_arrow from "../../Assets/dropdown_arrow.svg";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <nav className="navbar h-max py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            className="header_logo w-32 md:w-40"
            src={habot_header}
            alt="habot header logo"
          />
        </div>
        <div className="flex flex-col md:flex-row inset-y-0 md:right-0 items-center gap-2 md:gap-4 pr-2 mt-4 md:mt-0">
          <button type="button" className="text_clr text-habot_gray list_item text-sm md:text-base">
            Find Suppliers
          </button>
          <button
            type="button"
            className="text_clr list_item flex flex-row items-center text-sm md:text-base"
          >
            Find Service Tags
            <img className="ml-1 w-4" src={dropdown_arrow} alt="dropdown arrow" />
          </button>
          <button type="button" className="login_btn font-inter text-habot_green text-center bg-transparent border border-habot_green rounded px-4 py-2 text-sm md:text-base">
            Login/Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
