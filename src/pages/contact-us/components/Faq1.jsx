"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most common questions about our services and
            processes.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer a range of services including approvals, clearances, and
              structural stability assessments. Our team is dedicated to guiding
              you through every step of the process. For specific inquiries,
              feel free to reach out.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I apply?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can apply through our online portal by filling out the
              necessary forms. Ensure all required documents are attached for a
              smooth process. If you need assistance, our support team is here
              to help.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the timeline?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The timeline for approvals varies based on the type of service
              requested. Generally, you can expect a response within 2-4 weeks.
              We strive to keep you updated throughout the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I track my application?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can track your application status through our online
              portal. Simply log in to your account to view updates. If you have
              any questions, don't hesitate to contact us.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need help?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our customer support team is available to assist you with any
              inquiries. You can reach us via email or phone. We're committed to
              providing the help you need.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any concerns.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
