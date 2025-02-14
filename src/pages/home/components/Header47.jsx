"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Your Approval Partner
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Unlock the potential of your projects with our streamlined CMDA
              and CDC approval services. We simplify the process, ensuring you
              meet all requirements efficiently.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Get Started">Get Started</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
