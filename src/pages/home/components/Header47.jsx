// "use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary_clr text-white">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4" data-aos="zoom-in" data-aos-duration="1500">Innovate</p>
            <p className="text-2xl font-bold md:text-5xl lg:text-6xl" data-aos="fade-right" data-aos-duration="1500">
              Your Approval Partner
            </p>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
            CMDA DTCP approval process may be complex, but we are here to simplify it. Our expert team provides all the guidance and resources you need to ensure a simple approval journey.
            </p>
            {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Get Started">Get Started</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
