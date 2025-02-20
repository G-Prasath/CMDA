
import React from "react";

export function Layout201() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1" data-aos="zoom-in" data-aos-duration="1500">
            <img
              src="/About/ou_story.avif"
              className="w-full object-cover rounded-md"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left" data-aos-duration="1500">
            <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Story
            </p>
            <p className="mb-6 md:mb-8 md:text-md text-justify text-gray-700">
            [company name], we have a vision to simplify the complex CMDA approval process for developers, builders and landowners. Our expert team provides analogy advice and ensures a simple and effective approval experience. We focus on solving unique challenges ahead of each customer, whether for CMDA planning permits, DTCP approval or other regulatory requirements. 
            </p>
            <p className="mb-6 md:mb-8 md:text-md text-justify text-gray-700">With many years of experience in the industry, we have created a solid reputation for efficiency, openness and customer satisfaction. We offer customized solutions that help our customers overcome regulatory challenges and keep their projects on tracks. Our CMDA and DTCP approval agents guide you throughout the process, from receiving building permits to completing the real estate survey, and ensuring that your development goals are met with confidence.  </p>
          </div>
        </div>
      </div>
    </section>
  );
}
