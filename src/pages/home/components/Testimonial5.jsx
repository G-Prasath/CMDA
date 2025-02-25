import React from "react";
import { BiSolidStar } from "react-icons/bi";
import Reveal from "../../../assets/hooks/Reveal";

export function Testimonial5() {
  const testimonials = [
    {
      quote: `Housing developer : "Made the approval process simple and fast. They were professionals and helped us at each step. I recommend their services!`,
      name: "Rajesh Kumar",
      position: "CEO",
    },
    {
      quote: `At home : "It was easy to get the CMDA approval for my house. He corrected me through this process and answered all my questions. I am very pleased with his service!"`,
      name: "Suresh R",
      position: "Home Centre",
    },
    {
      quote: `Builds : "Makes CMDA approval easier. They were fast, professional and were always available for help. I definitely want to work with them again!"`,
      name: "A. Raghav",
      position: "Project Manager",
    },
  ];
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <Reveal direction="top">
          <div className="mb-12 w-full md:mb-18 lg:mb-20">
            <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Client Testimonials
            </p>
            <p
              className="md:text-md"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              See what our happy clients are saying about our CMDA approval
              services.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <Reveal direction="left">
              <div
                key={index}
                className="flex h-full max-w-lg flex-col items-start justify-start text-left"
              >
                <div className="mb-6 flex md:mb-8">
                  <BiSolidStar className="size-6" />
                  <BiSolidStar className="size-6" />
                  <BiSolidStar className="size-6" />
                  <BiSolidStar className="size-6" />
                  <BiSolidStar className="size-6" />
                </div>
                <blockquote className="text-md leading-[1.4] md:text-xl">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
                  <div>
                    <img
                      src="/Home/user.png"
                      alt="Testimonial avatar 1"
                      className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="mb-4 md:mb-0">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.position}</p>
                  </div>
                  <div className="hidden w-px self-stretch bg-black md:block" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
