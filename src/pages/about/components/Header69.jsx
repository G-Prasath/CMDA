"use client";

import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <Reveal direction="top">
          <p className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            About Us
          </p>
          </Reveal>
          <Reveal direction="bottom">
          <h1 className="text-text-alternative md:text-md">
            Your Trusted Partner for CMDA & DTCP Approvals
          </h1>
        </Reveal>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/About/Banner.avif"
          className="size-full object-cover"
          alt="images"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
}
