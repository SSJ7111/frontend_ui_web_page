import React from "react";
import habot_footer from "../../Assets/habot_footer.svg";
import linkedIn_logo from "../../Assets/linkedIn_logo.svg";
import meta_logo from "../../Assets/meta_logo.svg";
import x_logo from "../../Assets/x_logo.svg";
import insta_logo from "../../Assets/insta_logo.svg";

const Footer = () => {
  return (
    <div className="footer_bg py-10 mt-20">
      <div className="container mx-auto px-4 text-white">
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
         
          <div className="flex flex-col items-center md:items-start">
            <img src={habot_footer} alt="footer logo" className="mx-auto md:mx-0" />
            <p className="footer_p mt-3">© R Singhania</p>
          </div>

         
          <div className="flex flex-col md:flex-row justify-center text-center md:text-left verify_btn">
            <div className="mx-4">
              <ul>
                <li className="font-bold mb-2">Company</li>
                <li className="mt-1 font-inter cursor-pointer">FAQ</li>
                <li className="mt-1 font-inter cursor-pointer">About</li>
              </ul>
            </div>
            <div className="mx-4">
              <ul>
                <li className="font-bold mb-2">Terms</li>
                <li className="mt-1 font-inter cursor-pointer">Data Privacy</li>
                <li className="mt-1 font-inter cursor-pointer">Terms</li>
                <li className="mt-1 font-inter cursor-pointer">Accessibility</li>
              </ul>
            </div>
            <div className="mx-4">
              <ul>
                <li className="font-bold mb-2">Related</li>
                <li className="mt-1 font-inter cursor-pointer">Find Buyer</li>
                <li className="mt-1 font-inter cursor-pointer">Feedback</li>
              </ul>
            </div>
          </div>

          
          <div className="flex gap-4 justify-center md:justify-end">
            <span className="link_cover cursor-pointer">
              <img src={linkedIn_logo} alt="LinkedIn" />
            </span>
            <span className="link_cover cursor-pointer">
              <img src={x_logo} alt="X" />
            </span>
            <span className="link_cover cursor-pointer">
              <img src={meta_logo} alt="Meta" />
            </span>
            <span className="link_cover cursor-pointer">
              <img src={insta_logo} alt="Instagram" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
