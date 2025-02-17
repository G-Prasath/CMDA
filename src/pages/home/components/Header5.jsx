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
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl" data-aos="fade-up" data-aos-duration="1500">
              Your Path to CMDA CDC Approval Starts Here
            </h1>
            <p className="text-text-alternative md:text-md" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
              Welcome to our CMDA CDC Approval website, where we simplify the
              process for you. Our expert team is dedicated to guiding you
              through every step, ensuring a smooth and efficient experience.
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
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
