import React from "react";
import Requirements from "./requirements/Requirements";

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto gap-4 p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-8 py-10">
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Ready to dive into <span className="text-habot_green">HABOT</span>?
            </h2>
            <p className="text-base text-gray-700">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to
              a vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className="signup_btn border-habot_green bg-habot_green text-white py-2 px-6 rounded">
              Sign Up Today!<span className="ml-2 side_arrow"></span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <div className="flex xs:flex-wrap gap-4">
            <div className="flex flex-col gap-4 w-1/2">
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Abu Dhabi <span className="side_arrow_red"></span>
              </button>
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Sharjah & Ajman <span className="side_arrow_red"></span>
              </button>
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Ras Al Khaimah <span className="side_arrow_red"></span>
              </button>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Dubai <span className="side_arrow_red"></span>
              </button>
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Fujairah <span className="side_arrow_red"></span>
              </button>
              <button className="explore_btn font-inter text-habot_blue border hover:bg-habot_blue hover:text-white py-2 px-4 rounded transition">
                Umm Al Quwain <span className="side_arrow_red"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Requirements />
    </div>
  );
};

export default Explore;
