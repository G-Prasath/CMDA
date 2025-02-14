"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Discover answers to your most pressing questions about the NOC
            process and requirements.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is an NOC?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A No Objection Certificate (NOC) is a legal document issued by
              authorities. It confirms that there are no objections to the
              proposed activity or project. Obtaining an NOC is essential for
              compliance with regulations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to apply?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To apply for an NOC, submit the required documents through the
              designated online portal. Ensure all information is accurate and
              complete. After submission, you will receive a confirmation email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Processing time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The processing time for an NOC can vary based on the type of
              application. Generally, it takes between 7 to 14 business days.
              You will be notified via email once your NOC is ready.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is it mandatory?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, obtaining an NOC is mandatory for certain projects and
              activities. It ensures compliance with local regulations and
              safety standards. Skipping this step can lead to legal issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Question text goes here
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If your NOC application is denied, you will receive a detailed
              explanation. You can address the issues and reapply. Seeking
              guidance from a professional can improve your chances of approval.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
