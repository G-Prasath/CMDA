"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout41() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Our Commitment to Excellence in Approvals
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              With a rich history in facilitating CMDA CDC approvals, our
              company is dedicated to streamlining the approval process for our
              clients. Our core values of integrity, innovation, and customer
              satisfaction drive everything we do.
            </p>
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
