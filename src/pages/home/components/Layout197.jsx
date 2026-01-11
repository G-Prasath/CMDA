"use client";

import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout197() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-20 lg:py-24 bg-thired_clr text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/Home/expect_guide.avif"
              className="w-full object-cover rounded-md"
              data-aos="fade-right"
              data-aos-duration="2000"
              alt="Expertise images"
            />
          </div>
          <div className="order-1 md:order-2">
            <Reveal direction="top">
              <p className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Spontaneous Approval Process: Expert Guide to Succeed with Your
                Project
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <Reveal direction="bottom">
                <div>
                  <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Expertise
                  </p>
                  <p>
                    Our experts provide adapted guidance, simplify the approval
                    process and ensure complete compliance with all necessary
                    rules.
                  </p>
                </div>
              </Reveal>
              <Reveal direction="bottom">
                <div>
                  <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Spontaneous navigation
                  </p>
                  <p>
                    We manage the entire approval journey and give you a
                    stress-free experience that keeps your business on track and
                    moving forward.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
