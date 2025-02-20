"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header15() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-dark_clr text-white">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <p className="text-6xl font-bold md:text-7xl lg:text-6xl" data-aos="fade-right" data-aos-duration="1000">
            Turning Complex Approvals into Simple Solutions for Your Success
            </p>
          </div>
          <div>
            <p className="md:text-md text-justify" data-aos="fade-left" data-aos-duration="1000">
            [company name] - your reliable partner for CMDA approval

            </p>
            {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Get Started">Get Started</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div> */}
          </div>
        </div>
        <p className="md:text-md text-justify mb-5" data-aos="fade-left" data-aos-duration="1000">
            [company name] specialize in obtaining all necessary approval and compliance for CMDA CTE, CTOS, CDC, EWA, HWA and Road Access. We provide end-to-end support from design construction and agricultural analysis to present documents for CMDA approval. Our expert team ensures that your project meets infrastructure, regulatory and environmental guidelines for even execution. With a strong partnership with public agencies, we accelerate the approval process for infrastructure and compliance with land use. Let's manage the regulatory process so you can focus on your project. Contact us today to simplify CMDA approval for your project!

            </p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover rounded-md"
            data-aos="zoom-in" data-aos-duration="2000"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
