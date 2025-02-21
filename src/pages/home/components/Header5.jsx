// "use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="1500">
            Get your industrial and commercial CMDA & DTCP approvals with [company name]
            </h1>
            <p className="text-text-alternative md:text-md" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
            Our experienced team ensures your industrial and commercial projects meet all regulations and enjoy a smooth, streamlined approval process.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              
              {/* <Link to="contact-us" title="Contact" className="w-full md:w-auto text-white border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-lg font-bold">
                Contact us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Home/Banner.avif"
          className="size-full object-cover aspect-video"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
