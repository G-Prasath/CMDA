import React from "react";
import { TbBrandSpeedtest } from "react-icons/tb";

export function Layout118({ data }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Our soil testing services include
            </p>
          </div>
          <div>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  95%
                </h3>
                <p>Success rate in structural stability projects.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  100%
                </h3>
                <p>Client satisfaction in structural stability assessments.</p>
              </div>
            </div> */}
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />

        <div
          className="grid grid-cols-1 gap-4 py-8"
          
        >
          {data.map((item, index) => (
            <div className="flex items-center gap-4" key={index} data-aos="fade-right"
            data-aos-duration={`1500 + ${index + 5}`} data-aos-delay="300">
              <TbBrandSpeedtest className="size-6 flex-none" />
              <p className="text-black">
                <b>{item.title}</b> : {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
