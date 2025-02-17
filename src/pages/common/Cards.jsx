import React from "react";

export function Card({data}) {
  return (
    <div className="flex w-full flex-col items-center text-center bg-primary_clr p-4 rounded-md text-white shadow-lg h-full">
      <div className="rb-6 mb-6 md:mb-8 overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="duration-300 transform hover:scale-105 rounded-md"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>
      <p className="mb-3 text-xl font-bold md:mb-4 md:text-2xl" data-aos="fade-up" data-aos-duration="1000">
        {data.title}
      </p>
      <p data-aos="fade-up" data-aos-duration="1500">{data.desc}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"></div>
    </div>
  );
}