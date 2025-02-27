import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import Reveal from "../../../assets/hooks/Reveal";

export function Contact17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <Reveal direction="top">
            <div data-aos="zoom-in">
              <div className="mb-5 lg:mb-6">
                <BiEnvelope className="size-12" />
              </div>
              <p className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Email
              </p>
              <p className="mb-5 md:mb-6">
                We’d love to hear from you! Reach out anytime.
              </p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
          </Reveal>
          <Reveal direction="top">
            <div
            >
              <div className="mb-5 lg:mb-6">
                <BiPhone className="size-12" />
              </div>
              <p className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Phone
              </p>
              <p className="mb-5 md:mb-6">
                Call us for any inquiries or support.
              </p>
              <a className="underline" href="#">
                +1 (555) 000-0000
              </a>
            </div>
          </Reveal>
          <Reveal direction="top">
            <div
            >
              <div className="mb-5 lg:mb-6">
                <BiMap className="size-12" />
              </div>
              <p className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Office
              </p>
              <p className="mb-5 md:mb-6">Visit us at our headquarters.</p>
              <a className="underline" href="#">
                123 Sample St, Sydney NSW 2000 AU
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
