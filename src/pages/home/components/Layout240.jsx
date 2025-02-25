// "use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Card } from "../../common/Cards";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout240() {
  const cardsData = [
    {
      img: "/Home/preliminary.avif",
      title: "Preliminary submission",
      desc: "Submit the project plans and necessary documents for initial review and evaluation of CMDA.",
    },
    {
      img: "/Home/regulatory.avif",
      title: "Regulatory Review",
      desc: "We handle the entire process from the evaluation presented to ensure compliance with CMDA, DTCP and environmental policy.",
    },
    {
      img: "/Home/approvals.avif",
      title: "Approval Grants",
      desc: "When reviewing and approving, CMDA DTCP approval provides that your project can continue with construction",
    },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr"
    >
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <Reveal direction="top">
            <p className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">
              Understand the CMDA DTCP approval process
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {cardsData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
