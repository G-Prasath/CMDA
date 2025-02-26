import React from "react";
import Reveal from "../../assets/hooks/Reveal";

const Banner = ({ data }) => {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <Reveal direction="top">
            <p className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {data.title}
            </p>
          </Reveal>
          <Reveal direction="bottom">
            <p
              className="text-text-alternative md:text-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              {data.para}
            </p>
          </Reveal>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={data.img} className="size-full object-cover" alt="images" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export default Banner;
