"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Card } from "../../common/Cards";

export function Layout250() {
  const cardsData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1706559779943-fb5c25270bcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Streamlined processes for faster approvals and enhanced project efficiency.",
      desc: "Our guidelines ensure compliance and clarity throughout your project lifecycle.",
    },
    {
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Expert insights to navigate CMDA and CDC approval processes with ease.",
      desc: "Leverage our team's experience to achieve successful project outcomes.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661413166847-47e3ecc668a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Client testimonials that showcase our commitment to excellence and reliability.",
      desc: "Join a community of satisfied clients who trust our services.",
    },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"  data-aos="fade-right" data-aos-duration="1000">
              Unlock the potential of your projects with our expert guidelines
              and support.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 h-full">
          {cardsData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
