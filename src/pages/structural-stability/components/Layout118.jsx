import React from "react";
import { TbBrandSpeedtest } from "react-icons/tb";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout118({ data }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <Reveal direction="left"></Reveal>
            <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Our soil testing services include
            </p>
          </div>
        </div>
        <Reveal direction="right">
          <img
            src="/Stibility/soil_test.avif"
            className="w-full object-cover"
            alt="images"
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-4 py-8">
          {data.map((item, index) => (
            <Reveal direction="right" key={index}>
              <div className="flex items-center gap-4">
                <TbBrandSpeedtest className="size-6 flex-none" />
                <p className="text-black">
                  <b>{item.title}</b> : {item.para}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
