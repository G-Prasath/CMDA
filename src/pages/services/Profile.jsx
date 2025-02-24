import React from "react";
import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

const Profile = ({data}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" data-aos="fade-right" data-aos-duration="1000">
              {data.title}
            </h1>
            <p className="md:text-md text-gray-800 text-justify" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
              {data.para}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
              <Link to="/contact-us" title="Contact Us" className="border border-black px-5 py-3 hover:bg-black hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <img
              src={data.img}
              className="w-full object-cover"
              alt="Relume placeholder image"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
