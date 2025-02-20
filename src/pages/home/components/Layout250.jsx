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
        "How to Get CMDA approval for your property: a simple guide",
      desc: "If you are planning to build or develop property in Chennai, it is necessary to have CMDA (Chennai Metropolitan Development Authority). This is an important step to ensure that your project follows all the rules and regulations set by the city. Let's break this process and see how you can get approval without any problems.",
    },
    {
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "What is CMDA approval, and why is it important?",
      desc: "Any construction project in Chennai requires CMDA approval. This approval ensures that your building follows the city's rules, such as safety standards and environmental laws. Without it, you can endure legal problems or even be asked to demolish the building.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661413166847-47e3ecc668a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"  data-aos="fade-right" data-aos-duration="1000">
             Blog
            </p>
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
