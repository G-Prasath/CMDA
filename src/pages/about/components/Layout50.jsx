import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <Reveal direction="left">
            <p className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
              Key notes about CMDA Approval
            </p>
          </Reveal>
          <div>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              <Reveal direction="top">
              <div>
                <p className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  CMDA matches the solution for each project
                </p>
                <p className="text-text-alternative text-justify">
                  We customize CMDA approval services to meet the unique needs
                  of each project, ensuring compliance with building permits and
                  land surveys.
                </p>
              </div>
              </Reveal>
              <Reveal direction="right">
              <div>
                <p className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  Regulatory Landscape Expert
                </p>
                <p className="text-text-alternative text-justify">
                  Our expert team simplifies complex CMDA rules, and ensures
                  that your project meets all legal requirements with simple and
                  trouble -free approval.
                </p>
              </div>
              </Reveal>
              <Reveal direction="bottom">
              <div>
                <p className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  Long -term conditions
                </p>
                <p className="text-text-alternative text-justify">
                  We prioritize dedication, provide continuous support and
                  guidance to your project, and ensure success until the
                  approval is completed.
                </p>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/About/key_points.avif"
          className="size-full object-cover"
          alt="images"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
}
