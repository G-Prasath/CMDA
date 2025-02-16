"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout240() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary_clr">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Understanding CMDA CDC
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Relume placeholder image"
                className="duration-300 transform hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Gathering the Right Papers for Your Clearance Process
            </h3>
            <p>
              Ensure a smooth clearance process by preparing these essential
              documents.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Relume placeholder image"
                className="duration-300 transform hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Key Documents for Clearance: What You Need to Know
            </h3>
            <p>
              From permits to approvals, understand what is required for
              clearance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Relume placeholder image"
                className="duration-300 transform hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Checklist of Required Documents for Clearance Approval
            </h3>
            <p>
              Follow our checklist to ensure you have everything needed for
              clearance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
