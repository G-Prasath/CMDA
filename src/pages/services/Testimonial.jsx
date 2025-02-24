import React from "react";
import { BiSolidStar } from "react-icons/bi";

const Testimonial = ({data}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1000">
            Customer Testimonials
          </p>
          <p className="md:text-md" data-aos="fade-up" data-aos-duration="1000" data-aos-dely="200">
            Our clients trust us for their approval needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="rb-5 mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6" data-aos="fade-up" data-aos-duration="1000">
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                </div>
                <blockquote className="md:text-md" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  src="/Home/user.png"
                  alt="Testimonial avatar"
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <div>
                  <p className="font-semibold" data-aos="fade-right" data-aos-duration="1800">{testimonial.name}</p>
                  <p data-aos="fade-right" data-aos-duration="2000">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
