"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Cta7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              Get in Touch with Us
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Link to="#" title="Contact" className="bg-primary_clr text-white px-5 py-3 font-semibold rounded-md hover:bg-primary_clr/90">WhatsApp</Link>
          <Link to="#" title="Learn More" className="border border-primary_clr text-primary_clr px-5 py-3 font-semibold rounded-md hover:bg-primary_clr hover:text-white">
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
