import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%] w-full aspect-video">
      <div className="container relative z-10">
        <div className="flex items-center justify-start py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <Reveal direction="bottom">
              <p
                className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl"
              >
                Get your industrial and commercial CMDA & DTCP approvals with
                Revovest Landmakers India Private Limited
              </p>
            </Reveal>

            <Reveal direction="left">
              <h1
                className="text-text-alternative md:text-md"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Expert CMDA & DTCP Approval Services in Chennai
              </h1>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Home/Banner.avif"
          className="size-full object-cover aspect-video"
          alt="CMDA & DTCP approvals"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
