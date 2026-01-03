import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout249() {
  const data = [
    {
      imgSrc: "/About/CMDA_approval.avif",
      title: "CMDA Approval Aid",
      description:
        "Guidance to customers throughout the process of obtaining CMDA planning permits for housing and commercial development.",
    },
    {
      imgSrc: "/About/DTCP_clearance.avif",
      title: "DTCP clearance",
      description:
        "Ensure complete compliance with rules for urban planning and handle the submission and approval process for DTCP permits.",
    },
    {
      imgSrc: "/About/advice_land.avif",
      title: "Advice on land use and regulation",
      description:
        "Offers specialist advice on regulatory rules and compliance with land use to ensure even project development.",
    },
    {
      imgSrc: "/About/regulatory_support.avif",
      title: "Extensive regulatory support",
      description:
        "Management of environmental, approvals, building permits and all other necessary documents for timely approval.",
    },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary_clr text-white"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <Reveal direction="left">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Our services</p>
              <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                What We Do ?
              </p>
              <p className="md:text-md">
                Revovest Landmakers India Private Limited, we specialize in navigating the complications of
                real estate projects to obtain approval for authorities.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {data.map((card, index) => (
            <div
              key={index}
              className="flex w-full flex-col h-full border-2 border-white rounded-md p-6"
            >
              <Reveal direction="top">
              <div
                className="mb-6 md:mb-8"
              >
                <img
                  src={card.imgSrc}
                  alt="what we do"
                  className="rounded-md"
                />
              </div>
              </Reveal>
              <Reveal direction="top">
              <p
                className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
              >
                {card.title}
              </p>
              </Reveal>
              <Reveal direction="bottom">
              <p data-aos="fade-up" data-aos-duration="1500">
                {card.description}
              </p>
              </Reveal>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" />
      </div>
    </section>
  );
}
