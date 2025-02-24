import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              We’d love to hear from you! Reach out anytime.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us for any inquiries or support.
            </p>
            <a className="underline" href="#">
              +1 (555) 000-0000
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="300">
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">Visit us at our headquarters.</p>
            <a className="underline" href="#">
              123 Sample St, Sydney NSW 2000 AU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
