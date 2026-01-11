import React from "react";
import Reveal from "../../assets/hooks/Reveal";

export function Card({ data }) {
  return (
    <div className="flex w-full flex-col items-center text-center bg-primary_clr p-4 rounded-md text-white shadow-lg h-full">
      <div className="rb-6 mb-6 md:mb-8 overflow-hidden">
        <Reveal direction="top">
          <img
            src={data.img}
            alt={`${data.title} Image`}
            className="duration-300 transform hover:scale-105 rounded-md"
          />
        </Reveal>
      </div>
      <Reveal direction="bottom">
        <p className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
          {data.title}
        </p>
      </Reveal>
      <Reveal direction="bottom">
        <p className="text-justify">{data.desc}</p>
      </Reveal>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"></div>
    </div>
  );
}
