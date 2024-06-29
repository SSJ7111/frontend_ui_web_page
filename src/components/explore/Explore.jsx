import React from "react";
import Requirements from "./requirements/Requirements";

const Explore = () => {
  return (
    <div className="container gap-4">
      <div className="grid">
        <div className="row py-20 px-10">
          <div className="col-md-6 col-sm-12">
            <div className="flex flex-col gap-4">
              <h2 className="explore_heading">
                Ready to dive into <span className="heading_two">HABOT</span>?
              </h2>
              <p className="explore_p">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
              <button className="signup_btn border-habot_green bg-habot_green">
                Sign Up Today !<span className="side_arrow"></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="flex flex-row mt-4 justify-between gap-4">
              <span className="flex flex-col gap-4">
                <button className="explore_btn font-inter">
                  Abu Dhabi
                  <span className="side_arrow_red"></span>
                </button>
                <button className="explore_btn font-inter">
                  Sharjah & Ajman <span className="side_arrow_red"></span>
                </button>
                <button className="explore_btn font-inter">
                  Ras Al Khaimah <span className="side_arrow_red"></span>
                </button>
              </span>
              <span className="flex flex-col gap-4">
                <button className="explore_btn font-inter">
                  Dubai
                  <span className="side_arrow_red"></span>
                </button>
                <button className="explore_btn font-inter">
                  Fujairah
                  <span className="side_arrow_red"></span>
                </button>
                <button className="explore_btn font-inter">
                  Umm Al Quwain
                  <span className="side_arrow_red"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Requirements />
    </div>
  );
};

export default Explore;
