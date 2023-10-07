import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Getstarted() {
  return (
    <div className="relative  bg-[#ffffff] rounded-t-[40px] sm:rounded-t-[60px]  ">
      <div className="absolute z-0 inset-0 min-w-7xl">
        <img
          className="object-cover w-full h-full opacity-10"
          src="./noise.png"
          alt=""
        />
      </div>{" "}
      <div className="w-full font-sans text-gray-900">
        <div className="h-full  bg3 flex bg-white justify-center rounded-t-[40px] sm:rounded-t-[60px] ">
          <section className="w-full py-12 mb-12 bg-base-900 sm:py-16 sm:mb-24 lg:py-20 xl:py-24">
            <hr className="items-center h-1 mx-auto mb-12 -mt-1 bg-pink-500 rounded-full sm:-mt-16 w-44" />
            <div className="px-6 mx-auto -mt-2.5 sm:mt-0 sm:max-w-6xl 2xl:max-w-7xl sm:px-6 lg:px-8">
              <div
                data-aos="zoom-in"
                className="relative justify-between overflow-hidden border-2 border-rose-600 md:flex rounded-3xl"
              >
                <div className="absolute right-0 transform -translate-y-1/2 translate-x-80 md:translate-x-36 top-1/2 md:top-0 md:-translate-y-24">
                  <svg
                    className="blur-3xl opacity-20 backdrop-blur-64  filter"
                    width="518"
                    
                    height="337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M297.629 36.521C425.034 36.521 518-55.783 518 53.097S184.03 337 56.625 337c-127.406 0 0-175.023 0-283.903 0-108.88 113.599-16.576 241.004-16.576Z"
                      fill="url(#FFFFFF-1)"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="0"
                        y1="337"
                        x2="36.01"
                        y2="-45.389"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" className="colo" />
                        <stop className="colo1" offset="100%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute inset-0 min-w-7xl">
                  <img
                    className="object-cover w-full h-full opacity-30"
                    src="./noise.png"
                    alt=""
                  />
                </div>

                <div className="absolute inset-y-0  right-0 w-1/2 hidden pr-12 md:block">
                  <img
                    className="w-full max-w-md  transform  translate-y-14 ml-12"
                    src="ibeto.png"
                    alt=""
                  />
                </div>

                <div className="relative w-full p-6 sm:pl-10 lg:py-24 lg:pl-20 md:w-1/2 lg:w-2/3">
                  <h2 className="text-4xl font-normal text-black font-body2 sm:text-4xl lg:text-5xl">
                    About{" "}
                  </h2>
                  <p className="max-w-sm mt-6 text-base font-normal text-gray-800 font-body1 sm:text-lg">
                    As part of the annual national-level technical symposium,
                    Excel 2022, Govt. Model Engineering College, Kochi hosts
                    Innovations for a Better Tomorrow (IBeTo), a competition
                    that fosters technical innovation. Ideas that reimagine the
                    technology we have and create meaningful impacts on a social
                  </p>
                  <div className="relative inline-flex items-center justify-center mt-8 rounded-full sm:mt-12 group">
                    <div className="absolute w-1/2 transition-all duration-200 rounded-full -inset-px "></div>
                    <Link
                      href=""
                      target="_blank"
                      title=""
                      className="relative inline-flex items-center justify-center px-8 py-2 pr-16 text-base font-normal text-black scale-95 border-2 border-r-0 border-rose-900 rounded-full text-md font-body2"
                      role="button"
                    >
                      Guidelines{" "}
                    </Link>{" "}
                    <Link
                      href=""
                      target="_blank"
                      title=""
                      className="relative hover:scale-110 text-md -ml-12 font-body2 font-normal inline-flex items-center justify-center px-8 scale-105 py-2 text-base text-white bg-gradient-to-r from-[#f9681c] to-[#e80a5a] rounded-full"
                      role="button"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div className="relative md:hidden">
                  <img
                    className="hidden lg:block w-full h-[70%]"
                    src="ibeto.png"
                    alt=""
                  />
                  <img
                    className="lg:hidden p-4 block w-full h-[70%]"
                    src="ibeto.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
