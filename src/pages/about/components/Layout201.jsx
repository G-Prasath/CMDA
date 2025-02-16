"use client";

import React from "react";

export function Layout201() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tell us our Story
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
