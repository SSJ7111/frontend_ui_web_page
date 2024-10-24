import React, { useState } from "react";
import IframeComponent from "./IframeComponent";
import checkMark from "../../../Assets/checked_list.svg";

const Requirements = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("buyers");

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-habot_blue rounded-5 w-full max-w-6xl mx-auto py-10 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-center gap-6 items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <IframeComponent />
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex justify-start gap-4 mb-6">
            <li className="flex-1">
              <button
                className={`w-full py-2 px-4 rounded transition ${
                  activeTab === "buyers" ? "active_btn" : "non_active_btn"
                } non_active_btn hover:active_btn`}
                onClick={() => handleTabClick("buyers")}
              >
                Buyers
              </button>
            </li>
            <li className="flex-1">
              <button
                className={`w-full py-2 px-4 rounded transition ${
                  activeTab === "suppliers" ? "active_btn" : "non_active_btn"
                } non_active_btn hover:active_btn`}
                onClick={() => handleTabClick("suppliers")}
              >
                Suppliers
              </button>
            </li>
          </ul>
          <div className="tab-content">
           
            {activeTab === "buyers" && (
              <div className="tab-pane show active" id="buyers" role="tabpanel">
                <ul className="mt-4 text-white">
                  <li className="flex items-center gap-2 mb-3 verify_btn">
                    <img src={checkMark} alt="list check" /> Post your requirements.
                  </li>
                  <li className="flex items-center gap-2 mb-3 verify_btn">
                    <img src={checkMark} alt="list check" />
                    Sit back for multiple suppliers to contact you.
                  </li>
                  <li className="flex items-center gap-2 verify_btn">
                    <img src={checkMark} alt="list check" />
                    Choose among the suppliers based on the ratings and reviews.
                  </li>
                </ul>
              </div>
            )}
            
            
            {activeTab === "suppliers" && (
              <div className="tab-pane" id="suppliers" role="tabpanel">
                <ul className="mt-4 text-white">
                  <li className="flex items-center gap-2 mb-3 verify_btn">
                    <img src={checkMark} alt="list check" /> Complete your profile and get verified.
                  </li>
                  <li className="flex items-center gap-2 mb-3 verify_btn">
                    <img src={checkMark} alt="list check" />
                    Select service tags for relevant opportunities.
                  </li>
                  <li className="flex items-center gap-2 verify_btn">
                    <img src={checkMark} alt="list check" />
                    Reach out to buyers and expand your business.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
