import React from "react";
import { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import ProblemStatementModal from "./ProblemStatementModal";

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"

export default function Problem_stmnt() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId: any) => {
    setActiveModal(modalId);
    console.log(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <section id="problem" className="py-12 z-30 bg-[#fdf7f9] rounded-t-[40px] sm:rounded-t-[60px] sm:rounded-b-[60px]  relative w-full -mt-14 sm:py-16 lg:py-20  sm:pb-16">
        <div className="absolute  inset-0 min-w-7xl">
          <img
            className="object-cover sm:rounded-b-[60px] w-full h-full opacity-10"
            src="./noise.png"
            alt=""
          />
        </div>{" "}
        <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-left sm:text-center">
            <h2 className="mt-4 text-center font-body2 text-3xl text-black font-normal text-blcak sm:text-3xl lg:text-4xl">
              Problem Statements
            </h2>
            {/* <p className="mt-4 text-base font-medium text-gray-500">In a creative workplace, employees responsibly try different solutions</p> */}
          </div>

          <div className="px-0 grid grid-cols-1 g gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-14 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("Carbon")}
              >
                Towards Zero Carbon Emission
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./carbon.svg"
                    alt="co2 logo"
                    className="  w-6 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    How can we reduce transmission/distribution losses in the
                    power grid? Wait, how is this related to Carbon Emissions?{" "}
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./carbon.svg"
                    alt="co2 logo"
                    className="  w-6 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    {" "}
                    Is it possible for local bodies to go completely off-grid?
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("Carbon")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("waste")}
              >
                Waste Management
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./waste.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    Can we easily segregate food waste from plastic waste?{" "}
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./waste.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    What products can be created from waste materials?{" "}
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("waste")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("disaster")}
              >
                Disaster Management
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./disaster.svg"
                    alt="co2 logo"
                    className="  w-6 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    What can be done to quickly establish a communication
                    network in disaster-stricken areas?
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./disaster.svg"
                    alt="co2 logo"
                    className="  w-6 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    How would we control large-scale fire outbreaks like forest
                    fires?{" "}
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("disaster")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("education")}
              >
                Education For All
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./atom.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    What difficulty is faced by dyslexic students that we can
                    solve with technology? What about students with ADD?
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./atom.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    What technologies could we build that will aid
                    differently-abled students in learning?{" "}
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("education")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("finance")}
              >
                Transforming Finance
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./coin.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    Can we calculate a more accurate CIBIL score?
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./coin.svg"
                    alt="co2 logo"
                    className="  w-5 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    How can we make banking more secure?{" "}
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("finance")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>{" "}
            <div
              data-aos="zoom-in"
              data-aos-delay="350"
              className="bg-white/70 p-6 rounded-3xl border border-rose-300"
            >
              <h3
                className="text-lg font-semibold text-center  font-body1 text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 "
                onClick={() => openModal("open")}
              >
                Open Innovation
              </h3>
              <hr className="mt-4 border-t-1 border-rose-600" />

              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <img
                    src="./bulb.svg"
                    alt="co2 logo"
                    className="  w-7 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    This is the problem statement for all free thinkers who do not wish to be tied to a single issue of social relevance and innovation.
                  </span>
                </li>

                <li className="flex items-start">
                  <img
                    src="./bulb.svg"
                    alt="co2 logo"
                    className="  w-7 aspect-square"
                  />

                  <span className="ml-3 text-sm font-body font-medium text-gray-500">
                    Inviting you to carve your solution and make an impact in essential sectors that govern our day-to-day life.{" "}
                  </span>
                </li>
                <li className="flex border-b-2 ml-3 mt-1 w-fit border-rose-500/60 items-start">
                  <button onClick={() => openModal("open")}>
                    <span className="font-body text-[#06061a] text-sm">
                      View Full
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {activeModal === "Carbon" && (
        <ProblemStatementModal
          open={true}
          name="Towards zero carbon emissions"
          description="Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
          onClose={closeModal}
        ></ProblemStatementModal>
      )}

      {activeModal === "waste" && (
        <>
          <ProblemStatementModal
            open={true}
            name="Efficient Waste Management"
            description="Although effective waste management is crucial for creating sustainable and livable communities, many developing nations and cities still struggle with it. India generates 62 million tonnes of waste each year out of which 31 million tonnes are dumped in landfill sites. According to a survey, the cost of efficient waste management typically accounts for 20% to 50% of municipal budgets. This necessitates significant improvements in our nation's efficient technical waste management systems."
            onClose={closeModal}
          />
          {/* <Modal
          title="Efficient Waste Management:"
          content="Although effective waste management is crucial for creating sustainable and livable communities, many developing nations and cities still struggle with it. India generates 62 million tonnes of waste each year out of which 31 million tonnes are dumped in landfill sites. According to a survey, the cost of efficient waste management typically accounts for 20% to 50% of municipal budgets. This necessitates significant improvements in our nation's efficient technical waste management systems."
          onClose={closeModal}
        ></Modal> */}
        </>
      )}

      {activeModal === "finance" && (
        <ProblemStatementModal
          open={true}
          name="Transforming Finance"
          description="Finance transformation is a combination of processes, systems, and organisational change implemented across a corporation using new technologies, training, and analysis. Automating financial and accounting processes has become very significant in every economy. It formalizes workflows enforces financial controls, and ensures uniform reports and analyses. "
          onClose={closeModal}
        ></ProblemStatementModal>
      )}

      {activeModal === "disaster" && (
        <ProblemStatementModal
          open={true}
          name="Disaster Recovery"
          description=" Unprecedented calamities always lead to catastrophic consequences, a huge blow to the country’s development. Solutions on how to handle the disaster are very important for ensuring that it has minimal effect on the nation. Moreover, measures are necessary in order to avoid and eliminate the chances of a catastrophe to a large extent."
          onClose={closeModal}
        ></ProblemStatementModal>
      )}

      {activeModal === "open" && (
        <ProblemStatementModal
          open={true}
          name="Open Innovation"
          description="This problem statement is looking for teams that can come up with inventive responses to real-world problems, are open to typical concepts, and have solutions that will leave an impact on crucial areas that control our daily lives."
          onClose={closeModal}
        ></ProblemStatementModal>
      )}

      {activeModal === "education" && (
        <ProblemStatementModal
          open={true}
          name="Education for all"
          description="A country’s well-being is mostly reflected by the quality of education it provides to the people. As time passes, it is high time to move on from traditional techniques and work for an all-inclusive education, aiming to ensure that all sections of society have access to necessary education. This calls for technological innovations and requisite advancements in the sector."
          onClose={closeModal}
        ></ProblemStatementModal>
      )}
    </>
  );
}

// function Modal({ title, content, onClose }: any) {
//   return (
//     <>
//       <div className="fixed inset-0 z-50 mt-[10%] flex h-full min-w-[50%] items-start justify-start overflow-x-hidden outline-none focus:outline-none">
//         <div className="relative mx-auto my-6 w-auto max-w-3xl">
//           {/*content*/}
//           <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
//             {/*header*/}
//             <div className="flex items-start justify-between  border-b border-solid border-slate-200 p-5">
//               <h3 className="text-xl mt-3 sm:text-2xl f font-body2">{title}</h3>
//               <button
//                 className=" ml-auto my-auto   border-0p-2 px-3  text-center  text-xl font-semisemibold leading-none text-white outline-none focus:outline-none"
//                 onClick={onClose}
//               >
//                 <img
//                   className="w-7 sm:w-7"
//                   src="https://img.icons8.com/fluency/48/cancel.png"
//                   alt="cancel"
//                 />{" "}
//               </button>
//             </div>
//             {/*body*/}
//             <div className="relative flex flex-auto flex-col gap-2 p-6">
//               <p className=" font-normal text-md f ">{content}</p>
//             </div>
//             {/*footer*/}
//             <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6"></div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
//     </>
//   );
// }
