"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { user } from "../../../assets/images/images";

export function Testimonial5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="500">
            Client Testimonials
          </p>
          <p className="md:text-md" data-aos="fade-up" data-aos-duration="1000">What our clients say about our services.</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left" data-aos="fade-up" data-aos-duration="1500">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "The team exceeded our expectations and delivered on time!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src={user}
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">John Doe</p>
                <p>CEO, ABC Corp</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left" data-aos="fade-up" data-aos-duration="2000">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Their expertise made the entire process seamless and efficient."
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src={user}
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Jane Smith</p>
                <p>Project Manager, XYZ Inc</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
