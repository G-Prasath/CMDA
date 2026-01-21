import React from "react";
import Reveal from "../../assets/hooks/Reveal";

const Whychoose = ({ data }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <Reveal direction="top">
              <p className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Why Choose Us ?
              </p>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="/Clearance/whychoose-1.avif"
                className="size-full object-cover"
                alt={`${data[0].title} Image`}
              />
            </div>
            <div className="relative z-10">
              <Reveal direction="top">
              <p
                className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl"
              >
                {data[0].title}
              </p>
              </Reveal>
              <Reveal direction="bottom">
              <p
                className="text-text-alternative text-justify"
              >
                {data[0].para}
              </p>
              </Reveal>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8">
            <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="/Clearance/whychoose-2.avif"
                  className="size-full object-cover"
                  alt={`${data[1].title} Image`}
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
              <Reveal direction="top">
                <p
                  className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl"
                >
                  {data[1].title}
                </p>
                </Reveal>
                <Reveal direction="bottom">
                <p
                  className="text-text-alternative text-justify"
                >
                  {data[1].para}
                </p>
                </Reveal>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="/Clearance/whychoose-3.avif"
                  className="size-full object-cover"
                  alt={`${data[2].title} Image`}
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <Reveal direction="top">
                <p
                  className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl"
                >
                  {data[2].title}
                </p>
                </Reveal>
                <Reveal direction="bottom">
                <p
                  className="text-text-alternative text-justify"
                >
                  {data[2].para}
                </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
