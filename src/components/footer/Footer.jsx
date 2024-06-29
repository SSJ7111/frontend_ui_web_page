import React from "react";
import habot_footer from "../../Assets/habot_footer.svg";
import linkedIn_logo from "../../Assets/linkedIn_logo.svg";
import meta_logo from "../../Assets/meta_logo.svg";
import x_logo from "../../Assets/x_logo.svg";
import insta_logo from "../../Assets/insta_logo.svg";

const Footer = () => {
  return (
    <div className="footer_bg py-10 mt-20">
      <div className="container grid w-full text-white">
        <div className="row items-center justify-center footer_container">
          <div className="col-md-2 col-sm-12">
            <img src={habot_footer} alt="footer logo" />
            <p className="footer_p mt-3 pl-3">© R Singhania</p>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="row items-start">
              <div className="col-md-3 col-sm-12">
                <ul>
                  Company
                  <li className="mt-3 font-inter">FAQ</li>
                  <li className="mt-1 font-inter">About</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-12">
                <ul>
                  Terms
                  <li className="mt-3 font-inter">Data Privacy</li>
                  <li className="mt-1 font-inter">Terms</li>
                  <li className="mt-1 font-inter">Accessibility</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-12">
                <ul>
                  Related
                  <li className="mt-3 font-inter">Find Buyer</li>
                  <li className="mt-1 font-inter">Feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="flex flex-row justify-center items-start gap-4">
              <span className="link_cover">
                <img src={linkedIn_logo} alt="linkedin" />
              </span>
              <span className="link_cover">
                <img src={x_logo} alt="x" />
              </span>
              <span className="link_cover">
                <img src={meta_logo} alt="meta" />
              </span>
              <span className="link_cover">
                <img src={insta_logo} alt="instagram" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
