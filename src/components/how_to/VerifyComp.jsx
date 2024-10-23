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
      <div className="verify_bg my-20">
        <div className="container h-full flex items-center py-8 justify-between gap-12 sm-flex-wrap">
          <h3 className="heading_three">
            Let Suppliers
            <span className="border-b-4 border-habot_red"> Find You </span>
          </h3>
          <button className="verify_btn bg-habot_red">Get Verified</button>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4 my-10">
          <h4 className="heading_four">How it works?</h4>
          <p className="four_p">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>
        <div className="grid place-content-center mt-20 mb-10">
          <div className="row justify-center">
            <div className="col-4 col-md-4 col-sm-12 blue_card">
              <img src={user_icon} alt="user icon" />
              <p className="card_p">Select Your Role and Sign Up</p>
            </div>
            <div className="col-4 items-center justify-center col-md-4 col-sm-12 white_card">
              <img src={document_icon} alt="" />
              <p className="card_p">Buyers Post Your Requirements</p>
            </div>
            <div className="col-4 items-center justify-center col-md-4 col-sm-12 blue_card">
              <img src={review_icon} alt="" />
              <p className="card_p">
                Review, Select, and Contact the Best Suppliers
              </p>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-4 items-center justify-center col-md-4 col-sm-12 white_card">
              <img src={notification_icon} alt="" />
              <p className="card_p">
                {" "}
                Suppliers Complete your profile and get notified for
                opportunities
              </p>
            </div>
            <div className="col-4 items-center justify-center col-md-4 col-sm-12 blue_card">
              <img src={quote_icon} alt="" />
              <p className="card_p">
                Contact to Buyers and Share your Quote for the service
              </p>
            </div>
            <div className="col-4 items-center justify-center col-md-4 col-sm-12 white_card">
              <img src={connect_icon} alt="" />
              <p className="card_p">
                Both the Parties can Connect and Make Business Leave a Feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyComp;
