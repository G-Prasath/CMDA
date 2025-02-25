import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout3() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-300"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <Reveal direction="left">
            <div>
              <p className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                Mission
              </p>
              <p className="md:text-md text-gray-700 text-justify">
                Our mission is to provide expert consultation for CMDA approval,
                ensure compliance with local rules and facilitate comfortable
                project approval. Help to bring life with.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div data-aos="fade-left" data-aos-duration="1500">
              <img
                src="/About/mission.avif"
                className="w-full object-cover rounded-md"
                alt="images"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
