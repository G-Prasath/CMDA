"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Empowering Your Projects with Seamless CMDA CDC Approval Solutions
          </h3>
          <p className="md:text-md">
            Our mission is to simplify the CMDA CDC approval process, ensuring
            that your projects move forward without unnecessary delays. We are
            dedicated to providing transparent, efficient, and reliable services
            that meet the highest standards of quality. With a focus on customer
            satisfaction, we strive to be your trusted partner in navigating the
            complexities of regulatory approvals.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
