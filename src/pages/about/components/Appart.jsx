import React from "react";

export function Appart() {
  const data = [
    {
      imgSrc:
        "/About/personal_solution.avif",
      title: "Personal solution",
      description:
        "We provide an analogy consultation and ensure that each project is focused on and meets the specific requirements of each customer.",
    },
    {
      imgSrc:
        "/About/specialization.avif",
      title: "Specialization and experience",
      description:
        "The team's CMDA ensures a smooth, obedient journey from beginning to end to the deepest knowledge of regulatory processes.",
    },
    {
      imgSrc:
        "/About/technology.avif",
      title: "Technology and openness",
      description:
        "We benefit from the latest equipment and systems, which inform you at all stages, ensure complete transparency and efficiency during the approval process.",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4" data-aos="fade-up" data-aos-duration="1000">Our services</p>
            <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1500">
              What sets us Apart
            </p>
            <p className="md:text-md text-justify text-gray-700" data-aos="fade-up" data-aos-duration="1800">
              [company name] goes beyond handling cmda approval - we define the
              entire approval experience again. What sets us apart is our
              personal view, deep industry expertise and commitment to customer
              success. We focus on providing a tailor -made solution and
              ensuring that your project is entitled to be right.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {data.map((card, index) => (
            <div key={index} className="flex w-full flex-col h-full">
              <div className="mb-6 md:mb-8" data-aos="zoom-in" data-aos-duration="1500">
                <img src={card.imgSrc} alt="what we do" className="rounded-md" />
              </div>
              <p className="mb-5 text-xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl"  data-aos="fade-up" data-aos-duration="1500">
                {card.title}
              </p>
              <p  data-aos="fade-up" data-aos-duration="1500">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" />
      </div>
    </section>
  );
}
