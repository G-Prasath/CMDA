import React from "react";

const Cards = ({data}) => {

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {data.title}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {data.types.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 md:mb-8">
                <img src={card.imgSrc} alt="Image Text" />
              </div>
              <p className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {card.title}
              </p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
