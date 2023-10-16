import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-12   bg-[#fff] sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-md mx-auto text-left sm:text-center">
        <h2 className="mt-4 text-3xl font-normal text-blcak sm:text-4xl lg:text-5xl text-center font-body2  text-black  text-blcak ">
          Testimonials
        </h2>
        {/* <p className="mt-4 text-base font-medium text-gray-500">In a creative workplace, employees responsibly try different solutions</p> */}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="px-4  mx-auto sm:px-6 lg:px-8 max-w-7xl"
      >
        <Slider {...settings} className="m-2 my-8 sm:m-16 ">
          <div className="p-1">
            <div className="grid border-2 p-4 border-rose-300 rounded-[30px] items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12 xl:gap-x-20">
              <div>
                <img
                  className="object-cover w-full h-80  rounded-3xl"
                  src="testimonial.jpeg"
                  alt=""
                />
              </div>

              <div className="xl:pr-16">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(225, 12, 93, 0.7) 0%, rgba(249, 104, 28, 0.7) 100%)",
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full"
                >
                  <svg
                    className="w-auto h-6 text-white"
                    viewBox="0 0 43 35"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z" />
                  </svg>
                </div>
                <blockquote className="mt-7">
                  <p className="sm:text-lg text-sm  font-normal leading-relaxed text-gray-900">
                    "Winning iBeto has been a highlight of our college
                    experience, and we strongly recommend everyone with big
                    dreams not to miss this event. If you're considering
                    joining, go for it. iBeto will help shape your innovative
                    ideas and give you the tools to bring them to life."
                  </p>
                </blockquote>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Team 420{" "}
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    Winner of IBeTo’22
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="grid border-2 p-5 justify-center border-rose-300 rounded-[30px] items-center grid-cols-1 lg:grid-cols-5 gap-16 sm:gap-0 gap-y-12 ">
              <div className="lg:col-span-2 flex justify-center">
                <img
                  className="object-cover h-80  rounded-3xl"
                  src="testimonial1.jpeg"
                  alt=""
                />
              </div>

              <div className="xl:pr-16 mt-10 lg:mt-0 lg:col-span-3">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(225, 12, 93, 0.7) 0%, rgba(249, 104, 28, 0.7) 100%)",
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full"
                >
                  <svg
                    className="w-auto h-6 text-white"
                    viewBox="0 0 43 35"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z" />
                  </svg>
                </div>
                <blockquote className="mt-10">
                  <p className="sm:text-lg text-sm  font-normal leading-relaxed text-gray-900">
                    "IBeTo gives us a great opportunity to learn, make and
                    incubate our idea's into reality with mentorship and
                    funding. So don't miss the experience and do participate!!"
                  </p>
                </blockquote>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Jerin Peter{" "}
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    Winner of IBeTo’20
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-1">
            <div className="grid border-2 p-5 justify-center border-rose-300 rounded-[30px] items-center grid-cols-1 lg:grid-cols-5 gap-16 sm:gap-0 gap-y-12 ">
              <div className="lg:col-span-2 flex justify-center">
                <img
                  className="object-cover h-80  rounded-3xl"
                  src="testimonial2.jpg"
                  alt=""
                />
              </div>

              <div className="xl:pr-16 mt-4 lg:col-span-3">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(225, 12, 93, 0.7) 0%, rgba(249, 104, 28, 0.7) 100%)",
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full"
                >
                  <svg
                    className="w-auto h-6 text-white"
                    viewBox="0 0 43 35"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z" />
                  </svg>
                </div>
                <blockquote className="mt-5">
                  <p className="sm:text-lg text-sm  font-normal leading-relaxed text-gray-900">
                    "From day 1 at college, IBeTo and Excel are something we
                    hear everyone talk about. It was a dream come true when our
                    team, CARBON 2.0, got selected into the top 15 teams from
                    the 212 competing teams of innovators. I thank the
                    organizers and mentors who were strong and reliable pillars
                    of support and helping up push through challenges. It was a
                    wonderful learning experience."
                  </p>
                </blockquote>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Anagha S Menon{" "}
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    Runner up of IBeTo’21{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </Slider>
      </div>
    </section>
  );
}
