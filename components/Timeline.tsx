import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  const timeline = [
    {
      date: "11th October",
      title: "IBeTo Launch - Registration Opens",
      para: "IBeTo registration opens. Students can register by submitting their ideas by filling out the form on the website.",
    },
    {
      date: "20th November",
      title: "Registration closes",
      para: "IBeTo registration closes.",
    },
    {
      date: "25th November",
      title: "Selection of ideas",
      para: "Selecting ideas, or announcing the phase 1 teams that have advanced to the next level.",
    },
    {
      date: "25th November - 15th December",
      title: "Detailed abstract submission",
      para: "The selected teams will have to submit a detailed abstract regarding the topic by Dec 15th.",
    },
    {
      date: "22nd December",
      title: "Announcement of Shortlisted teams",
      para: "The best 30 teams will be selected and announced for the next level.",
    },
    {
      date: "22nd December - 2nd February",
      title: "Project Development Begins",
      para: "The Create Phase begins. Teams are encouraged to start working on their projects.",
    },
    {
      date: "20th January",
      title: "Project Plan",
      para: "The teams must submit their project plan, detailing their project creation process.",
    },
    {
      date: "2nd February",
      title: "IBeTo Finale",
      para: "Teams should give a presentation on their project along with a demonstration of their working prototype in front of the judges at the finale of the event. The winners will be announced on the same day.",
    },
  ];
  return (
    <section
      id="timeline"
      className="py-4 -mt-14  bg-[url('../public/elements1.png')] bg-white sm:bg-[url('../public/elements1.png')]  bg-no-repeat bg-cover bg-center  z-10 relative  px-7 bg-gradient-to-b to-[#fcfaff] from-[#fdf7f9]  bg- sm:py-16 lg:py-20 sm:px-16"
    >
      <div className="absolute z-0 inset-0 min-w-7xl">
        <img
          className="object-cover w-full h-full opacity-5"
          src="./noise.png"
          alt=""
        />
      </div>{" "}
      <div className="timeline  border-t-1 border-slate-300/60">
        <div className="timeline__container">
          <h2 className="font-body2 text-black text-center pb-3 sm:pb-12  mt-20 sm:mt-16 text-3xl font-normal sm:text-4xl lg:text-5xl">
            Timeline
          </h2>

          <div className="timeline__section pb-24 overflow-hidden" data-aos="zoom-in">
            <div className="ml-2 mr-4 sm:mx-0">
              <VerticalTimeline lineColor="#F74670" className="rounded-full">
                {timeline.map((t, i) => {
                  return (
                    <VerticalTimelineElement
                    iconClassName="bg-rose-500"
                      key={i}
                      contentStyle={{ borderRadius: "25px" }}
                      className="vertical-timeline-element--work font-body2 "
                      contentArrowStyle={{
                        borderRight: "7px solid  black",
                        borderRadius: "66px",
                      }}
                      date={t.date}
                    >
                      {t.title ? (
                        <React.Fragment>
                          <h3
                            className="vertical-timeline-element-title font-body1 font-semibold"
                            style={{
                              background:
                                "linear-gradient(90deg, #e10c5d 0%, #f9681c 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {t.title}
                          </h3>
                          <div className=""></div>
                          <h6 className="py-3 font-body1 text-sm">{t.para}</h6>
                        </React.Fragment>
                      ) : undefined}
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}