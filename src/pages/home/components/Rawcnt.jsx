import React from "react";

const Rawcnt = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 ">
    <div className="container">
      <div className="flex flex-col gap-5 md:gap-5 lg:gap-10">
        <div className="w-full ">
          <p className="text-2xl font-bold md:text-3xl lg:text-4xl" data-aos="fade-right" data-aos-duration="1500">
          Get quick, effective and personal approval services that fit the specific requirements of your project.
          </p>
        </div>
        <div className="w-full ">
          <p className="md:text-md text-justify" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
          We simplify the approval process, which ensures compliance with all necessary rules and regulations, including land use, design approval and securing the required CMDA permits. Our services are ready to meet the unique needs of each project, which provides a streamlined and timely approval process. With our expert team you can expect a smooth, trouble -free journey, and ensure that your project continues without delay, while we handle all the complications to get CMDA approval, zoning and infrastructure regulation.
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

export default Rawcnt;
