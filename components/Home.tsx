import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Social from "./Social";
import Navbar from "./Navbar";
import { useScreenWidth } from '../hooks/useScreenWidth'
import Lottie from 'lottie-react'
import bulb from '../animations/two_gear.json'

export default function landingpagebanner() {
  const size = useScreenWidth();
  const [animationSize, setAnimationSize] = useState<number>();
  useEffect(() => {
    if (size[0] > 600) {
      setAnimationSize(450);
    } else if (size[0] > 500) {
      setAnimationSize(450);
    } else if (size[0] > 400) {
      setAnimationSize(400);
    } else {
      setAnimationSize(300);
    }
  }, [size]);
  useEffect(() => {
    Aos.init({
      offset: 50,
    });
  }, []);

  return (
    <div className="mt-0  fixed w-full bg-hero h-screen bg-no-repeat bg-cover bg-center">
      <div className="right-0 hidden l-0 bottom-[30%] absolute h-full sm:flex mr-4 items-end pb-8"></div>{" "}
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 sm: sm:w-screen h-screen object-cover max-w-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>{" "}
      <div
        className="w-full z-40  sm:bg-[#280512c7] bg-[#1b020ac7]  absolute min-h-screen font-sans text-gray-900"
        style={
          {
            // background: "linear-gradient(45deg, #e91155, transparent)",
            // background: "#e91155",
            // opacity:"0.5"
          }
        }
      >
        <div className="h-screen bg2 flex justify-center  ">
          {/* <Model /> */}
          <div className="mt-0 sm:mt-0 px-0 absolute w-full h-full  flex justify-center py-2 sm:px-12 mx-auto sm:max-w-7xl 2xl:max-w-7xl">
            <div
              data-aos="zoom-in"
              className="flex w-full flex-col-reverse gap-1 sm:gap-8 items-center justify-start md:flex-row lg:items-center"
            >
              <div className="pt-6 sm:px-5 pr-0 w-full items-center sm:pr-8 pb-24 text-left px-10 md:pb-12 md:w-2/3 sm:text-left">
                <h1 className="relative fonts   font-body2  z-10 text-white font-display">
                  Innovations for a Better Tomorrow{" "}
                </h1>
                <p className="pt-4 sm:pt-6 font-body1 text-sm sm:text-[1.2rem] leading-relaxed text-white md:max-w-md md:text-lg">
                  Register now for innovations that shape a better..{" "}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center  items-start pt-5 sm:pt-5 space-x-6 md:justify-start">
                  <Link
                    href="#start"
                    className="flex justify-center font-normal font-body2 text-md items-center py-3 px-9 hover:bg-[#c63e74] tracking-wide leading-7 text-white bg-[#8b254e]	rounded-full hover:shadow-xl z-50"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="flex p-2 sm:p-2 items-center sm:w-2/3 w-full mt-3 border-gray-400">
                {/* <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="/compressedNew.mp4" type="video/mp4" />
                </video> */}
                {/* <Lottie
                  animationData={bulb}
                  loop={true}
                  autoplay={true}
                  style={{ width: animationSize, height: animationSize }}
                  /> */}
                <img
                  className="landing__img translate-y-20 sm:translate-y-0 scale-90"
                  src="./ibetologo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
