"use client";

import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout194_1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <Reveal direction="left">
            <div className="order-2 md:order-1">
              <img
                src="/About/price_customers.avif"
                className="w-full object-cover rounded-md"
                alt="price of customer images"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div
              className="order-1 md:order-2"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Price for our customers
              </p>
              <p className="md:text-md text-gray-700 text-justify">
                We are motivated by an obligation to offer optimal, permanent
                solutions that streamline the CMDA approval. Through our expert
                team, talented processes and state-of-the-art technology, we
                focus on ensuring steady approval and increasing the overall
                success of your projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
