import React from "react";
import Reveal from "../../assets/hooks/Reveal";

const Cards = ({ data }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <Reveal direction="top">
              <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                {data.title}
              </p>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {data.types.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full flex items-center justify-center mb-3">
                <Reveal direction="top">
                  <img
                    src={card.imgSrc}
                    alt={`${card.title} Image`}
                    className="rounded-md"
                  />
                </Reveal>
              </div>
              <Reveal direction="bottom">
                <p className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-center">
                  {card.title}
                </p>
              </Reveal>
              <Reveal direction="bottom">
                <p className="text-justify text-gray-800">{card.description}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
