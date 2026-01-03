import React from "react";
import Reveal from "../../../assets/hooks/Reveal";

export function Header15() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-dark_clr text-white"
    >
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <Reveal direction="left">
              <p className="text-6xl font-bold md:text-7xl lg:text-6xl">
                Turning Complex Approvals into Simple Solutions for Your Success
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal direction="right">
              <p className="md:text-md text-justify">
                Revovest Landmakers India Private Limited - your reliable partner for CMDA approval
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal direction="top">
          <p className="md:text-md text-justify mb-5">
            Revovest Landmakers India Private Limited specialize in obtaining all necessary approval and
            compliance for CMDA CTE, CTOS, CDC, EWA, HWA and Road Access. We
            provide end-to-end support from design construction and agricultural
            analysis to present documents for CMDA approval. Our expert team
            ensures that your project meets infrastructure, regulatory and
            environmental guidelines for even execution. With a strong
            partnership with public agencies, we accelerate the approval process
            for infrastructure and compliance with land use. Let's manage the
            regulatory process so you can focus on your project. Contact us
            today to simplify CMDA approval for your project!
          </p>
        </Reveal>
        <Reveal direction="top">
          <div>
            <img
              src="/Home/turning_complex.avif"
              className="w-full object-cover rounded-md"
              alt="images"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
