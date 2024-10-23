import React from "react";
import IframeComponent from "./IframeComponent";
import checkMark from "../../../Assets/checked_list.svg";

const Requirements = () => {
  return (
    <div className="container grid bg-habot_blue rounded-5 w-max h-max py-20 px-10">
      <div className="row lg:ms-5 md:ms-5 sm:ms-2 justify-center gap-4 px-4 xs:py-20 items-center xs:flex-wrap">
        <div className="col-md-6 col-sm-12">
          <IframeComponent />
        </div>
        <div className="col-md-6 col-sm-12">
          <ul
            className="nav nav-tabs flex flex-row items-start justify-start right-0 flex-nowrap"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="buyers-tab"
                data-bs-toggle="tab"
                data-bs-target="#buyers"
                type="button"
                role="tab"
                aria-controls="buyers"
                aria-selected="true"
              >
                Buyers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="suppliers-tab"
                data-bs-toggle="tab"
                data-bs-target="#suppliers"
                type="button"
                role="tab"
                aria-controls="suppliers"
                aria-selected="false"
              >
                Suppliers
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="buyers tab-pane fade show active"
              id="buyers"
              role="tabpanel"
              aria-labelledby="buyers-tab"
            >
              <ul className="mt-6">
                <li className="flex flex-row items-center justify-start gap-2 mb-3 text-white">
                  <img src={checkMark} alt="list check" /> Post your
                  requirements.
                </li>
                <li className="flex flex-row items-center justify-start gap-2 mb-3 text-white">
                  <img src={checkMark} alt="list check" />
                  Sit back for multiple suppliers to contact you.
                </li>
                <li className="flex flex-row items-center justify-start gap-2 text-white">
                  <img src={checkMark} alt="list check" />
                  Choose among the suppliers based on the ratings and reviews.
                </li>
              </ul>
            </div>
            <div
              className="suppliers tab-pane fade"
              id="suppliers"
              role="tabpanel"
              aria-labelledby="suppliers-tab"
            >
              <ul className="mt-6">
                <li className="flex flex-row items-center justify-baseline gap-2 mb-3 text-white">
                  <img src={checkMark} alt="list check" /> Complete your profile
                  and get verified.
                </li>
                <li className="flex flex-row items-center justify-baseline gap-2 mb-3 text-white">
                  <img src={checkMark} alt="list check" />
                  Select service tags for relevant opportunities.
                </li>
                <li className="flex flex-row items-center justify-baseline gap-2 text-white">
                  <img src={checkMark} alt="list check" />
                  Reach out to buyers and expand your business.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
