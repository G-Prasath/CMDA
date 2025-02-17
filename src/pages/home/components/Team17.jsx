"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { user } from "../../../assets/images/images";

export function Team17() {

  const teamMembers = [
    {
      imgSrc: user,
      fullName: "Full name 1",
      jobTitle: "Job title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      imgSrc: user,
      fullName: "Full name 2",
      jobTitle: "Job title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

    },
    {
      imgSrc: user,
      fullName: "Full name 3",
      jobTitle: "Job title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

    }
  ];
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary_clr text-secondary_clr">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4" data-aos="flip-right" data-aos-duration="1000">Tagline</p>
          <p className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1500">
            Our team
          </p>
          <p className="md:text-md" data-aos="flip-right" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        {teamMembers.map((member, index) => (
            <div key={index} className="grid auto-cols-fr grid-cols-1 items-start gap-5 sm:grid-cols-[max-content_1fr] sm:gap-x-8 sm:gap-y-4">
              <div>
                <img
                  src={member.imgSrc}
                  alt={member.altText}
                  className="size-20 min-h-20 min-w-20 rounded-full object-cover border-2 border-white p-2"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                />
              </div>
              <div className="flex flex-col justify-center"  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200">
                <div className="mb-3 md:mb-4">
                  <p className="text-md font-semibold md:text-lg">{member.fullName}</p>
                  <p className="md:text-md">{member.jobTitle}</p>
                </div>
                <p>{member.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
