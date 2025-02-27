"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Card } from "../../common/Cards";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout250() {
  const cardsData = [
    {
      img: "/Home/blog-1.avif",
      title:
        "How to Get CMDA approval for your property: a simple guide",
      desc: "If you are planning to build or develop property in Chennai, it is necessary to have CMDA (Chennai Metropolitan Development Authority). This is an important step to ensure that your project follows all the rules and regulations set by the city. Let's break this process and see how you can get approval without any problems.",
    },
    {
      img: "/Home/blog-2.avif",
      title: "What is CMDA approval, and why is it important?",
      desc: "Any construction project in Chennai requires CMDA approval. This approval ensures that your building follows the city's rules, such as safety standards and environmental laws. Without it, you can endure legal problems or even be asked to demolish the building.",
    },
    {
      img: "/Home/blog-3.avif",
      title: "Why participate with us for CMDA approval?",
      desc: "Our team has extensive experience with CMDA processes and strong conditions with regulatory bodies. We ensure quick, easy approval and take care of all paperwork, so you can focus on what matters most for your project. Let's easily guide you through the CMDA approval process.",
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
            <Reveal direction="top">
            <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"  data-aos="fade-right" data-aos-duration="1000">
             Blog
            </p>
            </Reveal>
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
