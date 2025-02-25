import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-18 lg:py-22 bg-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <Reveal direction="top">
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Start your success journey with us
            </p>
            </Reveal>
            <Reveal direction="left">
            <p className="mb-5 text-base md:mb-6 md:text-md text-gray-800 text-justify" data-aos="fade-right" data-aos-duration="1500">
            [company name] we are not only your consultant - we are your partners in changing the complex CMDA approval in complex, action -rich stages. With our expert team that guides you through each step, we make sure your project moves steadily and originally. 
            </p>
            </Reveal>
            <Reveal direction="left">
            <p className="mb-5 text-base md:mb-6 md:text-md text-gray-800 text-justify" data-aos="fade-right" data-aos-duration="1500">
            Let's convert regulatory barriers to springboards. Join and experience an easy-going journey, where your goals are combined with commitment to accurate, dedication and skill. Together we will build the route to succeed with your project! 
            </p>
            </Reveal>

          </div>
          <div>
            <img
              src="/About/success_journy.avif"
              className="w-full object-cover rounded-md"
              data-aos="zoom-in" data-aos-duration="1500"
              alt="images"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
