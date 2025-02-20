import React from "react";

const Meetteam = () => {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-thired_clr text-white">
      <div className="container">
        <div className="flex flex-col gap-5 md:gap-5 lg:gap-10">
          <div className="w-full ">
            <p
              className="text-2xl font-bold md:text-3xl lg:text-4xl"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              MEET OUR TEAM
            </p>
          </div>
          <div className="w-full text-gray-800">
            <p
              className="md:text-md text-justify text-white"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              [company name] prides itself on having a team of experts who are
              more than just professionals they are a dedicated partner in your
              CMDA approval journey. With a passion for solving complex
              regulatory challenges, we bring diverse competence to provide
              diversity in urban planning, legal compliance and project
              management. Each team member offers a unique skill set to provide
              clear guidance and continuous support from navigating the nuances
              of the DTCP clearance. Whether its building plan approvals, land
              survey reports or clearance process we working closely with a
              spirit of cooperation, we ensure that your approval is handled
              with effectively and focuses on your success. Together, we convert
              your regulatory challenges to smooth milestones, ensuring that
              your projects are on track and are absolutely obedient.
            </p>
            {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Get Started">Get Started</Button>
            <Button title="Learn More" variant="secondary">
              Learn More
            </Button>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetteam;
