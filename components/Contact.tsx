import React from "react";
import { FiPhoneCall, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="py-12 rounded-[40px] sm:rounded-[66px] -mt-24 border-t-4 border-b-2 border-slate-600 sm:-mt-32 z-30 relative w-full bg-[#ffeff8] sm:py-16 lg:py-20">
      <div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-5"
          src="./noise.png"
          alt=""
        />
      </div>{" "}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center lg:text-center">
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            className="mt-4 font-body2 text-3xl font-normal text-blcak sm:text-4xl lg:text-5xl"
          >
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-center  gap-24 mt-12 mb-24 sm:px-12  px-10  sm:grid-cols-2  sm:max-w-[85%]  md:max-w-[80%]  mx-auto  sm:gap-y-32  lg:grid-cols-3 lg:max-w-[80%]  sm:mt-16 sm:gap-6">
          <div className="relative h-full  bg-white m-2 rounded-[10px] max-w-sm  shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="ph (1).png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Mathew Davis{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                Chairperson
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919496573224"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:mathewdavis.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mathew-davis-855002211"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full max-w-sm  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="/ph (4).png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Vishnu S{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                General Secretary
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+917736897653"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:vishnusarath.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vishnu-s-89300920b"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full max-w-sm  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="/abhishek_p.png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Abhishek P{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                Joint Secretary
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+917025715130"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:abhishek07.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abhishek-p-6b2336214"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full max-w-sm  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="/ph (2).png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Cijo Jose{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                Social Initiatives Manager
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919496993697"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:cijojose.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cijo-jose-01b59425a"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* cristopher */}
          <div className="relative h-full max-w-sm  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="/cristopher.png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Christopher Roy
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                Social Initiatives Manager
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919496700755"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:chrizroy2001@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chris-roy-/"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Dileep Ambali*/}
          <div className="relative h-full max-w-sm  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden  aspect-square">
              <img
                className="object-cover w-full transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="/dileep.png"
                alt=""
              />
            </div>
            <div className="px-5 py-3   text-center bg-white -mt-8 absolute w-full rounded-t-[14px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Dileep Ambali
              </h3>{" "}
              <h4 className="text-sm font-normal  mb-0.5 font-body1 text-gray-600">
                Social Initiatives Manager
              </h4>
              <div className="flex mt-3 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919497049598"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:chrizroy2001@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dileep-ambali-275084211"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
