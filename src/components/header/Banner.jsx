import React from "react";

const Banner = () => {
  return (
    <div className="banner_img flex flex-col items-center justify-center gap-4 h-max lg:py-20 md:py-20 sm-py-10 lg:px-10 md:px-6 sm:px-4">
      <h1 className="banner_text flex flex-col">
        Are You a Supplier?
        <span className="text_one"> Explore Matching Opportunities.</span>
      </h1>
      <div className="flex flex-row items-center justify-center flex-wrap gap-2">
        <input
          className="suitcase banner_inputs rounded-sm"
          type="text"
          name="text-input"
          placeholder="Search your required service here"
        />
        <input
          className="location banner_inputs rounded-sm"
          type="text"
          name="text-input"
          placeholder="Search your desired location here"
        />
        <button className="search_btn font-inter border-habot_green bg-habot_green" type="button">
          Search
        </button>
      </div>
      <p className="banner_p">
        Are you a buyer? 
        <span className="p_text text-wrap">
           Click here if you are looking to post a requirements
        </span>
      </p>
    </div>
  );
};

export default Banner;
