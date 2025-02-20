"use client";

import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl" data-aos="fade-up" data-aos-duration="1000">
          About Us
        </p>
        <p className="text-text-alternative md:text-md" data-aos="fade-up" data-aos-duration="1500">
        Your Path to Seamless CMDA Approvals - Expert Guidance, Guaranteed Success
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/About/Banner.avif"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
}
