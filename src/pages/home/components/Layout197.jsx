"use client";

import React from "react";

export function Layout197() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-20 lg:py-24 bg-thired_clr text-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1648260296289-ab882814a005?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover rounded-md"
              data-aos="fade-right"
              data-aos-duration="2000"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">
              Expect Guide
            </p>
            <p className="mb-6 md:mb-8 md:text-md" data-aos="fade-up" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div data-aos="fade-up" data-aos-duration="1000">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Subheading one
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Subheading two
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Subheading three
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
