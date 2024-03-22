import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#f4f5f8] pt-20 pb-6">
      <div className="max-width">
        <div className="flex md:flex-row flex-col gap-6 justify-between pb-10 sm:pb-14 border-b border-gray-300">
          <div className="flex gap-4 items-center">
            <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center">
              <FaLocationDot className="text-2xl sm:text-[35px] text-white" />
            </div>
            <span>
              <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">
                Location
              </h3>
              <p className="hover:text-blue-600 duration-300">
                <a
                  href="https://maps.app.goo.gl/dcSzoQ3VPBzezuns6"
                  target="blank"
                >
                  Technical Road, <br />
                  Sylhet, Bangladesh
                </a>
              </p>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center">
              <FaFacebookF className="text-2xl sm:text-[35px] text-white" />
            </div>
            <span>
              <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">
                Follow Us
              </h3>
              <p className="hover:text-blue-600 duration-300">
                <a
                  href="https://www.facebook.com/sylhetpoly"
                  target="blank"
                >
                  On Facebook
                </a>
              </p>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center">
              <IoMdMailUnread className="text-2xl sm:text-[35px] text-white" />
            </div>
            <span>
              <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">
                Send Us Email
              </h3>
              <p className="hover:text-blue-600 duration-300">
                <a href="mailto:info@spi.gov.bd">
                info@spi.gov.bd
                </a>
              </p>
            </span>
          </div>
        </div>

        <p className="text-[14px] mt-6 text-center">
          ©
          <a
            className="text-blue-600"
            href="https://shakiqur-rahman.netlify.app/#"
            target="blank"
          >
            DevIT BD
          </a>
          - 2024 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
