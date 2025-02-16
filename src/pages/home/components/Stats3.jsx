"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats3() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              Insights
            </p>
            <h2 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
              Key Statistics on Approvals and Clearances
            </h2>
          </div>
          <div>
            <p className="text-text-alternative md:text-md">
              Stay informed with our up-to-date statistics on CMDA approvals and
              clearances. Our data-driven insights empower stakeholders to make
              informed decisions. Explore how these metrics can enhance your
              project planning and execution.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary-alt">Learn More</Button>
              <Button
                iconRight={<RxChevronRight />}
                variant="link-alt"
                size="link"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              75%
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Approval Rate
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              90%
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Clearance Success
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              85%
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Client Satisfaction
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506784881475-0e408bbca849?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
