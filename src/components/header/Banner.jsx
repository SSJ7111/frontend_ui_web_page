import React from "react";

const Banner = () => {
  return (
    <div className="banner_img flex flex-col items-center justify-center gap-4 h-max py-10 lg:py-20 px-4 md:px-6 lg:px-10">
      <h1 className="banner_text text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Are You a Supplier?
        <span className="text_one block text-xl md:text-2xl lg:text-3xl">
          Explore Matching Opportunities.
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-2 w-full">
        <input
          className="suitcase banner_inputs rounded-sm w-full md:w-auto px-4 py-2"
          type="text"
          name="text-input"
          placeholder="Search your required service here"
        />
        <input
          className="location banner_inputs rounded-sm w-full md:w-auto px-4 py-2"
          type="text"
          name="text-input"
          placeholder="Search your desired location here"
        />
        <button className="search_btn font-inter border-habot_green bg-habot_green text-white px-6 py-2 rounded-sm w-full md:w-auto">
          Search
        </button>
      </div>
      <p className="banner_p text-center text-sm md:text-base">
        Are you a buyer? 
        <span className="p_text block text-wrap text-blue-600">
           Click here if you are looking to post a requirement
        </span>
      </p>
    </div>
  );
};

export default Banner;
