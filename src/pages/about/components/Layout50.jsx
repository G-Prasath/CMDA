"use client";

import React from "react";

export function Layout50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            CMDA Key Notes Points Approvals of CDC
          </h3>
          <div>
            <p className="mb-6 text-text-alternative md:mb-8 md:text-md">
              Our innovative platform simplifies the CMDA CDC approval process,
              saving you time and effort. Experience a hassle-free journey from
              application to approval with our expert guidance.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  Streamlined Process
                </h6>
                <p className="text-text-alternative">
                  Efficiently manage approvals with our user-friendly interface
                  and real-time tracking.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  Expert Support
                </h6>
                <p className="text-text-alternative">
                  Our team of specialists is here to assist you every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
