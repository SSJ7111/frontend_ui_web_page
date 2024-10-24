import React from "react";
import user_icon from "../../Assets/user_icon.svg";
import document_icon from "../../Assets/document_icon.svg";
import review_icon from "../../Assets/review_icon.svg";
import quote_icon from "../../Assets/quote_icon.svg";
import notification_icon from "../../Assets/notification_icon.svg";
import connect_icon from "../../Assets/connect_icon.svg";

const VerifyComp = () => {
  return (
    <div>
      <div className="flex verify_bg h-64 w-full py-8 justify-center items-center my-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12">
          <h3 className="text-3xl font-bold text-center md:text-left">
            Let Suppliers{" "}
            <span className="border-b-4 border-habot_red">Find You</span>
          </h3>
          <button className="bg-habot_red verify_btn rounded-sm px-6 py-2">
            Get Verified
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center my-10">
          <h4 className="text-2xl font-semibold">How it works?</h4>
          <p className="mt-4 text-gray-600">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
          <div className="card-bg h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={user_icon} alt="user icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Select Your Role and Sign Up
            </p>
          </div>
          <div className="bg-white h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={document_icon} alt="document icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Buyers Post Your Requirements
            </p>
          </div>
          <div className="card-bg h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={review_icon} alt="review icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Review, Select, and Contact the Best Suppliers
            </p>
          </div>
          <div className="bg-white h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={notification_icon} alt="notification icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Suppliers Complete Your Profile and Get Notified for Opportunities
            </p>
          </div>
          <div className="card-bg h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={quote_icon} alt="quote icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Contact Buyers and Share Your Quote for the Service
            </p>
          </div>
          <div className="bg-white h-64 w-full flex flex-col justify-center items-center p-6">
            <img src={connect_icon} alt="connect icon" className="w-12 h-12 mb-4" />
            <p className="text-center font-medium">
              Both Parties Can Connect and Do Business; Leave Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyComp;
