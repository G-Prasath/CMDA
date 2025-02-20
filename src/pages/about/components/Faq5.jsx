"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about CMDA DTCP approvals and our
            services.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What is CMDA DTCP?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              CMDA DTCP stands for the Centralized Management and Development
              Authority's Construction Development Code. It ensures that
              construction projects comply with safety and environmental
              standards. Understanding these regulations is crucial for
              successful project approval.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How to apply?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To apply for CMDA DTCP approval, submit your project plans along
              with the required documentation. Our team will guide you through
              the process to ensure compliance. You can start your application
              online through our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What are the fees?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Fees for CMDA DTCP approvals vary based on project size and
              complexity. We offer competitive pricing to ensure our services
              are accessible. For a detailed quote, please contact our team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How long does it take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The approval process duration depends on the project specifics and
              documentation completeness. Typically, it can take anywhere from a
              few weeks to several months. We strive to expedite the process
              while ensuring thorough reviews.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I track progress?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can track the progress of your application through our
              online portal. We provide regular updates and notifications. Our
              team is also available for any inquiries you may have.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
