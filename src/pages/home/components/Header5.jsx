import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%] w-full aspect-video">
      <div className="container relative z-10">
        <div className="flex items-center justify-start py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <Reveal direction="bottom">
              <h1
                className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl"
              >
                Get your industrial and commercial CMDA & DTCP approvals with
                [company name]
              </h1>
            </Reveal>

            <Reveal direction="left">
              <p
                className="text-text-alternative md:text-md"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Our experienced team ensures your industrial and commercial
                projects meet all regulations and enjoy a smooth, streamlined
                approval process.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Home/Banner.avif"
          className="size-full object-cover aspect-video"
          alt="images"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
