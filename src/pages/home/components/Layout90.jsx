"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-3xl lg:text-4xl">
            Discover the Benefits of Choosing Our Expert Services for Your
            Approval Needs
          </h3>
          <p className="md:text-md">
            Our services are tailored to meet the unique requirements of your
            project, ensuring a smooth approval process. With a dedicated team
            of experts, we provide guidance every step of the way.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
          alt="images"
        />
      </div>
    </section>
  );
}
