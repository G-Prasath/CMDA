import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

const Rawcnt = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container">
        <div className="flex flex-col gap-5 md:gap-5 lg:gap-10">
          <div className="w-full ">
            <Reveal direction="left">
              <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
                Get quick, effective and personal approval services that fit the
                specific requirements of your project.
              </p>
            </Reveal>
          </div>
          <div className="w-full ">
            <Reveal direction="right">
            <p
              className="md:text-md text-justify"
            >
              We simplify the approval process, which ensures compliance with
              all necessary rules and regulations, including land use, design
              approval and securing the required CMDA permits. Our services are
              ready to meet the unique needs of each project, which provides a
              streamlined and timely approval process. With our expert team you
              can expect a smooth, trouble -free journey, and ensure that your
              project continues without delay, while we handle all the
              complications to get CMDA approval, zoning and infrastructure
              regulation.
            </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rawcnt;
