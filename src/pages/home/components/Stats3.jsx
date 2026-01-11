import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Stats3() {
  const statsData = [
    { percentage: 80, title: "NOC" },
    { percentage: 85, title: "Approvals and Regulations" },
    { percentage: 75, title: "Clearance" },
    { percentage: 90, title: "Construction" },
  ];

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <Reveal direction="top">
            <div>
              <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                Insights
              </p>
              <p
                className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Our goal is to transform your ideas into successful businesses.
              </p>
            </div>
          </Reveal>
          <div>
            <Reveal direction="top">
              <p
                className="text-text-alternative md:text-md"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                We believe in "driving performance" through proper integration
                of people, processes and technology. Our approach focuses on
                distributing results that match your goals. Our goal is to
                create a permanent, impressive solution that supports your long
                -term success.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal direction="right">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {statsData.map((data, index) => (
              <div
                key={index}
                className="border-l-2 border-border-alternative pl-8"
              >
                <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                  {data.percentage}%
                </p>
                <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                  {data.title}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/Home/our_goals.avif"
          className="size-full object-cover"
          alt="goal is to transform images"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
