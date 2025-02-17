// "use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Card } from "../../common/Cards";

export function Layout240() {
  const cardsData = [
    {
      img:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gathering the Right Papers for Your Clearance Process",
      desc:
        "Ensure a smooth clearance process by preparing these essential documents.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Key Documents for Clearance: What You Need to Know",
      desc:
        "From permits to approvals, understand what is required for clearance.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Checklist of Required Documents for Clearance Approval",
      desc:
        "Follow our checklist to ensure you have everything needed for clearance.",
    },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p
            className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Understanding CMDA CDC
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {cardsData.map((data, index) => (
            <Card key={index} data={data}  />
          ))}
        </div>
      </div>
    </section>
  );
}
