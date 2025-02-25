import React from "react";

export function Header54() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <p className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl" data-aos="fade-up" data-aos-duration="1000">
            Contact Us
          </p>
          <p className="text-text-alternative md:text-md" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Understanding the approvals process is crucial for ensuring
            compliance and project success.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Contact/Banner.avif"
          className="size-full object-cover"
          alt="images"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
