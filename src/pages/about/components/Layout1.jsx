import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Layout1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-slate-300"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <Reveal direction="left">
              <p className="mb-3 font-semibold md:mb-4">Streamlined</p>
              <p className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                About our Profile
              </p>
            </Reveal>
            <Reveal direction="bottom">
              <p
                className="md:text-[17px] text-gray-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Welcome to Revovest Landmakers India Private Limited, your reliable partner for effortless
                CMDA and DTCP approval services. With the experience of over a
                decade, we help companies and individuals navigate the
                complications of construction plans, construction permits and
                reports of land surveys. Our team is committed to ensuring that
                your projects meet all the necessary rules and are completed
                within the desired timeline. We simplify the approval process by
                handling both the CMDA and DTCP building plaque approval, and
                ensure that all paperwork is in order.
              </p>
              <p
                className="md:text-[17px] text-gray-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Our expert surveyors provide accurate real estate surveys,
                guarantee that your land is properly measured and documented. As
                an experienced CMDA and DTCP approval agents, we are here to
                guide you at each stage. Revovest Landmakers India Private Limited we offer effective,
                reliable and trouble -free services to support your construction
                projects. Let's take care of approval so you can focus on
                bringing your vision into life. Trust us to offer timely and
                reliable solutions for your CMDA and DTCP approval needs.{" "}
              </p>
            </Reveal>
          </div>
          <Reveal direction="right">
            <div className="overflow-hidden rounded-md">
              <img
                src="/About/profile.avif"
                className="w-full object-cover rounded-md"
                alt="our Profile images"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
