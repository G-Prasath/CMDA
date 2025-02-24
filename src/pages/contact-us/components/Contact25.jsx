import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Contact25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1000">
            Locations
          </p>
          <p className="md:text-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Find our offices in key locations worldwide.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <Link to="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </Link>
            </div>
            {/* <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Sydney
            </h3>
            <p className="text-center">123 Sample St, Sydney NSW 2000 AU</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get Directions"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Get Directions
              </Button>
            </div> */}
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <Link to="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </Link>
            </div>
            {/* <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              New York
            </h3>
            <p className="text-center">123 Sample St, New York NY 10000 USA</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get Directions"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Get Directions
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
