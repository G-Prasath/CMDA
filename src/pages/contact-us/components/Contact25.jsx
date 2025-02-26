import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import Reveal from "../../../assets/hooks/Reveal";

export function Contact25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <Reveal direction="top">
            <p className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Locations
            </p>
            <p className="md:text-md">
              Find our offices in key locations worldwide.
            </p>
          </Reveal>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div
              className="mb-6 w-full md:mb-8"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <Link to="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div
              className="mb-6 w-full md:mb-8"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <Link to="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
