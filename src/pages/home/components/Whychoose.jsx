import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Whychoose() {
  const cardData = [
    {
      title: "Capacity you can trust",
      description:
        "With many years of experience in CMDA and DTCP approval processes, we ensure that your project is in accordance with all the rules, which saves your time and effort.",
    },
    {
      title: "Personal service",
      description:
        "Either housing or commercial, our services are ready to meet your specific requirements, including the CMDA Building Plan approval, DTCP approval and land investigations reports.",
    },
    {
      title: "Tight and effective",
      description:
        "We work quickly to ensure your approval, including building permits and construction permits, and ensures that your project remains on track without delay.",
    },
    {
      title: "Clear communication",
      description:
        "We inform you at each stage, from consultation to final approval, make sure you understand this process and what is needed for CMDA and DTCP approval.",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <Reveal direction="top">
            <div className="mx-auto max-w-lg text-center">
              <p className="mb-3 font-semibold md:mb-4">Approvals</p>
              <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-primary_clr">
                Why choose us?
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="relative flex flex-col p-6 md:p-8 lg:p-12 border-2 border-primary_clr rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <Reveal direction="top">
                  <p className="mb-5 text-2xl font-semibold leading-[1.2] text-primary_clr md:mb-6 md:text-3xl lg:text-4xl">
                    {data.title}
                  </p>
                </Reveal>
                <Reveal direction="top">
                  <p className="">{data.description}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
