import React from "react";
import habot_header from "../../Assets/habot_header.svg";
import dropdown_arrow from "../../Assets/dropdown_arrow.svg";

const Navbar = () => {
  return (
    <div className="bg-white">
      <nav className="navbar h-max py-4 px-4">
        <div className="flex">
          <img
            className="header_logo"
            src={habot_header}
            alt="habot header logo"
          />{" "}
        </div>
        <div className="flex inset-y-0 right-0 items-center pr-2">
          <button type="button" className="text_clr text-habot_gray list_item">
            Find Suppliers
          </button>
          <button
            type="button"
            className="text_clr list_item flex flex-row items-center"
          >
            Find Service Tags
            <img src={dropdown_arrow} alt="dropdown arrow" />
          </button>
          <button type="button" className="login_btn text-habot_green text-center">
            Login/Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
