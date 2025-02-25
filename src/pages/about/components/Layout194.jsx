"use client";

import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout194() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <Reveal direction="left">
            <div className="order-2 md:order-1">
              <img
                src="/About/vision.avif"
                className="w-full object-cover rounded-md"
                alt="images"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div
              className="order-1 md:order-2"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Vision
              </h3>
              <p className="md:text-md text-gray-700 text-justify">
                Our vision is to simplify and accelerate the CMDA approval
                process by taking advantage of people, processes and technology.
                With a dedicated team, we are committed to offering top services
                while maintaining the highest quality standards.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
