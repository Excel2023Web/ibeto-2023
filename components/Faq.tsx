import React, { useState } from "react";

export default function Faq() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const items = [
    {
      uuid: 1,
      question: "Who can participate in IBeTo?",
      answer:
        "Participants can include individuals who are undergraduates or postgraduates, and this eligibility extends to those who are currently pursuing their degrees, with an upper age limit of 30 years.",
    },
    {
      uuid: 2,
      question: "Will there be any registration fees associated with participation in IBeTo 2023?",
      answer:
        "The event is completely free of cost.",
    },
    {
      uuid: 3,
      question: "Why should I participate?",
      answer:
        "You should definitely consider joining this program! It offers the chance to connect with like-minded peers, leverage industry support to scale your project, access mentors who can help enhance your skills, and get your doubts cleared along the way.",
    },
    {
      uuid: 4,
      question: "Can a team have members from different colleges or institutions?",
      answer:
        "Absolutely! Your team can include members from various colleges or institutions. We encourage diverse collaborations and believe it can lead to innovative and exciting projects..",
    },
    {
      uuid: 5,
      question: "From which phase will I be eligible for a Certificate of Participation?",
      answer: "Participants in the Create Phase will receive a Certificate of Participation, and winners will additionally receive a Certificate of Merit.",
    },
    {
      uuid: 6,
      question: "Will I be eligible for KTU activity points if I take part in IBeTo 2023?",
      answer: "As per KTU regulations, socially beneficial projects can avail up to 50 activity points.",
    },
    {
      uuid: 7,
      question: "What is the team size limit?",
      answer: "Participants have the option to take part individually or form a team. The maximum number of members allowed in a team is 4.",
    },
  ];
  return (
    <section
      id="faq"
      className="py-14 pt-14 bg-[#fff7fb] rounded-t-[40px] sm:rounded-t-[66px] relative -mt-12 sm:py-16 lg:py-24"
    >
      {/* <div className="absolute inset-0 min-w-7xl">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-[15%]"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "} */}
      <div className="max-w-5xl px-8 mx-auto pr-9 sm:pr-0 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="mt-4 text-3xl font-normal text-black font-body2 text-blcak sm:text-4xl lg:text-5xl"
          >
            Questions & Answers
          </h2>
          <p className="hidden max-w-xl mx-auto mt-4 text-base font-normal leading-relaxed text-gray-800 sm:block font-body1">
            Explore the common questions and answers about IBeTo 
          </p>
        </div>

        {/* ----------------For mobile view---------------- */}
        <div className="flex sm:hidden w-full">
          <div className="pb-2 grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[0].question}
                  </p>
                  <div className="flex-1"></div>
                  <p
                    className="ml-1 text-xl font-body1 font-semibold text-gray-600"
                    onClick={() => setState1(!state1)}
                  >
                    {state1 ? "-" : "+"}
                  </p>
                </div>
                {state1 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">
                    {items[0].answer}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[1].question}
                  </p>
                  <div className="flex-1"></div>
                  <p
                    className="ml-1 text-xl font-body1 font-semibold text-gray-600"
                    onClick={() => setState2(!state2)}
                  >
                    {state2 ? "-" : "+"}
                  </p>
                </div>
                {state2 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">
                    {items[1].answer}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[2].question}
                  </p>
                  <div className="flex-1"></div>
                  <p
                    className="ml-1 text-xl font-body1 font-semibold text-gray-600"
                    onClick={() => setState3(!state3)}
                  >
                    {state3 ? "-" : "+"}
                  </p>
                </div>
                {state3 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">
                    {items[2].answer}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[3].question}
                  </p>
                  <div className="flex-1"></div>
                  <p
                    className="ml-1 text-xl font-body1 font-semibold text-gray-600"
                    onClick={() => setState4(!state4)}
                  >
                    {state4 ? "-" : "+"}
                  </p>
                </div>
                {state4 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">
                    {items[3].answer}
                  </p>
                )}
              </div>
            </div>

            {/*-------------   IF THERE ARE QNS 5 AND 6    ----------------*/}
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[4].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState5(!state5)}>
                      {state5 ? "-" : "+"}
                  </p>
                </div>
                {state5 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">{items[4].answer}</p>
                )}
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex" data-aos="zoom-in" data-aos-delay="300">
                  <p className="mr-2 text-base font-normal text-gray-600 font-body1">
                    {items[5].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState6(!state6)}>
                      {state6 ? "-" : "+"}
                  </p>
                </div>
                {state6 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-700 sm:text-base font-body1">{items[5].answer}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ----------------For Desktop View---------------- */}
        <div className="hidden sm:flex">
          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-14 sm:gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[0].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[0].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[1].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[1].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[2].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[2].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[3].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[3].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[4].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[4].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[5].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[5].answer}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-rose-400  rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="ml-4">
                <p className="text-xl font-normal text-gray-600 font-body1">
                  {items[6].question}
                </p>
                <p className="mt-4 text-sm font-default text-gray-700 sm:text-base font-body1">
                  {items[6].answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-40 flex items-center justify-center mt-12 md:mt-28">
          <div className="px-10 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-sm text-gray-50 font-body2">
              Didn’t find the answer you are looking for?{" "}
              <span className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 ">
                Contact Us
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}