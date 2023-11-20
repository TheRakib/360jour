import CallContactButtons from "@/components/Shared/CallContactButtons";
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export default function Social() {
  return (
    <div className="max-w-layout mx-auto px-2">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-[90px] mb-[70px] ">
        <div className="flex gap-6 items-center">
          <p className="font-semibold text-[18px] ">Share this blog:</p>
          <div className="flex gap-3">
            <span className="border rounded-full border-primary cursor-pointer">
              <FaLink className="text-primary m-3  text-[20px]" />
            </span>
            <span className="border rounded-full border-primary cursor-pointer">
              <FaTwitter className="text-primary m-3 text-[20px]" />
            </span>
            <span className="border rounded-full border-primary cursor-pointer">
              <FaLinkedinIn className="text-primary m-3 text-[20px]" />
            </span>
            <span className="border rounded-full border-primary cursor-pointer">
              <FaFacebookF className="text-primary m-3 text-[20px]" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-11">
          <div className="flex gap-2 md:gap-5 items-center">
            <span className="border rounded-full border-primary/5 text-primary bg-primary/10 cursor-pointer">
              <FaAngleLeft className=" m-3  text-[20px]" />
            </span>
            <span className=" font-semibold">Previous Blog</span>
          </div>
          <div className="flex gap-5 items-center">
            <span className="text-primary font-semibold">Next Blog</span>
            <span className="border rounded-full border-primary text-white bg-primary cursor-pointer">
              <FaAngleRight className=" m-3  text-[20px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <CallContactButtons />
      </div>
    </div>
  );
}
