"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions regarding the approval process for
            your projects.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is the approval process?
            </h2>
            <p>
              The approval process involves several steps, including submission
              of required documents, review by authorities, and final approval.
              Each project may have specific requirements based on its scope.
              It's essential to follow the guidelines provided to ensure a
              smooth process.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does it take?
            </h2>
            <p>
              The duration of the approval process can vary depending on the
              complexity of the project. Generally, it can take anywhere from a
              few weeks to several months. Timely submission of all required
              documents can help expedite the process.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What documents are needed?
            </h2>
            <p>
              Typically, you will need to submit project plans, environmental
              assessments, and any relevant permits. Additional documentation
              may be required based on the specific project type. Always check
              the latest requirements for your particular case.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I appeal a decision?
            </h2>
            <p>
              Yes, if your application is denied, you have the right to appeal
              the decision. The appeal process typically involves submitting a
              formal request along with any additional information that may
              support your case. Ensure you adhere to the timelines specified
              for appeals.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Who can I contact?
            </h2>
            <p>
              For specific inquiries, you can reach out to our support team via
              the contact page. They are equipped to assist you with any
              questions regarding the approval process. Don't hesitate to get in
              touch for personalized guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
