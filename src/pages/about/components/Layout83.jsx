"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout83() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Achievements</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Our Journey Towards CMDA CDC Approval
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              We take pride in our milestones that reflect our commitment to
              excellence. Each achievement brings us closer to ensuring
              compliance and safety for our clients.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  70%
                </h3>
                <p>Milestone Reached: Initial Approvals Secured Successfully</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  85%
                </h3>
                <p>Milestone Achieved: Comprehensive Documentation Completed</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
